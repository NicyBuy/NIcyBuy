<template>
  <div class="cRecomended">
     <div class="Recomended">

    <div class="Title">
      Recomendados
    </div>

    <div class="white-space"></div>
    <div class="Recomended__Products">

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

      <cProduct :img="img1" name="Traje amarillo y azul para mujer" price=10.99 />

    </div>

    <div class="ver-mas"><button>ver mas</button></div>
    <div class="white-space"></div>
  </div>
  <c-footer/>
  </div>
 
</template>

<script>
import cProduct from './cProduct.vue'
import img1 from '../../../assets/Stores/ThriftyShop/products/1.jpg'
import CFooter from './cFooter.vue'
export default {
  components: { cProduct, CFooter },

  data(){
    return{
      img1: img1,
    }
    
  }

}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>

