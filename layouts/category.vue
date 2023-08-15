<template>
    <div class="container">
        <div class="container-main">

            <h1 class="section-heading">Advertising</h1>
            <p class="caption">Category description here</p>
            <div class="line"></div>
            <div class="content">
                <slot />
            </div>
        </div>
        <div class="container-secondary">
            <section class="followus">
                <HeadingSection nameHeading="Follow us" />
                <div class="followus-container">
                    <IconsConnect />
                </div>
            </section>

            <section class="recents">
                <HeadingSection nameHeading="Recents post" />

                <div class="recents-container">
                    <PostTiny
                        urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                        title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
                    <PostTiny
                        urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                        title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
                    <PostTiny
                        urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                        title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
                    <PostTiny
                        urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                        title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
                    <PostTiny
                        urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                        title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
                </div>
            </section>

            <section class="categories">
                <HeadingSection nameHeading="Categories" />
                <div class="categories-container">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </section>

            <section class="tags">
                <HeadingSection nameHeading="Tags" />
                <div class="tags-container">
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
            </section>

        </div>
    </div>
</template>

<script setup>

</script>
    
<style lang="scss" scoped>
.section-heading {
    font-size: 28px;

}

.caption {
    margin-top: 10px;
    font-size: 15px;
}

.line {
    width: 100%;
    height: 1px;
    background-color: #CCCCCC;
    margin-top: 17px;
}

.content {
    margin-top: 32px;
}

.container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;

    &-main {
        grid-column: 1/3;
    }
}


// Follow
.followus-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 9px;
}

// Recents Post
.recents {
    width: 100%;
    margin-top: 31px;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

// Category
.categories {
    margin-top: 30px;

    &-container {
        display: flex;
        flex-direction: column;
        gap: 12px 0;
        margin-top: 24px;
    }
}

// Tags
.tags {
    margin-top: 30px;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
}

@media screen and (max-width: 782px) {
    .container {
        display: flex;
        flex-direction: column;
    }
}
</style>