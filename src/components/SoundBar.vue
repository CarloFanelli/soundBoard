<script setup lang="ts">
import SoundButton from './soundButton.vue';

let buttons = [
    {
        label: 'bad joke drums', color: '#8B0000', soundUrl: '/sounds/bad-joke-drums.mp3'
    },
    {
        label: 'comedy punchline', color: '#0ea5e9', soundUrl: '/sounds/comedy-punchline-rimshot-comedy-drum-sound-effect.mp3'
    },
    {
        label: 'drum roll timpani', color: '#22c55e', soundUrl: '/sounds/drum-roll-timpani.mp3'
    },
    {
        label: 'suspense drums', color: '#eab308', soundUrl: '/sounds/suspense-drums.mp3'
    },
    {
        label: 'war drums', color: '#db2777', soundUrl: '/sounds/war-drums1.mp3'
    },
];

</script>

<template>
  <div class="h-full w-full bg-gray-950 text-white p-4">
    <div class="flex h-full flex-wrap content-stretch gap-3 overflow-hidden">

      <div class="flex-[1_1_120px]" v-for="button in buttons" :key="button.label">
        <SoundButton :label="button.label" :color="button.color" :soundUrl="button.soundUrl" />
      </div>
      
    </div>
  </div>
</template>

<style scoped>
</style>