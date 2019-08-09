<template>
  <div class="min-countdown">
    <span v-if="days > 0"> <b>{{ days | twoDigits }}</b> {{ declension(days, ['день', 'дня', 'днів']) }} </span>
    <span> <b>{{ hours | twoDigits }}</b>  {{ declension(hours, ['година', 'години', 'годин']) }}</span>
    <span>{{ minutes | twoDigits }} : {{ seconds | twoDigits }} </span>
  </div>
</template>

<script>
let interval = null;
export default {
  name: "MinCountDown",
  props: {
    deadline: {
      type: String
    },
    end: {
      type: String
    },
    stop: {
      type: Boolean
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0
    };
  },
  created() {
    this.bl();
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },
    days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    }
  },
  watch: {
    now(value) {
      //  console.log(this.date, this.now);
      this.diff = this.now - this.date;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        // Remove interval
        clearInterval(interval);
      }
    },
    deadline() {
      this.bl();
    }
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  },
  methods: {
    bl() {
    //  this.$store.dispatch("getDate").then(() => {
        if (!this.deadline && !this.end) {
          throw new Error("Missing props 'deadline' or 'end'");
        }
        let endTime = this.deadline ? this.deadline : this.end;
        this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
        if (!this.date) {
          throw new Error(
            "Invalid props value, correct the 'deadline' or 'end'"
          );
        }

        this.now = this.$store.state.date;

        this.diff = this.now - this.date;
        interval = setInterval(() => {
          this.now = this.now + 1;
        }, 1000);
     // });
    },
    // ( 2, ['МЕСЯЦ', 'МЕСЯЦА', 'МЕСЯЦЕВ']  )
    declension(num, expressions) {
      var result;
      var count = num % 100;
      if (count >= 5 && count <= 20) {
        result = expressions["2"];
      } else {
        count = count % 10;
        if (count == 1) {
          result = expressions["0"];
        } else if (count >= 2 && count <= 4) {
          result = expressions["1"];
        } else {
          result = expressions["2"];
        }
      }
      return result;
    }
  },
  destroyed() {
    clearInterval(interval);
  }
};
</script>
<style lang="scss">
.min-countdown{
  font-size: 13px;
  padding-left: 10px;
  span{
    margin-right: 7px;
  }
}

</style>