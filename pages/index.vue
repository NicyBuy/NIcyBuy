<template>
  <div class="container">
    <div class="index_baner">
      <img
        class="index_baner_img"
        src="https://www.yaconic.com/wp-content/uploads/2020/02/kitten-2288404_1920-1024x683.jpg"
        alt=""
      />
    </div>

    <div style="height: 150px; overflow: hidden; width: 100%">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-15.12,123.65 C377.65,163.13 495.60,100.95 511.96,147.32 L558.80,194.70 L0.00,150.00 Z"
          style="stroke: none; fill: #8b48e6"
        ></path>
      </svg>
    </div>

    <div class="index_slider">slider</div>

    <div style="height: 100px; overflow: hidden; width: 100%">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M-30.92,97.99 C329.11,-105.29 437.47,218.39 505.19,20.02 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: #8b48e6; height: 200%"
        ></path>
      </svg>
    </div>

    <div class="index_categorys">
      <h2 class="index_categorys_title">CATEGORIAS</h2>
      <div class="indez_category_content">
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
      </div>
    </div>

    <div class="index_maylike">
      <h2 class="index_maylike_title">Puede que te guste</h2>
      <cont-productos />
      
    </div>
  </div>
</template>

<script>

import ContProductos from "../components/ContProductos.vue";
import { mapState, mapMutations } from "vuex";

export default {

  layout: "themes/clothingStore/productView",

  components: { ContProductos },
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
    ...mapMutations({
      seeMore: "products/moreProds",
    }),
  },
  mounted() {
    //this.getCommetns();
  },
};
</script>


