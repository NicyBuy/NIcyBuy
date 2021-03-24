<template>
<div class="clothingStore__about">
  <cNav />

  <div class="clothingStore__contBanner">
    <img :src="img" alt="">
  </div>

  <div class="clothingStore__BG">
    <div class="-white-space"></div>

    <div class="clothingStore__contH1">
      <h1 class="clothingStore__h1">QUE SOMOS?</h1>
    </div>

    <div class="-white-space"></div>

    <div class="clothingStore__conTxt-normal">
      <div class="clothingStore__txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aperiam fugiat cum quo. Autem consequatur possimus
        nulla modi cum porro maxime eaque tempora esse quaerat eligendi voluptatum dolore provident, dicta doloribus
        delectus totam officia aliquid laborum quasi deleniti quos impedit? Praesentium ut exercitationem quaerat,
        sapiente totam placeat est asperiores ullam.
      </div>
    </div>

    <div class="-white-space"></div>

    <div class="clothingStore__contImg">
      <img :src="Friends" alt="">
    </div>

    <div class="-white-space"></div>

    <div class="clothingStore__conTxt-normal">
      <div class="clothingStore__txt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aperiam fugiat cum quo. Autem consequatur possimus
        nulla modi cum porro maxime eaque tempora esse quaerat eligendi voluptatum dolore provident, dicta doloribus
        delectus totam officia aliquid laborum quasi deleniti quos impedit? Praesentium ut exercitationem quaerat,
        sapiente totam placeat est asperiores ullam.
      </div>
    </div>

    <div class="-white-space"></div>
  </div>

  <c-footer/>

</div>
  
</template>

<script>
//components
import cNav from '../../../themes/ClothingStore/components/cNav.vue';

//img
import img from '../../../assets/Stores/ThriftyShop/img/Logo.jpeg';
import Friends from '../../../assets/Stores/ThriftyShop/img/Friends.jpg'
import CFooter from '../../../themes/ClothingStore/components/cFooter.vue';

export default {
    components: {
        cNav, img, Friends,
        CFooter
    },

    data(){
        return{
            img: img,
            Friends: Friends
        }
    }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>