<template>
  <div class="icon-box">
    <div>
      <font-awesome-icon :icon="icon" class="icon" />
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
.icon-box {
  display: flex;
  height: 33px;
  gap: 10px;
  align-items: center;
}

.icon-box:hover {
  transform: scale(1.1);
  transition: all 0.1s linear;
}

.icon {
  color: var(--icon-clr);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.6);
}
</style>