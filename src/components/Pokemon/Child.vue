<template>
  <div class="text-center">
    <button class="btn btn-sm" @click="sendEmit">Generate</button>
  </div>
</template>
<script setup>
const emits = defineEmits(["generate-pokemon"]);
function sendEmit() {
  emits("generate-pokemon");
}
</script>

<style scoped></style>
