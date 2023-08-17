<template>
    <div class="featured-item">
        <nuxt-link :to="title"><img class="featured-image" :src="urlImage" alt="" />
            <div class="featured-content">
                <div class="card">
                    <a href="" class="cart-name">{{ cardName }}</a>
                </div>
                <h2 class="featured-title">
                    {{ title }}
                </h2>
            </div>
        </nuxt-link>
    </div>
</template>

<script setup>

const { cardName } = defineProps({
    cardName: "string",
    title: "string",
    urlImage: "string"
})
</script>

<style lang="scss">
.featured {
    &-item {
        position: relative;
        width: 100%;
        height: 100%;

        &:first-child {
            grid-column: 1/3;
            grid-row: 1/3;

            .featured-title {
                font-size: 28px;
            }
        }

        &:nth-child(2) {
            .card {
                background-color: #34BF49;
            }
        }

        &:nth-child(3) {
            .card {
                background-color: #FF9900;
            }
        }

        &:nth-child(4) {
            .card {
                background-color: #1CC7D0;
            }
        }

        &:nth-child(5) {
            .card {
                background-color: #FF4F81;
            }
        }
    }

    &-image {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        filter: brightness(0.8);
    }

    &-content {
        position: absolute;
        padding: 20px;
        bottom: 0;

        .card {
            background-color: #0099e5;
            display: inline-flex;
            align-items: center;
            padding: 4px 6px;

            a {
                font-size: 11px;
                line-height: 10px;
                text-transform: uppercase;
                color: #FFF;
                font-weight: 400;

            }
        }
    }

    &-title {
        margin-top: 10px;
        font-size: 17px;
        color: #FFF;
    }

}

@media screen and (max-width: 478px) {
    .featured-item:not(.featured-item:first-child) .card {
        display: none;
    }
}
</style>