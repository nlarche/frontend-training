<script setup lang="ts">
import { useTitleStore } from "../useTitleStore";
const store = useTitleStore()
</script>
<template>
    <h2>Star wars - {{ store.title }}</h2>
</template>