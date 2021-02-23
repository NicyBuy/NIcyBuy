<template>
<div class="home">
    <cNav/>
     <div class="foodStore__Cover">
         <img :src="Cover" alt="">
     </div>
</div>

 
</template>

<script>
//components
import cNav from '../../../themes/FoodStore/components/cNav';

//img
import Cover from '../../../themes/FoodStore/assets/img/Logo.jpg';

export default {
    components: {
        cNav
    },

    data(){
        return{
            Cover: Cover
        }
    }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>