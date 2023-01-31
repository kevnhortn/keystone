// Enable strict mode
"use strict";

// Select elements from DOM
const homeContainer = document.querySelector(".home-container");
const speakersWrapper = document.querySelector(".speakers-wrapper");
const openModalCards = document.querySelectorAll(".speaker-card");
const modals = document.querySelectorAll(".modal-wrapper");
const closeModalIcons = document.querySelectorAll(".close-icon");
const overlays = document.querySelectorAll(".modal-overlay");
const toTopBtn = document.querySelector(".to-top-btn");
const navContainer = document.querySelector(".nav-container");
const headerEl = document.querySelector(".header");
const regBtn = document.querySelector(".reg-btn");
const closeSBarIcon = document.querySelector(".sidebar-close-icon");
const sidebarEl = document.querySelector(".sidebar");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const sidebarMenu = document.querySelectorAll(".sidebar-menu");

// Create for loop to target speaker cards and toggle hidden class
// for modal elements
for (let i = 0; i < openModalCards.length; i++) {
	openModalCards[i].addEventListener("click", openModal);
	closeModalIcons[i].addEventListener("click", closeModal);
	overlays[i].addEventListener("click", closeModal);

	// Open modal at current position
	function openModal() {
		modals[i].classList.toggle("hidden");
	}

	// Close modal at current position
	function closeModal() {
		modals[i].classList.toggle("hidden");
	}
}

document.addEventListener("scroll", showUpBtn);
document.addEventListener("scroll", hideUpBtn);

function showUpBtn() {
	if (window.scrollY > 300) {
		toTopBtn.classList.remove("hidden");
	}

	// console.log(window.scrollY);
}

function hideUpBtn() {
	if (window.scrollY < 300) {
		toTopBtn.classList.add("hidden");
	}
}

// When user scrolls down, hide navbar. When user scrolls up, show navbar.
window.onscroll = function () {
	const scrollY = window.pageYOffset || document.documentElement.scrollTop;
	const height = -navContainer.clientHeight;

	navContainer.style.transition = "all 250ms ease-in-out";

	if (
		document.documentElement.scrollTop === 0 &&
		document.documentElement.scrollTop <= 20
	) {
		navContainer.style.backgroundColor = "transparent";
		navContainer.style.backdropFilter = "none";
		navContainer.style.paddingTop = "3rem";
		regBtn.style.boxShadow =
			"0em 1.25em 2.25em -0.5em rgba(229, 75, 75, 0.35)";
	} else {
		navContainer.style.backgroundColor = "#1e1e24f9";
		navContainer.style.backdropFilter = "blur(60px)";
		regBtn.style.boxShadow = "none";
		navContainer.style.paddingTop = "1rem";
	}

	scrollY <= Math.max(this.lastScroll, 50) ||
	window.innerWidth <= 1200 ||
	this.loaded === undefined
		? (navContainer.style.transform = "translateY(0px)")
		: (navContainer.style.transform = "translateY(-20rem)");

	this.lastScroll = scrollY;
	this.loaded = true;
};

window.onload = function () {
	if (
		document.documentElement.scrollTop === 0 &&
		document.documentElement.scrollTop <= 20
	) {
		navContainer.style.backgroundColor = "transparent";
		navContainer.style.backdropFilter = "none";
		navContainer.style.paddingTop = "3rem";
		regBtn.style.boxShadow =
			"0em 1.25em 2.25em -0.5em rgba(229, 75, 75, 0.35)";
	}
};

// Show sidebar
hamburgerIcon.addEventListener("click", showSidebar);

function showSidebar() {
	sidebarEl.classList.remove("hidden");
	sidebarEl.classList.toggle("isShown");
}

// Close sidebar
sidebarEl.addEventListener("click", closeSidebar);

function closeSidebar(e) {
	if (
		e.target.className.includes("menu-items") ||
		e.target.className.includes("sidebar-close-icon")
	) {
		sidebarEl.classList.add("hidden");
	}
}
