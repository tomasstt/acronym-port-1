<template>
	<div>
		<!-- <div class="pt-2 z-213"></div> -->
		<!-- First Section -->
		<div class="section ">
			<div class="oop"></div>
			<div :class="{ fixed: hasScrolledPast200 }">
				<section :class="['md:h-screen  w-screen h-auto dark-section bg-black relative ', { 'fixed-section': fixFirstImage }]">
					<!-- Parallax background -->
					<div class="parallax-bg"></div>
					<div class="h-full flex flex-col items-center md:flex-row">
						<!-- Text and button (for all screens) -->
						<div class="text-left md:absolute static md:mt-[0px] mt-[60px] pl-[16px] bottom-[100px] z-10 md:text-left w-full text-white md:pl-[80px]">
							<p class="text-xs montreal not-italic font-normal leading-[normal]">SEPTEMBER 2023</p>
							<h1 class="w-full canela md:w-[407px] mt-4 md:mt-[12px] md:text-[50px] text-[28px] not-italic font-thin leading-[normal]">
								Sagrop - Agriculture  <br class="hide-on-mobile" />
								portfolio.
							</h1>
							<a href="https://www.sagrop.sk" target="_blank"><button class="button-hover-effect canela mt-6 md:mt-10 inline-flex items-center gap-1.5 border px-8 py-4 rounded-full border-[rgba(255,255,255,0.20)] text-white text-xl font-thin transition-all duration-300 hover:bg-white hover:text-black hover:border-black">
  View Project 
  <img class="arrow transform transition-transform duration-300" src="../assets/arrow.svg" alt="">
</button> </a>
						</div>
						<!-- Image on the right (for all screens) -->
						<img class="w-full h-auto md:w-auto md:h-full absolute right-0 object-cover" src="@/assets/macbook.png" alt="" />
					</div>
				</section>
			</div>
		</div>

		<!-- Second Section -->
		<div class="section">
			<section ref="secondSection" class="h-screen bg-black relative second-section">
				<div class="h-full flex flex-col items-center md:flex-row">
					<!-- Text and button (for all screens) -->
					<div class="text-left md:absolute static bottom-[100px] pl-[16px] z-10 md:text-left w-full md:mt-0 mt-[60px] text-white md:pl-[80px]">
						<p class="text-xs montreal not-italic font-normal leading-[normal]">WIP 2024</p>
						<h1 class="w-full canela md:w-[467px] mt-4 md:mt-[12px] md:text-[50px] text-[28px] not-italic font-thin leading-[normal]">
							Luxvital - Supplements<br class="hide-on-mobile" />
							eCommerce.
						</h1>
						<button class="button-hover-effect canela mt-6 md:mt-10 inline-flex items-center gap-1.5 border px-8 py-4 rounded-full border-[rgba(255,255,255,0.20)] text-white text-xl font-thin transition-all duration-300 hover:bg-white hover:text-black hover:border-black">
  View Project 
  <img class="arrow transform transition-transform duration-300" src="../assets/arrow.svg" alt="">
</button>					</div>
					<!-- Image on the right (for all screens) -->
					<img class="w-auto h-full md:w-full md:h-full absolute  md:right-0 z-1 object-cover" src="@/assets/phone.png" alt="" />
				</div>
			</section>
		</div>
	</div>
	<section class="h-screen mt-[1cm]"></section>
</template>
<script>
export default {
	data() {
		return {
			currentScrollPosition: 0,
		}
	},
	computed: {
		hasScrolledPast200() {
			return this.currentScrollPosition > 600
		},
	},
	mounted() {
		window.addEventListener("scroll", this.updateScrollPosition)
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.updateScrollPosition)
	},
	methods: {
		updateScrollPosition() {
			this.currentScrollPosition = window.scrollY || document.documentElement.scrollTop
		},
	},
}
</script>

<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css?family=Sintony";
.arrow{
margin-left: 6px;
filter: invert(1);

}.button-hover-effect:hover .arrow {
  transform: translateX(5px); /* Move arrow to the right on hover */
  filter: invert(0);

}
button:hover{
	background: white;
}
.section {
	text-align: center;
	position: absolute;

	width: 100%;
	height: 100vh;
	overflow: hidden;
	clip: rect(0, auto, auto, 0);

	.fixed {
		overflow: hidden;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&:nth-child(1) .fixed {
		top: 50%; // Adjust the 40px value to move the section down
		left: 50%;
	}
}

.canela {
	font-family: Canela Trial, sans-serif;
}
@for $i from 1 through 10 {
  .section:nth-child(#{$i}) {
    @if ($i == 1) {
      top: 600px;
    } @else if ($i == 10) {
      background-color: #000;
      color: #fff;
      top: 163vh * ($i - 1);
    } @else {
      background-color: hsl(200deg * $i, 90%, 40%);
      top: 163vh * ($i - 1);
    }
    z-index: $i;
  }
}

// Media query for screens wider than 2500px
@media (min-width: 2000px) {
  @for $i from 1 through 10 {
    .section:nth-child(#{$i}):not(:nth-child(1)):not(:nth-child(10)) {
      top: 148vh * ($i - 1);
    }
  }
}
</style>
