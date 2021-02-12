<template>
    <div class="slider">
        <slot></slot>
        <button @click="next" class="sliderItem_next sliderItem_boton">Next</button>
        <button @click="prev" class="sliderItem_prev sliderItem_boton">Prev</button>        
    </div>
</template>
<script>
export default {
    methods: {
        next(){
            this.$emit('next');
        },
        prev(){
            this.$emit('prev');
        },
    },
}
</script>
