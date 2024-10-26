<template>
  <app-bar></app-bar>
  <main>
    <div class="main__content">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  width: 100%;

  .main__content {
    max-width: 1440px;
    width: inherit;
    padding: 16px;
  }
}
</style>
