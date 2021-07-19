<template>
  <section id="Projects">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
           <div class="title-section text-center">
            <span class="h2 eff-1 g-title">Github Project & Other</span>
            <p>Achievements, projects & contribution.</p>
          </div>
        </div>
      </div>
      <!-- row end -->
      <div class="row">
        <div class="col-md-12">
          <ul class="list-stack-titles">
            <li v-for="stack,key in stacks" :key="key" :class="{ active: filter == stack }"
              @click="setLanguageFilter(stack)">
              {{ stack }} {{ filter == stack ? `(${processedReps.length})` :  ``}}
            </li>
          </ul>
        </div>        
      </div>
      <!-- row end -->
      <carousel
        :per-page="3"
        :autoplay="false"
        :autoplay-hover-pause="true"
        :navigation-enabled="true"
        :pagination-color="`#0b0b0b`"
        :pagination-active-color="`#7943eb`"
        navigation-next-label=">"
        navigation-prev-label="<"
      >
      <slide v-for="(repo, key) in processedReps" :key="key">
          <div class="service-teatimonial-single-item github-item">
            <div class="service-teatimonial-item-inner">
              <div class="row">
                <div class="col-md-12">
                  <h4 style="margin: 0.3rem 0px;">
                    <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                  </h4>
                  <p class="repo-date">{{ repo.updated_at }}</p>
                  <p>{{repo.description}}</p>
                  <!-- <read-more
                    more-str="Read more"
                    :text="repo.description"
                    link="#"
                    less-str="Read less"
                    :max-chars="50"
                  /> -->
                </div>
              </div>
              <div class="row has_border">
                <!-- <div class="col-md-4">
                  <span>
                    <i class="fa fa-star" />
                    {{ repo.stargazers }}
                  </span>
                </div>
                <div class="col-md-4">
                  <span>
                    <i class="fa fa-code-fork" />
                    {{ repo.forks }}
                    
                  </span>
                </div> -->
                <div class="offset-md-3 col-md-6">
                  <span class="service-stack glitch-text">
                    <i class="fa fa-code" />
                    <span class="service-stack glitch-text glitch-span" aria-hidden="true">{{ repo.language }}</span>
                    <span class="service-stack glitch-text glitch-span" aria-hidden="true">{{ repo.language }}</span>
                    {{ repo.language }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <!-- container end -->
  </section>
</template>

<script>
  export default {
    props: {

    },
    data(){
      return{
        loadingRepos: false,
        repos: [],
        stacks:[],
        filter: "All",
        sort: ["A-Z","Updated","Watchers","Stars"]
        // colors: style

      }
    },
    created(){
      this.getRepo();
    },
    computed: {
      processedReps() {
        return this.filter == 'All'
          ? this.repos 
          : this.repos.filter(
              r =>
                (r.language && r.language == this.filter) ||
                (r.language == null && this.filter == 'Other')
            )
      }
   },
    methods:{
      async getRepo() {
          this.error = "";
          let config = {
            headers: {
              //   Authorization: "token" + btoa(this.username + ":" + this.password),
              Authorization: "Token" + this.token,
            },
          };

          let data = {
            HTTP_CONTENT_LANGUAGE: self.language,
          };
          // if Api selected in axios , use response.data.item
          let api ="https://api.github.com/search/repositories?q=user:TheGlitch1";
          let publicApi ="https://api.github.com/users/TheGlitch1/repos?";

           await this.axios.get(publicApi, data, config)
            .then((response) => {
              this.repos = response.data;
              this.repos.map( s=>({
                owner: s.owner.login,
                repo: s.name ? s.name : 'Untiled-No name',
                description: s.description ? s.description : s.description = "No description availble",
                language: s.language,
                isFork: s.fork,
                stargazers: s.stargazers_count,
                watchers: s.watchers_count,
                url: s.url = s.html_url,
                forks: s.forks_count,
                updated_at: s.updated_at
              }));
              this.loadingRepos = true;
            })
            .catch((error) => {
              console.log(error);
            });
            // this.repos.sort((a, b) => (a.stargazers < b.stargazers ? 1 : -1))
            // this.repos.sort((a, b) => (a.watchers < b.watchers ? 1 : -1))
             this.repos.sort(function(a,b){
                  return new Date(b.updated_at) - new Date(a.updated_at);
             });
            this.setStackElements()
            console.log(this.repos[2]);
      },
      setLanguageFilter(text) {
        this.filter = text
      },
      setStackElements() {
         this.stacks = [
          'All',
          ...new Set(
            this.repos
              .map(r => (r.language != null ? r.language : r.language = 'Other')).sort()
          )
        ]
      },
    }
  }
</script>

<style scoped>
.list-stack-titles{
    margin: 0 0 40px;
    padding: 0;
    list-style: none;
    text-align: center;
}

.has_border {
    padding-top: 0.8rem;
    margin-top: 5px;
}

.list-stack-titles li {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    font-family: Roboto Mono;
    color: #c0c4d6;
    transition: all .3s ease-in-out;
    position: relative;
}
li.active,li:hover {
  color: #7943eb;
}

.github-item {
  padding: 2.5rem;
  margin-left: 1rem;
  background: #121213;
  transition: all 0.3s ease-in-out;
  min-height: 300px;
}

.service-teatimonial-item-inner {
    text-align: center;
}

.service-teatimonial-item-inner h4 {
    color: #7943eb;
    font-size: 16px;
    transition: all .3s ease-in-out;
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 22px;
    letter-spacing: 2px;
    
}

 .github-item .repo-date {
    margin-bottom: 0.8rem;
    color: #999;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Roboto Mono';
  }
  .service-stack{
    color: #eee !important;
  }
</style>