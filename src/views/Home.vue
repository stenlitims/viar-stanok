<template>
  <v-container class="main-page" fluid fill-height>
    <v-layout justify-center>
      <v-flex xs12 sm12 md12 xl12>
        <v-toolbar color="primary" align-center justify-center dark>
          <v-toolbar-title>Віяр - Станки</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            solo-inverted
            flat
            hide-details
            label="Пошук"
            v-model="search"
            prepend-inner-icon="search"
          ></v-text-field>
        </v-toolbar>

        <v-list>
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
</template>

<script>
export default {
  name: "home",
  data: () => ({
    search: null
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
  created() {
    this.$store.dispatch("getData");
  }
};
</script>

<style lang="scss">
.main-page {
  padding: 0 !important;
  background: #fff;
  .v-list {
    //   background: none;
  }
  .stop {
    background: rgba(255, 193, 193, 0.3);
  }
}

@media (min-width: 667px) {
  .main-page {
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
  .main-page {
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
   .main-page {
     .v-list-item__title{
       font-size: 1.7rem;
     }
   }
}
</style>

