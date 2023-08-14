<template>
    <div class="post-large">
        <img src="~/assets/images/laptop-electronic-768x512.jpeg" alt="" class="post-large-image" />
        <div class="post-large-metadata">
            <h6 class="post-large-author">John Doe</h6>
            <p class="post-large-date">April 27, 2021</p>
        </div>
        <h2 class="post-large-title">
            5 Steps for Using Paid Internet Advertising to
            Drive Conversions
        </h2>
        <div class="post-large-desc">
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eligendi, consequuntur
            repellat. Ipsa cumque fugiat neque magnam,
            voluptates itaque delectus, placeat voluptas,
            modi sit tenetur minus vero repellendus
            laudantium quam dolore!
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    
.post-large-image {
  width: 100%;
}
.post-large-metadata {
  display: flex;
  gap: 15px;
  margin-top: 16px;
}
.post-large-title {
  margin-top: 10px;
  font-size: 1.5rem;
}
.post-large-desc {
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #888888;
  margin-top: 10px;
  line-height: 22px;
}
</style>