<template>
    <div class="featured-item">
        <img class="featured-image" :src="urlImage" alt="" />
        <div class="featured-content">
            <div class="card" >
                <a href="" class="cart-name">{{ cardName }}</a>
            </div>
            <h2 class="featured-title">
                {{ title }}
            </h2>
        </div>
    </div>
</template>

<script setup>

const {cardName} = defineProps({
    cardName: "string",
    title: "string",
    urlImage: "string"
})
</script>

<style lang="css">
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
    object-fit: cover;
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
    line-height: 10px;
    text-transform: uppercase;
    color: #FFF;
    font-weight: 400;
}

.featured-title {
    margin-top: 10px;
    font-size: 17px;
    color: #FFF;
}

@media screen and (max-width: 478px) {
    .featured-content .card:not(.featured-content .card:first-child) {
        display: none;
    }
}

</style>