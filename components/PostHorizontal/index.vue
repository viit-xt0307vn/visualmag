<template>
    <div class="post-horizontal">
        <img class="post-horizontal-image" src="~/assets/images/laptop-electronic-768x512.jpeg" alt="" />
        <div class="post-horizontal-content">
            <h2 class="post-horizontal-title">
                Best Business Process Management Software
            </h2>
            <div class="post-horizontal-matadata">
                <h6 class="post-large-author">John Doe</h6>
                <p class="post-large-date">
                    April 27, 2021
                </p>
            </div>
            <p class="post-horizontal-desc">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ut veniam beatae
                voluptatibus dolorum laborum, nisi porro
                asperiores illo eius odio aspernatur rem,
                unde officiis maxime at quia et quae culpa.
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.post-horizontal {
    width: 100%;
    display: flex;
    gap: 23px;
}

.post-horizontal-image {
    width: 240px;
    height: 160px;
}

.post-horizontal-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.post-horizontal-metadata {
    display: flex;
    gap: 15px;
    margin-top: 16px;
}

.post-horizontal-title {
    font-size: 1.5rem;
}

.post-horizontal-desc {
    display: -webkit-box;
    width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #888888;
    line-height: 22px;
}
</style>