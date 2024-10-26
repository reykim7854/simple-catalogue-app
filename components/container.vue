<template>
  <section class="container">
    <h2>{{ title }}</h2>
    <div class="container__content">
      <div
        class="container__item"
        v-for="(value, i) in data"
        :key="`product-${i}`"
      >
        <slot :value="value" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.container {
  .container__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25em;

    @media screen and (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      row-gap: 1.25em;
      column-gap: 1.25em;
    }

    .container__item {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
