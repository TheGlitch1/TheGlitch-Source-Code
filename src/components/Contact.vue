<template>
  <section
    id="contact"
    class="contact text-primary-color"
    :class="{ 'contact-full-width': showform }"
  >
    <div class="container">
      <div class="row">
        <div class="col-1 animate-pulse-right" @click="updateState">
          <span class="icon h4 " :class="[ showform ? 'text-special-color font-weight-bold': '' ]">
            {{ showform ? ">>" : "<<" }}
          </span>
        </div>
        <div class="col-12 text-center" :class="{ 'd-none': !showform }">
          <div class="contact-from-error" v-if="!status.sent">
            <h4 class="mb-4">{{status.message}}</h4>
            <p>Please contact me directly : <span class="g-title">natij.yas@gmail.com</span></p>
          </div>
          <div v-else class="contact-form" :class="{ 'contact-form-active': !showform }">


            <span class="g-title glitch-text mb-md-3">Contact me</span>
            <form  @submit.prevent="postNow" method="POST" >
              <div class="form-group mb-3">
                <input class="form-control" type="email" name="_replyto" v-model="email" placeholder="Email"/>
              </div>
              <div class="form-group mb-3">
                <input class="form-control" type="text" name="subject" v-model="subject" placeholder="Subject"/>
              </div>
              <div class="form-group mb-3">
                <textarea class="form-control" name="message" v-model="message" rows="3" placeholder="Message"></textarea>
              </div>

              <!-- your other form fields go here -->

              <button class="border-0 d-block line-link btn-custom btn-glitchy mb-3" :class="{'disabled':!isFilled}" :disabled="!isFilled" type="submit"> Send </button>
            </form>
            
          </div>
          <div class="status text-primary-color">
            <p class="p-2">{{status.message && status.sent ? status.message : ""}}</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["showform"],
  data() {
    return {
      // showform: this.showform,
      email:"" ,
      subject:"",
      message:"",
      formLink:{
        glitch1: "https://formspree.io/f/mleawylk",
        glitch2: "https://formspree.io/f/mgerlbjy"
      },
      status : {

          sent:true,
          message:null
        
      }
    };
  },
  computed: {
    detailMessage(){
      return " ---Subject : " + (this.subject ? this.subject : "No subject") + " --- Message: " + this.message 
    },
    isFilled(){
      return this.email && this.subject && this.message ? true : false
    }
  },
  methods: {
    updateState() {
      this.showform = !this.showform;
      this.$emit("openForm", this.showform);
    },
    postNow() {
      this.status={
          sent : true,
          message :"",
        }
      var data = new FormData();
      data.append('_replyto',this.email)
      data.append('message',this.detailMessage)
      
      this.axios.post(this.formLink.glitch1,data , {
        headers: {
          'Accept': 'application/json',
        },
        // body: data,
      }).then(res =>{
        console.log("response ===" ,res)
        console.log(this.formLink.glitch1)
        this.status={
          sent : true,
          message :"Thanks for your submission!",
        }
        this.resetFilds()
      }).catch(err =>{
        console.log(err)
        this.status={
          sent : false,
          message :"Oops! There was a problem submitting your form",
        }
        
      });
    },
    resetFilds(){
      this.email = "" ;this.subject="";this.message="";
    }
  },
};
</script>

<style scoped>
.col-1{
  cursor: pointer;
  padding:2px;
}
.contact {
  position: fixed;
  width: 40px;
  background: rgb(90 46 187);
  top: 70vh;
  right: 0;
  z-index: 99;
  transition: all 0.4s ease-in-out;
}

.contact.contact-full-width {
  background: rgb(5, 5, 5);
  width: 520px;
  padding: 12px 21px;
  top: calc(100% - 445px);
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
@media (max-width: 767px) and (min-width: 320px) {
  .contact.contact-full-width {
    /* top: 33%; */
    right: 0;
    width: 100vw;
    padding: 10px;
  }
}
</style>