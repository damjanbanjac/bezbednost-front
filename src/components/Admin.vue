<template>
    <div>
        
        <b-container name="errors" v-if="error">
        <b-alert show variant="danger">{{errorMessage}}</b-alert>
        </b-container>
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
                            >{{zahtev.id +" " +  zahtev.name + " " + zahtev.surname}}
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
                            <div v-for="zahtevName in sviZahtevi"
                                :value="zahtevName.id"
                                :key="zahtevName.id" >
                                <input type="text" readonly 
                                v-if="zahtevName.id === selektovaniZahtev"
                                v-model="zahtevName.name"
                                id="inputName" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="form-group" 
                                >
                            <label class="center">Surname</label>
                            <div v-for="zahtevSurname in sviZahtevi"
                                :value="zahtevSurname.id"
                                :key="zahtevSurname.id">
                                <input type="text" readonly
                                v-if="zahtevSurname.id === selektovaniZahtev"
                                v-model="zahtevSurname.surname"
                                id="inputSurname" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label >E-mail</label>
                    <div v-for="zahtevEmail in sviZahtevi"
                        :value="zahtevEmail.id"
                        :key="zahtevEmail.id">
                        <input type="text" readonly
                        v-if="zahtevEmail.id === selektovaniZahtev"
                        v-model="zahtevEmail.email"
                        id="staticEmail" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label >Organisation</label>
                    <div v-for="zahtevOrganisation in sviZahtevi"
                        :value="zahtevOrganisation.id"
                        :key="zahtevOrganisation.id">
                        <input type="text" readonly 
                        v-if="zahtevOrganisation.id === selektovaniZahtev"
                        v-model="zahtevOrganisation.organisation"
                        id="inputOrganisation" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label>Organisation unit</label>
                    <div v-for="zahtevOrgUnit in sviZahtevi"
                        :value="zahtevOrgUnit.id"
                        :key="zahtevOrgUnit.id">
                        <input type="text" readonly 
                        v-if="zahtevOrgUnit.id === selektovaniZahtev"
                        v-model="zahtevOrgUnit.orgUnit"
                        id="inputOrganisationUnit" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label>Certificate signer</label>
                    <div>
                        <b-form-select @change="getDani" style="width:384px; margin-left:1%" v-model="provera">
                        <option v-for="cert in certificates" :value="cert.name"
                        :key="cert.name">{{cert.name}}
                    </option>
                    </b-form-select>
                    </div>
                </div>

                <div class="form-group" v-if="provera === 'Intermediate certificate'">
                    <label>Intermediate certificate</label>
                    <div>
                       
                         <b-form-select @change="getDani" style="width:384px; margin-left:1%" v-model="selektovaniCA">
                        <option 
                            v-for="zahtevIntermediate in CAzahtevi"
                            :value="zahtevIntermediate.id"
                            :key="zahtevIntermediate.id"
                            >{{zahtevIntermediate.id + " " + zahtevIntermediate.name + " " + zahtevIntermediate.surname}}
                            </option>
                        </b-form-select> 
                        
                    </div>
                </div>

                <label class="typo__label">Is CA?</label>
                <input type="checkbox" @change="getDani" v-model="check" style="mx-4; margin-left: 1%">

                <br/>

                <label class="typo__label">Is digital signature?</label>
                <input type="checkbox"  v-model="extension.digitalSignature" style="mx-4; margin-left: 1%">

                <br/>     
                      
                <label class="typo__label">Is key encipherment?</label>
                <input type="checkbox"  v-model="extension.keyEncipherment" style="mx-4; margin-left: 1%">

                <br/>
                      
                <label class="typo__label">Is key agreement?</label>
                <input type="checkbox"  v-model="extension.keyAgreement" style="mx-4; margin-left: 1%">

                <br/>
                       
                <!-- <div class= "row">
                    <label class="typo__label">TLSWebclientauthentication</label>
                <input type="checkbox"  v-model="extension.tLSWebclientauthentication" style="mx-4; margin-left: 1%">
                </div>
                <div class= "row">
                    <label class="typo__label">TLSWebserverauthentication</label>
                <input type="checkbox"  v-model="extension.tLSWebserverauthentication" style="mx-4; margin-left: 1%">
                </div>
                    <div class= "row">
                    <label class="typo__label">EmailProtection</label>
                <input type="checkbox"  v-model="extension.emailProtection" style="mx-4; margin-left: 1%">
                    </div> 
                    
                    <div class= "row">
                    <label class="typo__label">CodeSigning</label>
                <input type="text"  v-model="extension.codeSigning" style="mx-4; margin-left: 1%">
                    </div> -->
                           
                <label class="typo__label">Is nonrepudiation?</label>
                <input type="checkbox"  v-model="extension.nonRepudiation" style="mx-4; margin-left: 1%">

                <div class="form-group">
                    <label>Days</label>
                    <div>
                        <b-form-select style="width:384px; margin-left:1%" v-model="dani">
                        <option v-for="(dan, index) in dozvoljeniDani" :value="dan"
                        :key="dan">{{dan}} ( {{index+1+"years"}} )
                    </option>
                    </b-form-select>
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
    extension: {
        digitalSignature: false,
        keyEncipherment: false,
        keyAgreement: false,
        tLSWebserverauthentication: false,
        tLSWebclientauthentication: false,
        emailProtection: false,
        nonRepudiation: false,
        codeSigning: ""
        
        
       
        
      },
    selektovaniZahtev: "",
    selektovaniCA: "",
    sviZahtevi: [],
    CAzahtevi: [],
    dozvoljeniDani: [],
    provera: "",
    id: "",
    check: false,
    dani: "",
    error: false,
    errorMessage: "",
    itermediate: "",

    certificates: [
        {name: 'Intermediate certificate'},
        {name: 'Root certificate'}
    ],
     
     }
   },
   methods: {

   
    getDani(){
         var p = this.provera;
         console.log(this.selektovaniZahtev)
        if(p === "Root certificate"){
            
            axios
                .get("/admin/getDani/" +this.check)
                .then(nesto =>{
                    this.dozvoljeniDani = nesto.data;
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
             var pp = this.selektovaniCA;
            
             if(pp !== "") {
                
             axios
                .get("/admin/getDaniIntermediate/"+this.selektovaniCA +"/"+this.check)
                .then(nesto =>{
                    this.dozvoljeniDani = nesto.data;
                })
                .catch(error => {
                    console.log(error);
                });
                }
        }
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag) 
    },
    addCertificate(){
         var p = this.provera;
         this.error = false;
        
          if(p === "Root certificate") {
            if (
            this.selektovaniZahtev == "" ||
            this.provera == "" ||
            this.dani == "" 
        ) {
            this.errorMessage = "Molimo vas popunite sva polja!";
            this.error = true;
            return;
            }

            console.log(this.extension);

            axios
                .post("/admin/addCertificate/"+this.check+"/"+this.dani+"/"+this.selektovaniZahtev,this.extension)
                .then(b =>{
                    b="";
                    this.dani =b;
                    this.selektovaniZahtev = b;
                    this.provera = b;
                    this.check=false;
                     this.extension.digitalSignature = false;
                    this.extension.nonRepudiation = false;
                    this.extension.keyEncipherment = false;
                    this.extension.keyAgreement = false;
                })
                
        .catch(error => {
          console.log(error);
        });

            axios
                .get("/subject/zahteviSubjekata")
                .then(sviZahtevi => {
                this.sviZahtevi = sviZahtevi.data;
            })
            .catch(error => {
                console.log(error);
      });
        } else {
             if (
            this.selektovaniZahtev == "" ||
            this.provera == "" ||
            this.dani == "" ||
            this.selektovaniCA == ""
        ) {
            this.errorMessage = "Molimo vas popunite sva polja!";
            this.error = true;
            return;
            }

            axios
                .post("/admin/addCertificate/"+this.check+"/"+this.dani+"/"+this.selektovaniZahtev +"/"+this.selektovaniCA, this.extension )
                .then(b =>{
                    b="";
                    this.dani =b;
                    this.selektovaniZahtev = b;
                    this.provera = b;
                    this.check=false;
                    this.extension.digitalSignature = false;
                    this.extension.nonRepudiation = false;
                    this.extension.keyEncipherment = false;
                    this.extension.keyAgreement = false;
                    this.selektovaniCA=b;
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
        axios
      .get("/subject/zahteviSubjekata")
      .then(sviZahtevi => {
        this.sviZahtevi = sviZahtevi.data;
      })
      .catch(error => {
        console.log(error);
      });

        } 
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