<template>

  <div>
      <b-container class="mt-4" >
    <div class="row mb-4" >
      <div class="col-6 mb-4" v-for="zahtev in sviZahtevi" :key="zahtev.id">
        <b-card bg-variant="info" text-variant="white" header="Sertifikat" class="text-center">
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
                <label class="form-control"> {{zahtev.orgUnit}}</label>
              </div>
            </div>
          </div>
         
          <template v-slot:footer>
            <b-button @click="checkValidity(zahtev.id)">Proveri validnost</b-button>
             <b-button @click="revokeCertificate(zahtev.id)" class=" mt-4"> revoke certificate </b-button>
          </template>
          <div>
              <label>valid</label>
                <b-form-input  v-model="validnost"> {{validnost}}</b-form-input>
          </div>
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
    
    validnost: true,
    selektovaniZahtev: "",
    selektovaniCA: "",
    sviZahtevi: []
   
   }
},

    methods: {
    


    revokeCertificate(id) {

  
  
        axios
      .post("/ocsp/revokeOcsp/" + id)
      .catch(error => {
        console.log(error);
      });

        
    },
     checkValidity(id) {

  
  
        axios
      .get("/ocsp/checkValidity/" + id)
      .then(validnost => {
        this.validnost = validnost.data;
      })
      .catch(error => {
        console.log(error);
      });

        
    }


    },
   mounted() {
    axios
      .get("/subject/sviSertifikati")
      .then(sviZahtevi => {
        this.sviZahtevi = sviZahtevi.data;
      })
      .catch(error => {
        console.log(error);
      });

      
    } 


}






</script>

<style>

</style>