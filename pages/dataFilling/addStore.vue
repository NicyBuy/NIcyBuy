<template>
  <div class="dataFilling__addStore">
    <!-- Add Product Container ---------------------------------------------- -->
    <div :class="ShowAgregar" class="dataFilling__addStore-contAddProduct">
      <div class="dataFilling__addStore-addProduct">
        <button @click="display2 =! display2">x</button>

        <div class="dataFilling__addProduct-main">
          <input type="text" class="dataFilling__addProduct-title" name="addProductTitle" id="addProductTitle"
            maxlength="77" placeholder="Titulo">

          <div class="dataFilling__addProduct-main-data">
            <textarea name="addProductDescription" id="addProductDescription" cols="30" rows="10" maxlength="1200"
              placeholder="Descripcion"></textarea>

            <div class="dataFilling__addProduct-contImageUpload">
              <input class="dataFilling__addProduct-ImageUpload1" type="file" name="addProductImage1"
                id="addProductImage1">
            </div>


          </div>
        </div>
        <input class="dataFilling__addStore-addProduct-summit" type="submit" @click="display2 =! display2"
          value="aceptar">
      </div>
    </div>
    <!-- ------------------------------------------------------------------------------------------------------------------------- -->



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

      <!-- Productos----------------------------------------------------------------------------- -->
      <button @click="display1 =! display1" class="dataFilling__addStore-trigger1">Productos</button>

      <div :class="ShowProductosOptions" class="dataFilling__addStore-contTrigger2">
        <button class="dataFilling__addStore-trigger2" @click="display2 = ! display2">Agregar</button>

        <button @click="display3 =! display3" class="dataFilling__addStore-trigger2">Editar</button>

        <div :class="ShowEditar" class="dataFilling__addStore-contEditProductos"></div>
      </div>
      <!-- ----------------------------------------------------------------------------------------------- -->

      <!-- Informacion ------------------------------------------------------------------------------------ -->
      <button @click="display4 =! display4" class="dataFilling__addStore-trigger1">Informacion</button>

      <div :class="ShowInformacion" class="dataFilling__addStore-contInformacion">
        <h2>Que somos?</h2>
        <textarea name="dataFillingQueSomos" id="dataFillingQueSomos" cols="30" rows="10"></textarea>
        <textarea name="dataFillingQueSomos" id="dataFillingQueSomos" cols="30" rows="10"></textarea>
        <input type="file" name="imgInformacion" id="imgInformacion">
      </div>
      <!-- ------------------------------------------------------------------------------------------------- -->

      <!-- Contacto ---------------------------------------------------------------------------------------- -->
      <button @click="display5 =! display5" class="dataFilling__addStore-trigger1">Contacto</button>

      <div :class="ShowContacto" class="dataFilling__addStore-contContacto">
        <h2>Contacto</h2>
      </div>
      <!-- ------------------------------------------------------------------------------------------------- -->
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
    display3: false,
    display4: false,
    display5: false,
    
  }
},

computed: {
  ShowProductosOptions(){
    return{
      display1: this.display1
    }
  },

  ShowAgregar(){
    return{
      display2: this.display2
    }
  },

  ShowEditar(){
    return{
      display3: this.display3
    }
  },

  ShowInformacion(){
    return{
      display4: this.display4
    }
  },

  ShowContacto(){
    return{
      display5: this.display5
    }
  }
}
}
</script>


<style lang="scss" src="../../scss/main.scss"></style>