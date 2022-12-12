<script lang="ts" setup>
import { AlertBar, Button, Textfield } from "@cleancloud/design-system";
import { useEmailStore } from "@/store/email";

const email = ref<string>("");
const active = ref<boolean>(false);

const { addEmail } = useEmailStore();

function onAdd() {
  if (!email.value) {
    return;
  }

  addEmail(email.value);
  active.value = true;
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

    <AlertBar v-model="active" info light>Ok! Email added.</AlertBar>
  </div>
</template>

<style lang="scss" setup>
.app-email-creator {
  display: flex;
}
</style>
