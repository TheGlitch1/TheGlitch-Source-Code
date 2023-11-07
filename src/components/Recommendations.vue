<template>
  <section id="recommendations" class="section-padding section">
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <div class="title-section text-center">
              <span class="h2  g-title glitch-text text-primary-color">Recommendations</span>
              <hr>
              <p class="text-secondary-color"></p>
            </div>
          </div>
        </div>
        <!-- row end -->
        <div class="row no-margin">
          <div v-for="(rec,index) in recommendations" :key="rec.index" class="recommendation-card-link col-md-6 col col-xs-1" @click="navigateToLinkedIn">
            <div class="recommendation-card">
              <div class="recommendation-header">
                <div>
                  <img :src="'https://corsproxy.io/?' + rec['img-src']" alt="Profile Picture" class="profile-image">
                </div>
                <div class="recommendation-details my-2">
                  <p class="from">{{ rec.from }}</p>
                  <p class="profile" :title="rec.profile">{{ rec.profile | preview }}</p>
                </div>
              </div>
              <ReadMore class="readMore text-secondary-color" :content="rec.desc_recommendation " :showMin=true :min=220 />
            </div>
          </div>
        </div>
    </div>
  </section>
</template>
  
<script>
import ReadMore from './reusables/ReadMore.vue';

export default {
  components:{
    ReadMore
  },
  name: "Recommendations",
  props: {
    recommendations: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    navigateToLinkedIn() {
      window.open("https://www.linkedin.com/in/yassine-natij/details/recommendations/", "_blank");
    },
  },
  filters: {
    preview(value) {
      return value.length >50 ?  value.substring(0, 50) + '...' : value;
    }
  }
}
</script>
  
<style scoped>
.recommendation-container {
  padding: 20px;
  /* background-color: #2c3e50; */
  /* Adjust based on your site's color scheme */
  color: white;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.recommendation-card-link {
  text-decoration: none;
  /* Remove underlines from links */
}

.recommendation-card {
  display: flex;
  /* margin-bottom: 20px; */
  transition: opacity 0.3s;
  background: #060606;
  padding: 10px;
  margin:5px 0px;
  flex-wrap:wrap;
}

.recommendation-header{
  display: flex;
  align-items: center;
}
.recommendation-card-link:hover .recommendation-card {
  /* opacity: 0.7; */
  background: #1a191c29;
}

.profile-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
}

.from {
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin: 0;
}

.profile {
  font-size: 16px;
  color: #a0a0a0;
  /* Lighter shade for secondary text */
}

.desc {
  margin-top: 10px;
}
</style>
  