<template>
<div class="dataFilling__Home">
  <!-- <div :class="ShowPopAddStore" class="dataFIlling__contPopAddStore">
  <div class="dataFIlling__popAddStore"></div>
</div> -->

<cNav/>

  <div class="dataFilling__main">
    <div class="dataFilling__logo">
      <img :src="Logo" alt="">
    </div>

    <div class="dataFilling__search">
      <input type="text" class="dataFilling__search-bar" placeholder="Buscar" name="dataFillingSearch" id="dataFillingSearch">
    </div>

    <div class="dataFilling__categories">
      <h2>Categories</h2>
      <div class="dataFilling__cont-categories">
        <button class="dataFilling__categories-category">
          Category
        </button>

        <button class="dataFilling__categories-category">
          Category
        </button>

        <button class="dataFilling__categories-category">
          Category
        </button>

        <button class="dataFilling__categories-category">
          Category
        </button>
        
      </div>

    </div>
    <div class="dataFilling__stores">
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      <button class="dataFilling__store">
        Tienda de Ropa
      </button>
      
    </div>
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

