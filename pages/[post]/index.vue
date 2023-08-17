<template>
    <div class="post-header">
        <div class="post-carts">
            <CategoryCard param="/category/advertising" cardName="Advertising" />
            <CategoryCard param="/category/webdesign" cardName="Web design" />
            <CategoryCard param="/category/seo" cardName="SEO" />
            <CategoryCard param="/category/technology" cardName="Technology" />
        </div>
        <h2 class="post-heading">
            {{ route.params.post }}
        </h2>
        <p class="post-metadata">Posted by <b class="post-author">Xuan Truong</b> - <span class="post-update">April 27,
                2021</span></p>
    </div>
    <div class="post-content">
        <img src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/architecture-building.jpeg"
            alt="" class="post-image">
        <div class="post-textes">
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>

        </div>
        <div class="post-tags">
            <p class="tag">ADS</p>
            <p class="tag">ADS</p>
            <p class="tag">ADS</p>
        </div>
        <div class="post-comments">
            <div class="comment">
                <div class="user">
                    <img class="user-image"
                        src="https://gravatar.wpenjoy.com/avatar/aed1547d950cb2ba8534a6df5915786f?s=48&d=mm&r=g" alt="">
                    <h3 class="user-fullname">Xuan Truong</h3>
                </div>
                <p class="user-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint cum natus
                    architecto
                    velit magnam, provident autem sunt, tempore voluptatum delectus quos cumque fugiat. Facere repellendus
                    rerum tempora reprehenderit voluptate.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "[post]",
})
const route = useRoute()

useHead({
    title: route.params.post,
    meta: [{
        name: 'description',
        content: route.params.post
    }]
})


</script>

<style lang="scss" scoped src="./style.scss"></style>