<template>
<div class="home">
  <cNav />

  <div class="foodStore__main">
    <div class="foodStore__Cover">
      <img :src="Cover" alt="">
    </div>

    <div class="foodStore__cont-featured">
      <div class="--white-space"></div>

      <div class="foodStore__featured">
        <div class="foodStore__title">
          MEJORES RECETAS
        </div>

        <div class="foodStore__featured-products"></div>
      </div>
    </div>

    <div class="--whte-space"></div>

    <div class="foodStore__cont-categories">
      <div class="foodStore__title">
        CATEGORIES
      </div>

      <div class="white-space"></div>

      <div class="foodStore__categories">
        <button>CATEGORY</button>
        <button>CATEGORY</button>
        <button>CATEGORY</button>
        <button>CATEGORY</button>
      </div>
    </div>

    <c-cont-products />

    <cFooter />

  </div>
</div>
</template>

<script>
//components
import cNav from '../../../themes/FoodStore/components/cNav';

//img
import Cover from '../../../themes/FoodStore/assets/img/Logo.jpg';
import CContProducts from '../../../themes/FoodStore/components/cContProducts.vue';
import cFooter from '../../../themes/FoodStore/components/cFooter.vue';

export default {
  components: {
    cNav,
    CContProducts,
    cFooter
  },

  data() {
    return {
      Cover: Cover
    }
  }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>