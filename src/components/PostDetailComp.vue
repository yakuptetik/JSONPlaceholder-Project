<script setup>
import { ref } from 'vue'
import { usePostStore } from '../store/posts';
import {  useRouter } from 'vue-router';
import UpdateModalVue from '../components/modal/UpdateModal.vue'
const postStore = usePostStore();

const router = useRouter()


const isModalShow = ref(false); 
const isDeleting = ref(false)

function handleDelete(post,id) {
  isDeleting.value = true
    setTimeout(() => {
      postStore.deletePost(post,id)
        .then(() => {
        router.push({ name: 'Home' })
        setTimeout(() => {
        alert('Deleted Successfully...')
      }, 100)
        })
        .catch((err) => {
          alert(err.message);
        });
		}, 1000);
}

const props = defineProps({
  body:String,
  title:String,
  id: Number,
  post:Object
})
</script>
<template>
  <div>
    <div class="flex items-center justify-center text-[#00bd7e] gap-3 text-3xl mb-3">
    <div>
      <span class="text-[#9a9a9a]"> Post number</span> 
      {{ id }}
    </div>
      
    </div>
      <div class="flex items-center justify-center ">
    <div class="bg-[#353535] w-1/2 p-5 rounded-lg ">
      <div  class="flex gap-2 items-center justify-end pb-2">
      <div @click="isModalShow = true" class="right-12 bg-[#00bd7e] px-1 rounded-md cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.991,10H19.42a1.039,1.039,0,0,1-.951-.674l-.005-.013a1.04,1.04,0,0,1,.2-1.146l1.11-1.11a1.01,1.01,0,0,0,0-1.428l-1.4-1.4a1.01,1.01,0,0,0-1.428,0l-1.11,1.11a1.04,1.04,0,0,1-1.146.2l-.013,0A1.04,1.04,0,0,1,14,4.579V3.009A1.009,1.009,0,0,0,12.991,2H11.009A1.009,1.009,0,0,0,10,3.009v1.57a1.04,1.04,0,0,1-.674.952l-.013,0a1.04,1.04,0,0,1-1.146-.2l-1.11-1.11a1.01,1.01,0,0,0-1.428,0l-1.4,1.4a1.01,1.01,0,0,0,0,1.428l1.11,1.11a1.04,1.04,0,0,1,.2,1.146l0,.013A1.039,1.039,0,0,1,4.58,10H3.009A1.009,1.009,0,0,0,2,11.009v1.982A1.009,1.009,0,0,0,3.009,14H4.58a1.039,1.039,0,0,1,.951.674l0,.013a1.04,1.04,0,0,1-.2,1.146l-1.11,1.11a1.01,1.01,0,0,0,0,1.428l1.4,1.4a1.01,1.01,0,0,0,1.428,0l1.11-1.11a1.04,1.04,0,0,1,1.146-.2l.013.005A1.039,1.039,0,0,1,10,19.42v1.571A1.009,1.009,0,0,0,11.009,22h1.982A1.009,1.009,0,0,0,14,20.991V19.42a1.039,1.039,0,0,1,.674-.951l.013-.005a1.04,1.04,0,0,1,1.146.2l1.11,1.11a1.01,1.01,0,0,0,1.428,0l1.4-1.4a1.01,1.01,0,0,0,0-1.428l-1.11-1.11a1.04,1.04,0,0,1-.2-1.146l.005-.013A1.039,1.039,0,0,1,19.42,14h1.571A1.009,1.009,0,0,0,22,12.991V11.009A1.009,1.009,0,0,0,20.991,10ZM12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/>
            </g>
        </svg>
      </div>
      <UpdateModalVue :post="{ ...post }" v-if="isModalShow" @close-modal="isModalShow = false" />
      <div @click="handleDelete(post.id)" class="right-4 bg-red-500 px-1 rounded-md cursor-pointer">
        <template v-if="isDeleting">
        <div class="animate-spin ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
              <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        </div>
        </template>
        <template v-else >
          <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
              <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        </div>
        </template>
      
      </div>
      </div>
      <div class="text-2xl text-[#00bd7e] flex items-center justify-center my-4">
        <div class="uppercase">
          {{ title }}
        </div>
      </div>
      <div class="flex mb-4">
        <div class="text-[#9a9a9a]">
          {{ body }}
        </div>
      </div>
    </div>
  </div>  
    </div>

</template>