<template>
    <div>
        <div style="mx-4">
                <label for="Form-klinika">Zahtevi</label>
                    <b-form-select v-model="selektovaniZahtev">
                    <option 
                        v-for="zahtev in sviZahtevi"
                        :value="zahtev.id"
                        :key="zahtev.id"
                        >{{zahtev.id}}</option>
                    </b-form-select>


                    </div>
        <form class="main-form">
            <div class="row">
                <div class="col">
                    
                    <div class="form-group" >
                        <label class="center" >Name</label>
                        <div  >
                            <input type="text" readonly 
                           
                            id="inputName" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="form-group" 
                            >
                        <label class="center">Surname</label>
                        <div >
                            <input type="text" readonly
                            
                             id="inputSurname" class="form-control">
                        </div>
                    </div>
                </div>
            </div>

            
            
            <div class="form-group" 
                   >
                <label >Email</label>
                <div >
                    <input type="text" readonly
                    
                    id="staticEmail" class="form-control">
                </div>
            </div>

            <div class="form-group" 
                   >
                <label >Organisation</label>
                <div 
                    >
                    <input type="text" readonly 
                    
                    id="inputOrganisation" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label>Days</label>
                <div>
                    <input type="text" v-model="dani" id="inputDateStart" class="form-control">
                </div>
            </div>


            <!--<div>
                <label class="typo__label">Key usage extension</label>
                <multiselect v-model="value" placeholder="Pick an extension" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>-->
            <label class="typo__label">Is CA?</label>
            <input type="checkbox" v-model="check" style="mx-4">



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
</style>