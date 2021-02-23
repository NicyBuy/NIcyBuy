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
import cNav from '../../../components/themes/foodStore/cNav.vue'

//img
import Cover from '../../../assets/Stores/foodStore/img/Logo.jpg'

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