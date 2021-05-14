<template>
  <div class="dataFilling__addStore">
    <div :class="ShowAgregar" class="dataFilling__addStore-contAddProduct">
      <div class="dataFilling__addStore-addProduct">
        <button @click="display2 =! display2">x</button>

        <div class="dataFilling__addProduct-main">
          <input type="text" class="dataFilling__addProduct-title" name="addProductTitle" id="addProductTitle" maxlength="77"
              placeholder="Titulo">
          <div class="dataFilling__addProduct-main-data">
            <textarea name="addProductDescription" id="addProductDescription" cols="30" rows="10" maxlength="1200"
              placeholder="Descripcion"></textarea>

              <div class="dataFilling__addProduct-contImageUpload">
                <label for="addProductImage1">Imagen Principal</label>
                <input class="dataFilling__addProduct-ImageUpload1"  type="file" name="addProductImage1" id="addProductImage1">
              </div>
          </div>
        </div>
      </div>
    </div>
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

      <button @click="display1 =! display1" class="dataFilling__addStore-trigger1">Productos</button>

      <div :class="ShowProductos" class="dataFilling__addStore-contTrigger2">
        <button class="dataFilling__addStore-trigger2" @click="display2 = ! display2">Agregar</button>

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
    display1: false,
    display2: false,
    
  }
},

computed: {
  ShowProductos(){
    return{
      display1: this.display1
    }
  },

  ShowAgregar(){
    return{
      display2: this.display2
    }
  }
}
}
</script>


<style lang="scss" src="../../scss/main.scss"></style>