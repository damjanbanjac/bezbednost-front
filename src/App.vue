<template>
  <div>
    <h1>Hello</h1>
    <div v-for="admin in admini" :key="admin.id">
      <h1>admin.id</h1>
    </div>
  </div>
</template>

<script>

import axios from "axios"
export default {
  name: 'App',
  components: {
   
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
