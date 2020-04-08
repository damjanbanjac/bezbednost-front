<template>
  <div id="app">
      <Admin> </Admin>
  </div>
</template>

<script>

import axios from "axios"
import Admin from "./components/Admin"
export default {
  name: 'App',
  components: {
    Admin
  } ,

data() {

    return {

     admini: []

    };
  },


}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
