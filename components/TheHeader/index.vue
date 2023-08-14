<template>
    <header class="header">
        <nav class="navigation">
            <img class="logo" src="~/assets/images/logo-1-300x56.png"  alt="" />
            <ul class="menu">
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

            <div class="search">
                <input type="text" class="search-input" />
                <button class="search-button">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon-glass"/>
                </button>
            </div>

            <div class="menu-icon">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss">
.header {
    height: 76px;
    width: 100%;
    box-shadow: 0 0 15px #00000030;
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
    font-size: 16px;
    display: none;
    align-items: center;
    justify-content: center;
    color: #000;
    border: 1px solid #000;
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

    .header {
    }
    .navigation {
        display: flex;
        justify-content: space-between;
        
    }


    .menu {
        display: none;
    }

    

    .menu-icon {
        display: flex;
        z-index: 999;
    }
}
</style>