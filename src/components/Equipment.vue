<template>
  <div>
    <v-container
      fluid
      fill-height
      class="equipment"
      v-if="data.stopped == '' && $store.state.conect"
    >
      <div class="name-st">
        {{data.name}}
        <small>({{data.article}})</small>
      </div>

      <div class="list-nums">
        <div class="item">
          <div class="t">План на зміну</div>
          <div class="n">{{data.norm}}</div>
        </div>
        <div class="item">
          <div class="t">норма на даний час</div>
          <div class="n">{{data.norma_currently}}</div>
        </div>
        <div class="item">
          <div class="t">Виконано</div>
          <div class="n">{{data.current_output}}</div>
        </div>
        <div class="item">
          <div class="t">Взято в роботу</div>
          <div class="n">{{data.quantity_on_performer}}</div>
        </div>
        <div class="item done">
          <div class="t">
            <span style="color:red">Не виконано</span> /
            <span style="color:#32bf32;">Виконано</span>
          </div>
          <div class="n" :class="{'color-red': done > 0}">{{Math.abs(done)}}</div>
        </div>
      </div>
    </v-container>
    <v-container fluid fill-height class="equipment" v-if="!$store.state.conect"></v-container>
    <v-container fluid fill-height class="equipment-stop" v-if="data.stopped">
      <div class="name-st">
        {{data.name}}
        <small>({{data.article}})</small>
      </div>
      <div class="text-xs-center">
        <h1 class="text-xs-center" style="text-align: center;">Зупинка</h1>
        <Countdown :deadline="timeer" v-if="timeer"></Countdown>
      </div>
    </v-container>
    <v-fab-transition v-if="$route.params.id">
      <v-btn color="blue" fab large dark bottom right absolute to="/">
        <v-icon>home</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>


<script>
import Countdown from "@/components/Countdown.vue";
export default {
  components: { Countdown },
  created() {
    this.$store.dispatch("getData");
    setInterval(() => {
     // if (!this.$store.state.conect) return;
      this.$store.dispatch("getData");
    }, 10000);
  },
  computed: {
    data() {
      let data = this.$store.state.data;
      let id = this.$store.state.id;
      if (this.$route.params.id) {
        id = this.$route.params.id;
      }
      data = data.filter(o => {
        return o.id == id;
      });

      if (data.length) {
        return data[0];
      } else {
        return {};
      }
    },
    timeer() {
      if (!this.data.stopped) return false;
      //  console.log(this.data.stopped);
      let time = this.data.stopped.split("-");
      let h = time[0].replace(".", ":");
      let d = time[1].split(".");
      // 10:07 07 24, 2019
      return h + " " + d[1] + " " + d[0] + ", " + d[2];
      //  console.log(h);
    },
    done() {
      let current_output = this.data.current_output;
      let norma_currently = this.data.norma_currently;
      if (typeof current_output == "string") {
        current_output = current_output.replace(",", ".");
      }
      if (typeof norma_currently == "string") {
        norma_currently = norma_currently.replace(",", ".");
      }
      //  console.log(current_output, norma_currently);
      let out = norma_currently - current_output;
      return out.toFixed(2);
    }
  },
  methods: {}
};
</script>


<style lang="scss">
@keyframes bgAnim {
  0% {
    background: rgb(138, 15, 15);
  }
  50% {
    background: rgb(185, 62, 14);
  }
  100% {
    background: rgb(138, 15, 15);
  }
}

.equipment {
  background: #000;
  color: #fff;
  min-height: 100vh !important;
}

.equipment-stop {
  background: rgb(201, 8, 8);
  color: #fff;
  min-height: 100vh !important;
  animation: bgAnim 1s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name-st {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff;
  padding-top: 15px;
  font-size: 2rem;
}

.v-btn--fab {
  bottom: 16px !important;
}

.list-nums {
  padding-top: 100px;
  color: #2196f3;
  font-size: 3rem;
  text-align: center;
  display: flex;
  height: calc(100vh - 200px);
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  .item {
    margin-bottom: 20px;
    width: 50%;
    min-width: 50%;
  }
  .n {
    color: #fff;
    font-size: 7rem;
  }
}

.done {
  .t {
    color: #fff;
  }
  .n {
    color: #32bf32;
    &.color-red {
      color: red;
    }
  }
}

@media (min-height: 1000px) {
  .list-nums {
    .item {
      width: 100%;
      min-width: 100%;
    }
  }

  .v-btn--fab.v-size--large {
    width: 100px;
    height: 100px;
  }
  .v-btn--fab.v-size--large .v-icon {
    height: 48px;
    font-size: 48px;
    width: 48px;
  }
}

@media (max-height: 850px) {
  .list-nums .n {
    font-size: 5rem;
  }
  .list-nums {
    font-size: 2rem;
  }
}
@media (max-width: 1200px) {
  .list-nums .n {
    font-size: 5rem;
  }
  .list-nums {
    font-size: 1.8rem;
  }
}

@media (min-height: 1300px) {
  .list-nums .n {
    font-size: 7rem;
  }
  .list-nums {
    font-size: 3.2rem;
  }
  .equipment-stop {
    h1 {
      font-size: 5rem;
      margin-bottom: 60px;
    }
  }
  .name-st{
    font-size: 3rem;
  }
}
</style>

