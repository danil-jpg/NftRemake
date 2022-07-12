function timer(parentTag,deadline = "2022-07-20"){
	function timeCulc(){
		let currentTime = new Date(),
		endTime = new Date(deadline),
		diff = endTime - currentTime;

		(diff < 0 || diff == false) ? clearInterval(interval) : "" ;

   let seconds = Math.floor(diff > 0 ? diff/1000%60 : 0),
		minutes = Math.floor(diff > 0 ? diff/1000/60 % 60 : 0),
		hours = Math.floor(diff > 0 ? diff/1000/60/60 / 24 : 0);

		if(seconds < 10){
			seconds = "0"+seconds
		}
		if(minutes < 10){
			minutes = "0"+minutes
		}
		if(hours < 10){
			hours = "0"+hours
		}

   let parentElem = document.querySelector(parentTag),
   			timeBlock = parentElem.querySelectorAll("p"),
			hoursBlock = timeBlock[0],
			minutesBlock = timeBlock[1],
			secondsBlock = timeBlock[2];

		hoursBlock.textContent = hours;
		minutesBlock.textContent = minutes;
		secondsBlock.textContent = seconds;
	}
	// console.log(document.querySelector(".time_block.timer6.timer_nft "))


	const interval = setInterval(timeCulc,1000);
}

export default timer;