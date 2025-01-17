<script setup lang="ts">
type FileInputPropsType = {
  changeEvent?: (e: Event) => void;
};
const { changeEvent } = defineProps<FileInputPropsType>();
</script>

<template>
  <input
    id="fileInput"
    name="file"
    type="file"
    @change="changeEvent"
    style="display: none"
  />
  <label
    for="fileInput"
    id="fileLabel"
    class="round-sm basic bright"
    >이미지 업로드</label
  >
</template>

<style scoped lang="scss">
label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}

.round-sm {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.basic {
  color: #fff;
  background-color: #12b886;
  border: none;
}
</style>
