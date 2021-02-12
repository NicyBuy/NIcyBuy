import axios from 'axios';
export const state = () => ({
  products: [],
  fewProds: [],
  indexParcialComments: 0,
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
    state.indexParcialComments = 0;
    let limit = state.indexParcialComments;
    for (let i = state.indexParcialComments; i < limit + 2; i++) {
      if (state.indexParcialComments < state.products.length) {
        state.fewProds.push(state.products[i]);
        state.indexParcialComments++;
      } else {
        console.log('no hay mas por mostrar desde adentro');
      }
    }

  },
  moreProds(state) {
    let limit = state.indexParcialComments;
    for (let i = state.indexParcialComments; i < limit + 2; i++) {
      if (state.indexParcialComments < state.products.length) {
        state.fewProds.push(state.products[i]);
        state.indexParcialComments++;
      } else {
        console.log('no hay mas por mostrar desde adentro');
      }
    }
    console.log(state.fewProds);
  },
  setProds(state, payload) {
    state.products = payload;
    let limit = state.indexParcialComments;
    for (let i = state.indexParcialComments; i < limit + 2; i++) {
      if (state.indexParcialComments < state.products.length) {
        state.fewProds.push(state.products[i]);
        state.indexParcialComments++;
      } else {
        console.log('no hay mas por mostrar desde adentro');
      }
    }
  }
}
export const actions = {
  async getInfo({
    commit
  }) {
    try {
      const respuesta = await axios.get('https://nicybuy-backend.herokuapp.com/getproducts');
      console.log(respuesta.data);
      commit('moreProds', respuesta.data);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  },
  async getProducts({
    commit
  }) {
    try {
      const respuesta = await axios.get(
        "https://nicybuy-backend.herokuapp.com/getproducts"
      );
      console.log(respuesta.data);
      commit('setProds', respuesta.data);
      console.log("no shit");
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  },
}
