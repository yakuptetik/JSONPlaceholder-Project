<script setup>
import { ref } from 'vue'
import { usePostStore } from '../../store/posts';


const postStore = usePostStore();
const isSuccessPost = ref(false);


const title = ref('');
const body = ref('');

const emit = defineEmits([
	'close-modal',
]);

async function handleSubmit() {
  isSuccessPost.value = true;
	await postStore.addPost({ title: title.value, body: body.value })
		.then(() => {
      setTimeout(() => {
        alert('Created Successfully :)')
      }, 550)
      setTimeout(() => {
        emit('close-modal');
      }, 500)

		})
		.catch((err) => {
			alert(err.message);
		});
}

</script>

<template>

<div class="h-full">
  <div class="flex  bg-[#000000b2] fixed  px-12  justify-center items-start top-0 h-full right-0 left-0 z-30" @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleSubmit()" class="bg-[#000000] border mt-4 border-[#00bd7e] px-3 pb-4 pt-2 w-full rounded-xl" @click.stop>
     <div class="cursor-pointer  flex justify-end right-0 text-white text-sm" @click="$emit('close-modal')" @keypress="'close-modal'">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
          <path d="m6 6 20 20" />
          <path d="m26 6-20 20" />
        </svg>
      </div>
      <div class="gap-4 py-5 w-full flex items-center ">
      <input v-model="title" class="p-1 pl-5 m w-full bg-[#353535]  rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-[#00bd7e]" type="text" placeholder="title" required>
      <input v-model="body" class="p-1 pl-5 w-full bg-[#353535] rounded-full text-[#9a9a9a] outline-none focus:outline focus:outline-[#00bd7e]" type= "text" placeholder="body" required>
      <button type="submit" class="cursor-pointer w-[30%]">
        <div class="bg-[#00bd7e] hover:bg-[#23956f]  rounded-full px-3 py-1 text-white ">
          <template v-if="isSuccessPost">
            <div role="status" class="flex  items-center justify-center text-white text-md space-x-2 outline-none active:outline active:outline-[#00bd7e]">
              <svg class="h-6 w-6 animate-spin stroke-white" viewBox="0 0 256 256">
                <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
              </svg>
              <span class=" text-white">Posting...</span>
            </div>
          </template>

          <template v-else>
            <div role="status" class="flex items-center justify-center text-white text-md space-x-2">
              <span class=" text-white h-6 flex items-center">Post</span>
            </div>
          </template>
        </div>

      </button> 
      </div>
    </form>
  </div>
</div>


</template>