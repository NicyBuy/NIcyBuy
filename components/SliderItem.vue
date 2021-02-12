<template>
    <transition :name="direction">
    <div v-show="visibleSlide === index" class="sliderItem">
        <slot></slot>
    </div>
    </transition>
</template>
<script>
export default {
    props:['visibleSlide', 'index', 'direction'],
}
</script>
