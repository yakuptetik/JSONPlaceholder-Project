import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from "axios"

export const usePostStore = defineStore('post', () => {
  const posts = ref([]);

  function fetchPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        posts.value = response.data;
        console.log('gellldi')
        localStorage.setItem('posts', JSON.stringify(posts.value));
      })
      .catch(() => {

      });
  }

  function getPost(postId) {
    return posts.value.find((post) => post.id === Number(postId))
  }


  function addPost(post) {
    return new Promise((resolve, reject) => {
      try {
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
          .then((response) => {
            posts.value.push({ ...response.data, id: posts.value.length +1 });
            localStorage.setItem('posts', JSON.stringify(posts.value));
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

  function deletePost(id) {
    return new Promise((resolve, reject) => {
      try {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}` )
          .then((response) => {
            const index = posts.value.findIndex((post) => post.id === id);
            if(index !== -1) {
              posts.value.splice(index, 1);
            }
            localStorage.setItem('posts', JSON.stringify(posts.value));
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

  function updatePost(post) {
    return new Promise((resolve, reject) => {
      try {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
          .then((response) => {
            const index = posts.value.findIndex((pst) => pst.id === post.id);
            if (index !== -1) {
              posts.value.splice(index, 1, post);
            }
            localStorage.setItem('posts', JSON.stringify(posts.value));
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

	return {posts, fetchPosts, deletePost, addPost, getPost, updatePost };
});