import axios from 'axios';
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
    const res = await fetch('https://apikoos.herokuapp.com/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      //mode:'no-cors',
      body: JSON.stringify({
        username: payload.email,
        password: payload.password
      })
    })
    const resDB = await res
    console.log(resDB)
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
