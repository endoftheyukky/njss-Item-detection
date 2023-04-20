<template>
  <div class="file-uploader">
    <input type="file" @change="onFileChange" id="file-input" />
    <label for="file-input" class="file-input-label">ファイルを選択</label>
    <button class="start-extraction-btn" @click="startExtraction">抽出開始</button>
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
<style scoped>
.file-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 4px;
}

.file-uploader button {
  cursor: pointer;
}
</style>