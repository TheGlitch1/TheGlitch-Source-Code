<template>
  <section
    id="contact"
    class="contact text-primary-color"
    :class="{ 'contact-full-width': showSettings }"
  >
    <div class="container">
      <div class="row">
        <div class="col-1 animate-pulse-right" @click="updateState">
          <span
            class="icon h3"
            :class="[showSettings ? 'text-special-color font-weight-bold' : '']"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gear-wide-connected"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"
              />
            </svg>
          </span>
        </div>
        <div class="col-12" :class="{ 'd-none': !showSettings }">
          <div class="contact-form" :class="{ 'contact-form-active': !showSettings }">
            <!-- toggle switch theme -->
            <span>Choose your Theme</span>
            <!-- <input type="checkbox" id="switch"> -->
            
              <div class="switch-toggle-theme text-center mb-4">
                 <div class="switch-theme col-md-12">
                    <div class="toggle-theme" :style='"transform: translateX(calc("+ tab +"*100%));"' :class={}></div>
                      <div class="names-theme">
                          <div class="switch-option-3" @click="switchLevel(0)" :class="{'active': tab=='0' }"><span>OFF</span></div>
                          <div class="switch-option-3" @click="switchLevel(1)" :class="{'active': tab=='1' }"><span>Level1</span></div>
                          <div class="switch-option-3" @click="switchLevel(2)" :class="{'active': tab=='2' }"><span>Level2</span></div>
                      </div>
                    </div>
               </div>
            
            <div class="style-options mb-4">
              <span class="">Choose a RESUME style</span>
              <div class="sections-styles">
                <!-- label and active twitch toggle  compact  expand-->
                <div class="section-item">
                  <!-- <span>RESUME</span> -->
                  <div class="switch-resume col-md-8">
                    
                        <div class="toggle-resume" :style='"transform: translateX(calc("+ pos +"*100%));"' :class={}></div>
                      <div class="names-resume">
                          <div class="switch-option-2" v-for="item,index in resume" :key="index" @click="updateResume(index),scroll()">
                            <span :class="{'active': pos===index }">{{item}} </span>
                          </div>
                          <!-- <div class="switch-option-2" @click="updateResume"><span>Expend</span></div> -->
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:"",
  props: ["showSettings","glitchStatus","resumePar"],
  data() {
    return {
      // Propshowform: this.showSettings,
      glitchlevel: this.glitchStatus,
      settings: this.showSettings,
      tab: 0,
      pos: this.resumePar,
      status: {
        sent: true,
        message: null,
      },
      glitchLvl:["OFF","glitch_1","glitch_2"],
      resume : ['Compact','Expend'],
    }
  },
  mounted() {
    this.checkGlitch()
  },
  computed: {

  },
  methods: {
    updateState() {
      this.settings = !this.settings;
      this.$emit("openSettings", this.settings);
      this.$emit("openForm", false);
    },
    switchLevel(position){
      this.tab=position
      this.$emit('glitchIt',this.glitchLvl[position]); // send 1:0 true or false
    },
        checkGlitch(){
      let tposition = '';
      
      if( this.glitchStatus == "glitch_1"){
        tposition = 1;
      }else if(this.glitchStatus == "glitch_2"){
        tposition = 2;

      }else{
        tposition = 0;
      }
      return this.tab = tposition;
    },
    updateResume(index){
      this.pos = index;
      this.$emit("resumeStyle",index);
    },
    scroll() {
      const element = document.getElementById('resume');
      element.scrollIntoView({ behavior: 'smooth' });
    },

    // glitchItOn: function() { 
    //   this.glitchlevel = true  
		// 	this.$emit('glitchIt', this.glitchlevel)
		// },
    // glitchItOff: function() { 
    //   this.glitchlevel = false  
		// 	this.$emit('glitchIt', this.glitchlevel)
		// }
  },
  watch: {
    glitchStatus: function (tposition) { 
      if( this.glitchStatus == "glitch_1"){
        tposition = 1;
      }else if(this.glitchStatus == "glitch_2"){
        tposition = 2;

      }else{
        tposition = 0;
      }
      return this.tab = tposition;
    },
    resumePar: function(value){
      return this.pos = value
    }
  },
};
</script>

<style scoped>
.col-1 {
  cursor: pointer;
  padding: 2px;
}
.contact {
  position: fixed;
  width: 40px;
  background: rgb(90 46 187);
  top: 25vh;
  right: 0;
  z-index: 99;
  transition: all 0.4s ease-in-out;
}

.contact.contact-full-width {
  background: rgb(5, 5, 5);
  width: 350px;
  padding: 12px 21px;
  top: calc(100% - 77vh);
  right: 0;
}

.contact-content {
  position: relative;
  padding: 30px;
  background: white;
}

.contact-form-active {
  display: none;
}

.icon {
  /* animation: uparrow 0.6s ease-in-out infinite alternate ; */
}
.icon::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  position: absolute;
}
/* Swicth Toggle */

.switch-theme,.switch-resume {
background-color: rgb(46, 42, 42);
    /* margin-top: 25px; */
    position: relative;
    box-shadow: 0 2px 15px rgb(0 0 0 / 15%);
    padding: 8px 5px;
    /* border-radius: 100px; */
    /* border-radius: 5%; */
}
.active{
  color:var(--special-color);
  font-weight: 700;
}
.names-theme,
.names-resume {
    font-size: 79%;
    font-weight: bolder;

    position: relative;
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: rgb(238, 231, 238);
    /* padding: 2px 2px;*/
    /* justify-content: space-between; */
    /* gap: 0%; */
        /* width: 75%; */
    /* margin-top: 20px; */
}
.switch-option-3 {
        width: 33%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    /* align-content: center; */
    align-items: center;
    min-height: 41px;
}
.switch-option-2 {
    width: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    /* align-content: center; */
    align-items: center;
    min-height: 41px;
}
.names-theme div p{
   
}
.toggle-resume,
.toggle-theme {

    background-color: #fff;
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 0;
    /* bottom: 0;*/
    /* height: 2.8rem; */
    /* border-radius: 100px; */
    /* transform: translateX(calc(2*100%)); */
    /* box-shadow: 0 2px 15px rgb(0 0 0 / 15%); */
}
/* label {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  margin: 1.8rem 0 4rem 0;
  cursor: pointer;
} */
.toggle-theme {
   position: absolute;
    height: 47px;
    width: 32%;
    top: 5px;
}
.toggle-resume {
    position: absolute;
    width: 48%;
    height: 45px;
    top: 6px;
}


/* [type="checkbox"] {
  display: none;
}

[type="checkbox"]:checked + .app .toggle{
  transform: translateX(100%);
  background-color: #34323D;
}
[type="checkbox"]:checked + .app .dark{
  opacity: 1;
}
[type="checkbox"]:checked + .app .light{
  opacity: .5;
}
[type="checkbox"]:checked + .app .nice{
  opacity: .5;
} */
/* App */
/* [type="checkbox"]:checked + .app .body{
  background-color:  #26242E;
  color: white;
} */
@media (max-width: 767px) and (min-width: 320px) {
  .contact.contact-full-width {
    /* top: 33%; */
    right: 0;
    width: 100vw;
    padding: 10px;
  }
}
</style>
