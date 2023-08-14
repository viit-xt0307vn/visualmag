<template>
    <div class="post-medium">
        <img class="post-medium-image" src="~/assets/images/laptop-electronic-768x512.jpeg" alt="" />
        <h2 class="post-medium-title">
            The 6-Step Guide to Make Your Mobile Site Load
            Faster
        </h2>
        <p v-if="card" class="card">SEO</p>
    </div>
</template>

<script setup>
  const {card} = defineProps({
    card: 'string'
  })
</script>

<style lang="scss" scoped>
.post-medium {
  width: 100%;
  margin-top: 24px;
  position: relative;
}
.post-medium-image {
  width: 100%;
  height: auto;
}
.post-medium-title {
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 0 20px 20px;
}
.card {
  position: absolute;
  
}
</style>