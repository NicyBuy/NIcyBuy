<template>
  <div class="contProducts">
    <div class="Products">
      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />
    </div>

    <div class="ver-mas"><button>ver mas</button></div>
  </div>
</template>

<script>
import cProduct from './cProduct.vue'
import img1 from '../../../assets/Stores/ThriftyShop/products/1.jpg'
export default {
  components: {
    cProduct
  },

  data() {
    return {
      img1: img1,
    }
  }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>