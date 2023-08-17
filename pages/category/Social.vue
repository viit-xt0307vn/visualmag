<template>
    <h2 class="section-heading">Social media</h2>
    <p class="caption">This is caption</p>
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

    <Pagination />
</template>

<script setup>
const title = ref('Social Media – VisualMag Pro')
const description = ref('Category description here')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<style lang="scss" scoped src="./style.scss">

</style>