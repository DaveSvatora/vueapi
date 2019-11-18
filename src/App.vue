<template>
  <v-app>
    <v-app-bar app dense color="primary">
      <v-toolbar-title>Vue API</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Auth />
    </v-content>
  </v-app>
</template>

<script>
import Auth from "./components/Auth";

export default {
  name: "App",

  components: {
    Auth
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  data: () => ({
    //
  })
};
</script>
