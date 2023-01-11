<template>
  <section id="resume" class="resume-area section-padding section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <div class="title-section text-center">
            <span class="h2  g-title glitch-text text-primary-color">
              Resume
            </span>
            <p class="text-secondary-color">
              Education, work experiences and projects.
            </p>
          </div>
        </div>
      </div>
      <div class="row no-margin">
        <div class="col-md-12 no-padding" style="min-height: 500px;">
          <div class="cntent-center text-center">
            <ul class="swicth-content p-0 py-4">
              <li class="choice d-inline " v-for="item,index in resume" :key="index" @click="source=index,changedIndex='0'" :class="source == index ? 'active':''">
                  <span class="btn-custom p-0 line-link">
                    <span><img :src="ItemIcon(index)"  alt="" sizes="" srcset="" class="logo-img" :class="source == index ? 'active':''" width="13%" /></span>
                     {{index | capitalize}}
                  </span>
              </li> 
            </ul>
          </div>
          <div class="row no-margin">
            <div class="p-4 d-flex flex-column flex-md-row content-main" style="gap:8px;">
              <ul class="tab-list text-primary-color" style="list-style:none;padding:7px;margin-bottom: 0px;">
                <!-- TODO:v-for of avaible tabs (education or experience) -->
                <li class="tab" v-for="(item,j) in processedSource" :key="j" @click="changedIndex=j" :class="changedIndex == j ? 'active':''">
                  <div class="p-1">
                    <span class="">
                      {{item.title}}
                    </span>  
                  </div> 
                </li>
              </ul>
                <!-- TODO:v-for of avaible tabs (education or experience) -->
              <div class="section-tab-details p-3">
                  <!-- TODO:v-if to check if index == tab -->
                <div class="text-primary-color tab-details" v-for="(item,j) in processedSource" :key="j" :class="changedIndex==j ? 'activeTab':''">
                    <div class="details" v-if="changedIndex==j" >
                      <p>{{item.date}}</p>
                      <h3>
                        <span v-if="item.subtitle">{{item.subtitle}}</span>
                        <span>
                          @<a href="#">{{item.title}}</a>
                        </span>
                      </h3>
                      <div class="item-description py-3">
                        <ul v-if="item.block == 'HTML'" v-html="item.description"/>
                        <p v-else>{{item.description}}</p>
                      </div>
                      <div v-if="item.stack" class="p-3">
                        <span class="item-stack " v-for="( stack , key ) in item.stack" :key="key">
                          {{stack}} {{ key+1 == item.stack.length  ? "" : "-" }}
                        </span>
                      </div>
                      
                      <a href="#">
                        <h4>{{ item.location }}</h4>
                      </a> 
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- row-End -->
    </div>
  </section>
</template>

<script>
// import ReadMore from "./components/ReadMore.vue";
// import ReadMore from './ReadMore.vue';
export default {
  components:{
    // ReadMore
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
      source: "experience",
      changedIndex:'0',
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
    },
     ItemIcon(index) {
       let imgPath= require(`../assets/${index}.svg`);
       console.log(imgPath)
      return imgPath;
      
    }
    // changeSource(index){
    //   console.log(index)
    //   this.source=index
    // }
  },
  computed:{
    educations(){
      return this.resume ? this.resume.education : []  
    },
    experiences(){
      return this.resume ? this.resume.experience : []
    },
    processedSource(){
      return this.resume ? this.resume[this.source] : []
    },
   
  },
  filters: {
    FullDesc(value){
      return value.substring(0,150)+ '...';
    },
    uppercase(value){
      return value.toUpperCase();
    },
    capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  watch: {
    
  }

}
</script>

<style>
.logo-img {
  /* to black */
  filter: invert(1) sepia(0) saturate(0) hue-rotate(139deg) brightness(0.5);
  transition: all 0.3s ease-in-out;
  /* or to blue */
  /* filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg); */
}
.logo-img.active {
  filter: invert(0);
}
.tab-details{
 opacity: 0;
  transform: translateY(20px);
  transition: .5s;
  
}
.tab-details.activeTab{
    opacity: 1;
    transform: translateY(0);
    
}
.tab.active {
  box-sizing: border-box;
  border-left:solid;
  border-color: #7943eb;
  border-width: 1.5px;
  background-color: #7843eb1a;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

}
.tab{
    cursor: pointer;
    padding:10px 12px;
    box-sizing: border-box;
    border-left: solid;
    border-color: #7843eb52;
    border-width: 1px;
    transition: border 0.6s cubic-bezier(0.645,0.045,0.355,1);
}
.tab-list{
  width:max-content
}
.tab-list li div {
    /* text-decoration: none;
    -webkit-text-decoration-skip: ink;
    text-decoration-skip-ink: auto; */
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    /* display: flex; */
    align-items: center;
    /* height: var(--tab-height); */
    padding: 0 20px 2px;
    border-left: 2px solid var(--lightBackground);
    background-color: transparent;
    /* color: var(--slate); */
    /* font-family: var(--font-mono); */
    /* text-align: left; */
    white-space: nowrap;
    font-size: .8rem;
}
.item-stack {
    font-size: 12px;
}
</style>
