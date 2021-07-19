<template>
  <div class="row read-more">
      <div class="col-md-12 pt-0 mt-0" v-if="load || showMin">
        <ul class="content-desc">
        <li class="description" >{{detailedDescription}}</li>
        </ul>
      </div>
      <div class="button-read-me offset-md-6 col-md-6 text-right" v-if="minIs">
          <p class="text-right" :class="[load ? 'text-secondary-color' : 'text-primary-color']" @click="showMore()"> {{stateReading}} details</p>
      </div>
  </div>
  
</template>
<script>
export default {
  props:{
    content:{
      type:String,
      default: () => {
        return {}
       }
    },
    showMin:{
      type:Boolean,
      default: () => {
        return {}
       }
    },
    min:{
      type:Number,
      default: false
    },
  },
    data(){
      return{
        load: false,
        stateReading: "+ More "
      }
    },
  methods:{
    showMore(){
      return !this.load ? (this.load = true, this.stateReading = "- less ")
       : (this.load = false, this.stateReading = "+ More ")
    }
  },
  computed: {
    detailedDescription(){
      let text = this.content
        return this.load ? this.content :
         ((this.content.length > this.min ? this.content.substring(0, this.min) + "..." : this.content ))
    },
    minIs(){
      return this.min != null ?  (this.content.length > this.min ? true : false) : false
    }
  }
}

</script>
<style scoped>
.button-read-me{
  cursor: pointer;
}
.read-more li{
  color: whitesmoke;
}

.read-more li:hover{
  color: white;
}

.read-more p {
  /* color: #999; */
  font-size: 14px;
}
</style>