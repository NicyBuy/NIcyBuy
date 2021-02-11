<template>
  <div class="container">
    <div class="index_baner">
      <img class="index_baner_img" src="https://www.yaconic.com/wp-content/uploads/2020/02/kitten-2288404_1920-1024x683.jpg" alt="">
    </div>
    <div class="index_slider">
      slider
    </div>
    <div class="index_categorys">
      <h2 class="index_categorys_title">CATEGORIAS</h2>
      <div class="indez_category_content">
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
        <div class="index_category_item">Nombre</div>
      </div>
    </div>


    <div class="index_maylike">
      <h2 class="index_maylike_title">Puede que te guste</h2>
      <cont-productos/>
      <p class="index_seeMore">ver mas</p>
    </div>

    
  </div>
</template>

<script>
import ContProductos from '../components/ContProductos.vue'
export default {
  components: { ContProductos },
  
}
</script>


