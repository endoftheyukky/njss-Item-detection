<template>
  <div>
    <header>
      <h1>項目抽出システム</h1>
    </header>
    <main>
      <section class="left-section">
        <file-uploader
          @uploaded="onFileUploaded"
          @start-extraction="startExtraction"
        ></file-uploader>
        <recommendation-list v-if="recommendations" :data="recommendations" />
      </section>
      <section class="right-section">
        <pdf-viewer :file="selectedFile" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FileUploader from './components/FileUploader.vue';
import PdfViewer from './components/PdfViewer.vue';
import RecommendationList from './components/RecommendationList.vue';

export default defineComponent({
  components: {
    FileUploader,
    PdfViewer,
    RecommendationList
  },
  setup() {
    const selectedFile = ref<File | null>(null);
    const recommendations = ref<Record<string, string> | undefined>(undefined);

    function onFileUploaded(file: File) {
      selectedFile.value = file;
    }

    function startExtraction() {
      // ここで仮のJSONデータをセット
      recommendations.value = {
        案件名: 'テスト工事案件',
        入札形式: '一般競争入札',
        公示日: '2023年1月1日',
        入札日: '2023年1月31日',
        履行場所: '東京都'
      };
    }

    return {
      selectedFile,
      recommendations,
      onFileUploaded,
      startExtraction
    };
  }
});
</script>
<style scoped>
main {
  display: flex;
  height: calc(100vh - 4rem);
}

section {
  flex: 1;
  width: 50%;
  height: 100%;
  padding: 1rem;
}

header {
  background-color: #000080;
  padding: 1rem;
  margin: 0
}

h1 {
  color: #fff;
  margin: 0;
}

html, body {
  height: 100%;
  margin: 0;
}
</style>