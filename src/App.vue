<template>
  <div id="app" :class="[highGlitch=='OFF'?'no-glitch-bg':'']">
    <!-- <div v-if="renderComponent"> -->
    <canvas id="canvas" ref="canvas"></canvas>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HeaderComponent :showform="openContact"  @openForm="updateOpenContact($event)" :glitchStatus="highGlitch" @glitchIt="updateHighGlitch($event)"/>
    <IntroductionComponent  :profile ="profile.about" :social="profile.social" @glitchIt="updateHighGlitch($event)"/>
    <AboutComponent :skills="data.skills" :profile="profile.about" :glitchStatus="highGlitch" @openForm="updateOpenContact($event)"/>

    <ResumeComponent2 v-if="resumechild == 0" :resume="data.resume" />
    <ResumeComponent v-else :resume="data.resume" />
    <RecommendationsComponent :recommendations="data.recommandations" />
    
    <GithubProjectsComponent :projects="data.projects.entreprise"/>
    <ContactComponent :showform="openContact" @openForm="updateOpenContact($event)"  @openSettings="updateOpenSettings($event)"/>
    <SettingsComponent @openForm="updateOpenContact($event)" :showSettings="openSettings" @openSettings="updateOpenSettings($event)" :glitchStatus="highGlitch" @glitchIt="updateHighGlitch($event)"
     :resumePar="resumechild" @resumeStyle="updateResumeStyle($event)" ref="settings" /> 
     <!-- @hook:mounted="componenetIsRendred()" -->
   
    <!-- <TutorialsComponent ref="tutorial"/> -->
    <FooterComponent />
  </div>
</template>

<script>
import json from './json/data.json'

import HeaderComponent from "./components/Header.vue";
import IntroductionComponent from "./components/Introduction.vue";
import AboutComponent from "./components/About.vue";
import ResumeComponent from "./components/Resume.vue";
import ResumeComponent2 from "./components/Resume2.vue";
import GithubProjectsComponent from "./components/GithubProjects.vue";
import ContactComponent from "./components/Contact.vue";
import SettingsComponent from "./components/Settings.vue";
import TutorialsComponent from './components/tutorials2.vue';
import RecommendationsComponent from './components/Recommendations.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: "App",
  components: {
    HeaderComponent,
    IntroductionComponent,
    AboutComponent,
    ResumeComponent,
    ResumeComponent2,
    GithubProjectsComponent,
    ContactComponent,
    SettingsComponent,
    TutorialsComponent,
    RecommendationsComponent,
    FooterComponent
},
  data(){
    return{
      profile:json.settings,
      data:json.data,
      openContact :false,
      openSettings :false,
      glitchLvl:["OFF","glitch_1","glitch_2"],
      highGlitch: localStorage.appTheme ? localStorage.appTheme : "OFF",
      renderComponent: true,
      resumechild:0,
      appTheme: localStorage.appTheme ? localStorage.appTheme : "OFF",
      
    }
  },
  created(){
    document.title = "Yassine NATIJ : Personal web site "
  },
  mounted() {
    this.hireMe()
    this.switchGlitch();

  },
  methods: {
    forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          // this.$refs.canvas.getContext('2d');
        });
    },
     switchGlitch(){
      //  this.clearCanvas()
      //     this.highGlitch ? (this.canvasGlitch1(),console.log("Glitch level 2 Loaded"))
      //  : (this.canvasNormal(),console.log("Glitch level 1 Loaded"))
       
       if(this.highGlitch=="glitch_2"){
         this.canvasGlitch2()
       }
       else if(this.highGlitch=="glitch_1"){
         this.canvasGlitch1()
       }else{
         this.clearCanvas()
       }
       
    },
    canvasGlitch1(){
                localStorage.appTheme = "glitch_1"
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


        function glitch() {
          rAF = window.requestAnimationFrame(glitch);

          ctx.fillStyle = "#1a191c";
          ctx.fillRect(0, 0, innerWidth, innerHeight);


          // rgb(70, 29, 180)
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
    canvasGlitch2(){
          localStorage.appTheme = "glitch_2"
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


        function glitch() {
          rAF = window.requestAnimationFrame(glitch);

          ctx.fillStyle = "#1a191c";
          ctx.fillRect(0, 0, innerWidth, innerHeight);

          // texts(colors[Math.floor(Math.random() * 7)]);
          // ctx.shadowBlur = 0;
          // ctx.shadowColor = "none";
          // ctx.setTransform(1, 0, 0, 1, 0, 0);

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

          ctx.fillStyle = colors[Math.floor(Math.random() * 40)];
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
    canvasNormal(){
      localStorage.appTheme = "glitch_1"

      //jQuery included via codepen site
        const canvas = document.querySelector("canvas");
        // var canvas = $('#canvas');
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        canvas.width  = innerWidth
        canvas.height = innerHeight;
        //a gradient object can be assigned as a fillStyle OR a strokeStyle. create a gradient object the same way you'd create an image object - by declaring it as a variable:
        var grad1 =  ctx.createLinearGradient(0, 0, 0, canvas.height);
        //the .createLinearGradient method creates a linear gradient object in our drawing surface ('ctx'). the first two numbers are the starting point; the next two are the end point. the gradient is oriented to these points.

        // grad1.addColorStop(0, 'hotpink');
        // grad1.addColorStop(.5, 'orange');
        // grad1.addColorStop(1, 'yellow');
        grad1.addColorStop(0, "rgb(70, 29, 180)");
        // grad1.addColorStop(.4, "rgb(93, 42, 122)");
        // grad1.addColorStop(.6, "rgb(93, 42, 122)");
        grad1.addColorStop(1, "rgb(209, 114, 188)");
        // grad1.addColorStop(1, "#4f4297");

        //.addColorStop assigns a specific color to the gradient, relative to its start and end points. above, the gradient is hotpink at its starting point, orange at its halfway mark (.5), and yellow at the end (1).
        // rAF = window.requestAnimationFrame();
         ctx.fillStyle = grad1;
        //this assigns the gradient object as our fillStyle
          ctx.fillRect(0, 0, innerWidth, innerHeight);
        // ctx.rect(10, 10, 480, 235);
        // ctx.rect(10, 255, 480, 235);
        //the gradient's position is relative to the canvas, not the objects it fills
        
        ctx.fill();
        window.addEventListener("resize", () => {
          canvas.width = innerWidth;
          canvas.height = innerHeight;
        });
  
    },
    clearCanvas () {
      localStorage.appTheme = "OFF"
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    parseMedata() {
      
    },
    updateOpenContact(value){
      this.openContact = value
    },
    updateOpenSettings(value){
      this.openSettings = value
    },
    updateHighGlitch(value){
      this.highGlitch = value;
    },
    updateResumeStyle(value){
      this.resumechild = value;
    },
    hireMe(){
      var style = "font-size: 14px;" +
      "background: #65339c; /* fallback for old browsers */" + 
      "background: -webkit-linear-gradient(to right, #351277, #65339c); /* Chrome 10-25, Safari 5.1-6 */" +
      "background: linear-gradient(to right, #351277, #65339c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */" +
      "color: white;" +
      "text-align: center;" +
      "padding: 10px 15px;" +
      "width: 100%;" +
      "border-radius: 20px;";

      var text = "%cLet's talk business🙏. natij.yas@gmail.com";
      let info = "Made with with VUE 💚";

      console.log(info);
      console.log(text, style);
    },
    // componenetIsRendred() {
    //   // Only execute this method if the child component is fully rendered
    //   if (this.$refs.settings.isRendered && this.$refs.tutorial.isRendered) {
    //       console.log("execute the conponent is rendred")
    //     this.$refs.tutorial.updateTutorialPosition();
    //   }
    // },
  },
  watch: {
    highGlitch: function (val) {
      this.switchGlitch()
      // val == "OFF" ? location.reload() : ''
    },
    // childWatcher: { //NOT WORKING
    //   handler() {
    //     if (this.$refs.settings.isRendered){
    //       this.componenetIsRendred();
    //     }
    //   },
    // }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
:root{
  --text-primary-color: #efefef;
  --text-secondary-color: #b1c1d1;
  --special-color: rgb(90 46 187);
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
  color: #575757;
  margin-top: 60px;
  margin: 0;
}
.no-glitch-bg{
  background-color: rgb(50 49 68);
    background-image: url(./assets/star-bg.svg);
    background-repeat: repeat-x;
    background-position: center 0,0 0,0 0;
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
.text-special-color{
  color:var(--special-color);
}
.bg-special-color{
  background:var(--special-color);
}
.relative {
  position: relative;
}

.float-right{
  float: right;
}
.font-weight-bold{
  font-weight: 700;
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
  z-index: -1;
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
  cursor: pointer;

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


.animate-pulse-left{
  animation: leftpulse 0.9s ease-in-out infinite alternate ;
  animation-delay: 3s;

}
.animate-pulse-right{
  animation: rightpulse 3s ease-in-out infinite alternate ;
  /* animation-delay: 3s; */

}
@-webkit-keyframes leftpulse {
  0% { transform: translate(-2px, 2px); opacity: 0.4 }

  75% { transform: translate(-4px, 2px); opacity: 0.4 }

  99% { transform: translate(0px, -4px); opacity: 0.9 }

  100% { transform: translate(-10px, 2px); opacity: 0.9 }
}

@keyframes leftpulse {
  /* 0% { transform: translateX(0); opacity: 0.4 }
  98% { transform: translate(2px, 2px); opacity: 0.9 }
  100% { transform: translateX(-0.4em); opacity: 0.9 } */
  0% { transform: translate(-2px, 0px); opacity: 0.4 }

  75% { transform: translate(-4px, 2px); opacity: 0.4 }

  99% { transform: translate(0px, -4px); opacity: 0.6 }

  100% { transform: translate(-10px, 2px); opacity: 0.9 }
}

@-webkit-keyframes rightpulse {
  0% { transform: translateX(0); opacity: 0.4 }
  30% { transform: translateX(0.4em); opacity: 0.9 }
  50% { transform: translateX(0.4em); opacity: 0.9 }
  100% { transform: translateX(0.4em); opacity: 0.9 }

}
@keyframes rightpulse {
  0% { transform: translateX(0); opacity: 0.4 }
  /* 20% { transform: translateX(0.1em); opacity: 0.7 } */
  30% { transform: translateX(0.4em); opacity: 0.9 }
  50% { transform: translateX(0.4em); opacity: 0.9 }
  100% { transform: translateX(0.4em); opacity: 0.9 }
}

.animate-float-up{
  animation: floatpulse 3s  ease-in-out infinite  ;
  /* animation-delay: 6s; */
}

@-webkit-keyframes floatpulse {
  0% { transform: translateY(0); opacity: 0.9 }
 
  50% { transform: translateY(0.7em); opacity: 0.4}

  100% { transform: translateY(0); opacity: 0.9}

}
@keyframes floatpulse {
  0% { transform: translateY(0);  opacity: 0.9}
 
  50% { transform: translateY(0.7em); opacity: 0.4}

  100% { transform: translateY(0); opacity: 0.9}
}

.switch-button {
  /* width: 300px; */
  font-size:9px;
  height: 40px;
  text-align: center;
  position: relative;
  padding: 3px 9px;
  transform: translate3D(14%, 24%, 0);
  will-change: transform;
  /* z-index: 197 !important; */
  cursor: pointer;
  transition: 0.6s cubic-bezier(0.4, 0, 1, 1) all;
}
.switch-button-case {
  display: inline-block;
  background: none;
  width: 49%;
  height: 100%;
  color: white;
  position: relative;
  border: none;
  transition: 0.3s ease all;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding-bottom: 1px;
}
.switch-button-case.active-case-2 {
    background-color: var(--special-color);
    color: var(--on-primary-color);
}
.switch-button-case.active-case-1 {
    background-color: var(--on-primary-color);
    color: var(--special-color);
}
.name {
  font-size: 5rem;
}

.glitch {
  animation: glitchy 0.3s ease infinite reverse;
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
    font-size: 2.2rem;
    /* font-weight: 500; */
    text-transform: uppercase;
    padding-left: 30px;
    font-family: Roboto Mono;
    letter-spacing: 4px;
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

@media (max-width: 767px) and (min-width: 320px){
  .switch-button{
    transform: unset;
  }
}
</style>
