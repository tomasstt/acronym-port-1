<template>
	<section class=" bg-white scroll-smooth" ref="content">
		<div class="mt-[110px] sm:mt-[150px] text-hover-wrapper">
			<h2 class="text-black canela ml-[16px] mr-[16px] md:block hidden text-center md:text-[58px] text-[37px] font-thin leading-[60px]" ref="heading">
				<div class="">
					<span class="text-hover">We create</span>
					<span class="fontik italic text-hover font-thin"> design solutions </span>
					<span class="text-hover">that make</span>
				</div>
				<p class="text-hover">you stand out from your<br class="hid" />competitors.</p>
			</h2>
			<h2 class="text-black canela ml-[16px] mr-[16px] md:hidden block text-center md:text-[58px] text-[50px] font-thin leading-[60px]" ref="heading">

					<span class="text-hover">We create <span class="fontik italic text-hover font-thin">design solutions </span>that make</span>
			
				<span class="text-hover">you stand out from your competitors.</span>
			</h2>
		</div>
		<div class="text-black montreal mt-[60px] text-center text-xs not-italic font-normal leading-[normal]">
			CURRENTLY BASED IN SALA, SLOVAKIA <br />
			WEB DESIGN STUDIO
		</div>
		<div class="center-div">
	<div class="arrow bounce  ">
		
		<svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
		
	</div></div>
	</section>
	
	

	
	<ModelsM v-if="isScreenWidthLessThan1000" />
	<Models v-else/>
	<Foota  />
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
</template>

<script>
import Models from "@/components/Models.vue"
import ModelsM from "@/components/ModelsM.vue"

import Foota from "@/components/Footer.vue"
import { gsap } from "gsap"

export default {
	components: { Models, Foota, ModelsM },
	name: "HomeView",
	data() {
		return {
			animationTimeline: null,
			isScreenWidthLessThan1000: false,
		}
	},
	methods: {        
		handleScroll() {
      if (this.$refs.arrow) {
        let scrollPosition = window.scrollY;
        let opacity = 1 - scrollPosition / 380; // Adjust this value as needed
        opacity = Math.max(opacity, 0); // Ensure opacity doesn't go negative
        this.$refs.arrow.style.opacity = opacity;
      }
    },

		playGSAPAnimation() {
			const content = this.$refs.content
			const heading = this.$refs.heading

			const tl = gsap.timeline({ paused: true })

			tl.from(content, { opacity: 0, duration: 1 })
			tl.from(heading, { opacity: 0, y: 20, duration: 1 }, "-=0.8")

			this.animationTimeline = tl
		},
		checkScreenWidth() {
			// Update the data property based on window width
			this.isScreenWidthLessThan1000 = window.innerWidth < 1000
		},
	},
	mounted() {
		this.playGSAPAnimation()
		this.animationTimeline.play()
		this.checkScreenWidth()
        window.addEventListener('scroll', this.handleScroll); // Add this line

		// Add event listener for window resize
		window.addEventListener("resize", this.checkScreenWidth)
	},
	beforeDestroy() {
		// Remove event listener when component is destroyed
		window.removeEventListener("resize", this.checkScreenWidth)   
		     window.removeEventListener('scroll', this.handleScroll); // Add this line

	},
}
</script>

<style scoped lang="scss">
@media (min-width: 1000px) {

.arrow {  position: static;

  margin-bottom: 10cm; /* Adjust this value if necessary */
  transition: opacity 0.2s ease-in-out; 
  text-align: center; /* Ensure the content is centered */
}}
@media (max-width: 1000px) {
	.arrow {
  position: absolute;
  bottom: -1cm; /* Adjust this value if necessary */
  transition: opacity 0.2s ease-in-out; 
  text-align: center; /* Ensure the content is centered */
}}

.arrow-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  padding-bottom: 20px; /* Adjust this value to place the arrow */
}

.center-div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* This will take the full height of the viewport */
        }

     

.bounce {
	-webkit-animation: bounce 1.5s infinite;
	animation: bounce 2.5s infinite;
}
@-webkit-keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
}
@keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
}

.fontik {
	font-family: Canela Trial;
}
.hid {
}

.montreal {
	font-family: "PP Neue Montreal", sans-serif;
	font-weight: normal;
	z-index: 4; /* Ensure it's above the second section */
}
.canela {
	font-family: Canela Trial;
}
#container {
	width: 100%;
	height: 100%;
}
.hidden-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	white-space: nowrap;
	font-size: 48px;
	color: #fa74ff; /* Green color for the text */
	opacity: 0;
	transition: opacity 0.3s;
}

/* The custom cursor circle */
.custom-cursor {
	width: 100px; /* Circle size */
	height: 100px;
	border-radius: 50%;
	background: #fa74ff; /* Green color for the circle */
	position: absolute;
	transform: translate(0%, -50%);
	pointer-events: none;
	mix-blend-mode: difference; /* This will help to reveal the text over any background */
	opacity: 0;
	transition: opacity 0.3s, width 0.3s, height 0.3s, border-radius 0.3s;
}
.text-hover {
	transition: opacity 0.3s ease; /* Smooth transition for the opacity */
}
/* Hover effect for the text, revealing the hidden text */
.text-hover:hover + .hidden-text {
	opacity: 1;
}
.text-hover:hover + .hidden-text,
.text-hover:hover ~ .custom-cursor {
	visibility: visible;
	opacity: 1;
}
/* Apply the cursor effect only when hovering over the text */
.text-hover:hover ~ .custom-cursor {
	opacity: 1;
	width: 300px; /* Circle expands */
	height: 300px;
	border-radius: 50%;
}
</style>
