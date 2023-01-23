<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '../../store/posts';
import SuccesModal from './SuccesModal.vue';

const postStore = usePostStore();
const isUpdateLoading = ref(false);
const isSucces = ref(false); 

const form = ref({
	title: '',
	body: ''
});


const props = defineProps({
	post: Object
});

const emit = defineEmits([
	'close-modal',
]);

onMounted(() => {
	if (props.post) {
		form.value = props.post;
	}
});

function handleAdd() {
	isUpdateLoading.value = true;
	postStore.updatePost({ ...form.value })
		.then(() => {
      isSucces.value = true;
      setTimeout(() => {
        emit('close-modal');
      }, 1300)
		})
		.catch((err) => {
      console.log(err);
		});
}


</script>
<template>
  <div class="flex justify-center bg-[#00000086] fixed items-center top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleAdd()" class="bg-[#353535] p-4  mx-4 rounded-xl" @click.stop>
      <div class="flex justify-between items-center text-[#00bd7e] gap-3">
        <div>
          <span class="text-[#9a9a9a]">Update post number</span> {{ post.id }}
        </div>

        <div class="cursor-pointer " @click="$emit('close-modal')" @keypress="'close-modal'">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
            <path d="m6 6 20 20" />
            <path d="m26 6-20 20" />
          </svg>
        </div>
      </div>

      <div class="py-8">
        <div class="flex items-center justify-between gap-3 mt-3">
          <div class="w-full">
            <label class="block text-[#00bd7e]" for="age">
              title
            </label>
            <input
              required
              v-model="form.title"
              type="text"
              placeholder="title..."
              class="w-full px-4 py-2 mt-2 rounded-md text-[#9a9a9a] bg-[#181818] outline-none focus:outline focus:outline-[#00bd7e]"
            >
          </div>

          <div class="w-full ">
            <label class="block text-[#00bd7e]" for="lesson">
              body :
            </label>
            <input
              required
              v-model="form.body"
              type="text"
              placeholder="body..."
              class="w-full px-4 py-2 mt-2 rounded-md bg-[#181818] text-[#9a9a9a] outline-none focus:outline focus:outline-[#00bd7e]"
            >
          </div>
          <SuccesModal :post="post" v-if="isSucces" @close-modal="isModalShow = false" />
        </div>
      </div>
      <div class="relative flex items-center pt-3">
        <button type="submit" class="cursor-pointer pt-3 absolute right-0 bottom-0">
          <div class="bg-[#00bd7e] hover:bg-[#23956f]  rounded-lg px-3 py-1 text-black ">
            <template v-if="isUpdateLoading">
              <div role="status" class="flex items-center justify-center text-vlack text-md space-x-2">
                <svg class="h-6 w-6 animate-spin stroke-black" viewBox="0 0 256 256">
                  <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                  <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                </svg>
                <span class="">Save</span>
              </div>
            </template>

            <template v-else>
              <div role="status" class="flex items-center justify-center text-md space-x-2">
                <span class=" h-6 flex items-center">Save</span>
              </div>
            </template>
          </div>

        </button>
      </div>
    </form>
  </div>
</template>
