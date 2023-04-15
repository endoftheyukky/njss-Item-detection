<template>
  <div>
    <div ref="pdfViewer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted} from 'vue';
import { getPdf } from '../utils/pdf';

export default defineComponent({
  props: {
    file: {
      type: Object as () => File | null,
      required: true
    }
  },
  setup(props) {
    const pdfViewer = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (pdfViewer.value && props.file) {
        getPdf(props.file, pdfViewer);
      }
    });

    onUnmounted(() => {
      if (pdfViewer.value) {
        pdfViewer.value.innerHTML = '';
      }
    });

    return {
      pdfViewer
    };
  }
});
</script>
