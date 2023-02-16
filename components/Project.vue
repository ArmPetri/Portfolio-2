
<template>
  <!-- <div class="">
    <NuxtLink :to="`/${project.id}`">
      <img :src="(`_nuxt/assets/img/${project.image}`)" alt="">      
    </NuxtLink>
    <p>{{ project.title }}</p>
    <div>
      <NuxtLink :to="`/${project.id}`">
        <p>See More</p>
      </NuxtLink>
    </div>
  </div> -->

  <div class="flex mt-[50px] mb-[70px]">
    <!-- Project Image  -->
    <img :src="(`_nuxt/assets/img/${project.image}`)" alt="" class="w-1/2 border-2 border-black">     
    
    <!-- Feature Card & Action Buttons  -->
    <div class="flex flex-col w-1/2 ml-[75px]">

      <!-- Feature Card -->
      <div class="w-full h-[241px] border-2 border-black rounded-xl overflow-hidden shadow-myShadow">

        <div class="w-full h-[77px] pl-5 flex flex-col justify-center">
          <p class="text-xs text-[#469E63] font-semibold">Features</p>
          <h4 class="text-[30px] leading-none font-bold mt-[7px]">{{ project.title }}</h4>
        </div>

        <div class="border-t border-black w-full h-[164px] flex">
          <div class="border-r border-black w-[296px] h-full ml-[24px] flex flex-col pt-[19px]">
            <p class="text-xs text-[#469E63] font-semibold">Project Type: </p>
            <p class="text-[14px] mt-[5px]">Crypto Portfolio Tracker</p>
            <p class="text-xs text-[#469E63] font-semibold mt-[12px]">Project Description: </p>
            <p class="text-[14px]  mt-[5px]">Crypto portfolio tracker inspired <br>
              by coingecko.com and using it’s AP</p>
          </div>

          <div class="ml-[24px] flex flex-col pt-[19px]">
            <p class="text-xs text-[#469E63] font-semibold">Project Type: </p>
            <ul class="text-[14px] list-disc mt-[5px] ml-[24px]">
              <li>HTML</li>
              <li>CSS</li>
              <li>React Js</li>
              <li>Styled components</li>
            </ul>
          </div>     
        </div>

      </div>

      <!-- Action Buttons  -->
      <div class="w-full h-[54px] bg-[#EEBC39]  mt-[33px] flex justify-around items-center rounded-xl border-2 border-black shadow-myShadow">
        <NuxtLink :to="`/${project.id}`" class="flex justify-center items-center">
        <p class="text-[18px] font-bold mr-[14px]">READ MORE</p>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6562 9.99419V19.5009C21.6562 20.8794 20.5349 22 19.1572 22H2.50044C1.12131 22 0 20.8794 0 19.5009V2.49838C0 1.12063 1.12131 0 2.50044 0H11.6621C12.1213 0 12.4946 0.372625 12.4946 0.832562C12.4946 1.2925 12.1213 1.66581 11.6621 1.66581H2.50044C2.03981 1.66581 1.6665 2.03981 1.6665 2.49838V19.5009C1.6665 19.9602 2.03981 20.3335 2.50044 20.3335H19.1579C19.6171 20.3335 19.9904 19.9602 19.9904 19.5009V9.99419C19.9904 9.53425 20.3624 9.16094 20.823 9.16094C21.2836 9.16094 21.6562 9.53425 21.6562 9.99419ZM20.8223 0H14.9332C14.4726 0 14.1006 0.372625 14.1006 0.832562C14.1006 1.2925 14.4726 1.66581 14.9332 1.66581H18.8128L9.3885 11.088C9.06331 11.4139 9.06331 11.9412 9.3885 12.2664C9.55075 12.4286 9.76319 12.5097 9.97631 12.5097C10.1894 12.5097 10.4033 12.4286 10.5655 12.2664L19.9898 2.8435V6.72237C19.9898 7.18231 20.3617 7.55494 20.8223 7.55494C21.2829 7.55494 21.6562 7.18231 21.6562 6.72237V0.832562C21.6562 0.372625 21.2829 0 20.8223 0Z" fill="black"/>
        </svg>
      </NuxtLink>
      <NuxtLink :to="`${project.links[0]}`" target="_blank" class="flex justify-center items-center text-[18px] font-bold mr-[14px]">
        <p class="text-[18px] font-bold mr-[14px]">See Code </p>
        <svg class="ml-[19px]" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.2685C0 15.8916 1.83152 16.8387 3.15604 15.9005L11.8136 9.76809C12.9389 8.97101 12.9389 7.30107 11.8136 6.50399L3.15604 0.371565C1.83152 -0.566634 0 0.38048 0 2.00361L0 14.2685Z" fill="black"/>
        </svg>
      </NuxtLink>
      <NuxtLink :to="`${project.links[1]}`" target="_blank" class="flex justify-center items-center text-[18px] font-bold mr-[14px]">
        <p class="text-[18px] font-bold mr-[14px]">Live Site</p>
        <svg class="ml-[19px]" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.2685C0 15.8916 1.83152 16.8387 3.15604 15.9005L11.8136 9.76809C12.9389 8.97101 12.9389 7.30107 11.8136 6.50399L3.15604 0.371565C1.83152 -0.566634 0 0.38048 0 2.00361L0 14.2685Z" fill="black"/>
        </svg>
      </NuxtLink>  
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { project } = defineProps(['project'])
  
  const imgLink = "~/assets/img/" + project.image
  // console.log(typeof project.links[1])
  
</script>
