<script lang="ts" setup>
import { useEmailStore } from "@/store/email";

const { emails } = useEmailStore();
</script>

<template>
  <div class="app-emails app-pa--md app-gap--sm">
    <H1 extrabold>My email list</H1>
    <EmailList :emails="emails" />
  </div>
</template>
