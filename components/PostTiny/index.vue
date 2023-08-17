<template>
  <div class="post-tiny">
    <nuxt-link :to="title" class="post-tiny">
      <img class="post-tiny-image" :src="urlImage" alt="" /></nuxt-link>
    <div class="post-tiny-content">
      <nuxt-link :to="title">
        <h2 class="post-tiny-title">
          {{ title }}
        </h2>
      </nuxt-link>
      <p class="post-tiny-date">{{ date }}</p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  urlImage: "string",
  title: "string",
  date: "string",

})
</script>

<style lang="scss" scoped>
.post-tiny {
  display: flex;
  gap: 15px;

  &-image {
    width: 120px;
    height: 80px;
  }

  &-title {
    display: inline-block;

    &:hover {
      color: #0099E5;
    }
  }

  &-date {
    margin-top: 6px;
    color: #888888;
  }
}
</style>