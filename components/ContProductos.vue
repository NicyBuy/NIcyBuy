<template >
  <div class="contProduct">
    <producto
      :nombre="fewProds[index].title"
      :precio="fewProds[index].price"
      v-for="(num, index) in fewProds"
      :key="index"
    ></producto>
    
  </div>
</template>
<script>
import Producto from "./Producto.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: { Producto },
  computed: {
    ...mapState({
      allproducts: (state) => state.products.products,
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
};
</script>