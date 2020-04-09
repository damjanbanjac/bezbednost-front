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
                    <div class="form-group">
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
                <label>Email</label>
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
                <label>Organisation</label>
                <div v-for="zahtev in sviZahtevi"
                    :value="zahtev.id"
                    :key="zahtev.id"
                    >
                    <input type="text" readonly 
                     v-if="zahtev.id === selektovaniZahtev"
                    v-model="zahtev.email"
                    id="inputOrganisation" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label>Days</label>
                <div>
                    <input type="text" id="inputDateStart" class="form-control">
                </div>
            </div>


            <!--<div>
                <label class="typo__label">Key usage extension</label>
                <multiselect v-model="value" placeholder="Pick an extension" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>-->
            <label class="typo__label">Is CA?</label>
            <input type="checkbox" style="mx-4">



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
                    <select id="intermediateSigners" class="form-control">
                        
                    </select>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

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
    selektovaniZahtev: "",
    sviZahtevi: [],
    provera: "",
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