<template>
	<section class="" ref="content">
		<div class="mt-[150px]">
			<h2 class="text-black text-center font-thin ">
				<div class="ml-[16px] mr-[16px]">
					<span class="text-black text-center canela md:text-[246.645px]  text-[129px] not-italic font-thin leading-[140px] md:leading-[255.149px]">Get in Touch</span>
				</div>
			</h2>
		</div>
		<div class="text-black montreal mt-[60px] text-center md:text-5xl text-3xl not-italic font-normal leading-[normal] index underline">INFO@ACRONYM.SK</div>
	</section>

	<div class="parallax">
		<div class="parallax-group">
			<div v-for="i in 6" :key="i" class="layer" :class="{ fill: i === 6 }"></div>
		</div>
		<div class="content">
			<button
  class="inline-flex mt-[42px] canela button-hover-effect items-center gap-1.5 border px-[24px] py-[24px] rounded-[69px] border-solid border-[#FF78FE] text-[#FF78FE] text-center text-[50px] md:text-[50px] not-italic font-thin leading-[normal] transition-all duration-300  hover:bg-[#FF78FE] hover:text-white hover:border-transparent"
  @click="composeEmailInGmail">
  Mail Us <img src="../assets/arrow.svg" alt="" class="arrow transform transition-transform duration-300" />
</button>  </div>
	</div>
	<!-- <Foota /> -->
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
	},
	mounted() {
		this.playGSAPAnimation()
		this.animationTimeline.play()
	},
}
</script>
<style lang="scss">
	@import "bourbon";

// $farColor: #f4b8ff;
$farColor: #FF78FE;
$nearColor: rgb(255, 255, 255);
$layer: 7; // +1 the number of layer divs in the HTML
$perspective: 1;

.bg {
  position: absolute;
  top: 0px;
  z-index: 0;
  background-color: $farColor;
}
.parallax::-webkit-scrollbar {
  width: 0px;
}

.parallax::-webkit-scrollbar-thumb {
  background: transparent; /* or use a light shade that blends into the design */
}



.layer {
  position: fixed;
  top: 0px;
  margin: auto;
  width: 100%;
  z-index: 100000;
  min-height: 400px;
  top: 0; left: 0; right: 0; bottom: 0;
  background-position: top center;
  background-repeat: no-repeat;
}
.content {
  position: relative;
  background-color: transparent;
  font-family: "Arial";
  letter-spacing: 10px;
  text-transform: uppercase;
  line-height: 40px;
  z-index: 1000;
  width: 100%;
  font-size: 15px;
  text-align: center;
  color: rgb(228, 25, 255);
  margin-top: 1000px;
  $zDepth: 1 / 0.5;
  transform: translateZ(-$zDepth + px) scale(1 + $zDepth / $perspective);
}

.parallax {
  height: 100vh;
//   margin-top: -5cm;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: #{$perspective}px;
  -ms-overflow-style: none;  /* for Internet Explorer and Edge */
  scrollbar-width: none;  /* for Firefox */

}

.parallax-group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}

@for $i from 1 to $layer {
  .parallax-group div:nth-child(#{$i}) {
    $mixedColor: mix($nearColor, $farColor, $i * 15);
    $randOffset: random(300) + px;
    $zDepth: ($layer - $i) / 0.5;
	
    
    background-color: $farColor;    
    margin-top: #{300 * ($i + 1)}px;
    background-color: $mixedColor;
    transform: translateZ(-$zDepth + px) scale(1 + $zDepth / $perspective);
    
    &:before {
      content: "";
      width: 100%;
      height: 200px;
      position: absolute;
      bottom: 100%;
      left: 0;
      background-image: linear-gradient(125deg, transparent 62%, $mixedColor 66.01%),
                        linear-gradient(15deg, $mixedColor 34%, transparent 54.01%);
      background-position: $randOffset 0px;
      background-size: 200px 100%;
      background-repeat: repeat-x;
    }
  }
}



.fill {
  height: 80%;
}

</style>

<style scoped>
.fontik {
	font-family: Canela Trial;
}

.arrow{
filter: invert(2);

}.button-hover-effect:hover .arrow {
  transform: translateX(5px); /* Move arrow to the right on hover */
  filter: invert(1);

}
.montreal {
	font-family: "PP Neue Montreal  ", sans-serif;
	font-weight: normal;
}
.canela {
	font-family: Canela Trial;
}
</style>
