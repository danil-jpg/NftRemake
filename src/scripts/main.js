
import Swiper, { Navigation, Pagination } from 'swiper';
import timer from "./timer.js";



timer(".time_block.timer1 ","2022-07-29");
timer(".time_block.timer2 ","2022-07-30");
timer(".time_block.timer3 ","2022-08-19");
timer(".time_block.timer4 ","2022-08-23");
timer(".time_block.timer5 ","2022-08-24");



 const swiper = new Swiper('.swiper', {
  spaceBetween: 37,
    slidesPerView: 1.2,
    slidesPerColumn: 1.2,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
		nextEl: '.swiper-button-next-unique',
		prevEl: '.swiper-button-prev-unique'
    },
	modules: [Navigation, Pagination],
  });

  function changeSwipperOffset(){
    const width = document.querySelector("body").offsetWidth

    if(width < 351){
      const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
          slidesPerView: 1,
          slidesPerColumn: 1,
          centeredSlides: true,
          roundLengths: true,
          loop: true,
          loopAdditionalSlides: 30,
          navigation: {
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
          },
        modules: [Navigation, Pagination],
        });
      
    }
  }

changeSwipperOffset();

  document.querySelectorAll("button").forEach(item => {
	  item.addEventListener("click" , e => {
		  e.preventDefault();
	  })
  })



document.querySelector("#show_sellers").addEventListener("click" , () => {

  document.querySelectorAll(".animation_seller").forEach(item => {

    item.classList.toggle("hidden_seller")
    item.classList.toggle("animate__fadeInDown")
  })
})


document.querySelectorAll("div.list ul").forEach(item => {
  item.classList.add("none")
})
// Это что-бы элементы по умолчанию были скрыты.

const footerListTrigger = document.querySelectorAll("span.showable");

footerListTrigger.forEach(item => {
  item.addEventListener("click" , (e) => {
    console.log(item.classList[2],`.${item.classList[2]}`)
   console.log( document.querySelector(`.${item.classList[2]} ~ ul`).classList.toggle("none"))
  })
})
