<template>
    <header class="header">
        <nav class="navigation">
            <nuxt-link to="/"><img class="logo" src="~/assets/images/logo-1-300x56.png" alt="" /></nuxt-link>
            <ul class="menu">
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/">Home</NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/advertising">Advertising</NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/blogging">Blogging</NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/marketing">Marketing</NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/social">Social </NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/seo">SEO</NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/webdesign">Web Design</NuxtLink>
                </li>
                <li class="menu-item">
                    <NuxtLink class="menu-link" to="/category/technology">Tech</NuxtLink>
                </li>
            </ul>

            <div class="search">
                <input type="text" class="search-input" />
                <button class="search-button">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon-glass" />
                </button>
            </div>

            <div class="menu-icon" @click="handleClickMenu">
                <font-awesome-icon icon="fa-solid fa-bars" class="icon-bars" />
            </div>
        </nav>

        <nav class="navigation-secondary">
            <ul class="menu-secondary">
                <li class="menu-item"><a href="" class="menu-link">Home</a></li>
                <li class="menu-item">
                    <a href="" class="menu-link">Advertising</a>
                </li>
                <li class="menu-item">
                    <a href="" class="menu-link">Blogging</a>
                </li>
                <li class="menu-item">
                    <a href="" class="menu-link">Marketing </a>
                </li>
                <li class="menu-item">
                    <a href="" class="menu-link">Social </a>
                </li>
                <li class="menu-item"><a href="" class="menu-link">SEO</a></li>
                <li class="menu-item">
                    <a href="" class="menu-link">Web Design</a>
                </li>
                <li class="menu-item"><a href="" class="menu-link">Tech</a></li>
            </ul>

            <div class="menu-close" @click="handleClickCloseMenu">
                <font-awesome-icon icon="fa-solid fa-xmark" class="icon-xmark" />
            </div>
        </nav>
    </header>
</template>

<script setup>

function handleClickMenu() {
    document.querySelector(".navigation-secondary").style.display = "flex"

}

function handleClickCloseMenu() {
    document.querySelector(".navigation-secondary").style.display = "none"
}

</script>

<style lang="scss">
.header {
    height: 76px;
    width: 100%;
    box-shadow: 0 0 15px #00000030;
}

.navigation-secondary {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    background-color: #FFF;
    display: none;
    justify-content: space-between;
    padding: 30px;

    .menu-secondary {
        display: flex;
        flex-direction: column;
        gap: 20px 0;
    }


    .menu-close {
        display: flex;
        width: 36px;
        height: 36px;
        align-items: center;
        justify-content: center;

        .icon-xmark {
            display: block;
            width: 20px;
            height: 20px;
            color: #000;
        }
    }
}

.navigation {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;
}

.logo {
    width: 220px;
    height: 41xp;
    filter: brightness(100%, 100%);
}

.menu {
    margin-right: 32px;
    margin-left: auto;
    display: flex;
    gap: 0 24px;
}

.search {
    width: 200px;
    height: 36px;
    display: flex;

    &-button {
        background-color: #0099e5;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 36px;

        .icon-glass {
            font-size: 16px;
            width: 16px;
            height: 16px;
            color: #fff;
            transform: scaleX(-1);
        }
    }

    &-input {
        padding: 5px;
        height: 100%;
        width: calc(100% - 36px);
        background-color: #f0f0f0;
    }
}

.menu-icon {
    width: 36px;
    height: 36px;
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid #e9e9e9;
}

.icon-bars {
    font-size: 16px;
    width: 18px;
    height: 18px;
    color: #222222;
}


@media screen and (max-width: 1180px) {
    .search {
        display: none;
    }

    header {
        padding: 0 15px;
    }

    .menu {
        margin-right: 0;
    }
}


@media screen and (max-width: 960px) {

    .header {}

    .navigation {
        display: flex;
        justify-content: space-between;

    }


    .menu {
        display: none;
    }



    .menu-icon {
        display: flex;
    }
}
</style>