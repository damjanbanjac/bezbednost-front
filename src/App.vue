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
//import CreateForm from "@/components/CreateForm.vue";

// import axios from "axios"
export default {
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
</style>