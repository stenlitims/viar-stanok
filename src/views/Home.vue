<template>
  <div>
    <Login v-if="$store.state.id == null"></Login>
    <Equipment v-if="$store.state.id != $store.state.pass && $store.state.id != null"></Equipment>
    <v-container class="main-page" fluid fill-height v-if="$store.state.id == $store.state.pass">
      <v-layout justify-center>
        <v-flex xs12 sm12 md12 xl12>
          <v-toolbar color="primary" align-center justify-center dark>
            <v-toolbar-title>Віяр - Станки</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="mr-5">
              <v-btn text @click="typeList = 'grafic'">Графік</v-btn>
              <v-btn text @click="typeList = 'list'">Список</v-btn>
            </v-toolbar-items>
            <v-text-field
              solo-inverted
              flat
              hide-details
              label="Пошук"
              v-model="search"
              prepend-inner-icon="search"
            ></v-text-field>
          </v-toolbar>

          <div class="grafic-list" v-if="typeList == 'grafic'">
            <!-- <div class="gr-item head"></div> -->
            <div v-for="(item, i) in list" :key="i">
              <div class="gr-item" @click="$set(nav, 's'+i, !nav['s'+i])">
                <div class="name">
                  <v-btn icon ripple>
                    <v-icon v-if="nav['s'+i]">arrow_drop_up</v-icon>
                    <v-icon v-else>arrow_drop_down</v-icon>
                  </v-btn>
                  <div class="t-in">
                    {{item.name}}
                    <br />
                    <small>
                      (
                      <span
                        class="count"
                        :class="{'gr':item.count == item.group.length }"
                      >{{item.count}}</span>
                      із {{item.group.length}} )
                    </small>
                  </div>
                </div>
                <div class="norma_currently">
                  <div class="bg"></div>
                  <div class="t">{{Number_format(item.norma_currently)}}</div>
                </div>
                <div class="current_output">
                  <div
                    class="bg"
                    :style="{'width': proc(item) + '%'}"
                    :class="{'green': proc(item) >= 100}"
                  ></div>
                  <div class="t">
                    <span v-if="item.current_output">{{Number_format(item.current_output)}}</span>
                    <span v-else>0</span>
                  </div>
                </div>
              </div>
              <table v-if="nav['s'+i]">
                <tr>
                  <th>Назва</th>
                  <th>Норма</th>
                  <th>Виконано</th>
                </tr>
                <tr
                  class="item"
                  v-for="(item2, i) in item.group"
                  :key="i"
                  :class="{'stop': item2.stopped != '' && item2.stopped, 'no-data': !item2.norma_currently}"
                >
                  <td>
                    <router-link :to="'equipment/'+item2.id">
                      <div class="name">
                        <v-icon>arrow_forward</v-icon>
                        {{item2.name}}
                        <small>({{item2.article}})</small>
                      </div>
                    </router-link>
                  </td>

                  <td>
                    <div class="norma_currently" v-if="item2.norma_currently">
                      <div class="bg"></div>
                      <div class="t">{{Number_format(item2.norma_currently)}}</div>
                    </div>
                  </td>
                  <td v-if="item2.stopped == '' || !item2.stopped">
                    <div class="current_output" v-if="item2.current_output">
                      <div
                        class="bg"
                        :style="{'width': proc(item2) + '%'}"
                        :class="{'green': proc(item2) >= 100}"
                      ></div>
                      <div class="t">
                        <span v-if="item2.current_output">{{Number_format(item2.current_output)}}</span>
                        <span v-else>0</span>
                      </div>
                    </div>
                    <CountdownMin v-if="item2.weekend" :deadline="timeer(item2.weekend)"></CountdownMin>
                  </td>
                  <td v-else>
                    <CountdownMin :deadline="timeer(item2.stopped)"></CountdownMin>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <v-list class="d-list" v-else>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, i) in data"
                :key="i"
                :to="'equipment/'+item.id"
                :class="{'stop': item.stopped != ''}"
              >
                <v-list-item-icon>
                  <v-icon>arrow_forward</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{item.name}}
                    <small>({{item.article}})</small>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Equipment from "@/components/Equipment.vue";
import CountdownMin from "@/components/CountdownMin.vue";
import sortBy from "lodash.sortby";
import cloneDeep from "clone-deep";
export default {
  components: {
    Login,
    Equipment,
    CountdownMin
  },
  name: "home",
  data: () => ({
    search: null,
    typeList: "grafic",
    intervalData: null,
    intervalWeekend: null
    //   nav: {}
  }),
  computed: {
    nav() {
      return this.$store.state.nav;
    },
    data() {
      let data = this.$store.state.data;
      if (this.search) {
        data = data.filter(o => {
          return (
            o.article.toLowerCase().includes(this.search.toLowerCase()) ||
            o.name.toLowerCase().includes(this.search.toLowerCase())
          );
        });
      }
      return data;
    },
    list() {
      let groups = this.$store.state.groups;
      let list = cloneDeep(this.$store.state.list);
      let data = this.$store.state.data;
      let weekend = this.$store.state.weekend;
      let out = [];
      if (this.search) {
        list = list.filter(o => {
          return (
            o.article.toLowerCase().includes(this.search.toLowerCase()) ||
            o.name.toLowerCase().includes(this.search.toLowerCase())
          );
        });
      }

      groups.forEach(n => {
        let group = list.filter(o => {
          return o.group == n;
        });

        let current_output = 0;
        let norm = 0;
        let norma_currently = 0;
        let quantity_on_performer = 0;
        let count = 0;

        group = sortBy(group, ["name"]);

        group.forEach(o => {
          let ditem = data.find(d => d.id == o.id);
          if (ditem) {
            o.change = ditem.change;
            o.current_output = this.ToNum(ditem.current_output);
            o.norm = this.ToNum(ditem.norm);
            o.norma_currently = this.ToNum(ditem.norma_currently);
            o.quantity_on_performer = this.ToNum(ditem.quantity_on_performer);
            o.stopped = ditem.stopped;

            current_output = current_output + o.current_output;
            norm = norm + o.norm;
            norma_currently = norma_currently + o.norma_currently;
            quantity_on_performer =
              quantity_on_performer + o.quantity_on_performer;
            count++;
          } else {
            let fr = weekend.find(d => d.id == o.id);
            if (fr) {
              o.weekend = fr.time;
            }
          }
        });

        let temp = {
          name: n,
          group,
          quantity_on_performer,
          current_output,
          norm,
          norma_currently,
          count
        };
        out.push(temp);
      });

      return out;
    }
  },
  methods: {
    timeer(stopped) {
      if (!stopped) return false;
      let time = stopped.split("-");
      let h = time[0].replace(".", ":");
      let d = time[1].split(".");
      // 10:07 07 24, 2019
      return h + " " + d[1] + " " + d[0] + ", " + d[2];
      //  console.log(h);
    },
    proc(item) {
      let norma_currently = item.norma_currently;
      if (typeof norma_currently == "string") {
        norma_currently = norma_currently.replace(",", ".");
        norma_currently = norma_currently.replace(" ", "");
      }
      let current_output = item.current_output;
      if (typeof current_output == "string") {
        current_output = current_output.replace(",", ".");
        current_output = current_output.replace(" ", "");
      }
      let oneP = norma_currently / 100;
      return current_output / oneP;
    }
  },
  mounted() {
    setTimeout(() => {
      let data = this.$store.state.data.filter(o => {
        return o.id == this.$store.state.id;
      });
      //  console.log(data);
      if (!data.length && this.$store.state.pass != this.$store.state.id) {
        //   console.log(234);
        this.$store.commit("setId", null);
      }
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.intervalData);
    clearInterval(this.intervalWeekend);
  },
  created() {
    this.$store.dispatch("getData");
    this.$store.dispatch("getWeekend");
    this.intervalData = setInterval(() => {
      //  if (!this.$store.state.conect) return;
      this.$store.dispatch("getData");
    }, this.$store.state.timeAdmin);

    this.intervalWeekend = setInterval(() => {
      this.$store.dispatch("getWeekend");
      this.$store.dispatch("getDate");
    }, 5000);
  }
};
</script>

<style lang="scss">
.grafic-list {
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #f8f8f8;
  .item {
    // display: flex;
    //  padding-left: 30px;
    //  padding-right: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.8);
    }
    td {
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .name {
      padding-top: 5px;
      padding-bottom: 5px;
      display: flex;
      align-items: center;

      small {
        margin-left: 5px;
      }
    }
    .v-icon {
      margin-right: 15px;
    }
    &.stop {
      background: rgba(255, 193, 193, 0.3);
    }
  }

  .gr-item {
    display: flex;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    align-items: center;
    background: #fff;
    cursor: pointer;
    > div {
      margin-right: 20px;
    }
    > .name {
      padding: 10px 20px;
      width: 270px;
      display: flex;
      text-align: center;
      align-items: center;
      line-height: 1.1;
      font-size: 16px;
    }

    .count {
      color: red;
      &.gr {
        color: green;
      }
    }
    .t-in {
      margin-left: 7px;
      flex: 1;
      font-weight: bold;
    }

    .v-btn--fab.v-size--default {
      height: 36px;
      width: 36px;
      bottom: 0px !important;
    }
  }
  .no-data {
    //  opacity: 0.7;
    background: #c0e7f8 !important;
  }
  table {
    margin-left: 60px;
    margin-bottom: 15px;
    margin-top: 10px;
    .current_output,
    .norma_currently {
      width: 180px;
      height: 40px;
    }
    .name {
      padding-right: 10px;
    }
    .v-icon.v-icon {
      font-size: 20px;
    }
    td:first-child {
      padding-left: 15px;
    }
  }

  .current_output,
  .norma_currently {
    height: 60px;
    width: 220px;
    display: flex;
    align-items: center;
    position: relative;
    background: rgb(197, 197, 197);
    color: #fff;
    text-align: center;
    justify-content: center;
    // margin-right: 20px;
    .bg {
      position: absolute;
    }

    .t {
      position: relative;
      z-index: 2;
    }
  }

  .current_output {
    // overflow: hidden;
    .bg {
      background: red;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0;
      &.green {
        color: green;
      }
    }
  }

  .norma_currently {
    .bg {
      bottom: 0;
      left: 0;
      right: 0;
      background: #1976d2;
      height: 100%;
    }
  }
}

body .theme--light.v-application {
  background: #fff;
}
.main-page {
  padding: 0 !important;
  background: #fff;
}

.d-list {
  .stop {
    background: rgba(255, 193, 193, 0.3);
  }
}

@media (min-width: 667px) {
  .d-list {
    .v-list-item-group {
      display: flex;
      flex-wrap: wrap;
    }
    .v-list-item {
      flex: 1 1 50%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}

@media (min-width: 1360px) {
  .d-list {
    .v-list-item-group {
      display: flex;
      flex-wrap: wrap;
    }
    .v-list-item {
      flex: 1 1 33.33%;
    }
  }
}

@media (min-width: 1400px) {
  .main-page {
    .v-toolbar__title {
      font-size: 2rem;
    }
  }
}

@media (min-height: 1000px) {
  .d-list {
    .v-list-item__title {
      font-size: 1.7rem;
    }
  }
}

@media (max-width: 1200px) {
  .grafic-list .current_output,
  .grafic-list .norma_currently {
    width: 150px;
  }
}

@media (max-width: 700px) {
  .grafic-list {
    table {
      margin-left: 10px;
      .current_output,
      .norma_currently {
        width: 100px;
        height: 30px;
      }
    }
  }

  .grafic-list .item .name {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .grafic-list .gr-item > div {
    margin-right: 5px;
  }
}

@media (max-width: 500px) {
  .grafic-list {
    table {
      margin-left: 10px;
      .current_output,
      .norma_currently {
        width: 60px;
        height: 30px;
      }
    }
  }
  .grafic-list {
    font-size: 13px;
  }
  .grafic-list .gr-item > .name {
    padding: 5px 0px;
  }
  .grafic-list .current_output,
  .grafic-list .norma_currently {
    height: 50px;
  }
}
</style>

