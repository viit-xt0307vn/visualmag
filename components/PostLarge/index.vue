<template>
  <div class="post-large">
    <nuxt-link :to="title"><img :src="urlImage" alt="" class="post-large-image" /></nuxt-link>
    <div class="post-large-metadata">
      <h6 class="post-large-author">{{ author }}</h6>
      <p class="post-large-date">{{ date }}</p>
    </div>
    <nuxt-link :to="title">
      <h2 class="post-large-title">
        {{ title }}
      </h2>
    </nuxt-link>
    <p class="post-large-desc">
      {{ desc }}
    </p>

  </div>
</template>

<script setup>
defineProps({
  urlImage: "string",
  author: "string",
  date: "string",
  title: "string",
  desc: "string",

})
</script>

<style lang="scss" scoped>
.post-large {
  &-image {
    width: 100%;
  }

  &-metadata {
    display: flex;
    gap: 15px;
    margin-top: 16px;
  }

  &-title {
    margin-top: 10px;
    font-size: 21.6px;

    &:hover {
      color: #0099E5;
    }
  }

  &-desc {
    display: -webkit-box;
    width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #888888;
    margin-top: 10px;
    line-height: 22px;
  }

}
</style>