<template>
    <div>
        <RouterView name="Header"></RouterView>
        <ParentVue></ParentVue>
        <router-view />
        <RouterView name="Footer"></RouterView>
    </div>
</template>
<script>
import ParentVue from './components/Parent.vue';
export default {
    name: 'App',
    components: { ParentVue },
    methods: {},
};
</script>

<style scoped></style>
