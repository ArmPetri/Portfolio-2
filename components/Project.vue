
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

  <div>
    <img :src="(`_nuxt/assets/img/${project.image}`)" alt="" class="w-1/2">      
    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
  const { project } = defineProps(['project'])
  
  const imgLink = "~/assets/img/" + project.image
  console.log(project.image)
  
</script>
