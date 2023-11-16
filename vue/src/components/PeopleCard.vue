<script setup lang="ts">
import { People } from '../domain/people';
import { useTitleStore } from '../useTitleStore';

interface PoepleProps {
  people: People
}
const { people } = defineProps<PoepleProps>()
const emit = defineEmits(['onPeopleClick'])
const store = useTitleStore()

function clickHandler() {
  emit("onPeopleClick", people.name)
  store.setTitle(people.name)
}

</script>

<template>
  <button type="button" @click="clickHandler"> {{ people.name }}</button>
</template>

