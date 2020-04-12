<template>
<div>
    <div>
        <header>
            <b-nav class="tabs" align="center" tabs>
                <router-link to="/adminForm" tag="b-nav-item">Admin</router-link>
                <router-link to="/userForm" tag="b-nav-item">User</router-link>
                <router-link to="/certList" tag="b-nav-item">Certification list</router-link>
            </b-nav>
        </header>
    </div>
</div>
</template>

<script>

export default {
  components: {
  } ,
    
}
</script>

<style>

body {
    background-image: url('https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.15752-9/92508567_329131491396719_1383768630897934336_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_eui2=AeGhY_iSoi11DvpYADCLlt3JsyETSsLCfwazIRNKwsJ_BpJy5UVfVMnHTGprr_NC79o&_nc_ohc=D8ApdCmPD1gAX98-_vh&_nc_ht=scontent.fbeg3-1.fna&oh=30c29865774403fe1ab91854054d8ca5&oe=5EB6B291');
    background-repeat: no-repeat;
}

header {
    background: whitesmoke;
    
}

.tabs {
    height: 60px;
    line-height: 40px;
    
    font-size: 20px;
}

</style>