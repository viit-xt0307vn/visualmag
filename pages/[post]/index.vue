<template>
    <div class="post">
        <img src="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/architecture-building.jpeg"
            alt="" class="post-image">
        <div class="post-contents">
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
                veritatis dolor voluptatum, atque quaerat, nostrum, reiciendis voluptatibus maiores ab adipisci facilis
                quos? Atque nobis quis voluptas!</p>
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet deleniti quod ipsam
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
                <p class="user-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sint cum natus architecto
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
</script>

<style lang="scss" scoped>
.post {
    width: 100%;
    margin-top: 33px;



    &-image {
        width: 100%;
    }

    &-contents {
        display: flex;
        flex-direction: column;
        gap: 32px 0;
        margin-top: 40px;

        .content {
            line-height: 26px;
        }
    }

    &-tags {
        display: flex;
        gap: 0 5px;
        margin-top: 32px;

        .tag {
            font-size: 11px;
            line-height: 15px;
            padding: 4px 10px;
            text-transform: uppercase;
            background-color: #e9e9e9;
        }
    }

    &-comments {
        .comment {
            margin-top: 32px;
            padding: 24px;
            border: 1px solid #e9e9e9;
        }

        .user {
            display: flex;
            align-items: center;
            gap: 5px;

            &-image {
                width: 26px;
                height: 26px;
                border-radius: 50%;
            }

            &-name {
                line-height: 24px;
            }

            &-content {
                line-height: 26px;
                margin-top: 10px;
            }
        }
    }
}
</style>