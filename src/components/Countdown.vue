<template>
  <ul class="vuejs-countdown">
    <li v-if="days > 0">
      <p class="digit">{{ days | twoDigits }}</p>
      <p class="text">{{ declension(days, ['день', 'дня', 'днів']) }}</p>
    </li>
    <li>
      <p class="digit">{{ hours | twoDigits }}</p>
      <p class="text">{{ declension(hours, ['година', 'години', 'годин']) }}</p>
    </li>
    <li>
      <p class="digit">{{ minutes | twoDigits }}</p>
      <p class="text">хв.</p>
    </li>
    <li>
      <p class="digit">{{ seconds | twoDigits }}</p>
      <p class="text">сек.</p>
    </li>
  </ul>
</template>

<script>
let interval = null;
export default {
  name: "vuejsCountDown",
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
    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'");
    }
    let endTime = this.deadline ? this.deadline : this.end;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'");
    }
    this.now = Math.trunc(new Date().getTime() / 1000);
    this.diff = this.now - this.date;
    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
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
.vuejs-countdown {
  padding: 0 !important;
  margin: 0;
  display: flex;
  list-style: none;
}
.vuejs-countdown li {
  // display: inline-block;
  margin: 0 20px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
  margin: 0;
}
/* .vuejs-countdown li:after {
  content: ":";
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: -50%;
  font-size: 42px;
} */
.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type:after {
  content: "";
}
.vuejs-countdown .digit {
  font-size: 72px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
}
.vuejs-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 20px;
}

@media (min-height: 1300px) {
  .vuejs-countdown {
    width: 80vw;
    text-align: center;
    flex-wrap: wrap;
    li {
      width: 50%;
      margin: 0;
      margin-bottom: 70px;
    }
  }

  .vuejs-countdown .digit {
    font-size: 100px;
  }
  .vuejs-countdown .text {
    font-size: 30px;
  }
}
</style>