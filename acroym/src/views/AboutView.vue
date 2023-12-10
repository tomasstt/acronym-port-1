<template>
	<section class="" ref="content">
		<div class="mt-[150px]">
			<h2 class="text-black ml-[16px] mr-[16px] text-center text-[58px] font-thin leading-[60px]">
				<div class="">
					<span class="w-[1122px] canela text-black text-center text-[58px] not-italic font-thin leading-[60px]">
						We are passionate about crafting exceptional <br />
						web solutions and design experiences</span
					>
				</div>
			</h2>
		<div class="flex mt-[60px] justify-center">
        <img src="../assets/Macbook_Air_10 1.svg" 
             @load="imageLoaded = true" 
             :class="{'image-loading': !imageLoaded}" 
             alt="" />
    </div>

		</div>
		<div class="canela ml-[16px] mr-[16px] mt-[60px] text-black text-center text-[58px] not-italic font-thin leading-[60px]">that help businesses thrive in the digital world.</div>

		<div class="montreal ml-[16px] mr-[16px] text-black mt-[60px] text-center text-xs not-italic font-normal leading-[normal]">
			CURRENTLY BASED IN SALA, SLOVAKIA <br />
			WEB DESIGN STUDIO
		</div>
		<div class="flex justify-center">
			<p class="canela w-[844px] ml-[16px] mr-[16px] mt-[120px] text-black text-[32px] not-italic font-thin leading-[normal]">Our team of skilled professionals comprises web developers, designers, and strategists who are dedicated to delivering tailor-made solutions that align with your unique goals and objectives. We believe that every business has its own story to tell, and our mission is to bring that story to life through compelling web design and intuitive user experiences.</p>
		</div>

		<div class="flex justify-center">
			<p class="montreal ml-[16px] mr-[16px] w-[844px] mt-[60px] text-black text-xl not-italic font-normal leading-[normal]">What sets us apart is our commitment to understanding your business inside out. We take the time to listen to your requirements, goals, and challenges, ensuring that our solutions are not only visually stunning but also strategically aligned with your brand. Our collaborative approach means that we work closely with you throughout the process, incorporating your feedback and ideas to create a final product that exceeds your expectations.</p>
		</div>
		<div class="flex justify-center">
			<p class="montreal ml-[16px] mr-[16px] w-[844px] mt-[20px] text-black text-xl not-italic font-normal leading-[normal]">With our in-depth knowledge of the latest web technologies and design trends, we stay at the forefront of the industry. Whether you need a responsive website, an engaging e-commerce platform, or a custom web application, we have the expertise to turn your vision into reality. Our solutions are not only aesthetically pleasing but also optimized for performance, usability, and search engine visibility.</p>
		</div>
		<div class="montreal flex justify-center">
			<p class="montreal ml-[16px] mr-[16px] w-[844px] mt-[20px] text-black text-xl not-italic font-normal leading-[normal]">We understand that every project is unique, and we pride ourselves on providing personalized attention to each client. From small businesses to large enterprises, we have worked with a diverse range of clients across various industries. Our portfolio showcases our versatility and ability to adapt to different brand identities, ensuring that our designs are always tailored to your specific target audience.</p>
		</div>
	</section>

	<Foota />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import Models from "@/components/Models.vue"
import Foota from "@/components/Footer.vue"
import { gsap } from "gsap"

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
			lowQualityImage: '../assets/low_quality_macbook.png', // path to low-quality image
            highQualityImage: '../assets/Macbook_Air_10 1.svg', // path to high-quality image
            imageLoaded: false,

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
		onImageLoad() {
			this.imageLoaded = true
		},
	},
	mounted() {
		this.playGSAPAnimation()
		this.animationTimeline.play()
	},
}
</script>

<style scoped>
.fontik {
	font-family: Canela Trial;
}
.image {
	transition: filter 0.3s ease;
	filter: blur(10px);
}

.image-loaded {
	filter: blur(0);
}
.montreal {
	font-family: "PP Neue Montreal  ", sans-serif;
	font-weight: normal;
}
.canela {
	font-family: Canela Trial;
}
</style>
