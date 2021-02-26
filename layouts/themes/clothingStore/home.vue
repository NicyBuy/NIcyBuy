<template>
<div class="home">
  <cNav />

  <div class="nav-space"></div>

  <main class="clothingStore__main">
    <div class="contImg">
      <img :src="Banner" alt="">
    </div>

    <div class="Featured">
      <div class="Title">LO MAS NUEVO</div>

      <div class="contFeatured">
      </div>
    </div>

    <div class="-white-space"></div>

    <div class="Categories">
      <div class="Title">CATEGORIAS</div>

      <div class="contCategories">
        <button>Categoria</button>
        <button>Categoria</button>
        <button>Categoria</button>
        <button>Categoria</button>
      </div>
    </div>

    <div class="-white-space"></div>

    <div class="Sizes">
      <div class="Title">Tallas</div>

      <div class="contSizes">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
      </div>
    </div>

    <contProducts />
  </main>
  <cFooter />
</div>
</template>

<script>
import cFooter from '../../../themes/ClothingStore/components/cFooter.vue';
import cNav from '../../../themes/ClothingStore/components/cNav.vue';
import cProduct from '../../../themes/ClothingStore/components/cProduct.vue';
import contProducts from '../../../themes/ClothingStore/components/contProducts';
import Banner from '../../../assets/Stores/ThriftyShop/img/Logo.jpeg';

export default {
  components: {
    cFooter,
    cNav,
    cProduct,
    contProducts,
  },

  data() {
    return {
      Banner: Banner,
    }
  }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>

