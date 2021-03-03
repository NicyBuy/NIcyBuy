<template>
  <div class="cNav">
    <nav>
      <div class="contNav">
        <div class="contNav__logo">
         <div class="texto"></div>
        </div>

        <div class="contNav__button">
          <div class="contNav__button-line1"></div>
          <div class="contNav__button-line2"></div>
          <div class="contNav__button-line3"></div>
        </div>

        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Envios</a></li>
          <li><a href="#">Informacion</a></li>
        </ul>
      </div>
    </nav>
    <div class="clothignStore__nav-space"></div>
  </div>
</template>

<script>
export default {

  

    mounted() {

      const navSlide= () => {
        const burger = document.querySelector('.contNav__button');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () =>{
          nav.classList.toggle('nav-active');

          navLinks.forEach((link, index) => {
          if(link.style.animation){
            link.style.animation = ``;

          }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index /7 + 0.5}s`;
          }
        })

        burger.classList.toggle('burgerAnimation');
        });

        
         
        

      }

      navSlide();
    }
}
</script>

<style lang = "scss" src = "../../../scss/main.scss">

</style>