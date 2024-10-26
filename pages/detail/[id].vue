<template>
  <div class="detail">
    <div>
      <gallery :images="[productStore.product.image]"></gallery>
    </div>
    <div class="detail__content">
      <h2>{{ productStore.product.title }}</h2>
      <p class="detail__rating">
        <span class="detail__star-icon">
          <Icon name="mdi:star" size="1.125em" />
        </span>
        <span class="detail__rate">
          {{ productStore.product.rating.rate }}
        </span>
        <span>|</span>
        <span>{{ productStore.product.rating.count }}+ review</span>
        <span>|</span>
        <span>
          {{ productStore.product.category }}
        </span>
      </p>
      <p class="detail__price">
        {{ formatCurrency(productStore.product.price) }}
      </p>
      <h3>Description</h3>
      <p>{{ productStore.product.description }}</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const productStore = useProductsStore();

await productStore.getProduct(route.params.id);
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }

  .detail__content {
    padding: 8px;

    .detail__rating {
      display: flex;
      align-items: center;
      column-gap: 0.3em;
      margin: auto 0 0 0;

      .detail__star-icon {
        color: $star;
      }
    }

    .detail__price {
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
}
</style>
