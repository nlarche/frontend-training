<script setup lang="ts">
import { ref } from 'vue';
import PeopleCard from './PeopleCard.vue'
import { People, fetchPeoples } from '../domain/people'

const list = ref<People[]>([])
const title = ref("")

fetchPeoples().then(people => list.value = people)

const handlePeopleClick = (event: string) => title.value = event

</script>

<template>
    <h3>{{ title }}</h3>
    <PeopleCard v-for="people in list" :people="people" v-on:on-people-click="handlePeopleClick"></PeopleCard>
</template>