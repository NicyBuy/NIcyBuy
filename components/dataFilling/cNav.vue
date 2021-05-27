<template>
<div class="cNav__dataFIlling">
   <div :class="ShowPopAddStore" class="dataFIlling__contPopAddStore">
  <div class="dataFIlling__popAddStore">
    <div class="dataFilling__popAddStore-main">
      <input class="dataFIlling__popAddStore-form" placeholder="Nombre de Tienda" type="text">
      <input class="dataFIlling__popAddStore-form dataFIlling__popAddStore-owner" placeholder="Propietario" type="text">
      <input class="dataFIlling__popAddStore-form dataFIlling__popAddStore-smallForm" placeholder="Correo electronico" type="text">
      <input class="dataFIlling__popAddStore-form dataFIlling__popAddStore-smallForm" placeholder="Telefono" type="text">

      <div class="dataFilling__popAddStore-buttons">
        <button @click="displayPopAddStore =! displayPopAddStore" class="dataFilling__popAddStore-button" >cancelar</button>
        <nuxt-link class="dataFilling__popAddStore-button" to = "../../dataFilling/addStore">aceptar</nuxt-link>
      </div>
    </div>
  </div>
</div>

  <nav class="dataFilling__nav">
     <div class="dataFilling__cont-buttons">
    <button class="dataFilling__nav-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
    </button>
    <button @click="displayPopAddStore =! displayPopAddStore" to = "../../dataFilling/addStore" class="dataFilling__nav-button">
      +
    </button>
  </div>
  </nav>
 
  </div>
</template>

<script>
export default {

data(){
  return {
    displayPopAddStore: false
  }
},

computed: {
  ShowPopAddStore(){
    return{
      displayPopAddStore: this.displayPopAddStore
    }
  }
}
}
</script>

<style lang="scss" src="../../scss/main.scss"></style>