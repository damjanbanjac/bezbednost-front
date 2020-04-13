<template>
  
<div class="card">
    <div class="form-group">
          <div class="card-body mt-4">
            <div class="row">
              <div class="col">
                <div class="md-form">
                  <label for="Form-username">Name</label>
                  <input
                    type="text"
                    id="Form-username"
                    class="form-control"
                    disabled
                    v-model="user.name"
                  />

                  <label for="Form-ime">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                   disabled
                    v-model="user.surname"
                  />

                  <label for="Form-phone">Organisation</label>
                  <input
                    type="text"
                    id="Form-phone"
                    class="form-control"
                    disabled
                    v-model="user.organisation"
                  />

                  <label for="Form-email4">OrganisationUnit</label>
                  <input
                    type="text"
                    id="Form-email4"
                    class="form-control"
                    disabled
                    v-model="user.orgUnit"
                  />
                </div>
              </div>
              <div class="col">
                <div class="md-form pb-3">
                  <label for="Form-pass4">Valid</label>
                  <input
                  class="form-control"
                    v-model="validityString"
                    disabled
                    
                  />

                  <label for="Form-prezime">End Date</label>
                  <input
                  class="form-control"
                    disabled
                    v-model="datum"
                  />

                     <label for="Form-prezime">Ca</label>
                  <input
                  class="form-control"
                    disabled
                    v-model="user.ca"
                  />
                

                 
                </div>
              </div>
            </div>
           

            <div  class="row">
            <div class="col">
             <button class="col mt-4 button valid btn btn-primary" size="sm" @click="checkValidity()">Check certificate validity</button> 
            </div>  
            <div class="col">
            <button class="col mt-4 button btn btn-primary" size="ml" @click="revokeCertificate()">Revoke certificate</button>
            </div>
            <div class="col">
            <button class="col mt-4 button btn btn-primary" size="ml" @click="downloadCertificate()">Download certificate</button> 
            </div>

            </div>
           
          </div>
        </div>
</div>

                   

</template>

<script>
import axios from "axios";
export default {

    data() {
      return {
           user: {},
        validity: true,
        validityString: "",
        datum: ""
      }
    },



    methods: {

        downloadCertificate(){
          console.log(this.user.ca)
          axios
            .get("/admin/download/" + this.$route.params.id+"/"+this.user.name+"/"+this.user.ca)
            
            .catch(error => {
                console.log(error);
            });

        },

        revokeCertificate() {
            axios
            .post("/ocsp/revokeOcsp/" + this.$route.params.id)
            .then(validity => {
                validity = "Not Valid"
            this.validityString = validity;
            
            
        })
            .catch(error => {
                console.log(error);
            });

                
        },
        checkValidity() {

            axios
        .get("/ocsp/checkValidity/" + this.$route.params.id)
        .then(validity => {
            this.validity = validity.data;
            if(this.validity === true) {
                this.validityString = "Valid";
            } else {
                this.validityString = "Not Valid";
            }
            
        })
        .catch(error => {
            console.log(error);
        });

            
        }

    },
    mounted() {

     axios
      .get("/subject/preuzmi/" + this.$route.params.id)
      .then(subject => {
        this.user = subject.data;
        console.log(subject.data)
      })
      .catch(error => {
        console.log(error);
      });

      axios
      .get("/subject/preuzmiDatum/" + this.$route.params.id)
      .then(datum => {
          console.log(datum + "ima li ga")
        this.datum = datum.data;
       
      })
      .catch(error => {
        console.log(error);
      });
    }

}




</script>

<style>

.cardd {
        background-color: #EFF2F8;
    }

</style>