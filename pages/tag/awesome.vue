<template>
    <div class="container">
        <h2 class="tag-heading">Awesome</h2>
        <ul class="post-list">
            <li class="post">
                <PostHorizontal
                    urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg"
                    author="John Doe" date="June 21, 2020" title="SEO is Turning into a Questions and Answers Game"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget… " />
            </li>
            <li class="post">
                <PostHorizontal
                    urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg"
                    author="John Doe" date="June 21, 2020" title="SEO is Turning into a Questions and Answers Game"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget… " />
            </li>
            <li class="post">
                <PostHorizontal
                    urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg"
                    author="John Doe" date="June 21, 2020" title="SEO is Turning into a Questions and Answers Game"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget… " />
            </li>
            <li class="post">
                <PostHorizontal
                    urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg"
                    author="John Doe" date="June 21, 2020" title="SEO is Turning into a Questions and Answers Game"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget… " />
            </li>
            <li class="post">
                <PostHorizontal
                    urlImage="https://demo.wpenjoy.com/visualmag-pro/wp-content/uploads/sites/55/2021/05/finance-flat-400x266.jpeg"
                    author="John Doe" date="June 21, 2020" title="SEO is Turning into a Questions and Answers Game"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta felis non nibh interdum, tempus tempor urna tincidunt. Sed eget… " />
            </li>

        </ul>
    </div>
</template>

<script setup>
const title = ref('Awesome – VisualMag Pro')
const description = ref('Tag description here')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<style lang="scss" scoped>

.tag-heading {
    font-size: 28px;
}
.post-list {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 0;

}

.post {
    border-bottom: 1px solid #e9e9e9;
    padding: 40px 0;

    &:first-child {
        border-top: 1px solid #e9e9e9;
    }
}
</style>