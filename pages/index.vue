<template>
    <main class="main">
        <section class="featured">
            <FeaturedItem style="--clr: #0099e5" cardName="Advertising"/>
            <FeaturedItem style="--clr: #34BF49" cardName="Marketing"/>
            <FeaturedItem style="--clr: #FF9900" cardName="Web design"/>
            <FeaturedItem style="--clr: #1CC7D0" cardName="Marketing"/>
            <FeaturedItem style="--clr: #FF4F81" cardName="Web design"/>
        </section>

        <div class="container">
            <div class="container-main">
                <section class="advertising">
                    <HeadingSection />
                    <div class="advertising-container">
                        <PostLarge />

                        <div class="posts-secondary">
                            <PostTiny />
                            <PostTiny />
                            <PostTiny />
                            <PostTiny />
                        </div>
                    </div>
                </section>
                <section class="blogging">
                    <HeadingSection />
                    <div class="blogging-container">
                        <PostSmall />
                        <PostSmall />
                        <PostSmall />
                    </div>
                </section>
                <div class="container-double">
                    <section class="webdesign">
                        <HeadingSection />

                        <div class="webdesign-container">
                            <PostLarge />
                            <PostTiny />
                            <PostTiny />
                            <PostTiny />
                        </div>
                    </section>
                    <section class="marketing">
                        <HeadingSection />

                        <div class="marketing-container">
                            <PostLarge />
                            <PostTiny />
                            <PostTiny />
                            <PostTiny />
                        </div>
                    </section>
                </div>
            </div>

            <div class="container-secondary">
                <section class="followus">
                    <HeadingSection />
                    <div class="followus-container">
                        <FollowUsIcon icon="fa-brands fa-twitter" followName="Twitter" style="--icon-clr: #1da1f2"/>
                        <FollowUsIcon icon="fa-brands fa-facebook" followName="Facebook" style="--icon-clr: #1778f2"/>
                        <FollowUsIcon icon="fa-brands fa-instagram" followName="Instagram" style="--icon-clr: #f33f97"/>
                        <FollowUsIcon icon="fa-brands fa-youtube" followName="YouTube" style="--icon-clr: #fa0000"/>
                        <FollowUsIcon icon="fa-brands fa-dribbble" followName="Dribbble" style="--icon-clr: #e64b87"/>
                        <FollowUsIcon icon="fa-brands fa-linkedin" followName="LinkedIn" style="--icon-clr: #0d66c2"/>
                    </div>
                </section>

                <section class="reviews">
                    <HeadingSection />
                    <div class="reviews-container">
                        <PostMedium />
                        <ul class="questions">
                            <li class="question">
                                How to Use Instagram Story Highlights on a Brand
                                Account
                            </li>
                            <li class="question">
                                How to Use Thought Leadership Marketing
                            </li>
                            <li class="question">
                                How Does IaaS Affect Your e-Commerce Site
                            </li>
                            <li class="question">
                                What Are Influencer Engagement Marketplaces
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="news">
                    <HeadingSection />

                    <div class="news-container">
                        <PostSmall />
                        <PostSmall />
                        <PostSmall />
                        <PostSmall />
                    </div>
                </section>

                <section class="fashion">
                    <HeadingSection />

                    <div class="fashion-container">
                        <PostTiny />
                        <PostTiny />
                        <PostTiny />
                        <PostTiny />
                    </div>
                </section>

            </div>
        </div>

        <section class="post-seo">
            <PostMedium />
            <PostMedium />
            <PostMedium />
        </section>

        <div class="container">
            <div class="container-main">
                <section class="socialmedia">
                    <HeadingSection />
                    <div class="socialmedia-container">
                        <PostMedium />
                        <PostMedium />
                        <PostMedium />
                        <PostMedium />
                    </div>
                </section>

                <section class="technology">
                    <HeadingSection />
                    <div class="technology-container">
                        <PostHorizontal />
                        <PostHorizontal />
                        <PostHorizontal />
                        <PostHorizontal />
                        <PostHorizontal />
                    </div>
                </section>
            </div>
            <div class="container-secondary">
                <section class="lifestyle">
                    <HeadingSection />
                    <div class="lifestyle-container">
                        <PostTiny />
                        <PostTiny />
                        <PostTiny />
                        <PostTiny />
                    </div>
                </section>

                <section class="business">
                    <HeadingSection />
                    <div class="business-container">
                        <PostSmall />
                        <PostSmall />
                        <PostSmall />
                        <PostSmall />
                    </div>
                </section>

                <section class="wordpress">
                    <HeadingSection />
                    <div class="wordpress-container">
                        <PostTiny />
                        <PostTiny />
                        <PostTiny />
                        <PostTiny />
                    </div>
                </section>

                <section class="filter">
                    <HeadingSection />
                    <div class="filter-container">
                        <PostMedium />
                    </div>
                </section>
            </div>
        </div>


    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
    max-width: 1180px;
    margin: 0 auto;
}



.container {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    &-main {
        grid-column: 1/3;
    }
}

.container-double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 32px;
    margin-top: 30px;
}

.post-seo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

// Featured
.featured {
    width: 100%;
    height: 384px;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 20px;
    position: relative;
}

// Advertising
.advertising {
    &-container {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;

        .post-main {
            width: 100%;
            height: 200px;
        }

        .posts-secondary {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 24px 0;

            .post-secondary {
                display: flex;
                gap: 15px;
            }
        }
    }
}

// Blogging
.blogging {
    width: 100%;
    margin-top: 30px;

    &-container {
        margin-top: 24px;
        display: flex;
        gap: 23px;
    }

    .heading-blogging {
        font-weight: 700;
    }
}

// Web design
.webdesign {
    width: 100%;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

// Marketing 
.marketing {
    width: 100%;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

// Follow Us
.followus-container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 9px;
}

.questions {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.questions .question {
  text-align: justify;
}

// News
.news {
    width: 100%;
    margin-top: 30px;

    &-container {
        margin-top: 24px;
        width: 100%;
        display: grid;
        gap: 20px;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    }
}


// Fashion
// Fashion
.fashion {
    width: 100%;
    margin-top: 31px;

    &-container {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

// Seo
.post-seo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top:30px ;
}

// Social Media
.socialmedia {
    width: 100%;
    &-container {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
}

// Technology
.technology {
    margin-top: 30px;
    width: 100%;

    &-container {
        margin-top: 24px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
}

.lifestyle,
.wordpress {
    width: 100%;

    &-container {
        width: 100%;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}


// Business
.business {
    width: 100%;
    margin-top: 30px;

    &-container {
        width: 100%;
        margin-top: 24px;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        gap: 24px;
    }
}

.wordpress,
.filter {
    margin-top: 30px;
}
</style>