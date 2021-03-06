
import Swiper, { Navigation, Pagination } from 'swiper';
import timer from "./timer.js";



timer(".time_block.timer1 ");
timer(".time_block.timer2 ","2022-07-22");
timer(".time_block.timer3 ","2022-07-19");
timer(".time_block.timer4 ","2022-07-23");
timer(".time_block.timer5 ","2022-07-24");



 const swiper = new Swiper('.swiper', {
	spaceBetween: 1,
    slidesPerView: 1,
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
