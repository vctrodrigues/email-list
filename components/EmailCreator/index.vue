<script lang="ts" setup>
import { Button, Textfield } from "@cleancloud/design-system";

const email = ref<string>("");

const emit = defineEmits<{
  (e: "add:email", v: string): void;
}>();

function onAdd() {
  if (!email.value) {
    return;
  }

  emit("add:email", email.value);
  email.value = "";
}
</script>

<template>
  <div class="app-email-creator app-gap--micro">
    <Textfield
      v-model="email"
      width="300px"
      placeholder="Type email address here"
    />
    <Button :disabled="!email" @click="onAdd">Add</Button>
  </div>
</template>

<style lang="scss" setup>
.app-email-creator {
  display: flex;
}
</style>
