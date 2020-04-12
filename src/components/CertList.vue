<template>

    <div>
        <b-table v-if="CAzahtevi.length" class="table col-md-10" :items="CAzahtevi" :fields="fields" striped table-variant="secondary" responsive="sm" stickyHeader="1000px">
            <template v-slot:cell(show_details)="row">
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                </b-button>
            </template>

            <template v-slot:row-details="row">
                <b-card background-color="primary">

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
                        <b-button class="col-md-4 button valid" size="sm" @click="checkValidity(row.item.id)">Check certificate validity</b-button>
                        </template>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Organisation unit:</b></b-col>
                        <b-col>{{ row.item.orgUnit }}</b-col>
                        <b-button class="col-md-4 button" size="sm" @click="revokeCertificate(row.item.id)">Revoke certificate</b-button>
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

    .table {
        padding-left: 15%;
        padding-right: 5%;
        padding-top: 5%;
        padding-bottom: 5%
    }

    .button {
        margin-right: 5em;
    }

</style>