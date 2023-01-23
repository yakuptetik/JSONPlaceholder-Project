<script setup>
import { usePostStore } from '../store/posts';
import PostComp from '../components/PostComp.vue'

const postStore = usePostStore();
; 

</script>
<template>
  <div class=" text-4xl py-5">
      <a href="https://jsonplaceholder.typicode.com" target="_blank" class="flex items-center justify-center text-[#00bd7e]">
        {JSON} Placeholder
      </a>
      <div class="flex items-center justify-center text-[#9a9a9a]">
        API testing and prototyping project 
      </div>
  </div>
  <PostComp :posts="postStore.posts"/>
</template> 