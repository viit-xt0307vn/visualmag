<template>
    <div class="featured-item">
        <img class="featured-image" src="~/assets/images/laptop-electronic-768x512.jpeg" alt="" />
        <div class="featured-content">
            <div class="card" >
                <a href="" class="cart-name">{{ cardName }}</a>
            </div>
            <h2 class="featured-title">
                The Ultimate Guide To Joining or Hosting A Twitter Chat
                adf adsf dsf sdf asfads fasd fdasf adsf
            </h2>
        </div>
    </div>
</template>

<script setup>
const {cardName} = defineProps({
    cardName: "string"
})
</script>

<style lang="css" scoped>
.featured-item {
    position: relative;
    width: 100%;
    height: 100%;
}

.featured-item:first-child {
    grid-column: 1/3;
    grid-row: 1/3;
}

.featured-item:first-child .featured-title {
    font-size: 28px;
}

.featured-image {
    width: 100%;
    height: 100%;
    position: absolute;
}

.featured-content {
    position: absolute;
    padding: 20px;
    bottom: 0;
}

.featured-content .card {
    background-color: var(--clr);
    display: inline-block;
    align-items: center;
}

.featured-content .card a {
    font-size: 11px;
    line-height: 20px;
    padding: 0 6px;
    text-transform: uppercase;
    font-family: var(--secondary-font);
    color: #FFF;
}

.featured-title {
    margin-top: 10px;
    font-size: 17px;
    color: #FFF;
}</style>