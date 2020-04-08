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

mounted() {

   
    
      axios
      .get("/admin/sviAdmini")
      .then(admini =>{
        this.admini = admini.data;
      })
      .catch(error => {
          console.log(error)
      });
    

}

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
