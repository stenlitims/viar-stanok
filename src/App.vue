<template>
  <div id="app">
    <v-app id="inspire">
      <v-snackbar v-model="!$store.state.conect" color="red darken-2" :timeout="0">
        Немає зєднання!
        <v-btn color="white" text @click="conect">Підключити</v-btn>
      </v-snackbar>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    conect() {
      this.$store.dispatch("getData");
    }
  }
};
</script>


<style lang="scss">
</style>
