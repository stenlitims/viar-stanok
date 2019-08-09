<template>
  <v-app id="inspire" class="login">
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-toolbar class="pt-3 pb-3 login-header">
            <img src="logo.svg" />
          </v-toolbar>
          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-form v-model="valid" ref="form" v-on:submit.prevent="submit">
                  <v-text-field
                    label="Номер обладнання"
                    height="60"
                    outlined
                    v-model="login"
                    :rules="Rules"
                    required
                  ></v-text-field>
                  <v-alert type="error" v-if="error">Обладнання не знайдено !</v-alert>
                  <v-layout class="mt-2" justify-center>
                    <v-btn
                      @click="submit"
                      large
                      :class="{ 'blue darken-2 white--text' : valid, disabled: !valid }"
                    >Вхід</v-btn>
                  </v-layout>
                </v-form>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      e1: false,
      Rules: [v => !!v || "Поле обов'язкове"],
      login: "",
      error: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.login == this.$store.state.pass) {
          this.$store.commit("setId", this.login);
          return;
        }
        let data = this.$store.state.list.filter(o => {
          return o.article == this.login;
        });

        if (data.length) {
          console.log(data);
          this.$store.commit("setId", data[0].id);
        } else {
          this.error = true;

          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss">
@media (min-width: 1360px) {
  .login {
    .v-toolbar__content {
      height: inherit !important;
    }
    .v-btn:not(.v-btn--round).v-size--large {
      height: 54px;
      min-width: 110px;
      font-size: 1.2rem;
    }
  }
}

.login-header {
  img {
    max-width: 200px;
  }
  > div {
    justify-content: center;
  }
}
</style>
