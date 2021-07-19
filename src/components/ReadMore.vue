<template>
  <div class="row read-more">
      <div class="col-md-12 pt-0 mt-0" v-if="load">
        <ul class="content-desc">
        <li class="description" >{{content}}</li>
        </ul>
      </div>
      <div class="button-read-me offset-md-6 col-md-6 text-right">
          <p class="text-right" @click="showMore()"> {{stateReading}} details</p>
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
    
    }
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
  color: #999;
  font-size: 2rem;
}
</style>