<template>
  <div class="clothingStore__buyingPage">
    <cNav />
    <div class="white-space"></div>
    <div class="clothingStore__buying">
      <div class="clothingStore__buyingCard">
        <div class="clothingStore__buying-contTitle">
          <div class="clothingStore__buying-number">
            1
          </div>

          <div class="clothingStore__buying-Title">
            Copia el siguiente link:
          </div>
        </div>

        <div class="clothingStore__buying-link">
          <a href="#">https://koos.com/clothingStore/buying</a>
          <button class="clothingStore__buying-link-copy" title="copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z" />
              </svg>
          </button>
        </div>

        <div class="clothingStore__buying-note">
          O puedes tomar una captura de pantalla del producto de abajo
        </div>
      </div>
      <div class="-white-space"></div>

      <div class="clothingStore__buying-contProduct">
        <h2>TU COMPRA:</h2>

        <div class="clothingStore__buying-product">
          <div class="contImg">
            <img :src="Product" alt="">
          </div>

          <div class="name">
            {{name}}
          </div>

          <div class="price">
            ${{price}}
          </div>
        </div>
      </div>

      <div class="-white-space"></div>
      <div class="clothingStore__buyingCard">
        <div class="clothingStore__buying-contTitle">
          <div class="clothingStore__buying-number">
            2
          </div>

          <div class="clothingStore__buying-Title">
            Contactanos en Redes Sociales.
          </div>
        </div>

        <div class="clothingStore__buying-note">
          Contactanos  por cualquiera de nuestras Redes Sociales
          y envianos el link que copiaste o la captura de pantalla
          que hayas tomado. Sera un gusto atenderte!
        </div>

        <div class="clothingStore__buying-contSN ">
        <div class="clothingStore__buying__SN ">
          <a class="messenger" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0"
              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
              <g>
                <path xmlns="http://www.w3.org/2000/svg"
                  d="m241.574219 210.210938-82.953125 87.828124 75.492187-41.421874 39.445313 41.421874 82.488281-87.828124-74.65625 40.695312zm0 0"
                   data-original="#000000" style="" class="" />
                <path xmlns="http://www.w3.org/2000/svg"
                  d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm2 393.035156c-15.847656 0-31.144531-2.238281-45.535156-6.382812l-51.625 29.347656v-55.210938c-34.578125-26.3125-56.660156-66.386718-56.660156-111.269531 0-79.265625 68.867187-143.519531 153.820312-143.519531 84.957031 0 153.820312 64.253906 153.820312 143.519531 0 79.257813-68.863281 143.515625-153.820312 143.515625zm0 0"
                   data-original="#000000" style="" class="" />
              </g>
            </svg>
          </a>

          <a class="whatsapp" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
            </svg>
          </a>

          <a class="facebook" href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </a>


          <a class="instagram" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
            </svg>
          </a>
        </div>
      </div>
  
      </div>
      <div class="--white-space"></div>
    </div>
    <cFooter/>

  </div>
</template>

<script>
//components
import cNav from '../../../themes/ClothingStore/components/cNav.vue';
import CFooter from '../../../themes/ClothingStore/components/cFooter.vue';

//img
import Product from '../../../assets/Stores/ThriftyShop/products/1.jpg'

export default {
  components: {
    cNav,
    CFooter
  },

  data() {
    return {
      name: "Nombre del producto talla S",
      price: 10.99,
      Product: Product,
    }
  }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss"></style>