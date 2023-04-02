<template>
    <div>
        <Header></Header>
        <ParentVue></ParentVue>
        <router-view />
    </div>
</template>
<script>
import Header from './components/Header.vue';
import ParentVue from './components/Parent.vue';

export default {
    name: 'App',
    components: { Header, ParentVue },
    methods: {},
};
</script>

<style scoped></style>
