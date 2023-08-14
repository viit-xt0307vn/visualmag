<template>
    <h2 class="heading-section-box">
        <a class="heading-section" href="#">Advertising</a>
    </h2>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.heading-section-box {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1843137255);
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
}

.heading-section {
  display: flex;
  align-items: center;
  font-size: 22px;
  color: #000;
  font-weight: bold;
  height: 100%;
  position: relative;
}
.heading-section::before {
  content: " ";
  position: absolute;
  display: inline-block;
  height: 100%;
  width: 100%;
  bottom: 0;
  border-bottom: 2px solid #0099e5;
  z-index: 9;
}</style>\