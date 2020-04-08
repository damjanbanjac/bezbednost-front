<template>
    <div>

        <form>
            <div class="form-group row">
                <label>Name</label>
                <div class="col-sm-10">
                    <input type="text" readonly id="inputName">
                </div>
            </div>

            <div class="form-group row">
                <label>Surname</label>
                <div class="col-sm-10">
                    <input type="text" readonly id="inputSurname">
                </div>
            </div>
            
            <div class="form-group row">
                <label>Email</label>
                <div class="col-sm-10">
                    <input type="text" readonly id="staticEmail">
                </div>
            </div>

            <div class="form-group row">
                <label>Organisation</label>
                <div class="col-sm-10">
                    <input type="text" readonly id="inputOrganisation">
                </div>
            </div>

            <div class="form-group row">
                <label>Date</label>
                <div class="col-sm-10">
                    <input type="date" id="inputDateStart">
                </div>
            </div>

            <div class="form-group row">
                <label>Date</label>
                <div class="col-sm-10">
                    <input type="date" id="inputDateEnd">
                </div>
            </div>

            <div>
                <label class="typo__label">Key usage extension</label>
                <multiselect v-model="value" placeholder="Pick an extension" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>




            <div class="form-group row">
                <label>Certificate signer</label>
                <div class="col-sm-10">
                    <select id="signers">
                        <option value="rootCertificate">Root certificate</option>
                        <option value="intermediateCertificate">Intermediate certificate</option>
                    </select>
                </div>
            </div>


            <div class="form-group row">
                <label>Intermediate certificate</label>
                <div class="col-sm-10">
                    <select id="intermediateSigners">
                        
                    </select>
                </div>
            </div>

        </form>

    </div>
</template>


<script>
import Multiselect from 'vue-multiselect'
export default {
    name: "Admin",
    components: {
        Multiselect
    },
    data () {
    return {
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
    }
  }
    
}
</script>