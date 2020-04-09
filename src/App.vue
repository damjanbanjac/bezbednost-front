<template>
  <div id="app">


    <div>


      
      
      <router-link to="/userForm">
        <b-button block variant="primary">User form</b-button>
      </router-link>

      <router-link to="/adminForm">
        <b-button block variant="info">Admin form</b-button>
      </router-link>
      <router-view />
      

    </div>


  </div>
</template>

<script>

// import axios from "axios"
export default {
  name: 'App',
  components: {
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
