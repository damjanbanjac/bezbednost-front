<template>
  <div>
    <!--Errors-->
    <b-container name="errors" v-if="error">
      <b-alert show variant="danger">{{errorMessage}}</b-alert>
    </b-container>
    <b-container class="d-flex justify-content-center">
      
      <b-card class="card" style="width: 60%;">
        <!--Card header-->
        <div class="header pt-3 lighten-2">
          <div class="row d-flex justify-content-start">
            <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5" style="color:#001529">Kreiranje zahteva</h3>
          </div>
        </div>
        <!--Card body-->
        <div class="form-group">
          <div class="card-body">

            <b-container class="form" fluid>

              <b-row class="my-3">
                <b-col sm="12">
                  <b-form-input placeholder="Ime..." type="text" v-model="subject.name"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <b-form-input placeholder="Prezime..." type="text" v-model="subject.surname"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <b-form-input placeholder="E-mail..." type="email" v-model="subject.email"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <b-form-input placeholder="Organizacija..." type="text" v-model="subject.organisation"></b-form-input>
                </b-col>
              </b-row>

              <b-row class="my-3">
                <b-col sm="12">
                  <b-form-input placeholder="Organizaciona jedinica..." type="text" v-model="subject.orgUnit"></b-form-input>
                </b-col>
              </b-row>

              <br/>

              <div>
                <b-button @click="createForm()" style="width:130px;" variant="outline-primary">Kreiraj zahtev</b-button>
              </div>
            </b-container>
          </div>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      subject: {
        name: "",
        surname: "",
        email: "",
        organisation: "",
        orgUnit: ""
      },
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    createForm() {
      this.error = false;
      if (
        this.subject.email == "" ||
        this.subject.name == "" ||
        this.subject.surname == "" ||
        this.subject.organisation == "" ||
        this.subject.orgUnit == ""
      ) {
        this.errorMessage = "Molimo vas popunite sva polja!";
        this.error = true;
        return;
      }
      
      axios
        .post("/subject", this.subject)
        // .then(() => {
        //   this.subject.email == "";
        //   this.subject.name == "";
        //   this.subject.surname == "";
        //   this.subject.organisation == "";
        //   this.subject.orgUnit == "";
        //   this.$router.push("/");
        // })
        .then(subject=>{
          this.subject= subject.data;
          this.error= false;
        })
        .catch(error => {
          console.log(error);
          this.errorMessage = "Uneti e-mail već postoji!";
          this.error = true;
        });
    }
  }
};
</script>

<style>

.header {
  background: #EFF2F8;
}

</style>
