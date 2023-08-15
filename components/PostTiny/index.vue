<template>
  <div class="post-tiny">
    <img class="post-tiny-image" :src="urlImage" alt="" />
    <div class="post-tiny-content">
      <h2 class="post-tiny-title">
        {{ title }}
      </h2>
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