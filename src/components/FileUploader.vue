<template>
  <div class="file-uploader">
    <div class="file-input-wrapper">
      <input class="file-input" type="text" :value="selectedFileName" readonly />
      <label class="file-label" for="file-input-element">参照</label>
      <input
        id="file-input-element"
        class="hidden-input"
        type="file"
        @change="onFileChange"
      />
    </div>
    <button @click="$emit('start-extraction')">抽出開始</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['uploaded', 'start-extraction'],
  setup(_, { emit }) {
    const fileInput = ref<HTMLInputElement | null>(null);
    const selectedFileName = ref<string>('');

    function onFileChange(event: Event) {
      const input = event.target as HTMLInputElement;
      const files = input.files;
      if (files && files.length > 0) {
        const file = files[0];
        selectedFileName.value = file.name;
        emit('uploaded', file);
      }
    }

    return {
      onFileChange,
      selectedFileName,
    };
  },
});
</script>
<style scoped>
.file-uploader {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: calc(100% - 2rem);
  margin-bottom: 6rem;
}

.file-input-wrapper {
  display: flex;
  position: relative;
  align-items: center;
  width: 60%;
}

.file-input {
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 4px 0 0 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}

.file-label {
  padding: 0.5rem;
  background-color: #f16d00; /* ボタンの背景色を変更 */
  border: 1px solid #f16d00; /* ボタンのボーダー色を変更 */
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  height: 100%;
  box-sizing: border-box;
  color: #fff; /* 文字色を変更 */
}

.hidden-input {
  display: none;
}

button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #000080; /* ボタンの背景色を変更 */
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s ease; /* ホバーエフェクトを追加 */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}

button:hover {
  background-color: #000080; /* ホバー時の背景色を変更 */
}
</style>
