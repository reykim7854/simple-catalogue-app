<template>
  <div class="gallery">
    <div class="gallery__image">
      <div class="image__preview">
        <img
          :src="previewImage"
          :alt="title"
          width="250px"
          height="250px"
          loading="lazy"
        />
      </div>
    </div>
    <div class="gallery__slides">
      <div class="slides__image">
        <card
          class="image__card"
          v-for="(value, i) in imageList"
          :key="`product-image-${i}`"
          width="60px"
        >
          <template v-slot:top>
            <img
              :src="value"
              :alt="title"
              width="60px"
              height="60px"
              loading="lazy"
            />
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  images: {
    type: Array,
    default: () => [""],
  },
});

const previewImage = ref(props.images[0]);

const imageList = computed(() => [...Array(10).fill(props.images[0])]);

const handlePreviewImage = (e) => {};
</script>

<style lang="scss" scoped>
.gallery {
  padding: 8px;

  .gallery__image {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .image__preview {
      width: 250px;
      height: 250px;
      overflow: hidden;

      img {
        object-fit: scale-down;
      }
    }
  }

  .gallery__slides {
    display: flex;
    justify-content: center;

    .slides__image {
      display: flex;
      overflow-x: scroll;
      max-width: 260px;

      .image__card {
        margin: 12px 8px;

        &:hover {
          outline: 2px solid $primary;
          cursor: pointer;
        }

        img {
          object-fit: scale-down;
        }
      }
    }
  }
}
</style>
