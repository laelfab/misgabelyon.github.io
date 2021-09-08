


const swiper1 = new Swiper('#swiper-1 .swiper-container',{
    direction: 'horizontal',
    slidesPerView:1,
    /*effect: 'fade',*/
    loop:true,
    autoplay:{
        delay:5000,
    },
  
    navigation:{
        nextEl:'.swipper-button-next',
    },
    

});


const swiper2 = new Swiper('#swiper-2 .swiper-container',{
    direction: 'horizontal',
    loop:true,
    autoplay:{
        delay:5000,
    },
    navigation:{
        nextEl:'.swipper-button-next',
        prevEl:'.swipper-button-prev',
    },
    breakpoints: {
         //when window width is >= 320px
        320: {
          slidesPerView: 1,
          
        }, 

        768: {
            slidesPerView: 2,
            spaceBetween: 20
          },

        1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },

       
      }
    

});

const swiper3 = new Swiper('#swiper-3 .swiper-container',{
    direction: 'horizontal',
    slidesPerView:1,
    loop:true,
    navigation:{
        nextEl:'.swipper-button-next',
        prevEl:'.swipper-button-prev',
    }

});



const btn = document.querySelector("button.btn-menu-mobile");
const menu = document.querySelector(".menu-mobile");


btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
