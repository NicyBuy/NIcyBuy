<template>
  <div class="login_container">
    <h1 class="login_title">Normal Protected</h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import axios from 'axios';

export default {

  //layout: "themes/clothingStore/productView",

  data() {
    return {
      usuario:{
        email: "",
      password: "",
      },
      
      token:""
    };
  },
  methods:{
      ...mapActions({
      getToken: "users/getTokenResponse",
      ...mapMutations({
        seeMore: "stores/moreProds",
        filter1: "stores/filter1",
      }),
    }),
  },
  mounted(){
      checkToken:{
        this.token = localStorage.getItem('tokensito')
        if(this.token){  
            console.log('ya inicio sesion')
        //alert('----YA inicio sesion---');
        //window.location.href = '/';
        }else{
            console.log('no hay token')
            window.location.href = '/logins';
        }
    }
  }
};
</script>


