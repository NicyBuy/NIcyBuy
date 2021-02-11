<template >
    <div class="productEspecific">
        <img class="productEspecific_img" src="https://dam.vanidades.com/wp-content/uploads/2020/04/%C2%A1Perritos-podr%C3%ADan-detectar-coronavirus.jpg" alt="">
        <div class="productEspecific_info">
            <p class="productEspecific_info_text">{{nombre}}</p>
            <p class="productEspecific_info_price">{{precio}}</p>
            <div class="productEspecific_info_background"></div>
        </div>
    </div>
</template>
<script>
export default {
     props: {
    nombre: String,
    precio: Number
  },
}
</script>
<style lang="">
    
</style>