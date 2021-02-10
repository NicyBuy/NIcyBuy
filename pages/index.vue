<template>
  <div class="container">
    <div class="index_slider">
      <slider @next="next" @prev="prev">
        <sliderItem
          v-for="(slide, index) in slides"
          :key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
        >
          <img class="slider_imgs" :src="slide" :alt="slide" />
        </sliderItem>
      </slider>
    </div>

    <div class="carousel">
      <div id="tracka" :class="'tracker tracker--smooth--'+smooth">
        <div class="card">
          <img id="ref_card" class="slider2_img" :src="slides[0]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[1]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[2]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[0]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[1]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[2]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[0]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[1]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[2]" alt="" />
        </div>
        <div class="card">
          <img class="slider2_img" :src="slides[0]" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import SliderItem from "../components/SliderItem.vue";
export default {
  components: {
    Slider,
    SliderItem,
    //-- slider 2
    tracker: null,
    initialPos: null,
    moving: false,
    transform: 0,
    mouseLastPosition: 0,
    lastPageX:0,
    transformValue :0,
    withCard: null,
    
  },
  data() {
    return {
      slides: [
        require("~/assets/img/slider_test/cat1.jpg"),
        require("~/assets/img/slider_test/cat2.jpg"),
        require("~/assets/img/slider_test/cat3.jpg"),
      ],
      visibleSlide: 0,
      direction: "left",
      smooth:false,
    };
  },
  computed: {
    slideLenght() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slideLenght - 1) {
        this.visibleSlide = 0;
      } else this.visibleSlide++;
      this.direction = "left";
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slideLenght - 1;
      } else this.visibleSlide--;
      this.direction = "right";
    },
    //--- de slider 2--------------------------------
    gestureStart(e) {
      if (e.pointerType === "mouse") {
        this.moving = false;
        return
      }
      /* this.initialPos = e.pageX;
      this.moving = true;
      const transformMatrix = window
        .getComputedStyle(this.tracker)
        .getPropertyValue("transform");
      if (transformMatrix !== "none") {
        this.transform = parseInt(transformMatrix.split(",")[4].trim()); */
      this.smooth=false;
      this.moving = true;
      this.mouseLastPosition = e.pageX;
      this.transform =
        window.getComputedStyle(this.tracker).getPropertyValue("transform") !==
        "none"
          ? window
              .getComputedStyle(this.tracker)
              .getPropertyValue("transform")
              .split(",")[4]
              .trim()
          : 0;
      console.log(this.transform);
    },
    gestureMove(e) {
      /* if (this.moving == true) {
        const currentPosition = e.pageX;
        const diff = currentPosition - this.initialPos;
        this.tracker.style.transform = `translateX(${this.transform + diff}px)`; */
      if (this.moving) {
        const diffX = e.pageX - this.mouseLastPosition;
        if (e.pageX - this.lastPageX > 0) {
          if (this.transformValue > 0) {
            return;
          }
        } else {
          if (Math.abs(this.transformValue) > this.tracker.offsetWidth - 320) {
            return;
          }
        }
        this.transformValue = parseInt(this.transform) + diffX;
        this.tracker.style.transform = `translateX(${this.transformValue}px)`;
      }
      this.lastPageX = e.pageX;
    },
    gestureEnd(e) {
      this.withCard = document.getElementById('ref_card').offsetWidth;
      this.moving = false;
      console.log(this.transformValue + ' '+this.withCard);
      if(this.transformValue*-1 >= 2000){
        this.smooth = true;
        this.tracker.style.transform = `translateX(${1}px)`;
      }
      let c1 = this.transformValue*-1;
      let c2 = this.withCard;
      let range = this.withCard*0.5;
      for (let i = 1; i < 11; i++) {
        if (!(c1 >= (c2*i)-range) ) {
          this.smooth = true;
          this.tracker.style.transform = `translateX(${this.withCard*-1*(i-1)}px)`;
          i=12;
        }
      }
    },
    listenerMoving() {
      this.tracker = document.getElementById("tracka");
      this.tracker.style.transform = `translateX(${0}px)`;
      
        window.addEventListener("pointerdown", this.gestureStart);

        window.addEventListener("pointermove", this.gestureMove);

        window.addEventListener("pointerup", this.gestureEnd);
      
        //window.addEventListener("touchdown", this.gestureStart);

        //window.addEventListener("touchmove", this.gestureMove);

        //window.addEventListener("touchup", this.gestureEnd);

        //window.addEventListener("mousedown", this.gestureStart);

        //window.addEventListener("mousemove", this.gestureMove);

        //window.addEventListener("mouseup", this.gestureEnd);
      
    },
  },
  mounted() {
    this.listenerMoving();
  },
};
</script>


