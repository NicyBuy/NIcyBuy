<template>
  <div class="cProduct">
    <div class="clothingStore__Product">
      <div class="contImg">
        <img :src="img100" alt="">
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
        img100: String,
        name: String,
        price: Number,
    }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss">

</style>