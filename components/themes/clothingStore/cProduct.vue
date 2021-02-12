<template>
  <div class="cProduct">
      <div class="clothingStore__Product">
          <div class="contImg">
              <img :src="img" alt="">
          </div>
          <div class="name">
              {{name}}
          </div>

          <div class="price">
              ${{price}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        img: String,
        name: String,
        price: Number,
    }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss">

</style>