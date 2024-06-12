<script setup>

defineProps({
  active: Boolean,
})

const emit = defineEmits(['onclick'])

</script>

<template>
  <button type="button" :class="{'btn_bg_active': active, 'btn_bg_disabled': !active}" class="btn px-4 py-2 m-1 size" @click="emit('onclick')">
    <slot></slot>
  </button>
</template>

<style scoped>
.size {
  min-width: 250px;
}
.btn_bg_active {
  background: var(--liner-green-btn);
  color: var(--ligth-text);
}

.btn_bg_active:hover {
  color: var(--ligth-text_hover);
}

.btn_bg_disabled {
  background: var(--disabled-btn);
  color: var(--ligth-text);
}

.btn_bg_disabled:hover {
  background: var(--disabled-btn_hover);
  color: var(--ligth-text);
}

</style>
