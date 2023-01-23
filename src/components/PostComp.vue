<script setup>
import { ref } from 'vue'
import CreateForm from '../components/modal/CreateForm.vue';


const isCreateModal = ref(false); 


defineProps({
  posts:Object
})
</script>
<template>
    <CreateForm  v-if="isCreateModal" @close-modal="isCreateModal = false"/>
    <div class="px-12 flex justify-between py-4">
      <a href="https://github.com/yakuptetik" target="_blank"  class="text-[#00bd7e] flex justify-center items-center italic font-bold ">
    <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 16 16" fill="none">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <path fill="#00bd7e" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"/>
      </g>
    </svg> 
    <div>
      Github
    </div>
  </a>
      <div class="text-[#9a9a9a] flex items-center gap-2">
      Total posts
      <span class="text-[#00bd7e]">
        {{ posts.length }}
      </span> 
  </div>
      <button @click="isCreateModal = true" class="mr-3 bg-[#00bd7e] px-2 rounded-md">
        + Add Post
      </button>
  </div>
  <div class="grid grid-cols-2 gap-4 px-12">
    <div v-for="post in posts" class="cursor-pointer bg-[#353535] h-full w-full relative rounded-xl">
      <router-link class=" h-full w-full p-1" :to="{ name: 'Post', params: { id: post.id }}">
        <div class="p-4">
          <div class="text-left text-[#9a9a9a]">
            {{ post.id }}
          </div>
          <div class="text-xl text-[#56be7f] font-bold uppercase text-left pb-2">
            {{ post.title }}
          </div>
          <div class="text-left text-[#9a9a9a]">
            {{ post.body }}
          </div>
        
        </div>
      </router-link>
    </div>  
  </div>
</template>