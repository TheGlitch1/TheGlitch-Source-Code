<template>
  <div id="app">
    <canvas></canvas>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HeaderComponent />
    <IntroductionComponent  :profile = "profile" />
    <AboutComponent :skills="data.skills"
      :profile="profile.about"/>

    <GithubProjectsComponent />
    <ResumeComponent :resume="data.resume" />

    <!-- <ContactComponent :settings="settings" />
    <FooterComponent /> -->

    <!-- <section id="introduction"></section>
    <section id="aboutMe"></section>
    <section id="Projects"></section>
    <section id="Resume"></section> -->
    <section id="Exp"></section>
  </div>
</template>

<script>
import json from './json/data.json'

import HeaderComponent from "./components/Header.vue";
import IntroductionComponent from "./components/Introduction.vue";
import AboutComponent from "./components/About.vue";
import ResumeComponent from "./components/Resume.vue";
import GithubProjectsComponent from "./components/GithubProjects.vue";
import ContactComponent from "./components/Contact.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    // HelloWorld,
    IntroductionComponent,
    AboutComponent,
    ResumeComponent,
    GithubProjectsComponent,
    ContactComponent,
    FooterComponent
  },
  data(){
    return{
      profile:json.settings,
      data:json.data
    }
  },
  mounted() {
    // this.dataAll = json.data;
    console.log('profile == ' , this.profile);
    console.log('data == ' , this.data);

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const colors = [
      "#b4b2b5",
      "#dfd73f",
      "#6ed2dc",
      "#66cf5d",
      "#c542cb",
      "#d0535e",
      "#3733c9",
    ];
    let linePos = 0,
      rAF;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    function texts(color) {
      // ctx.font = "20vh Bungee Outline";
      // ctx.shadowBlur = 30;
      // ctx.shadowColor = color;
      // ctx.fillStyle = color;
      // ctx.setTransform(1, -0.15, 0, 1, 0, -10);
      // // ctx.fillText("Glitch", innerWidth / 2, innerHeight / 2 - 5);

      // ctx.fillStyle = "white";
      // ctx.shadowBlur = 30;
      // ctx.shadowColor = color;
      // ctx.fillText("Glitch", innerWidth / 2, innerHeight / 2);

      // ctx.font = "18vh Bungee Inline";
      // ctx.shadowBlur = 30;
      // ctx.shadowColor = color;
      // ctx.fillStyle = "#fff";
      // ctx.setTransform(1, -0.15, 0, 1, 0, -10);
      // ctx.fillText(
      //   "Effect",
      //   innerWidth / 2,
      //   innerHeight / 2 + innerHeight / 10
      // );

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    }

    function glitch() {
      rAF = window.requestAnimationFrame(glitch);

      ctx.fillStyle = "#1a191c";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      texts(colors[Math.floor(Math.random() * 7)]);
      ctx.shadowBlur = 0;
      ctx.shadowColor = "none";
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      for (let i = 0; i < 1000; i++) {
        ctx.fillStyle = `rgba(0,0,0, ${Math.random() * 0.01})`;
        ctx.fillRect(
          Math.floor(Math.random() * innerWidth),
          Math.floor(Math.random() * innerHeight),
          Math.floor(Math.random() * 30) + 1,
          Math.floor(Math.random() * 30) + 1
        );

        ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
        ctx.fillRect(
          Math.floor(Math.random() * innerWidth),
          Math.floor(Math.random() * innerHeight),
          Math.floor(Math.random() * 25) + 1,
          Math.floor(Math.random() * 25) + 1
        );
      }

      // ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
      ctx.fillRect(
        Math.random() * innerWidth,
        Math.random() * innerHeight,
        Math.random() * innerWidth,
        Math.random() * innerHeight
      );
      // ctx.setTransform(1, 0, 0, .8, .2, 0);
      // ctx.setTransform(1, 0, 0, .9, .2, 0);
    }

    glitch();

    window.addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    });
  },
  methods: {
    parseMedata() {
      
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
:root{
  --text-primary-color: #efefef;
  --text-secondary-color: #4e7ba6;
  --text-third-color: #838689;
  --on-primary-color: white;
}
#app {
  overflow-x: hidden;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}
.text-primary-color{
  color:var(--text-primary-color)
}
.text-secondary-color{
  color:var(--text-secondary-color)
}
.text-third-color{
  color:var(--text-third-color)
}
.relative {
  position: relative;
}

.float-right{
  float: right;
}

a {
    color: inherit!important;
    text-decoration: inherit!important;
}

.Intro-Section {
  min-height: 99vh;
  /* overflow: hidden; */
}

.section-padding {
    padding: 150px 0 100px;
}

canvas {
  padding: 0;
  margin: 0;
  /* width: 100%!important; */
  z-index: -4;
  position: fixed;
  left: 0;
  top: 0;
}

.text-3r {
  font-size: 3.5rem;
}


.btn-custom {
  outline: none;
  text-transform: uppercase;
  line-height: 2;
  position: relative;
  display: inline-block;
  text-decoration: none;
  overflow: hidden;
  font-family: Roboto Mono;
  /* color: #20222b; */
  /* background: #5a2ebb; */
  font-size: 0.8rem !important;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 14px 40px;
  /* z-index: 10; */
}

.btn-custom:hover{
  color:#c7ccd1 !important;
}

.btn-glitchy {
  z-index: 2;
  color:#0a0a0a!important;
  transition: all 0.3s ease-in-out;
  /* background-color: #00ffff; */
  /* border-style: solid; */
  /* border-color: rgb(255, 255, 255); */
  /* border-width: 1px; */
  /* color: #ebeff3; */

}

.btn-glitchy:before,
.btn-glitchy:after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  position: absolute;
}
.btn-glitchy:before {
  padding: 13px 40px;
  background-color: #5a2ebb;
  z-index: -1;
}
.btn-glitchy:after {
  background-color: #ff00ff;
  z-index: -2;
}
.btn-glitchy:hover .link-inner {
  -webkit-animation: glitchy 0.3s ease 1;
  animation: glitchy 0.3s ease 1;
  /* color: #c7ccd1; */
  /* background-color: #00ffff; */
}
.btn-glitchy:hover:before {
  -webkit-animation: glitchy 0.3s ease 0.3s infinite;
  animation: glitchy 0.3s ease 0.3s infinite;
}
.btn-glitchy:hover:after {
  animation: glitchy 0.3s ease infinite reverse;
}

@-webkit-keyframes glitchy {
  0% {
    transform: translate(-2px, 2px);
  }
  25% {
    transform: translate(-2px, -2px);
  }
  50% {
    transform: translate(2px, 2px);
  }
  75% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(-2px, 2px);
  }
}
@keyframes glitchy {
  0% {
    transform: translate(-2px, 2px);
  }
  25% {
    transform: translate(-2px, -2px);
  }
  50% {
    transform: translate(2px, 2px);
  }
  75% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(-2px, 2px);
  }
}
.name {
  font-size: 5rem;
}
.glitch-text {
  position: relative;
  font-size: inherit;

  /* font-weight: 700; */
  text-transform: uppercase;
  text-shadow: 0.05em 0 0 rgba(84, 22, 146, 0.75),
    -0.025em -0.05em 0 rgba(21, 163, 165, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  animation: glitchText 550ms infinite;
}

.glitch-span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch-span:first-child {
  animation: glitchText 650ms infinite;

  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 40%);
  transform: translate(-0.025em, -0.025em);
  opacity: 0.8;
}
.glitch-span:last-child {
  animation: glitchText 375ms infinite;

  clip-path: polygon(0 60%, 100% 60%, 100% 30%, 0 40%);
  transform: translate(0.0125em, 0.025em);
  opacity: 0.8;
}

@keyframes glitchText {
  0% {
    text-shadow: 0.05em 0 0 rgba(84, 22, 146, 0.75),
      -0.05em -0.025em 0 rgba(21, 163, 165, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  13% {
    text-shadow: 0.05em 0 0 rgba(84, 22, 146, 0.75),
      -0.05em -0.025em 0 rgba(21, 163, 165, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(84, 22, 146, 0.75),
      -0.05em -0.14em 0 rgba(21, 163, 165, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }

  15% {
    text-shadow: -0.05em -0.025em 0 rgba(84, 22, 146, 0.75),
      0.025em 0.025em 0 rgba(21, 163, 165, 0.75),
      -0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  /* 20% {
    text-shadow: 
    0.05em 0 0 rgba(84, 22, 146, 0.75), 
    -0.025em 0.05em 0 rgba(21, 163, 165, 0.75),  
    0.025em 0.05em 0 rgba(0,0,255,.75);

  } */
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(84, 22, 146, 0.75),
      0.025em 0.025em 0 rgba(21, 163, 165, 0.75),
      -0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(84, 22, 146, 0.75),
      0.05em 0 0 rgba(21, 163, 165, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(84, 22, 146, 0.75),
      0.05em 0 0 rgba(21, 163, 165, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(84, 22, 146, 0.75),
      -0.025em -0.025em 0 rgba(0, 0, 255, 0.75),
      -0.025em -0.05em 0 rgba(21, 163, 165, 0.75);
  }
}

/* **  Fadding 
  ***   gifs
  ***  edges 
 * * */
.faded {
  position: relative;
  display: inline-block;
  color: #1a191c;
}

.faded:after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-collapse: separate;
}
/* Faded single */
.faded.faded-left:after {
  box-shadow: inset 40px 0 40px -16px;
}
.faded.faded-right:after {
  box-shadow: inset -40px 0 40px -16px;
}
.faded.faded-top:after {
  box-shadow: inset 0 40px 40px -16px;
}
.faded.faded-bottom:after {
  box-shadow: inset 0 -40px 40px -16px;
}
/* end faded single end */

/* faded multiple */
.faded.faded-left.faded-bottom:after {
  /* box-shadow: inset 40px -40px 40px -16px; */
  box-shadow: inset 53px -43px 40px -16px;
}
.faded.faded-top.faded-right:after {
  /* box-shadow: inset -40px 40px 40px -16px; */
  box-shadow: inset -40px 50px 40px -8px;
}
.faded.faded-left.faded-top:after {
  box-shadow: inset 40px 40px 40px -16px;
}
.faded.faded-top.faded-right.faded-bottom:after {
  box-shadow: inset -20px 0 40px 16px;
}
/* end faded multiple end */

.g-title{
    position: relative;
    /* font-size: 13px; */
    /* font-weight: 500; */
    text-transform: uppercase;
    padding-left: 30px;
    font-family: Roboto Mono;
    letter-spacing: 2px;
}

.eff-1::before{
    position: absolute;
    z-index: -1;
    top: -7px;
    bottom: 0;
    left: 0;
    width: 12px;
    height: 33px;
    background: #5a2ebb;
    content: "";
    animation: glitchy 1.5s ease infinite reverse;
    /* animation: glitchy 1.5s ease 2 reverse; */

}
.eff-1::after{
    position: absolute;
    z-index: 2;
    top: -12px;
    bottom: 0;
    left: 0;
    width: 11px;
    height: 42px;
    background: #1a1919;
    content: "";
    animation: glitchy 0.4s ease infinite reverse;
}

.listx2-button {
  padding-left: 0;
    margin-left: -5px;
    list-style: none;
}

.listx2-button li {
  display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
}


.text-right {
    text-align: right;
}
</style>
