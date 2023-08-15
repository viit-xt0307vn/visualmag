<template>
  <div class="post-small">
    <img class="post-small-image" :src="urlImage" alt="" />
    <p class="post-small-caption heading-blogging">
      {{ title }}
    </p>
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