<template>
    <section id="about" class="about section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-5 d-none d-md-block">
                  <div class="slider-contents-baner">
                   <div class="slider-media-hoz">
                       <span :class="glitchStatus !='OFF' ? glitchFadedEffect :''">
                          <img src="../assets/lost_online.svg" alt="" sizes="" srcset="" width="95%" />
                        </span>
                  </div>
                 </div>
                </div>
                <div class="col-12 col-md-7">
                    <div class="about-right">
                        <span class="h2  g-title glitch-text text-primary-color">{{ profile.title }}</span>
                        <hr>
                        <p class="text-secondary-color" v-html="profile.text" />
                    </div>
                    <div class="about-meta">
                        <div class="about-meta-links">
                            <ul class="listx2-button float-right">
                                <li v-for="(btn, key) in aboutButtons" :key="key">
                                    <a @click="btn.vue ? openForm() : ''" :href="btn.link" :target="btn.vue ? '':'blank'" class="btn-custom btn-glitchy line-link"><span class="text-inner ">{{btn.text}}</span></a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
    // setup() {
        
    // },
    props: {
    skills: {
      type: Array,
      default: () => []
    },
    profile: {
      type: Object,
      default: () => {
        return {}
      }
    },
    glitchStatus:{
      type: String,
      default:() => '',
    }
  },
  data(){
    return {
      fadedStyle : true,
    }
  },
   computed: {
    glitchFadedEffect(){
      return this.fadedStyle ? 'faded faded-right faded-top faded-style-2' : ''
    },
    leftSkills() {
      return this.skills.filter((skill) => skill.position === 'left')
    },
    rightSkills() {
      return this.skills.filter((skill) => skill.position === 'right')
    },
    aboutButtons() {
      if (this.profile.button_1) {
        return [
          {
            text: this.profile.button_1.text,
            link: this.profile.button_1.link,
            vue: true ,
          },
          {
            text: this.profile.button_2.text,
            link: this.profile.button_2.link,
            vue: false,
          }
        ]
      } else {
        return []
      }
    }
  },
  methods: {
    aboutBtnClass(key) {
      return key > 1
        ? `comman-btn about-me-btn-${key}`
        : 'comman-btn about-me-btn'
    },
    skillBarClass(key, skills) {
      return key === skills.length - 1
        ? 'skillbar '
        : 'skillbar '
    },
    openForm: function() {
			this.$emit('openForm', true)
		},
  }
})
</script>
<style scoped>
.about.section-padding {
    padding: 125px 0 144px;
}

.about-right {
    padding-top: 3vh;
}

.about-meta{
    margin-top: 50px;
}

.slider-media-hoz{

}

  @media (max-width: 767px) and (min-width: 320px){

    .about.section-padding {
      padding: 125px 0 110px;
    }
  }
</style>