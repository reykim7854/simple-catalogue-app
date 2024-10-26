<template>
  <header class="header">
    <div class="header__content">
      <nav>
        <NuxtLink to="/">
          <h1>FAKE STORE</h1>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
a {
  color: initial;
  text-decoration: none;

  &:visited {
    color: initial;
  }
}

.header {
  background-color: #e991b6;
  display: flex;
  justify-content: center;

  .header__content {
    width: 100%;
    max-width: 1440px;
    padding: 0 16px;
  }
}
</style>
