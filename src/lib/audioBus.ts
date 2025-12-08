import { ref } from 'vue';
//singleton per la gestione di un audio alla volta

class AudioBus {
  // id reattivo del suono corrente
  currentId = ref<string | undefined>(undefined);
  private current?: { id: string; audio: HTMLAudioElement };

  play(id: string, url: string) {
    // Toggle: se è lo stesso, stoppa
    if (this.current && this.current.id === id) {
      this.stop();
      return 'stopped';
    }
    // Stoppa qualsiasi suono in corso
    this.stop();

    const audio = new Audio(url);
    audio.play().catch(() => {});
    this.current = { id, audio };
    this.currentId.value = id;

    audio.addEventListener('ended', () => {
      if (this.current?.audio === audio) {
        this.current = undefined;
        this.currentId.value = undefined;
      }
    });
    return 'playing';
  }

  stop() {
    if (!this.current) {
      this.currentId.value = undefined;
      return;
    }
    try {
      this.current.audio.pause();
      this.current.audio.currentTime = 0;
    } finally {
      this.current = undefined;
      this.currentId.value = undefined;
    }
  }

  isPlaying(id: string) {
    return this.currentId.value === id;
  }
}

export const audioBus = new AudioBus();