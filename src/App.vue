<script setup>
import { usePostStore } from './store/posts';

const postStore = usePostStore();

postStore.fetchPosts();
</script>

<template>
<!-- Loading gelcek -->
<div class="font-sans h-full w-screen py-12">
  <router-view/>
  </div>
</template>


