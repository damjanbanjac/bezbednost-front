<template>

    <div>
        <b-table v-if="CAzahtevi.length" class="table col-md-10" :items="CAzahtevi" :fields="fields" striped table-variant="light" responsive="sm" stickyHeader="1000px">
            <template v-slot:cell(show_details)="row">
                <button size="sm" @click="row.toggleDetails" class="mr-2 btn btn-primary">
                {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                </button>
            </template>

            <template v-slot:row-details="row">
                <b-card class="cardd">

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Validity:</b></b-col>
                        <b-col v-model="validity">{{ validity ? "Valid" : "Not valid" }}</b-col>
                    </b-row>


                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Days:</b></b-col>
                        <b-col>{{ row.item.date }}</b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Organisation:</b></b-col>
                        <b-col>{{ row.item.organisation }}</b-col>
                        <template>
                        <button class="col-md-4 button valid btn btn-primary" size="sm" @click="checkValidity(row.item.id)">Check certificate validity</button>
                        </template>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Organisation unit:</b></b-col>
                        <b-col>{{ row.item.orgUnit }}</b-col>
                        <button class="col-md-4 button btn btn-primary" size="sm" @click="revokeCertificate(row.item.id)">Revoke certificate</button>
                    </b-row>
                </b-card>
            </template>
        </b-table>
    </div>


</template>


<script>



import axios from "axios"
export default {
    data() {
      return {
        fields: [
                {
                    key: 'id',
                    sortable: true,
                },
                {
                    key: 'name',
                    sortable: true,
                },
                {
                    key: 'surname',
                    sortable: true,
                },
                {
                    key: 'email',
                    sortable: true,
                },
                {
                    key: 'show_details',
                    sortable: false,
                },
            ],
        CAzahtevi: [],
        validity: true
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
        .then(validity => {
            this.validity = validity.data;
        })
        .catch(error => {
            console.log(error);
        });

            
        }

    },
    mounted() {

       axios
      .get("/subject/sviSertifikati")
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

    .table {
        padding-left: 15%;
        padding-right: 5%;
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .button {
        margin-right: 5em;
    }

    .cardd {
        background-color: #EFF2F8;
    }

</style>