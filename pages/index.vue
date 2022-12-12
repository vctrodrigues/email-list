<script lang="ts" setup>
import { H1 } from "@cleancloud/design-system";
</script>

<template>
  <div class="app-home app-pa--md app-gap--sm">
    <H1 extrabold>My email list</H1>
    <EmailCreator />
  </div>
</template>

<style lang="scss" scoped>
.app-home {
  display: flex;
  flex-direction: column;
}
</style>
