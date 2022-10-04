/*@autor Antônio Carlos*/

//Swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

$(document).ready(function(){

	//Progress bar
	let containerA = document.getElementById("circleA");
	let circleA = new ProgressBar.Circle(containerA, {
		color: '#64daf9',
		strokeWidth: 8,
		duration: 1400,
		from: {color: '#aaa'},
		to: {color: '#64daf9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);

			let value = Math.round(circle.value() * 1574);
			circle.setText(value);
		}
	});

	//Progress bar
	let containerB = document.getElementById("circleB");
	let circleB = new ProgressBar.Circle(containerB, {
		color: '#64daf9',
		strokeWidth: 8,
		duration: 1600,
		from: {color: '#aaa'},
		to: {color: '#64daf9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);

			let value = Math.round(circle.value() * 839);
			circle.setText(value);
		}
	});

	//Progress bar
	let containerC = document.getElementById("circleC");
	let circleC = new ProgressBar.Circle(containerC, {
		color: '#64daf9',
		strokeWidth: 8,
		duration: 2000,
		from: {color: '#aaa'},
		to: {color: '#64daf9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);

			let value = Math.round(circle.value() * 90);
			circle.setText(value);
		}
	});

	//Progress bar
	let containerD = document.getElementById("circleD");
	let circleD = new ProgressBar.Circle(containerD, {
		color: '#64daf9',
		strokeWidth: 8,
		duration: 2200,
		from: {color: '#aaa'},
		to: {color: '#64daf9'},

		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);

			let value = Math.round(circle.value() * 20381);
			circle.setText(value);
		}
	});

	//Iniciar o loader quando chegar no elemento
	let dataAreaOffset = $('#data-area').offset();
	let stop = 0;

	$(window).scroll(function(e){
		let scroll = $(window).scrollTop();
		if (scroll > (dataAreaOffset.top - 700) && stop == 0) {

			circleA.animate(1.0);
			circleB.animate(1.0);
			circleC.animate(1.0);
			circleD.animate(1.0);

			stop = 1;
		}
	});

	//Parallax
	setTimeout(function(){
		$('#data-area').parallax({imageSrc: 'img/noiteparallax.jpg'});
	}, 250);

});

