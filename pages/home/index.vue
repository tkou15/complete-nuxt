<script lang="ts" setup>
const counterStore = useCounterStore();
const { increment } = counterStore;
const { counter } = storeToRefs(counterStore);
</script>
<template src="./index.html"></template>
