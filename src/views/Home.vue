<template>
  <div>
    <Login v-if="$store.state.id == null"></Login>
    <Equipment v-if="$store.state.id != 'admin' && $store.state.id != null"></Equipment>
    <v-container class="main-page" fluid fill-height v-if="$store.state.id == 'admin'">
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
            <router-link
              class="item"
              v-for="(item, i) in data"
              :key="i"
              :to="'equipment/'+item.id"
              :class="{'stop': item.stopped != ''}"
            >
              <div class="name">
                <v-icon>arrow_forward</v-icon>
                {{item.name}}
                <small>({{item.article}})</small>
              </div>
              <div class="info-r">
                <div class="norma_currently">
                  <div class="bg"></div>
                  <div class="t">{{item.norma_currently}}</div>
                </div>
                <div class="current_output">
                  <div
                    class="bg"
                    :style="{'height': proc(item) + '%'}"
                    :class="{'green': proc(item) >= 100}"
                  ></div>
                  <div class="t">{{item.current_output}}</div>
                </div>
              </div>
            </router-link>
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
      let oneP = item.norma_currently / 100;
      return item.current_output / oneP;
    }
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
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }
    > div {
      max-width: 50%;
      min-width: 50%;
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

  .info-r {
    display: flex;
    > div {
      width: 120px;
      display: flex;
      align-items: center;
      position: relative;
      background: rgb(197, 197, 197);
      color: #fff;
      text-align: center;
      justify-content: center;
      margin-right: 20px;
    }

    .bg {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
    }

    .t {
      position: relative;
      z-index: 2;
    }

    .current_output {
      overflow: hidden;
      .bg {
        background: red;
        &.green {
          color: green;
        }
      }
    }

    .norma_currently {
      .bg {
        background: #1976d2;
        height: 100%;
      }
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
</style>

