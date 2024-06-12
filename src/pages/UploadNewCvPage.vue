<script setup>
import UploadButton from "../components/modules/UploadButton.vue";
import AppButton from "../components/ui/AppButton.vue";
import {computed, reactive} from "vue";
import API from "../firebase/api.js";
import {useAppStore} from "../store/index.js";

const appStore = useAppStore()

const cvArray = computed(() => appStore.cvArray);

const tokens = computed(() => appStore.tokens);

const payload = reactive({
  name: '',
  description: '',
  position: 'Frontend Developer',
})
const uploadCv = (file) => {
  payload.name = file.name
  appStore.uploadCvData(payload)
}

</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center col-6">
    <h2 class="text-light">Add new candidates</h2>
    <div>
      <label class="text-light mb-1">Choose a role for CV evaluation from current jobs:</label>
      <select v-model="payload.position" class="form-select">
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full-stack Developer">Full-stack Developer</option>
      </select>
    </div>
    <br />
    <div class="form-floating w-100">
      <div class="form-floating">
        <textarea v-model="payload.description" class="form-control" placeholder="... or paste a new Job Description" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Description</label>
      </div>
    </div>
    <br />
    <upload-button :active="!!cvArray.length" @upload="uploadCv">
      <h2>
        Upload new CVs
      </h2>
    </upload-button>
    <br />
    <app-button :active="true">
      <h4>
        Analyze
      </h4>
      <span class="fw-light">({{tokens}} tokens)</span>
    </app-button>
  </div>
</template>

<style scoped>

</style>
