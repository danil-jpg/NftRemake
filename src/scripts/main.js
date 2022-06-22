
 import Swiper, { Navigation, Pagination } from 'swiper';


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

//   const sequenceSum = (begin, end, step) => {
//     let  counter = 0;
//     for(let i = begin;i <= end;i +=step){
//       counter += i;
//     }

//     return counter;
//   };

// function arrayDiff(a, b) {
//   for(let i = 0;i < b.length;i++){

//   }


// }

// function getListIdx(str, substr) {
//   let listIdx = []
//   let lastIndex = -1
//   while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
//     listIdx.push(lastIndex)
//   }
//   return listIdx
// }

// console.log(arrayDiff([], [1,2]))

// function encode(str){

//   const encrypt = "GADERYPOLUKIgaderypoluki";

//   let phrase = "";

//   for(let i = 0;i < str.length;i++){

//     if(encrypt.indexOf(str[i]) % 2 === 0){
//       phrase += encrypt[encrypt.indexOf(str[i]) + 1]
//     }else if(encrypt.indexOf(str[i]) % 2 === 1 ){
//       phrase += encrypt[encrypt.indexOf(str[i]) - 1]
//     }else{
//       phrase += str[i]
//     }
//   }

//   return phrase
// }

// function decode(str) {
//   const encrypt = "AGEDYROPULIKagedyropulik";
//   let phrase = "";

//   for(let i = 0;i < str.length;i++){

//     if(encrypt.indexOf(str[i]) % 2 === 0){
//       phrase += encrypt[encrypt.indexOf(str[i]) + 1]
//     }else if(encrypt.indexOf(str[i]) % 2 === 1 ){
//       phrase += encrypt[encrypt.indexOf(str[i]) - 1]
//     }else{
//       phrase += str[i]
//     }
//   }

//   return phrase
// }

// console.log(decode("Gug hgs g cgt"))


// function leastLarger(a,i) {
//   const array = a.filter((item,index,arr) => {
//     return arr[i] < item
//   });

// console.log(...array , array
//   )

//   return a.indexOf(Math.min(...array))

// }

// console.log(leastLarger([4, 1, 3, 5, 6], 0 ))