<template>
  <ul class="recommendation-list">
    <li v-for="(value, key) in data" :key="key" class="recommendation-item">
      {{ key }}：{{ value }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});
</script>
<style scoped>
.recommendation-list {
  padding: 0;
  list-style-type: none;
  margin-top: 4rem; /* 上にスペースを追加（値を調整） */
}

.recommendation-item {
  font-size: 1.2rem; /* テキストサイズを変更 */
  padding: 0.5rem 0; /* 上下にパディングを追加 */
  border-bottom: 1px solid #ccc; /* 下線を追加 */
}

.recommendation-item:last-child {
  border-bottom: none; /* 最後の要素の下線を削除 */
}
</style>