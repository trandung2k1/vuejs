<template>
    <h1>About Page</h1>
    <div>
        <label>Title: </label>
        <input v-model="title" />
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
    setup() {
        const posts = ref([]);
        const title = ref('');
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
                posts.value = res.data;
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        return {
            posts,
            title,
            fetchData,
        };
    },
};
</script>

<style></style>
