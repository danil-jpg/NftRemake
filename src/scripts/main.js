
 import Swiper, { Navigation, Pagination } from 'swiper';
import hamburger from './hamburger.js'; 


hamburger();

 const swiper = new Swiper('.swiper', {
	spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
	modules: [Navigation, Pagination],
  });

  document.querySelectorAll("button").forEach(item => {
	  item.addEventListener("click" , e => {
		  e.preventDefault();
	  })
  })

  const allTrigger = document.querySelectorAll(".footer_title.showable");


  allTrigger.forEach(item => {
    item.addEventListener("click" , (e) => {
      let text = e.target.querySelectorAll("a");
      console.log(e.target.querySelectorAll("a"))

      text.forEach(item => {
        item.classList.toggle("none_new")
      })
    })
  })