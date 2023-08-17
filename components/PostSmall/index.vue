<template>
  <div class="post-small">
    <nuxt-link :to="title"><img class="post-small-image" :src="urlImage" alt="" /></nuxt-link>
    <nuxt-link :to="title">
      <p class="post-small-caption heading-blogging">
        {{ title }}
      </p>
    </nuxt-link>

  </div>
</template>

<script setup>
defineProps({
  title: "string",
  urlImage: "string"
})
</script>

<style lang="scss" scoped>
.post-small {
  width: 100%;

  &-image {
    width: 100%;
    height: auto;
  }

  &-caption {
    margin-top: 10px;
    font-weight: 400;

    &:hover {
      color: #0099E5;
    }
  }
}
</style>