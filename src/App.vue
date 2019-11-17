<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <Auth/>
    </v-content>
  </v-app>
</template>

<script>
import Auth from './components/Auth';

export default {
  name: 'App',

  components: {
    Auth,
  },

  data: () => ({
    //
  }),
};
</script>
