<template>
    <div>
        <b-card class="card">
            <div class="header pt-3 lighten-2">
                <div class="row d-flex justify-content-start">
                    <h4 class="deep-grey-text mt-3 mb-4 pb-1 mx-5" style="color:#001529; font-style:oblique">Please choose request and fill form</h4>
                </div>
            </div>
            <div style="mx-4;">
                    <label style="margin-left:70px; margin-top:4%" for="Form-klinika">Choose request</label>
                        <b-form-select style="width:384px; margin-left:1%" v-model="selektovaniZahtev">
                        <option 
                            v-for="zahtev in sviZahtevi"
                            :value="zahtev.id"
                            :key="zahtev.id"
                            >{{zahtev.id}}
                            </option>
                        </b-form-select>
                    <br/>
                    <br/>
            </div>
            <form class="main-form">
                <div class="row">
                    <div class="col">
                        
                        <div class="form-group">
                            <label class="center">Name</label>
                            <div v-for="zahtev in sviZahtevi"
                                :value="zahtev.id"
                                :key="zahtev.id" >
                                <input type="text" readonly 
                                v-if="zahtev.id === selektovaniZahtev"
                                v-model="zahtev.name"
                                id="inputName" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group" 
                                >
                            <label class="center">Surname</label>
                            <div v-for="zahtev in sviZahtevi"
                                :value="zahtev.id"
                                :key="zahtev.id">
                                <input type="text" readonly
                                v-if="zahtev.id === selektovaniZahtev"
                                v-model="zahtev.surname"
                                id="inputSurname" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>

                
                
                <div class="form-group">
                    <label >E-mail</label>
                    <div v-for="zahtev in sviZahtevi"
                        :value="zahtev.id"
                        :key="zahtev.id">
                        <input type="text" readonly
                        v-if="zahtev.id === selektovaniZahtev"
                        v-model="zahtev.email"
                        id="staticEmail" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label >Organisation</label>
                    <div v-for="zahtev in sviZahtevi"
                        :value="zahtev.id"
                        :key="zahtev.id">
                        <input type="text" readonly 
                        v-if="zahtev.id === selektovaniZahtev"
                        v-model="zahtev.organisation"
                        id="inputOrganisation" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label >Organisation unit</label>
                    <div v-for="zahtev in sviZahtevi"
                        :value="zahtev.id"
                        :key="zahtev.id">
                        <input type="text" readonly 
                        v-if="zahtev.id === selektovaniZahtev"
                        v-model="zahtev.orgUnit"
                        id="inputOrganisationUnit" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label>Days</label>
                    <div>
                        <input placeholder="Enter number of days" type="text" v-model="dani" id="inputDateStart" class="form-control">
                    </div>
                </div>


                <!--<div>
                    <label class="typo__label">Key usage extension</label>
                    <multiselect v-model="value" placeholder="Pick an extension" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                </div>-->


                <label class="typo__label">Is CA?</label>
                <input type="checkbox" v-model="check" style="mx-4; margin-left: 1%">


                <div class="form-group">
                    <label>Certificate signer</label>
                    <div>
                        <select v-model="provera">
                        <option v-for="cert in certificates" v-bind:key="{id: cert.id, text: cert.name }">
                        {{ cert.name }}
                    </option>
                    </select>
                    </div>
                </div>


                <div class="form-group" v-if="provera === 'Intermediate certificate'">
                    <label>Intermediate certificate</label>
                    <div>
                        <select id="intermediateSigners" v-model="intermediate" class="form-control">
                            
                        </select>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" @click="addCertificate()">Submit</button>

            </form>
        </b-card>
    </div>
</template>


<script>
//import Multiselect from 'vue-multiselect';
import axios from "axios";
export default {
    name: "Admin",
    components: {
        //Multiselect
    },
    data () {
    return {
    subject: {
        name: "",
        surname: "",
        email: "",
        organisation: "",
        orgUnit: ""
      },
    selektovaniZahtev: "",
    sviZahtevi: [],
    provera: "",
    id: "",
    check: false,
    dani: "",
    itermediate: "",
    certificates: [
        {id: 1, name: 'Intermediate certificate'},
        {id: 2,name: 'Root certificare'}
    ],
      value: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ]
     }
   },
   methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag) 
    },
    addCertificate(){
        
            console.log("usaoooooo")
            axios
                .post("/admin/addCertificate/"+this.check+"/"+this.dani+"/"+this.selektovaniZahtev)
                
        .catch(error => {
          console.log(error);
        });
        
    },
    izaberi(id){
        console.log(id);
        axios
            .get("/subject/"+ id)
            .then(subject =>{
                this.subject=subject.data;
            })
            .catch(error => {
            console.log(error);
            });
    }
    
  },

  mounted() {
    axios
      .get("/subject/zahteviSubjekata")
      .then(sviZahtevi => {
        this.sviZahtevi = sviZahtevi.data;
      })
      .catch(error => {
        console.log(error);
      });
    
    }
}
</script>

<style scoped>

.main-form {
    width: 500px;
    margin: auto;
}

.card {
    width: 45%;
    margin: auto;
}

.header {
  background: #EFF2F8;
}

.ml-5, .mx-5 {
    margin-left: 6rem !important;
}

</style>