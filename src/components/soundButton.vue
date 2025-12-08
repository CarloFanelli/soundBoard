<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { audioBus } from '../lib/audioBus';

const props = defineProps<{
  label?: string;
  color?: string;
  soundUrl: string;
  id?: string;
}>();

const buttonId = computed(() => props.id ?? `${props.label ?? 'Sound'}::${props.soundUrl}`);
const isPlaying = ref(false);

function togglePlay() {
  const state = audioBus.play(buttonId.value, props.soundUrl);
  isPlaying.value = state === 'playing';
}

// Aggiorna l’indicatore quando cambia il suono globale
watch(
  () => audioBus.currentId.value,
  (current) => {
    isPlaying.value = current === buttonId.value;
  },
  { immediate: true }
);

const baseColor = computed(() => props.color ?? '#8B0000');
</script>

<template>
  <button
    class="w-full h-full min-h-14 border rounded-md flex items-center justify-center transition"
    :style="{
      borderColor: baseColor,
      color: '#fff',
      background: isPlaying ? 'rgba(255,255,255,0.08)' : 'transparent',
      boxShadow: isPlaying ? `0 0 0 2px ${baseColor}` : 'none'
    }"
    @click="togglePlay"
  >
    <div class="flex items-center gap-2 flex-col">
      <span
        class="inline-block h-2.5 w-2.5 rounded-full"
        :style="{ background: isPlaying ? baseColor : 'transparent', border: `1px solid ${baseColor}` }"
        aria-hidden="true"
      />
      <span class="font-medium">{{ label ?? 'Sound' }}</span>
    </div>
  </button>
</template>

<style scoped>
button:hover { filter: brightness(1.12); }
button:active { transform: scale(0.98); }
</style>