<template>
  <div>
    <v-container fluid fill-height class="equipment" v-if="data.stopped == ''">
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
          <div class="n">
            <span v-if="data.current_output">{{data.current_output}}</span>
            <span v-else>0</span>
          </div>
        </div>
        <div class="item">
          <div class="t">Взято в роботу</div>
          <div class="n">
            <span v-if="data.quantity_on_performer">{{data.quantity_on_performer}}</span>
            <span v-else>0</span>
          </div>
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
    <v-container fluid fill-height class="equipment equipment-off" v-if="!data.current_output && !data.norm">
      <div class="name-st" v-if="data.name">
        {{data.name}}
        <small>({{data.article}})</small>
      </div>
      <h1 v-if="data.name">Станок відключиний</h1>
      <h1 v-else>Помилка 404</h1>
    </v-container>
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
    }, this.$store.state.timeUser);
  },
  computed: {
    data() {
      let data = this.$store.state.data;
      let id = this.$store.state.id;
      if (this.$route.params.id) {
        id = this.$route.params.id;
      }
      data = data.find(o => o.id == id);

      if (data) {
        return data;
      } else {
        let item = this.$store.state.list.find(o => o.id == id);
        if (item) {
          return item;
        } else {
          return {};
        }
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
      let current_output = this.ToNum(this.data.current_output);
      let norma_currently = this.ToNum(this.data.norma_currently);
      let out = norma_currently - current_output;
      return out.toFixed(2);
    }
  },
  methods: {}
};
</script>


<style lang="scss">
.equipment-off {
  justify-content: center;
  h1 {
    font-size: 60px;
  }
}

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
  text-align: center;
  width: 100%;
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

@media (max-height: 700px) {
  .list-nums .n {
    font-size: 4rem;
  }
  .list-nums {
    font-size: 2rem;
  }
  .list-nums {
    padding-top: 0;
  }
}

@media (max-width: 1200px) {
  .list-nums {
    font-size: 1.8rem;
  }
}

@media (min-height: 1100px) {
  .list-nums {
    padding-top: 50px;
    font-size: 2.5rem;
  }
  .list-nums .n {
    font-size: 6.2rem;
  }
  .equipment-stop {
    h1 {
      font-size: 5rem;
      margin-bottom: 60px;
    }
  }
  .name-st {
    font-size: 2rem;
  }
  .list-nums .item {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
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
  .name-st {
    font-size: 3rem;
  }
}
</style>

