<template>
<div class="productView">
     <c-nav/>
      <div class="nav-space"></div>
     <div class="productView__contImg">
         <img :src="product" alt="">
     </div>

     <main>
         <div class="contInfo">
             <div class="product__Name">Camisa color azulito para hombre talla M</div>
             <div class="product__Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus modi voluptate eaque. Ipsa enim dolores doloribus accusantium dolore iure atque qui ad placeat sit.</div>
             <div class="size">Talla: <span>M</span></div>

             <div class="contPreview">
                 <div class="preview"></div>
                 <div class="preview"></div>
                 <div class="preview"></div>
                 <div class="preview"></div>
             </div>

             <div class="contPrice">
                 <div class="price">
                     $10.99
                 </div>

                 <button>
                     COMPRAR
                 </button>
             </div>
         </div>
     </main>

</div>
</template>

<script>
import cNav from '../../../components/themes/clothingStore/cNav.vue'
import product from '../../../assets/Stores/ThriftyShop/products/2.jpg';
export default {
  components: { cNav, },

  data(){
      return{
          product: product
      }
  }

}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>