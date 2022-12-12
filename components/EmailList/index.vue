<script lang="ts" setup>
import { Button, Span } from "@cleancloud/design-system";
import { useEmailStore } from "@/store/email";

const { removeEmail } = useEmailStore();

const props = defineProps<{
  emails: string[];
}>();

function onRemove(index: number) {
  removeEmail(index)
}
</script>

<template>
  <div class="app-email-list app-pa--micro app-gap--nano">
    <div
      v-for="(email, index) in props.emails"
      :key="email"
      class="app-email-list__item"
    >
      <Span color="primary500" body>{{ email }}</Span>
      <Button ghost small @click="onRemove(index)">Remove</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-email-list {
  display: flex;
  flex-direction: column;

  .app-email-list__item {
    display: flex;
    min-width: 350px;
    max-width: 800px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
