<template>
  <div>
    <input type="file" @change="onFileChange" />
    <button @click="startExtraction">抽出開始</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['uploaded', 'start-extraction'],
  methods: {
    onFileChange(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        this.$emit('uploaded', target.files[0]);
      }
    },
    startExtraction() {
      this.$emit('start-extraction');
    }
  }
});
</script>
