/*========= menu icon navbar =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

/*========= scroll sections active link =========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(section => {
		let top = window.scrollY;
		let offset = section.offsetTop - 150;
		let height = section.offsetHeight;
		let id = section.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		}
	});
	
	/*========= sticky navbar =========*/
	let header = document.querySelector('.header');
	
	header.classList.toggle('sticky', window.scrollY > 100);
	
	/*========= remove menu icon navbar when scrolling =========*/
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/*========= swiper =========*/
const swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

/*========= darkMode =========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
	document.body.classList.toggle('dark');
	darkModeIcon.classList.toggle('bx-sun');
}

/*========= scroll reveal =========*/
ScrollReveal({
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image img, .students-box, .testimonial-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*========= typing effect =========*/
document.addEventListener("DOMContentLoaded", function() {
	const heading = document.querySelector(".home-content h1");

	if (window.innerWidth > 768) {
		setTimeout(() => {
			heading.classList.add("typing-effect");
		}, 1600);
	} else {
		heading.style.opacity = 1;
		heading.style.width = "auto";
		heading.style.borderRight = "none";
	}
});
