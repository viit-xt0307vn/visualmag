<template>
    <section class="followus">
        <HeadingSection nameHeading="Follow us" />
        <div class="followus-container">
            <IconsConnect />
        </div>
    </section>

    <section class="recents">
        <HeadingSection nameHeading="Recents post" />

        <div class="recents-container">
            <PostRecent
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
            <PostRecent
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
            <PostRecent
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
            <PostRecent
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
            <PostRecent
                urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/04/business-working-400x266.jpeg"
                title="The Complete Guide to Using Twitter to Grow Your Business" date="April 1, 2021" />
        </div>
    </section>

    <section class="categories">
        <HeadingSection nameHeading="Categories" />
        <div class="categories-container">
            <Category category="Advertising" quantity=12 param="/advertising" />
            <Category category="Blogging" quantity=12 param="/blogging" />
            <Category category="Marketing" quantity=12 param="/marketing" />
            <Category category="Social" quantity=12 param="/social" />
            <Category category="SEO" quantity=12 param="/seo" />
            <Category category="Web Design" quantity=12 param="/webdesign" />
            <Category category="Tech" quantity=12 param="/technology" />
        </div>
    </section>

    <section class="tags">
        <HeadingSection nameHeading="Tags" />
        <div class="tags-container">
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
            <Tag tagName="ads" param="/tag/awesome" />
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
}</style>