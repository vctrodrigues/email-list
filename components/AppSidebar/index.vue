<template>
  <div class="app-sidebar app-pa--xxxs">
    <img src="" alt="logotipo" />
    <NuxtLink to="/" class="app-sidebar__link app-mt--sm">
      <Button ghost>Create emails</Button>
    </NuxtLink>
    <NuxtLink to="/emails" class="app-sidebar__link app-mt--xxxs">
      <Button ghost>Email list</Button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" setup>
.app-sidebar {
  display: flex;
  flex-direction: column;

  .app-sidebar__link {
    text-decoration: none;
    color: inherit;
  }
}
</style>
