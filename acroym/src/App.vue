<script setup>
// import Nav from "./components/Nav.vue"
// import {RouterView} from "vue-router"
</script>

<template>
	<div id="app">
		<navB />
		<RouterView />
	</div>
	<link href="https://fonts.cdnfonts.com/css/canela-text-trial" rel="stylesheet">
                
</template>

<script>
import navB from "./components/Nav.vue"
import models from "./components/Models.vue"

export default {
	components: { navB, models },
}
</script>

<style>
@import "/src/assets/tailwind.css";
::selection {
  background: #FF78FE; /* Your desired highlight color */
  color: black; /* Optional: change the text color */
}

/* For Mozilla Firefox */
::-moz-selection {
  background: #FF78FE;
  color: black;
}
</style>
