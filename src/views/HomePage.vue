<template>
    <div>
      <h1>項目抽出システム</h1>
      <FileUploader @pdf-uploaded="onPdfUploaded" />
      <PdfViewer :pdf-data="pdfData" />
      <div>
        <h2>レコメンド</h2>
        <ul>
          <li v-for="(rec, index) in recommendations" :key="index">
            {{ rec.datetime }} - {{ rec.location }} - {{ rec.result }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import FileUploader from "../components/FileUploader.vue";
  import PdfViewer from "../components/PdfViewer.vue";
  
  export default defineComponent({
    components: {
      FileUploader,
      PdfViewer,
    },
    setup() {
      const pdfData = ref<File | null>(null);
      const recommendations = ref<any[]>([]);
  
      const onPdfUploaded = (file: File, analysisResult: any[]) => {
        pdfData.value = file;
        recommendations.value = analysisResult;
      };
  
      return {
        pdfData,
        onPdfUploaded,
        recommendations,
      };
    },
  });
  </script>
  