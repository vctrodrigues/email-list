<template>
  <div
    class="app-sidebar app-pa--xxxs app-pt--xl app-pr--xl app-br--hairline app-bc--grey-300"
  >
    <img
      src="https://cleancloud.io/wp-content/uploads/CleanCloud_Logo.svg"
      alt="logotipo"
      class="app-sidebar__logo"
    />
    <NuxtLink to="/" class="app-sidebar__link app-mt--sm">
      <Button secondary>Create emails</Button>
    </NuxtLink>
    <NuxtLink to="/emails" class="app-sidebar__link app-mt--xxxs">
      <Button secondary>Email list</Button>
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

  .app-sidebar__logo {
    width: 160px;
  }
}
</style>
