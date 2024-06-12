<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-9">
        <h1 class="text-light">
          Evaluate a CV of a candidate with AI
        </h1>
      </div>
      <div class="col-sm-3">
        <div class="d-flex flex-column justify-content-between">
          <app-button :active="false">
            <h4>
               Paste your job description
            </h4>
          </app-button>
          <br/>
          <app-button :active="!!cvArray.length" @onclick="goToCv">
            <h4 v-if="!!cvArray.length">
              CVs Uploaded!
            </h4>
            <h4 v-else>
              Upload some CV
            </h4>
          </app-button>
          <br/>
          <br/>
          <br/>
          <app-button :active="true">
            <h4>
              Analyze
            </h4>
            <span class="fw-light">({{tokens}} tokens)</span>
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, computed} from 'vue';
import AppButton from "../components/ui/AppButton.vue";
import {useRouter} from "vue-router";
import {useAppStore} from "../store/index.js";

const router = useRouter()

const appStore = useAppStore()

const cvArray = computed(() => appStore.cvArray);

const tokens = computed(() => appStore.tokens);

const goToCv = () => {
    router.push({
      name: 'upload'
    })
}

onMounted(() => {
  useAppStore()
});
</script>
