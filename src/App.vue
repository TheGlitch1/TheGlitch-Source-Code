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
    <v-tour  ref="myTour" name="myTour" :steps="steps" :callbacks="myCallbacks" :options="customeOptions"></v-tour>
    <FooterComponent />
  </div>
</template>

<script>
import json from './json/data.json'
// import tourData from './json/tour.json'
import { steps } from './helpers/tour-steps';

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
      tourState : (localStorage.getItem('tourFinished') === 'true' || this.$tours['myTour']?.isRunning) ?? false,
      steps,
      isNextEnabled: true,
      myCallbacks: {
          onPreviousStep: this.handleTourPrevious,
          onNextStep: this.handleTourNext,
          onFinish: (tour) => {
              localStorage.setItem('tourFinished', true);
            }
        },
    }
  },
  created(){
    document.title = "Yassine NATIJ : Personal web site "
  },
  mounted() {
    this.hireMe();
    this.switchGlitch();
    this.startTour();
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
      this.openSettings = value;
    },
    updateHighGlitch(value){
      this.highGlitch = value;
    },
    updateResumeStyle(value){
      this.resumechild = value;
    },
    handleTourNext(step) {
      const next = this.steps[step+1]
      this.isNextEnabled = true;
      if (next.requireComponent && !this[next.trigger]) {
       this.isNextEnabled = false;
      }
      if (step?.target === '#setting' || step === 1) {
        // this.updateOpenSettings(true); // Open settings if this is the settings step
        // this.isNextEnabled = false;
      }
    },
    handleTourPrevious(step){
      this.isNextEnabled = true;
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
    execNextStep(){
      this.isNextEnabled = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.$tours['myTour'].nextStep();
        }, 300); 
      });
    },
    // componenetIsRendred() {
    //   // Only execute this method if the child component is fully rendered
    //   if (this.$refs.settings.isRendered && this.$refs.tutorial.isRendered) {
    //       console.log("execute the conponent is rendred")
    //     this.$refs.tutorial.updateTutorialPosition();
    //   }
    // },
    startTour(){
      !this.tourState ? this.$tours['myTour'].start() :"";
    },
  },
  computed: {
  customeOptions() {
    return {
      enabledButtons: {
        'buttonNext': this.isNextEnabled,
        'buttonPrevious': true,
      }
    };
  }
},
  watch: {
    highGlitch: function (val) {
      this.switchGlitch()
      // val == "OFF" ? location.reload() : ''
    },
    openSettings: function(val) {
      // console.log("this.=tourState ", this.$tours['myTour'].isRunning )
      if(val === true && this.$tours['myTour'].isRunning) this.execNextStep();
    },
    openContact: function(val) {
      if(val === true && this.$tours['myTour'].isRunning) this.execNextStep();
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

<style scoped>

::v-deep .v-step.v-step  {
  background: rgb(64 63 87); /* #222 Dark background for that vintage feel */
  color: #f7f7f7; /* Light text for contrast */
  /* border: 2px solid #ffc600; Bright color border similar to neon lights */
  /* box-shadow: 0 0 10px #5a2ebb; */
  box-shadow: 0 0 10px #212529;
  /* box-shadow: 0px -2px 2px #5a2ebb; */
  
}

::v-deep .v-step__header.v-step__header  {
  background: #222; /* Slightly lighter header background for a two-tone effect */
  color: #ffffff;
  border-bottom: 2px solid #5a2ebb;
}

::v-deep .v-step__content.v-step__content {
  padding: 10px;
  line-height: 1.5;
}

/* Style the buttons with a retro game-like design */
::v-deep .v-step__button.v-step__button {
  background-color: #333;
  color: #fff;
  /* border: none; */
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

::v-deep .v-step__button.v-step__button:hover {
  background-color: #5a2ebb;
  color: #f7f7f7;
}

/* Specific style for the Skip and Next buttons */
::v-deep .v-step__button.v-step__button-skip{
  background-color: transparent;
  color: #f7f7f7;
  /* text-decoration: underline; */
}

::v-deep .v-step__button-next.v-step__button-next {
  /* background-color: #ff9800; */
  color: #f7f2f2;
}

/* When a button is disabled, make it look faded */
::v-deep .v-step-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

::v-deep .v-step__arrow--dark:before{
  background: #222!important;
  /* box-shadow: -2px -2px 0px 0px #5a2ebb; */
}

</style>
