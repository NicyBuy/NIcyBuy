<template>
  <div class="productView">
    <c-nav />

    <div class="foodStore__main">
      <div class="foodStore__pV-contCover">
        <div class="foodStore__pV-cover">
          <img :src="Product" alt="">
        </div>

        <button></button>
      </div>

      <div class="foodStore__pV-contInfo">
        <div class="--white-space"></div>

        <div class="foodStore__pV-title">
          {{title}}
        </div>

        <div class="-white-space"></div>

        <div class="foodStore__pV-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, voluptates adipisci cum dolorum explicabo
          id! Minima quos itaque maiores, libero architecto sunt explicabo nemo porro beatae dignissimos totam nihil
          consequuntur saepe similique non eveniet dolores quo amet ipsam enim? Nemo obcaecati quis delectus omnis
          repudiandae distinctio iusto quisquam magnam minima.
        </div>

        <div class="-white-space"></div>

        <div class="foodStore__pV-contImageView">
          <div class="foodStore__pV-imageView">
            <img :src="Product" alt="">
          </div>
        </div>

        <div class="foodStore__pV-price">
          $10.99
        </div>

        <div class="-white-space"></div>

        <div class="-divider">
          <div class="line"></div>
        </div>

        <div class="-white-space"></div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import cNav from '../../../themes/FoodStore/components/cNav.vue'

//img
import Product from '../../../themes/FoodStore/assets/products/4.jpg'

export default {
  components: {
    cNav
  },

  data() {
    return {
      Product: Product,
      title: "Alfajores para la familia riquisimos chaval equisde toma el tuyo"
    }
  }

}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>