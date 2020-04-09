<template>
    <div>
        <form class="main-form">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label class="center">Name</label>
                        <div>
                            <input type="text" readonly id="inputName" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="form-group">
                        <label class="center">Surname</label>
                        <div>
                            <input type="text" readonly id="inputSurname" class="form-control">
                        </div>
                    </div>
                </div>
            </div>

            
            
            <div class="form-group">
                <label>Email</label>
                <div>
                    <input type="text" readonly id="staticEmail" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label>Organisation</label>
                <div>
                    <input type="text" readonly id="inputOrganisation" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label>Date</label>
                <div>
                    <input type="date" id="inputDateStart" class="form-control">
                </div>
            </div>


            <div>
                <label class="typo__label">Key usage extension</label>
                <multiselect v-model="value" placeholder="Pick an extension" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>




            <div class="form-group">
                <label>Certificate signer</label>
                <div>
                    <select id="signers" class="form-control">
                        <option value="rootCertificate">Root certificate</option>
                        <option value="intermediateCertificate">Intermediate certificate</option>
                    </select>
                </div>
            </div>


            <div class="form-group">
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

<style scoped>
    .main-form {
        width: 500px;
        margin: auto;
    }
</style>