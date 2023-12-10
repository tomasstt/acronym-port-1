<template>
	<section class="" ref="content">
		<div class="mt-[150px]" ref="heading">
			<h2 class="text-black text-center canela text-[58px] sm:ml-0 sm:mr-0 ml-[16px] mr-[16px] font-thin leading-[60px]">
				<div class="">
					<span>Explore Our </span>
					<span class="fontik italic font-thin"> Web Design </span>
				</div>
				Portfolio
			</h2>
		</div>
		<div class="montreal text-black mt-[60px] text-center text-xs not-italic font-normal leading-[normal]">
			CURRENTLY BASED IN SALA, SLOVAKIA <br />
			WEB DESIGN STUDIO
		</div>
        <div class="grid grid-cols-1 gap-[30px] mt-[150px] w-auto mx-[80px] sm:grid-cols-2">
            <div class="flex flex-col">
				<a href="https://www.sagrop.sk" target="_blank">
   <div class="image-container" @mouseenter="animateImageOnHover($event.currentTarget)" @mouseleave="resetImageAnimation($event.currentTarget)">
					<img src="../assets/macbook.png" alt="Image 2" class="w-full h-full" />
				</div></a>

				<p class="text-left montreal text-xs not-italic font-normal leading-[normal] mt-[15px]">SEPTEMBER 2023</p>
				<div class="text-left canela text-black xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[25px] text-[25px] not-italic font-thin leading-[normal] mt-[15px]">Sagrop - Agriculture portfolio.</div>
			</div>

            <div class="flex flex-col">
                <div class="image-container2" @mouseenter="animateImageOnHover($event.currentTarget)" @mouseleave="resetImageAnimation($event.currentTarget)">
					<img src="../assets/phone.png" alt="Image 2" class="w-full h-full" />
				</div>
				<p class="text-left montreal text-xs not-italic font-normal leading-[normal] mt-[15px]">OCTOBER 2023</p>
				<div class="text-left canela text-black xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[25px] text-[25px] not-italic font-thin leading-[normal] mt-[15px]">Luxvital - Supplements eCommerce.</div>
			</div>
		</div>
	</section>

	<Foota />
</template>

<script>
// @ is an alias to /src
import { gsap } from "gsap"
import HelloWorld from "@/components/HelloWorld.vue"
import Models from "@/components/Models.vue"
import Foota from "@/components/Footer.vue"

export default {
	name: "HomeView",
	components: {
		HelloWorld,
		Models,
		Foota,
	},
	data() {
		return {
			animationTimeline: null,
		}
	},
	methods: {
		playGSAPAnimation() {
			const content = this.$refs.content
			const heading = this.$refs.heading

			const tl = gsap.timeline({ paused: true })

			tl.from(content, { opacity: 0, duration: 1 })
			tl.from(heading, { opacity: 0, y: 20, duration: 1 }, "-=0.8")

			this.animationTimeline = tl
		},
		animateImageOnHover(imageRef) {
			gsap.to(imageRef, { scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", duration: 0.2 })
		},

		resetImageAnimation(imageRef) {
			gsap.to(imageRef, { scale: 1, boxShadow: "none", duration: 0.2 })
		},
	},
	mounted() {
		this.playGSAPAnimation()
		this.animationTimeline.play()
	},
}
</script>

<style scoped>
 .image-container, .image-container2 {
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .image-container img, .image-container2 img {
        transition: all 0.5s ease;
    }

  
.fontik {
	font-family: Canela Trial;
}
.montreal {
	font-family: "PP Neue Montreal  ", sans-serif;
}
.canela {
	font-family: Canela Trial;
}
.image-container {
	background-color: black; /* Set the background color to black for the first image */
	display: flex; /* Use flexbox to align images horizontally */
	align-items: center; /* Vertically center the images */
	justify-content: right; /* Horizontally center the images */
}

.image-container2 {
	background-color: black; /* Set the background color to black for the first image */
	display: flex; /* Use flexbox to align images horizontally */
	align-items: center; /* Vertically center the images */
	justify-content: center; /* Horizontally center the images */
}

.image-container img {
	width: 65.3%; /* Make the images fill the entire container */
	height: 100%; /* Make the images fill the entire container */
	object-fit: cover; /* Maintain the aspect ratio and cover the entire container */
}
</style>
