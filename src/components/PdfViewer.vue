<template>
  <div>
    <iframe v-if="pdfUrl" class="pdf-iframe" :src="pdfUrl" height=100% frameborder="1"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    file: {
      type: Object as () => File | null,
      required: true,
    },
  },
  setup(props) {
    const pdfUrl = ref<string | null>(null);

    watch(
      () => props.file,
      (file) => {
        if (file) {
          pdfUrl.value = URL.createObjectURL(file);
        } else {
          pdfUrl.value = null;
        }
      }
    );

    return {
      pdfUrl,
    };
  },
});
</script>
<style scoped>
.pdf-iframe {
  width: 100%;
  height: 100%;
}
</style>

