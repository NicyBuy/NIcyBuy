<template>
  <div class="dataFilling__addStore">
    <!-- Add Product Container ---------------------------------------------- -->
    <div :class="ShowAgregar" class="dataFilling__addStore-contAddProduct">
      <div class="dataFilling__addStore-addProduct">
        <button @click="display2 =! display2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg></button>

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
    <!-- -----------------------z-------------------------------------------------------------------------------------------------- -->



    <cNav />
    <!-- Main Container -->
    <div class="dataFilling__addStore-main">

      <!-- Name of the Store -->
      <div class="dataFilling__addStore-contName">
        <div @click="displayName = true" :class="hideName"  class="dataFilling__addStore-name">
          Nombre de la Tienda
        </div>

        <div @click="displayName = false" :class="showExitName" class="dataFilling__addStore-exit-name"></div>

         <input type="tel" class="dataFilling__addStore-input-name" placeholder="Nombre de la Tienda" name="addStoreName"
        id="addStoreName">
      </div>
     
      <!-- Name of the owner of the Store -->
      <div class="dataFilling__addStore-owner">
        <span>De:</span> <input type="text" class="dataFilling__addStore-owner-input" placeholder="Propietario"
          name="addStoreOwner" id="addStoreOwner">
      </div>

      <div class="dataFilling__addStore-email">
        <span>Correo:</span> <input type="text" class="dataFilling__addStore-email-input" 
          name="addStoreEmail" id="addStoreEmail">
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

        <div class="dataFilling__addStore-contContactoEnvios">
          <h2>Informacion de Contacto</h2>
          <textarea name="dataFillingQueSomos" id="dataFillingQueSomos" cols="30" rows="10"></textarea>
          <h2>Informacion de Envios</h2>
          <textarea name="dataFillingQueSomos" id="dataFillingQueSomos" cols="30" rows="10"></textarea>
        </div>

        <div class="dataFilling__addStore-contRS">
          <h2>Redes Sociales</h2>
          <label for="facebook">Facebook</label>
          <br>
          <input type="text" name="facebook" id="facebook">
          <br>
          <label for="messenger">Messenger</label>
          <br>
          <input type="text" name="messenger" id="messenger">
          <br>
          <label for="instagram">Instagram</label>
          <br>
          <input type="text" name="instagram" id="instagram">
          <br>
          <label for="whatsapp">Whatsapp</label>
          <br>
          <input type="text" name="whatsapp" id="watsapp">
        </div>

      </div>
      <!-- ------------------------------------------------------------------------------------------------- -->
    </div>
    <nuxt-link to="../../dataFilling" class="dataFilling__addStore-done"><svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
      </svg></nuxt-link>

    <nuxt-link to="../../dataFilling" class="dataFilling__addStore-exit"><svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
        </svg></nuxt-link>
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

    //name
    displayName: false,
    displayExitName: true,
    
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
  },

  hideName(){
    return{
      displayName: this.displayName,
      
    } 
  },

  showExitName(){
    if(this.displayName == true){
    return{
      displayExitName: this.displayExitName
    }
  }
},
}
}
</script>


<style lang="scss" src="../../scss/main.scss"></style>