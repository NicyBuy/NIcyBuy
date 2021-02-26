<template>
  <div class="foodStore__Product">
    <div class="foodStore__Product-img"><img :src="img" alt="imagen de producto"></div>

    <div class="foodStore__Product-info">
      <div class="foodStore__Product-title">{{title}}</div>

      <div class="foodStore__Product-description">{{description}}</div>

      <div class="foodStore__Product-see-more">
        <button>ver mas</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        description: String
    }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>