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
            <table>
              <tr>
                <th>Назва</th>
                <th>Норма</th>
                <th>Виконано</th>
              </tr>
              <tr
                class="item"
                v-for="(item, i) in data"
                :key="i"
                :class="{'stop': item.stopped != ''}"
              >
                <td>
                  <router-link :to="'equipment/'+item.id">
                    <div class="name">
                      <v-icon>arrow_forward</v-icon>
                      {{item.name}}
                      <small>({{item.article}})</small>
                    </div>
                  </router-link>
                </td>

                <td>
                  <div class="norma_currently">
                    <div class="bg"></div>
                    <div class="t">{{item.norma_currently}}</div>
                  </div>
                </td>
                <td>
                  <div class="current_output">
                    <div
                      class="bg"
                      :style="{'width': proc(item) + '%'}"
                      :class="{'green': proc(item) >= 100}"
                    ></div>
                    <div class="t">{{item.current_output}}</div>
                  </div>
                </td>
              </tr>
            </table>
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
import { setTimeout } from "timers";
export default {
  components: {
    Login,
    Equipment
  },
  name: "home",
  data: () => ({
    search: null,
    typeList: "grafic"
  }),
  computed: {
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
    }
  },
  methods: {
    proc(item) {
      let norma_currently = item.norma_currently;
      if (typeof norma_currently == "string") {
        norma_currently = norma_currently.replace(",", ".");
      }
      let current_output = item.current_output;
      if (typeof current_output == "string") {
        current_output = current_output.replace(",", ".");
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
  created() {
    this.$store.dispatch("getData");
    setInterval(() => {
      if (!this.$store.state.conect) return;
      this.$store.dispatch("getData");
    }, 20000);
  }
};
</script>

<style lang="scss">
.grafic-list {
  padding-top: 20px;
  padding-bottom: 20px;
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
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    > div {
    }
    .name {
      padding-top: 15px;
      padding-bottom: 15px;
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
  .v-list {
    //   background: none;
  }
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
  .grafic-list .item td {
    padding-left: 10px;
    padding-right: 10px;
  }
  .grafic-list .current_output,
  .grafic-list .norma_currently {
    width: 100px;
    height: 40px;
  }

  .grafic-list .item .name {
    padding-top: 7px;
    padding-bottom: 7px;
  }
}
</style>

