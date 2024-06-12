<!-- src/components/UploadFile.vue -->
<template>
  <div class="container mt-4" style="width: fit-content">
    <div class="mb-3">
      <label for="fileInput" class="form-label btn mt-2 px-4 py-3" :class="{'btn_bg_active': active, 'btn_bg_disabled': !active}"><slot></slot></label>
      <input v-show="false" type="file" class="form-control" id="fileInput" accept=".txt,.doc" @change="handleFileUpload">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  active: Boolean
})

const emit = defineEmits(['upload'])

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    emit('upload', file)
  }
};

</script>

<style scoped >
.btn_bg_active {
  background: var(--liner-green-btn);
  color: var(--ligth-text);
}

.btn_bg_active:hover {
  color: var(--ligth-text_hover);
}

.btn_bg_disabled {
  background: var(--ligth-background);
  color: var(--dark-text);
}

.btn_bg_disabled:hover {
  color: var(--dark-text_hover);
}

</style>
