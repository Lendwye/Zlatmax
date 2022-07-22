const introSwiper = new Swiper('.intro__body__slider__swiper', {
	pagination: {
	  el: ".swiper-control__dots",
	  clickable: true,
	},

	on: {
		init: function (swiper) {
			const allSlides = document.querySelector(".swiper-control__fraction__all");
			const allSlidesItems = document.querySelectorAll(".intro__body__slider__swiper__slide:not(.swiper-slide-dublicate)");
			console.log(allSlidesItems);
			
			allSlides.innerHTML = allSlidesItems.length - 2;
		},
		slideChange: function(swiper) {
			const currentSlide = document.querySelector(".swiper-control__fraction__current");
			currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
		}
	},

	autoHeight: true,
	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,
	loop: true,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
});
const bestSellersSwiper = new Swiper('.best-sellers__swiper', {
	pagination: {
		el: ".best-sellers__swiper__dots",
		clickable: true,
	  },

	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,
	loop: true,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
});
const newSwiper = new Swiper('.new__swiper', {
	pagination: {
		el: ".new__swiper__dots",
		clickable: true,
	  },

	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,
	loop: true,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
});
const salesSwiper = new Swiper('.sales__swiper', {
	pagination: {
		el: ".sales__swiper__dots",
		clickable: true,
	  },

	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,
	loop: true,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
});
const flashlightsSwiper = new Swiper('.flashlights__swiper', {
	pagination: {
		el: ".flashlights__swiper__dots",
		clickable: true,
	  },

	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,
	loop: true,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
})
const ItemSwiper = new Swiper('.item__swiper', {
	pagination: {
		el: ".item__swiper__dots",
		clickable: true,
	  },

	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,
	loop: true,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
})
const ItemGallery = new Swiper('.item__gallery__swiper', {
	grabCursor: true,
	watchOverflow: true,
	spaceBetween: 120,

	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},

	speed: 400,
})