<template>
  <div class="foodStore__contProducts">
    <div class="foodStore__Products">
        <cProduct :img="img" title="Alfajores con un toque de amor y ternura" description="Alfajores riquisimos hechos con el amor de mama para todos"/>
        <cProduct :img="img" title="Alfajores con un toque de amor y ternura" description="Alfajores riquisimos hechos con el amor de mama para todos"/>
        <cProduct :img="img" title="Alfajores con un toque de amor y ternura" description="Alfajores riquisimos hechos con el amor de mama para todos"/>
        <cProduct :img="img" title="Alfajores con un toque de amor y ternura" description="Alfajores riquisimos hechos con el amor de mama para todos"/>
    </div>

    <div class="foodStore__ver-mas"><button>ver mas</button></div>
    
  </div>
</template>

<script>
import cProduct from './cProduct.vue';
import img from '../assets/products/4.jpg';
export default {
  components: { cProduct },

  data(){
      return{
          img: img
      }
  }



}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>