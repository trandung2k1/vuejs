<template>
    <div>
        <h1>Children component</h1>
        <button @click="$emit('add', Math.floor(Math.random() * 10))">Add random number</button>
        <button @click="handleClick">Alert msg</button>
    </div>
</template>

<script>
export default {
    name: 'Children',
    methods: {
        handleClick: function () {
            this.$emit('display', 'Hehe');
        },
    },
};
</script>

<style></style>
