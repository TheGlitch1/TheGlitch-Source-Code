<template>
  <section id="resume" class="resume-area section-padding section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <div class="title-section text-center">
            <span class="h2  g-title glitch-text text-primary-color">Resume</span>
            <p class="text-secondary-color">Education, work experiences and projects.</p>
          </div>
        </div>

      </div><!-- row-End -->
      <div class="row no-margin">
        <div class="col-md-6 no-padding">
          <div class="content-left">
            <h2 class="text-3r resume-heading text-primary-color">
              <i class="ti-crown" />
              Education
            </h2>
          </div> <!--content-left-End -->
          <div v-for="(education,key) in educations" :key="key"
           class="content-main content-main-left" 
          :class="{ 'mb-30': isLastIn(key,'education') }"
           >
           <!-- TODO: Add new object ( site & stack) -->
            <!-- TODO: UP the naming objects ( change subtitles with description -->

            <!-- List all educations -->
            <span class="content-date">{{education.date}}</span>
            <h3 v-if="education.icon" :html="`${education.icon} ${education.title}`" />
            <h3 v-else v-html="education.title" />
            <!-- <p class="content-main-description" v-html="education.subtitle" /> -->
            <ReadMore :content="education.subtitle" :showMin=true :min=40 />
            <a href="#">
              <h4>{{ education.location }}</h4>
            </a>
          </div> <!-- content-main-left END loop-->
        </div>

          <div class="col-md-6 no-padding">
            <div class="content-left">
                <h2 class="text-3r resume-heading text-primary-color">
                  <i class="ti-crown" />
                    Experience
                </h2>
          </div>
          <div
            v-for="(experience, key) in experiences"
            :key="key"
            class="content-main content-main-left" :class="{ 'mb-30': isLastIn(key, 'experience') }">
              <!-- List all expriences -->
              <span class="content-date">{{experience.date}}</span>
              <h3 v-if="experience.icon" v-html="`${experience.icon} ${experience.title}`" />
              <h3 v-else v-html="experience.title" />
              <p v-html="experience.subtitle" />
              <ReadMore v-if="experience.description" :content="experience.description" :showMin=false :bulletStyle=true />
               <span class="stack" v-for="( stack , key ) in experience.stack" :key="key">
                 {{stack}} {{ key+1 == experience.stack.length  ? "" : "-" }}
               </span>
              <a href="#">
                <h4>{{ experience.location }}</h4>
              </a>           
          </div> <!-- End experience loop -->
        </div>
      </div>
    </div><!--Container-End-->
  </section>
</template>
<script>
// import ReadMore from "./components/ReadMore.vue";
import ReadMore from './ReadMore.vue';
export default {
  components:{
    ReadMore
  },
  props: {
    resume: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data(){
    return{
      details: [],
    }
  },
  methods: {
    isLastIn(key, type) {
      if (type === 'education') {
          return this.educations.length === key + 1
      } else if (type === 'exprience') {
          return this.expriences.length === key + 1
      } else {
        return null
      }
    },
    showMore(key){
      console.log("button pressed"+ this.details[key])
      return this.details[key] ? this.details[key] = false
      : this.details[key] = true
    }
  },
  computed:{
    educations(){
      return this.resume ? this.resume.education : []  
    },
    experiences(){
      return this.resume ? this.resume.experience : []
    }
  },
  filters: {
    FullDesc(value){
      return value.substring(0,150)+ '...';
    }
  }

}
</script>
<style scoped>
.resume-area.section-padding {
    padding-top: 145px;
    padding-bottom: 140px;
}
.content-left {
    margin: 50px 0;
    text-align: center;
}
span.content-date {
    color: #999;
    font-size: 14px;
    font-weight: 600;
    font-family: Roboto Mono;
}
span.stack {
    color: var(--text-primary-color);
    font-size: 12px;
    font-weight: 600;
}
.content-main h3 {
    color: #7943eb;
    font-size: 20px;
    font-weight: 700;
    margin-top: 25px;
    margin-bottom: 13px;
    position: relative;
    /* padding-left: 45px; */
}

.content-main h3 > img {
    position: absolute;
    top: -4px;
    left: 0;
}

.content-main p {
    color: whitesmoke;
    font-size: 14px;
    line-height: 24px;
    font-family: Roboto Mono;
    margin-bottom: 15px;
}


.content-main a {
  text-decoration: none;
  color: #7943eb;
}
.content-main h4 {
    color: #999;
    font-size: 14px;
    transition: all .3s ease-in-out;
}


.content-main {
    padding: 30px;
    background: #060606;
    /* border-bottom: 0.2px solid #efeefe; */
    transition: all .3s ease-in-out;
}
.content-main.content-main-left:hover {
    background: #1a191c29;
}
@media (min-width: 1200px){

h4, .h4 {
    font-size: 1.5rem;
}
}
</style>