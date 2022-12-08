<script lang="ts" setup>
import { H1 } from "@cleancloud/design-system";

const emails = ref<string[]>([]);

function onAddEmail(email: string) {
  emails.value.push(email);
}

function onRemoveEmail(index: number) {
  emails.value.splice(index, 1);
}
</script>

<template>
  <div class="app-home app-pa--md app-gap--sm">
    <H1 extrabold>My email list</H1>
    <EmailCreator @add:email="onAddEmail" />
    <EmailList :emails="emails" @remove:email="onRemoveEmail" />
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  display: flex;
  flex-direction: column;
}
</style>
