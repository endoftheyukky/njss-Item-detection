<template>
  <ul>
    <li v-for="(value, key) in data" :key="key">
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
