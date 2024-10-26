<template>
  <div class="card">
    <slot name="top" />
    <div class="card__content" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "250px",
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: v-bind(width);
  min-width: v-bind(width);
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  .card__content {
    padding: 0px 12px 12px 12px;
  }
}
</style>
