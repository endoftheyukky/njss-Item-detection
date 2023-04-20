<template>
  <ul class="recommendation-list">
    <li v-for="(value, key) in data" :key="key" class="recommendation-item">
      <span class="key">{{ key }}</span>：<span class="value">{{ value }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.recommendation-list {
  list-style: none;
  padding: 0;
}

.recommendation-item {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.key {
  font-weight: 600;
  color: #000080;
}

.value {
  font-weight: 400;
  color: #000080;
}
</style>
