<template>
    <section id="home" class="Intro-Section relative">

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7">
          <div class="slider-contents">
            <div class="slider-text">
              <span class="greeting eff-1 text-primary-color">
                H e l l o
              </span>
              <h1 class="text-3r text-secondary-color">
                I'm
                <span class="name glitch-text">
                  <span class="name glitch-text glitch-span" aria-hidden="true">Undefined</span>
                  <span class="name glitch-text glitch-span" aria-hidden="true">Undefined</span>
                  Undefined
                </span>
                entity
              </h1>
              <p class="desc1 text-secondary-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                sed autem ipsam vel, fugiat ex eaque vitae, magnam itaque quas tenetur?
                Delectus ducimus officia aspernatur eligendi corrupti, nobis voluptate
                officiis!
              </p>
            </div>
            <div class="download-section">
            <a href="" class="btn-custom btn-glitchy line-link"><span class="text-inner ">Download</span></a>

            </div>
        </div>

        </div>

        <div class="col-12 col-md-5">
          <div class="slider-contents-baner relative">
            <div class="slider-media-hoz">
              <span class="faded faded-left faded-bottom faded-style-2">
                <img src="../assets/waneella-2.gif" alt="" sizes="" srcset="" width="100%" />
              </span>
            </div>
          </div>
        </div>
        <div class="into-1">
          <div class="social">
            <ul class="list-social inline-active text-secondary-color">
              <!-- <li>F</li> -->
              <li>
                <a href="https://github.com/TheGlitch1">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yassine-natij/">LinkedIn</a>
              </li>
            </ul>
          </div>
      </div>

      </div>
      

    </div>

  </section>

</template>

<script>
export default {
  name: "IntroductionComponent",
  data() {
    return {
      //   logo: 'assets/img/logo/logo.svg',
      //   logoFallback: 'assets/img/logo/light-logo.png'
    };
  },
  mounted() {
    // this.$nextTick(function() {
    //   $('#nav').slicknav({
    //     prependTo: '.mainmenu',
    //     label: ''
    //   })
    // })
  },
  methods: {
    activeLang(lang) {
      //   return this.$i18n.locale === lang
    },
    setLang(lang) {
      //   this.$i18n.locale = lang
    },
  },
};
</script>

<style scoped>

.into-1 .social{
  padding-top: 1rem;
}

.slider-text {
    /* color: #fff; */
    padding-top: 30vh;
    margin-bottom: 75px;
}

.slider-media-hoz {
    padding-top: 12vh;
    padding-bottom: 30px;
}

.greeting{
    position: relative;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    padding-left: 30px;
    font-family: Roboto Mono;
    letter-spacing: 2px;
}

.name {
  color: #eee !important;
  font-size: 2.8rem;
}
.list-social {
  padding: 0;
  list-style-type: none;
  /* color: #eee; */
}
.download-section{
  margin: 12px 16px;
}
.list-social li {
  display: inline;
  margin: 10px;
  transform: all 0.225s;
  cursor: pointer;
}

.list-social li:hover {
  color: #eee;
}
</style>
