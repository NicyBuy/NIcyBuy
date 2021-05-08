<template>
  <div class="login_container">
    <h1 class="login_title">Log it</h1>

    <h3 class="login_subtitle">Email</h3>
    <input class="login_textfield" type="text" required v-model="email" />

    <h3 class="login_subtitle">Password</h3>
    <input class="login_textfield" type="text" required v-model="password" />

    <button @click="checkLogin" class="login_submitButton">Submit</button>

    <h3 class="login_registerText">
      Don't you have an account? Register for free asshole
    </h3>
    <nuxt-link to="/logins/register">
      <h3 class="login_registerButton">Register</h3>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import axios from 'axios';

export default {

  //layout: "themes/clothingStore/productView",

  data() {
    return {
      email: "",
      password: "",
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

    async checkLogin(){
        console.log('wenas wenas como estamos');
    console.log(this.email);
    console.log(this.password);
    console.log(typeof(Number(this.password) ));

     await axios({
        method: 'POST',
        url: 'https://apikoos.herokuapp.com/api/signin',
        data: {
            username: this.email,
            password: this.password,
        },
        headers: {  
                    'Access-Control-Allow-Origin': 'https://koosapp.herokuapp.com'},
    }).then(res => {
        console.log(res.data);
        console.log(res.data.token);
        console.log(res.data.valid);
        localStorage.setItem('tokensito', res.data.token);
        if (res.data.valid == false) {
            alert('datos no validos parce');
            localStorage.clear();
            //username.value = "";
            //contra.value = "";
        } else {
            localStorage.setItem('tokensito', res.data.token);
            //window.location.href = '/newprod';
            console.log('inicio de sesion correctamente')
        }
    }).
    catch(err => console.log(err));
     

    /*const res = await fetch('https://apikoos.herokuapp.com/api/signin', {
        method: 'POST',
        headers:{'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': 'http://localhost:3000'
                },
        //mode:'no-cors',
        body: JSON.stringify( {
            username: this.email,
            password: this.password
        })
    })
    const resDB =  await res
    console.log(resDB.data)
    //await this.$router.push('/')*/

    }
  },
  mounted(){
      checkToken:{
        this.token = localStorage.getItem('tokensito')
        if(this.token){  
        alert('----YA inicio sesion---');
        //window.location.href = '/';
        }else{
            console.log('no hay token')
        }
    }
  }
};
</script>


