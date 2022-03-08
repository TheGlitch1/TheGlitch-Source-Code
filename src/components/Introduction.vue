<template>
    <section id="home" class="Intro-Section relative">

    <div class="container Intro-content">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="slider-contents">
            <div class="slider-text">
              <span class="greeting  text-primary-color">
                H e l l o
              </span>
              <hr>
              <h1 class="text-3r text-secondary-color">
                I'm
                <span class="name glitch-text" >
                  <span class="name glitch-text glitch-span" aria-hidden="true">Yassine</span>
                  <span class="name glitch-text glitch-span" aria-hidden="true">Yassine</span>
                  Yassine
                </span>
                NATIJ
              </h1>
              <p class="desc1 text-secondary-color">
                I'm a Fullstack Engineer. Implemented enterprise web applications and CMS based solutions using frameworks like Laravel and Vue.
              </p>
            </div>
            <div class="download-section">
               <a href="https://drive.google.com/file/d/1BIB3C28zp34j2GsFpqI7NLsQnnf-KfqJ/view?usp=sharing" target="blank" class="btn-custom btn-glitchy line-link"><span class="text-inner ">Download</span></a>
            </div>
        </div>

        </div>

        <div class="col-12 col-md-6 d-none d-md-block">
          <div class="slider-contents-baner relative">
            <div class="slider-media-hoz text-center "> <!-- animate-float-up Addthis class to allow animation-->
              <span class="faded">
                <!-- <img src="../assets/waneella-2.gif" alt="" sizes="" srcset="" width="100%" /> -->
                <img src="../assets/laravelVueDev.svg" alt="" sizes="" srcset="" width="78%" />
                <!-- <img src="../assets/undraw_hello.svg" alt="" sizes="" srcset="" width="100%" /> -->
                <!-- <span class="inception"><img src="../assets/website-bg.png" alt="" sizes="" srcset="" width="100%" /> -->
                </span>
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
      gl:false
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
    glitchIt: function() {
      this.gl = !this.gl
			this.$emit('glitchIt', this.gl)
		}
  },
};
</script>

<style scoped>
.container.Intro-content {
    padding-top: 21vh;
}

.into-1 .social{
  padding-top: 3rem;
}

.slider-text {
    /* color: #fff; */
    padding-top: 14vh;
    margin-bottom: 14vh;
}

.slider-contents-baner {
      padding-top: 5vh;
    /* margin-bottom: 14vh; */
}

.inception{
  position: absolute;
  z-index: 1;
  bottom: calc(100% - 29%);
    left: calc(100% - 50%);
    width: calc(100% - 78.5%);
  /* box-shadow:
    0 0 60px 30px #fff,  
    0 0 100px 60px #f0f, 
    0 0 140px 90px #0ff;  */

    /* box-shadow:
    0 0 30px 10px #fff,  
    0 0 80px 50px #f0f, 
    0 0 84px 23px #0ff;  */
    box-shadow: 0 0 24px 4px #ffffff3b, 0 0 43px 11px #ff00ff6b, 0 0 33px -2px #00ffffb5, inset -11px 59px 47px -4px;
    /* box-shadow: 0 0 24px 4px #ffffff3b, 0 0 47px 13px #ff00ff6b, 0 0 65px 16px #00ffffb5, inset -40px 50px 40px -8px; */
}

.slider-media-hoz {
    padding-top: 4vh;
    padding-bottom: 4vh;
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
@media (max-width: 767px) and (min-width: 320px){
  .container.Intro-content {
    padding-top: 10vh;
  }
  .slider-text {
      padding-top: 0px;
      margin-bottom: 50px;
  }
  .Intro-Section {
    min-height: unset;
    /* overflow: hidden; */
  } 
}
</style>
