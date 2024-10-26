<template>
  <NuxtLink :to="`/detail/${id}`">
    <card class="card" :src="src">
      <template v-slot:top>
        <div v-if="src" class="card__image">
          <img
            :src="src"
            :alt="title"
            width="250px"
            height="250px"
            loading="lazy"
          />
        </div>
      </template>
      <div class="card__content">
        <p class="card__title">{{ title }}</p>
        <p class="card__price">{{ formatCurrency(price) }}</p>
        <p class="card__rating">
          <span class="card__star-icon">
            <Icon name="mdi:star" size="1.125em" />
          </span>
          <span class="card__rate">
            {{ rating.rate }}
          </span>
          <span>|</span>
          <span>{{ rating.count }}+ review</span>
        </p>
      </div>
    </card>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Object,
    default: () => ({ rate: 0, count: 0 }),
  },
});
</script>

<style lang="scss" scoped>
a {
  color: initial;
  text-decoration: none;

  &:visited {
    color: initial;
  }
}

.card {
  .card__image {
    max-width: 250px;
    max-height: 250px;
    min-height: 250px;
    padding: 8px;

    img {
      object-fit: scale-down;
      width: 100%;
      max-width: inherit;
      max-height: inherit;
    }
  }

  .card__content {
    display: flex;
    flex-direction: column;

    .card__title {
      overflow-x: hidden;
      text-wrap: nowrap;
      text-overflow: ellipsis;
    }

    .card__price {
      font-size: 1.125rem;
      font-weight: 600;
      margin-top: 0;
    }

    .card__rating {
      display: flex;
      align-items: center;
      column-gap: 0.3em;
      margin: auto 0 0 0;

      .card__star-icon {
        color: $star;
      }
    }
  }
}
</style>
