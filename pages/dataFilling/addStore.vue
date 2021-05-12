<template>
  <div class="dataFilling__addStore">
    <cNav />
    <!-- Main Container -->
    <div class="dataFilling__addStore-main">
      <!-- Name of the Store -->
      <input type="tel" class="dataFilling__addStore-name" placeholder="Nombre de la Tienda" name="addStoreName"
        id="addStoreName">
      <!-- Name of the owner of the Store -->
      <div class="dataFilling__addStore-owner">
        <span>De:</span> <input type="text" class="dataFilling__addStore-owner-input" placeholder="Propietario"
          name="addStoreOwner" id="addStoreOwner">
      </div>

      <button @click="display =! display" class="dataFilling__addStore-trigger1">Productos</button>

      <div :class="Show" class="dataFilling__addStore-contTrigger2">
        <button class="dataFilling__addStore-trigger2">Agregar</button>

        <button class="dataFilling__addStore-trigger2">Editar</button>
      </div>

      <button class="dataFilling__addStore-trigger1">Informacion</button>

      <button class="dataFilling__addStore-trigger1">Contacto</button>
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
    //img
    Logo,

    //vars
    display: false,
  }
},

computed: {
  Show(){
    return{
      display: this.display
    }
  }
}
}
</script>


<style lang="scss" src="../../scss/main.scss"></style>