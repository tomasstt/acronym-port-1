<template>
	<div>
		<div class="pt-2 z-213"></div>
		<!-- First Section -->
		<div class="section">
			<div class="oop"></div>
			<div class="fixed">
				<section :class="['md:h-screen  w-screen h-auto dark-section bg-black relative ', { 'fixed-section': fixFirstImage }]">
					<!-- Parallax background -->
					<div class="parallax-bg"></div>
					<div class="h-screen flex flex-col items-center md:flex-row">
						<!-- Text and button (for all screens) -->
						<div class="text-left md:absolute static md:mt-[0px] mt-[120px] md:mt-[60px] pl-[16px] bottom-[100px] z-10 md:text-left w-full text-white md:pl-[80px]">
							<p class="text-xs montreal not-italic font-normal leading-[normal]">SEPTEMBER 2023</p>
							<h1 class="w-full canela md:w-[407px] mt-4 md:mt-[12px] md:text-[50px] text-[28px] not-italic font-thin leading-[normal]">
								Sagrop - Agriculture  <br class="hide-on-mobile" />
								portfolio.
							</h1>
							<a href="https://sagrop.sk" target="_blank"><button class="button-hover-effect canela mt-6 md:mt-10 inline-flex items-center gap-1.5 border px-8 py-4 rounded-full border-[rgba(255,255,255,0.20)] text-white text-xl font-thin transition-all duration-300 hover:bg-white hover:text-black hover:border-black">
								View Project 
  <img class="arrow transform transition-transform duration-300" src="../assets/arrow.svg" alt="">
</button> </a>
						</div>
						<!-- Image on the right (for all screens) -->
						<img class=" h-full md:w-auto md:h-full   z-1 object-cover" src="@/assets/macbook.png" alt="" />
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
						<p class="text-xs montreal not-italic font-normal leading-[normal]">OCTOBER 2023</p>
						<h1 class="w-full canela md:w-[407px] mt-4 md:mt-[12px] md:text-[50px] text-[28px] not-italic font-thin leading-[normal]">
							Luxvital - Supplements<br class="hide-on-mobile" />
							eCommerce.
						</h1>
						<button class="button-hover-effect canela mt-6 md:mt-10 inline-flex items-center gap-1.5 border px-8 py-4 rounded-full border-[rgba(255,255,255,0.20)] text-white text-xl font-thin transition-all duration-300 hover:bg-white hover:text-black hover:border-black">
  View Project 
  <img class="arrow transform transition-transform duration-300" src="../assets/arrow.svg" alt="">
</button>
					</div>
					<!-- Image on the right (for all screens) -->
					<img class="w-max h-auto object-fit max-w-max right-[-550px] absolute " src="@/assets/phone.png" alt="" />

				</div>
			</section>
		</div>
	</div>
	<section class="h-screen mt-[4cm]"></section>
</template>

<style lang="scss" scoped>
.section {
	text-align: center;
	top: 12cm;
	position: absolute;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	clip: rect(0, auto, auto, 0);
	.fixed {
		overflow: hidden;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 50%;
		left: 50%;
		
	}
}.parent-container {
    
    overflow: visible; /* Adjust as per your design needs */
}

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
@for $i from 1 through 10 {
	.section:nth-child(#{$i}) {
		@if ($i==1) {
			top: 0cm;
			width: 100%;
		} @else if($i==10) {
			background-color: #000;
			color: #fff;
			top: (100vh * ($i - 1));
		} @else {
			background-color: black;
			color: #fff;
			top: (100vh * ($i - 1));
			bottom: 0;
		}
		z-index: ($i);
		.fixed {
			transform: translate(-50%, -50%);
		}
	}
}
.canela {
	font-family: Canela Trial, sans-serif;
}

.arrow {
	color: white;
	filter: invert(1);
	margin-left: 6px;
}
</style>
