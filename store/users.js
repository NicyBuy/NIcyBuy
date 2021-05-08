import axios from 'axios';
import config from '@nuxtjs/axios';

export const state = () => ({
  products: [],
  fewProds: [],
  index_parcial_products: 0,
  layer: true,
})
export const mutations = {
  filter1(state, {
    commit
  }) {
    const arrayer = [];
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].price <= 20) {
        arrayer.push(state.products[i]);
      }
    }
    state.products = arrayer;
    state.fewProds = [];
    state.index_parcial_products = 0;
    let limit = state.index_parcial_products;
    for (let i = state.index_parcial_products; i < limit + 2; i++) {
      if (state.index_parcial_products < state.products.length) {
        state.fewProds.push(state.products[i]);
        state.index_parcial_products++;
      } else {
        console.log('no hay mas por mostrar desde adentro');
      }
    }
  },
  moreProds(state) {
    for (let i = state.index_parcial_products; i < limit + 2; i++) {
      if (state.index_parcial_products < state.products.length) {
        state.fewProds.push(state.products[i]);
        state.index_parcial_products++;
      } else {
        console.log('no hay mas por mostrar desde adentro');
      }
    }
    console.log(state.fewProds);
  },
  setTokenResponse(state, payload) {
    localStorage.setItem('tokensito', respuesta.data.token);
    if (respuesta.data.valid == false) {
      alert('datos no validos parce');
      localStorage.clear();
      //this.email = "";
      //this.password = "";
    } else {
      localStorage.setItem('tokensito', res.data.token);
      //window.location.href = '/newprod';
      console.log('Inicio de sesion correctamente')
    }
  },
  setProds(state, payload) {
    state.products = payload;
    let limit = state.index_parcial_products;
    for (let i = state.index_parcial_products; i < limit + 2; i++) {
      if (state.index_parcial_products < state.products.length) {
        state.fewProds.push(state.products[i]);
        state.index_parcial_products++;
      } else {
        console.log('no hay mas por mostrar desde adentro');
      }
    }
  }
}
export const actions = {
  async getTokenResponse({
    commit
  }, payload) {
    console.log(payload.email);
    console.log(payload.password);
    await axios({
      method: 'POST',
      url:   'https://apikoos.herokuapp.com/api/signin',
      data: {
        username: payload.email,
        password: payload.password,
      },
      headers: {
        'Access-Control-Allow-Origin': 'https://koosapp.herokuapp.com'
      },

      withCredentials: 'include'
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
  },
  async getStoreProducts({
    commit
  }) {
    try {
      const respuesta = await axios.get(
        "https://apikoos.herokuapp.com/api/stores/getstore"
      );
      console.log(respuesta.data[0].products);
      commit('setProds', respuesta.data[0].products);
      console.log("no shit");
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  },
}
