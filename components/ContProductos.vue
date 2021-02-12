<template >
  <div class="contProduct">
    <div @click="filterPrice2">filtra</div>
    <div class="contProducs_content">
      <producto
        :nombre="fewProds2[index].title"
        :precio="fewProds2[index].price"
        v-for="(num, index) in fewProds2"
        :key="index"
      ></producto>
    </div>
    <p @click="moreProds2" class="index_seeMore">ver mas</p>
  </div>
</template>
<script>
import Producto from "./Producto.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: { Producto },
  data() {
    return {
      indexParcialComments: 0,
      fewProds2: [],
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