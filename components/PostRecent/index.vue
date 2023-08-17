<template>
    <div class="post-recent">
      <nuxt-link :to="param" class="post-recent">
        <img class="post-recent-image" :src="urlImage" alt="" /></nuxt-link>
      <div class="post-recent-content">
        <nuxt-link :to="param">
          <p class="post-recent-title">
            {{ title }}
          </p>
        </nuxt-link>
        <p class="post-recent-date">{{ date }}</p>
      </div>
  
    </div>
  </template>
  
  <script setup>
  const {title} = defineProps({
    urlImage: "string",
    title: "string",
    date: "string",
  })

  const param = ref("/" + title)

  
  </script>
  
  <style lang="scss" scoped>
  .post-recent {
    display: flex;
    gap: 15px;
  
    &-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
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