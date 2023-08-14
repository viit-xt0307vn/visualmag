<template>
  <div class="followus-item">
    <div>
      <font-awesome-icon :icon="icon" class="followus-icon" />
    </div>
    <p class="followus-name">{{ followName }}</p>
  </div>
</template>

<script setup>


const { followName } = defineProps({
  followName: "string",
  icon: "string"
})
</script>

<style lang="css" scoped>
.followus-item {
  display: flex;
  height: 33px;
  gap: 10px;
  align-items: center;
}

.followus-icon {
  color: var(--icon-clr);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.6);
}
</style>