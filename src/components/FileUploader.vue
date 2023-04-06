<template>
    <div>
      <input type="file" @change="onFileSelected" accept=".pdf" />
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
emits: ["pdf-uploaded"],
methods: {
        onFileSelected(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const dummyAnalysisResult = [
            { datetime: "2023-04-06T10:00:00", location: "Location A", result: "Result A" },
            { datetime: "2023-04-06T14:00:00", location: "Location B", result: "Result B" },
            ];
            this.$emit("pdf-uploaded", file, dummyAnalysisResult);
        }
        },
    },
});
</script>
  