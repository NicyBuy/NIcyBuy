<template>
<div class="productView">
  <c-nav />

  <div class="preview-off">
    <div class="cont-x">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </div>
    <div class="preview-off__contImg">
      <img :src="preview[value]" alt="">
    </div>
    <div class="preview-off__options">
      <div class="preview-off__contOptions">
        <div @click="Preview1" class="preview-off__option"><img :src="preview[0]" alt=""></div>
        <div @click="Preview2" class="preview-off__option"><img :src="preview[1]" alt=""></div>
        <div @click="Preview3" class="preview-off__option"><img :src="preview[2]" alt=""></div>
        <div @click="Preview4" class="preview-off__option"><img :src="preview[3]" alt=""></div>
      </div>
    </div>
  </div>

  <div class="productView__contImg">
    <img :src="product" alt="">
  </div>

  <main>
    <div class="contInfo">
      <div class="product__Name">
        Camisa color azulito para hombre talla M
      </div>

      <div class="product__Description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus modi
        voluptate eaque. Ipsa enim dolores doloribus accusantium dolore iure atque qui ad placeat sit.
      </div>

      <div class="size">Talla: <span>M</span></div>

      <div class="contPreview">
        <div class="preview">
          <img :src="product" alt="">
        </div>


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

  <c-recomended />
</div>
</template>

<script>
//components
import cNav from '../../../themes/ClothingStore/components/cNav.vue';
import CRecomended from '../../../themes/ClothingStore/components/cRecomended';
//img
import product from '../../../assets/Stores/ThriftyShop/products/2.jpg';
import product2 from '../../../assets/Stores/ThriftyShop/products/3.jpg';
import product3 from '../../../assets/Stores/ThriftyShop/products/4.jpg';
import product4 from '../../../assets/Stores/ThriftyShop/products/5.jpg';



export default {
  components: {
    cNav,
    CRecomended,
  },

  data() {
    return {
      product: product,
      preview: [product, product2, product3, product4],
      value: 0
    }
  },

  methods:{
     Preview1(){
      this.value = 0
    },
    Preview2(){
      this.value = 1
    },
    Preview3(){
      this.value = 2
    },
    Preview4(){
      this.value = 3
    }
  },

  mounted() {
    const previewToggle = () => {

      const preview = document.querySelector(".preview");
      const previewOff = document.querySelector(".preview-off");
      const exit = document.querySelector(".cont-x");

      preview.addEventListener("click", () => {
        console.log("se activo preview");
        previewOff.classList.add("preview-on");
      })

      exit.addEventListener("click", () => {
        console.log("se activo preview");
        previewOff.classList.remove("preview-on");
      })
    }

    previewToggle();
  }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>