<template>
    <div>
        <h1>Parent Component</h1>
        <ChildrenVue @add="(i) => handleIncrease(i)" @display="(i) => handleDisplay(i)" />
        <p>Count: {{ count }}</p>
    </div>
</template>

<script>
import ChildrenVue from './Children.vue';
import { ref } from 'vue';
export default {
    name: 'ParentComponent',
    components: { ChildrenVue },
    setup() {
        const count = ref(0);
        const handleIncrease = (i) => {
            count.value = count.value + i;
        };
        const handleDisplay = (msg) => {
            alert(msg);
        };
        return {
            count,
            handleIncrease,
            handleDisplay,
        };
    },
};
</script>

<style></style>
