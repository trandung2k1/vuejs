<template>
    <div>
        <h1 ref="title">Home</h1>
        <input type="text" ref="input" />
        <button @click="increment">Count is: {{ count }}</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import axios from 'axios';
const count = ref(0);
const todos = ref([]);
const title = ref(null);
const input = ref(null);
const fetchData = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
        todos.value = res.data;
    } catch (error) {
        console.log(error);
    }
};
fetchData();
function increment() {
    count.value++;
}
onMounted(() => {
    console.log(title.value);
    input.value.focus();

    console.log(`The initial count is ${count.value}.`);
});
onBeforeMount(() => {
    console.log('Before mount');
});
</script>

<style></style>
