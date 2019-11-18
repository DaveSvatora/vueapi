<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <v-text-field
            outlined
            v-model="apiSpec"
            :rules="specRules"
            label="API Spec Url"
            color="secondary"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            outlined
            v-model="user"
            :rules="userRules"
            label="Basic Auth User"
            color="secondary"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            outlined
            v-model="pass"
            :rules="passRules"
            label="Basic Auth Password"
            color="secondary"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-btn outlined x-large icon color="info" @click="getSpec(apiSpec, user, pass)">
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
/* eslint-disable */
const axios = require("axios");
export default {
  name: "Auth",

  data: () => ({
    valid: false,
    apiSpec: "",
    user: "",
    pass: "",
    specRules: [v => !!v || "API Spec Json URL is required"],
    userRules: [v => !!v || "Basic Auth User is required"],
    passRules: [v => !!v || "Basic Auth User is required"]
  }),
  methods: {
    getSpec: function(url, user, pass) {
      console.log(url);
      axios({
        method: "get",
        url: url,
        auth: {
          username: user,
          password: pass
        },
        headers: {"Access-Control-Allow-Origin": true}
      })
        .then(function(res) {
          console.log(res.data);
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
