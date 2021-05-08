<template>
  <div class="dataFilling__addStore">
    <cNav />
    <div class="dataFilling__addStore-main">
      <input type="tel" class="dataFilling__addStore-name" placeholder="Nombre de la Tienda" name="addStoreName"
        id="addStoreName">
      <div class="dataFilling__addStore-owner">
        <span>De:</span> <input type="text" class="dataFilling__addStore-owner-input" placeholder="Propietario" name="addStoreOwner" id="addStoreOwner">
      </div>


      <button class="dataFilling__addStore-trigger1">Productos</button>
      <button class="dataFilling__addStore-trigger1">Productos</button>
      <button class="dataFilling__addStore-trigger1">Productos</button>
    </div>
  </div>

</template>

<script>
//componets
import cNav from "../../components/dataFilling/cNav.vue";

//img
import Logo from "../../assets/dataFillingAssets/koos PNG.png"
export default {
 layout: "dataFillingLayout",

components: {
  cNav,
},

data(){
  return {
    Logo,
  }

}
}
</script>


<style lang="scss" src="../../scss/main.scss"></style>