
import Swiper, { Navigation, Pagination } from 'swiper';
import timer from "./timer.js";



timer(".time_block.timer1 ");
timer(".time_block.timer2 ","2022-07-22");
timer(".time_block.timer3 ","2022-07-19");
timer(".time_block.timer4 ","2022-07-23");
timer(".time_block.timer5 ","2022-07-24");
timer(".time_block.timer6 ","2022-07-19");


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

  console.log(document.querySelector("#show_sellers"))

document.querySelector("#show_sellers").addEventListener("click" , () => {
  console.log(  document.querySelectorAll(".animation_seller"))
  document.querySelectorAll(".animation_seller").forEach(item => {
    console.log(item)
    item.classList.toggle("hidden_seller")
  })
})


// document.querySelectorAll("span.footer_title ~ul").forEach(item => {
//   item.style.display = "none";
// })
//   const allTrigger = document.querySelectorAll(".footer_title.showable");


//   allTrigger.forEach(item => {
//     item.addEventListener("click" , (e) => {
//       let text = e.target.querySelectorAll("a");
//       console.log(e.target.querySelectorAll("a"))

//       text.forEach(item => {
//         item.classList.toggle("none_new")
//       })
//     })
//   })