<template>
  <div class="contProducts">
    <div @click="filter1" >Filter price menor 20</div>
    <div class="Products">
      <!-- <cProduct :img="img1" name="Traje amarillo y azul para mujer" :price ="precio"  /> -->
       <cProduct
        :img="img1"
        :name="fewProds[index].title"
        :price="fewProds[index].price"
        v-for="(num, index) in fewProds"
        :key="index"
      ></cProduct>
    </div>

    <div @click="seeMore" class="ver-mas"><button>ver mas</button></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import cProduct from './cProduct.vue'
import img1 from '../../../assets/Stores/ThriftyShop/products/1.jpg'
export default {
  components: {
    cProduct
  },

  data() {
    return {
      img1: img1,
      precio: 80.99
    }
  },
  computed: {
    ...mapState({
      allproductsStore: (state) => state.stores.products,
      fewProds: (state) => state.stores.fewProds,
    }),
  },
  methods: {
    ...mapActions({
      getpro: "stores/getStoreProducts",
      ...mapMutations({
        seeMore: "stores/moreProds",
        filter1: "stores/filter1",
      }),
    }),
  },
  created() {
    this.getpro(); //console.log($context.app.data[0]);
  },
  mounted() {
    //this.allproducts = this.allproductsStore;
  },
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>