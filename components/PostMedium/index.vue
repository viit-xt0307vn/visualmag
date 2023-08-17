<template>
  <div class="post-medium">
    <nuxt-link :to="title"><img class="post-medium-image" :src="urlImage" alt="" /></nuxt-link>
    <nuxt-link :to="title">
      <h2 class="post-medium-title">
        {{ title }}
      </h2>
    </nuxt-link>
    <p v-if="card" class="card">SEO</p>

  </div>
</template>

<script setup>

const props = defineProps({
  card: "boolean",
  urlImage: "string",
  title: "string",
})

</script>

<style lang="scss">
.post-medium {
  width: 100%;
  margin-top: 24px;
  position: relative;

  &-image {
    width: 100%;
    height: auto;
    filter: brightness(0.8);
  }

  &-title {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    bottom: 0;
    color: #fff;
    padding: 0 20px 20px;

    &:hover {
      color: #0099E5;
    }
  }

  .card {
    position: absolute;
    top: 0;
    background-color: var(--clr);
    padding: 5px;
    font-size: 11px;
    font-weight: 700;
    color: #FFF;
  }

}
</style>