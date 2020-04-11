<template>

  <div>
      <b-container class="mt-4" >
    <div class="row mb-4" >
      <div class="col-6 mb-4" v-for="zahtev in sviZahtevi" :key="zahtev.id">
        <b-card bg-variant="danger" text-variant="white" header="Sertifikat" class="text-center">
          <div class="row">
            <div class="col">
              <div class="md-form">
                <label>Ime</label>
                <label class="form-control">{{zahtev.name}}</label>
                <label>Prezime</label>
                <label class="form-control">{{zahtev.surname}}</label>
              </div>
            </div>
            <div class="col">
              <div class="md-form pb-3">
                <label>Organisation</label>
                <label class="form-control"> {{zahtev.organisation}}</label>
                <label>OrgUnit</label>
                <label class="form-control"> {{zahtev.OrgUnit}}</label>
              </div>
            </div>
          </div>
         
          <template v-slot:footer>
            <b-button >Proveri validnost</b-button>
          </template>
        </b-card>
      </div>
    </div>
</b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {

    data () {
    return {
    
    selektovaniZahtev: "",
    selektovaniCA: "",
    sviZahtevi: []
   
   }
},
   mounted() {
    axios
      .get("/subject/CAsubjekti")
      .then(sviZahtevi => {
        this.sviZahtevi = sviZahtevi.data;
      })
      .catch(error => {
        console.log(error);
      });

       axios
      .get("/subject/CAsubjekti")
      .then(CAzahtevi => {
        this.CAzahtevi = CAzahtevi.data;
      })
      .catch(error => {
        console.log(error);
      });
    
    } 


}






</script>

<style>

</style>