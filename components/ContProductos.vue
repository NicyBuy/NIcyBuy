<template >
  <div class="contProduct">
    <div @click="filter1" >filtra</div>
    <div class="contProducs_content">
      <producto
        :nombre="fewProds[index].title"
        :precio="fewProds[index].price"
        v-for="(num, index) in fewProds"
        :key="index"
      ></producto>
    </div>
    <p @click="seeMore" class="index_seeMore">ver mas</p>
  </div>
</template>
<script>
import Producto from "./Producto.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: { Producto },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      allproductsStore: (state) => state.products.products,
      fewProds: (state) => state.products.fewProds,
    }),
  },
  methods: {
    ...mapActions({
      getpro: "products/getProducts",
      ...mapMutations({
        seeMore: "products/moreProds",
        filter1: "products/filter1",
      }),
    }),
  },
  created() {
    this.getpro(); //console.log($context.app.data[0]);
  },
  mounted() {
    //this.allproducts = this.allproductsStore;
  },
};
</script>