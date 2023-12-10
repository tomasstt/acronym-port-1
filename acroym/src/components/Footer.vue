<template>
	
  <div class=" h-screen bg-white flex flex-col justify-between">
	
    <section>
      <h3
        class="pt-[160px] montreal text-black text-xs not-italic font-normal text-center leading-[normal]"
      >
        LET’S TALK
      </h3>
      <img class="mt-[15px] mx-auto" src="../assets/line.svg" alt="" />
    </section>

    <section class="text-center md:mt-[150px] mt-[90px]">
      <h1 class="text-black canela md:text-[58px]  text-[32px] not-italic font-thin leading-[normal]">
        Get in Touch
      </h1>
      <p
        class="mt-[24px] montreal text-black md:text-[20px] text-[18px] text-center ml-[16px] mr-[16px] not-italic font-normal leading-[normal]"
      >
        We love to partner with ambitious and visionary clients. Our <br class="hidden sm:inline" />
        approach is driven by passion for our craft and curiosity for your
        <br class="hidden sm:inline"/>
        tasks. We are always happy to discuss opportunities and ideas. <br class="hidden sm:inline"/>
        Just write us an email or give us a call.
      </p>
	  <button
  class="inline-flex mt-[42px] canela items-center gap-1.5 border px-[19px] py-[15px] rounded-[69px] border-solid border-[rgba(0,0,0,0.20)] text-black text-center text-[16px] md:text-xl not-italic font-thin leading-[normal] transition-all duration-300  hover:bg-black hover:text-white hover:border-transparent"
  @click="composeEmailInGmail">
  Send Mail <img src="../assets/arrow.svg" alt="" class="arrow-icon transform transition-transform duration-300" />
</button>

    </section>

	<footer class="bg-none montreal lg:block hidden text-black text-center mt-[150px] py-[15px]">
  <div class="flex justify-between">
    <!-- Left section with 2 links together -->
	<div class="w-[350px] ">
      <p class="text-xs not-italic font-normal uppercase">info@acronym.sk</p>
    </div>

    <!-- Center section with 2 links together -->
    <div class="">
      <div class="flex justify-center gap-[30px]">
        <p class="text-xs  not-italic uppercase font-normal">Behance</p>
        <p class="text-xs not-italic uppercase font-normal"><a href="https://www.instagram.com/acronym.sk">Instagram</a></p>
      </div>
    </div>

    <!-- Right section with 1 link -->
   
	<div class="flex gap-[30px] w-[350px]">
      <p class="text-xs not-italic uppercase font-normal">Privacy Policy</p>
      <p class="text-xs not-italic uppercase font-normal">Terms & Conditions</p>
    </div>
  </div>
</footer>
<footer class="montreal footer-text-m lg:hidden text-black text-center py-[24px] mt-[90px]">
  <div class="grid grid-cols-2 gap-y-4">
    <div class="ml-[16px] footer-text-m mr-[16px] flex flex-col items-start  justify-center">
      <p class=" not-italic font-normal uppercase"> info@acronym.sk</p>
      <p class=" not-italic uppercase font-normal mt-[24px] opacity-[0.4]">Privacy Policy</p>
    </div>
    <div class="flex flex-col items-end justify-center mr-[16px] ml-[16px]">
		
		<div class="flex footer-text-m justify-end space-x-[24px] mb-[24px] ">
        <p class=" not-italic uppercase font-normal">Behance</p>
        <p class=" not-italic uppercase font-normal"><a href="https://www.instagram.com/acronym.sk">Instagram</a></p>
      </div>
      <p class=" not-italic uppercase font-normal footer-text-m opacity-[0.4]">Terms & Conditions</p>
    </div>
  </div>
</footer>



  </div>
  
</template>

<script>
export default {


	methods: {
        composeEmailInGmail() {
            const recipient = 'INFO@ACRONYM.SK';
            const subject = encodeURIComponent('Website Discussion');
            const bodyText = `
Purpose of the Website:
- What is the primary goal of your website?
- Describe the nature of your business or project.
- Who is your target audience?

Design Preferences:
- Do you have any color schemes or themes in mind?
- Are there any websites you admire?

Functionality and Features:
- What specific functionalities do you need?

Budget and Timeline:
- What is your budget range for this project?
- What is your desired timeline for completing the website?

Ongoing Maintenance and Support:
- Will you require assistance with ongoing maintenance?
- Are you interested in ongoing support or marketing services post-launch?
`;

            const body = encodeURIComponent(bodyText);

            const gmailComposeUrl = `https://mail.google.com/mail/u/0/?fs=1&tf=1&to=${recipient}&su=${subject}&body=${body}&view=cm`;
            window.open(gmailComposeUrl, '_blank');
        },
	}
};
</script>
<style  scoped>
.arrow-icon {
  filter: invert(0);
  transition: filter 0.25s ease-in-out, transform 0.25s ease-in-out;
}

button:hover .arrow-icon {
  filter: invert(1);  
  transform: translate3d(5px, 0, 0);


}@media (min-width: 1000px) {
  .footer-text-m {
    font-size: 12px; /* Set the font size to 10px for small screens */
  }
}
@media (max-width: 1000px) {
  .footer-text-m {
    font-size: 11px; /* Set the font size to 10px for small screens */
  }
}


.montreal{
	font-family: 'PP Neue Montreal  ', ;

}
.canela{

	font-family: Canela Trial ;
}</style>
