<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
	<div class="fixed top-0 left-0 w-full baar z-1221330 p-4 items-center justify-between md:flex hidden">
		<!-- Left side of the navbar (Logo and Navigation Links) -->
		<div class="flex items-center space-x-4">
			<!-- Navigation Links on the left -->
			<ul class="montreal  text-black pl-[80px] text-xs not-italic font-normal leading-[normal] flex space-x-[30px] w-[300px]">
				<li><router-link  to="about">ABOUT</router-link></li>
				<li><router-link to="portfolio">PROJECTS</router-link></li>
				<li><router-link to="contact">CONTACT</router-link></li>
			</ul>
		</div>
		<a class="logo" href="">
			<div class="text-black text-2xl font-bold">
				<router-link to="/"> <img class="logo" src="../assets/logo.svg" alt="" /></router-link>
			</div>
		</a>

		<!-- Right side of the navbar (acronym.com) -->
		<div class="montreal info w-[300px] pr-[80px] text-black text-right text-xs font-normal leading-[normal]">INFO@ACRONYM.SK</div>
	</div>
	<!-- Navbar for mobile screens -->
	<div class="fixed top-0 left-0 z-100 navbar items-center justify-between md:hidden flex">
		<div class="text-black text-2xl ml-[16px] font-bold">
			<a href="/"> <img class="w-[75px]" src="../assets/logo.svg" alt="" /></a>
		</div>
		<input type="checkbox" id="menu-toggle" class="menu-toggle" v-model="menuOpen" />
		<label for="menu-toggle" class="menu-button">
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</label>
		<div class="overlay" :class="{ 'overlay-visible': menuOpen }" @click="closeMenu"></div>
		<nav class="menu text-black" :class="{ 'menu-open': menuOpen }">
			<div class="text-center top-[71px] mb-[71px]">
				<!-- Center the logo and lower it slightly -->
				<a href="/">
					<img class="w-[105px] h-[45px]" src="../assets/logo.svg" alt="" />
				</a>
			</div>
			<ul>
				<li>
					<a href="/"><span class="index">01</span> Home</a>
				</li>
				<li>
					<a href="about">About<span class="index">02</span></a>
				</li>
				<li>
					<a href="portfolio"><span class="index">03</span> Projects</a>
				</li>
				<li>
					<a href="contact">Contact<span class="index">04</span></a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {
			menuOpen: false,
			isDarkBackground: false, // New property to track if the navbar is on a dark background
		}
	},
	methods: {
		closeMenu() {
			this.menuOpen = false
		},
	},
}
</script>

<style scoped>
.baar{
	background:white;
	z-index: 100;
}
.halo {
	filter: invert(0);
	mix-blend-mode: difference;
	z-index: 1045000;
}
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 67px;	

	background-color: #fff;
	z-index: 12230; /* Adjust the z-index as needed to make sure it's above other elements */
}
.index {
	color: var(--black, #0b0b0b);
	font-family: Canela Trial;
	font-size: 12px;
	font-style: normal;
	font-weight: 100;

	line-height: normal;
	margin-left: 4px; /* Adjust the spacing between the numbers and text */
	margin-right: 4px;
}

.montreal {
	font-family: "PP Neue Montreal", sans-serif;
}

.canela {
	font-family: Canela Trial, sans-serif;
}

.menu-button {
	cursor: pointer;
	position: fixed;
	/* top: 26px; */

	mix-blend-mode: difference;

	right: 16px;
	z-index: 10220;
}

.bar {
	width: 30px;
	height: 2px;
	background-color: white;
	margin: 6px 0;
	transition: 0.4s;
}

.overlay {
	position: fixed;
	top: 0;
	left: -100%; /* Start off-screen */
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 100);
	z-index: 1;
	transition: left 0.8s; /* Add a left transition */
}

.overlay-visible {
	left: 0; /* Slide the overlay to the left to make it visible */
}

.menu-toggle {
	display: none;
}

.menu-toggle:checked + .menu-button .bar:nth-child(1) {
	transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-toggle:checked + .menu-button .bar:nth-child(2) {
	opacity: 0;
}

.menu-toggle:checked + .menu-button .bar:nth-child(3) {
	transform: rotate(45deg) translate(-5px, -6px);
}

.menu-toggle:checked + .menu-button + .overlay {
	display: flex;
}

.menu {
	position: fixed;
	top: 0;
	left: -100%; /* Start off-screen */
	width: 100%;
	height: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10000;

	transition: left 0.4s; /* Add a left transition */
	text-align: center;
}

.menu-open {
	left: 0; /* Slide the menu to the left to make it visible */
}

/* Center the menu links */
.menu ul {
	list-style-type: none;
	padding: 0;
}

.menu ul li {
	margin: 20px 0;
	font-family: Canela Trial;
	font-weight: 100;
	font-size: 48px;
}

.menu ul li a {
	text-decoration: none;
	color: black;
	display: block;
}

/* Hide the overlay when the menu is closed */
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0);
	display: none;
	z-index: 1;
	transition: background 0.4s;
}
</style>
