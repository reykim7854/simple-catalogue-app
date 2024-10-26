<template>
  <container title="Catalogue" :data="data">
    <template v-slot:default="{ value }">
      <product-card
        :id="value.id"
        :title="value.title"
        :src="value.image"
        :price="value.price"
        :rating="value.rating"
      >
      </product-card>
    </template>
  </container>
</template>

<script setup>
const { getAllProducts } = useProductsStore();

const { data } = await getAllProducts();
</script>
