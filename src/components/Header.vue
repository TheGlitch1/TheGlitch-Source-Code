<template>
  <header id="sticker" class="header-top">
    <div class="container-fulid">
      <div class="row">
      <!-- start mainmenu. -->
      <div class="text-center col-md-12 col-sm-12">
        <div class="mainmenu ">
          <ul id="nav" class="list-inline">
            <li class="header-nav current">
              <a href="#home">Home</a>
            </li>
            <li class="header-nav">
              <a href="#about">About</a>
            </li>
            <li class="header-nav">
              <a href="#Projects">Projects ( Github )</a>
            </li>
            <li class="header-nav">
              <a href="#resume">Resume</a>
            </li>
            <li class="header-nav" >
              <a href="#contact" @click="openForm">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- mainmenu end. -->
      <!-- select language start. -->
      <div class="pr-0 text-right col-md-2 col-sm-2" v-if="i18">
        <div class="secect-language">
          <ul class="list-inline">
            <li>
              <a
                :class="{ active: activeLang('fr') }"
                href="#"
                @click="setLang('fr')"
              >
                FR
              </a>
            </li>
            <li>
              <a
                :class="{ active: activeLang('en') }"
                href="#"
                @click="setLang('en')"
              >
                EN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- select language end. -->
      </div>

      
    </div>
  </header>
  <!-- end header section. -->
</template>

<script>
// import $ from 'jquery'
import 'slicknav/dist/slicknav.min.css'
// import 'slicknav/dist/jquery.slicknav.js'

export default {
  name: 'HeaderComponent',
  props :['showform','glitchStatus'],
  data() {
    return {
    //   logo: 'assets/img/logo/logo.svg',
    //   logoFallback: 'assets/img/logo/light-logo.png'
    glitchlevel:this.glitchStatus,
    i18:false
    }
  },
  mounted() {
    
  },
  
  methods: {
    activeLang(lang) {
    //   return this.$i18n.locale === lang
    },
    setLang(lang) {
    //   this.$i18n.locale = lang
    },
    openForm: function() {
			this.$emit('openForm', true)
		},
    glitchItOn: function() { 
      this.glitchlevel = "glitch_1"  
			this.$emit('glitchIt', this.glitchlevel)
		},
    glitchItOff: function() { 
      this.glitchlevel = "glitch_2"
			this.$emit('glitchIt', this.glitchlevel)
		}
  }
}
</script>

<style>
header * {
  font-family: Roboto Mono;
}
/* .slicknav_menu {
	font-size: 16px;
	box-sizing: border-box;
	background: transparent;
	padding: 1rem 0rem;
} */
.header-top{
  position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: #1a191c;
}
.mainmenu,.secect-language {
    /* text-align: center; */
    margin-top: 8px;
}
.mainmenu ul li a {
    font-size: 12px;
    font-weight: 500;
    padding: 12px 10px;
    color: #c0c4d6;
    text-transform: uppercase;
    font-family: Roboto Mono;
}
/* .header-nav{
  display: inline-block;
  padding: 6px 9px;

} */
.list-inline>li {
    display: inline-block;
    padding: 6px 9px;
    color: #c0c4d6;
    transition: all .2s ease-in-out;
}

li.active,li:hover {
  color: #7943eb;
}
/* .slicknav_menu * {
	box-sizing: border-box;
}

.slicknav_menu .slicknav_menutxt {
	color: #fff;
	font-weight: bold;
	text-shadow: 0 1px 3px #000;
}

.slicknav_menu .slicknav_icon-bar {
	background: #fff;
}

.slicknav_btn {
	margin: 5px 5px 6px;
	text-decoration: none;
	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	background: transparent;
}

.slicknav_nav {
	color: #fff;
	margin: 0;
	padding: 0;
	font-size: 0.875em;
	list-style: none;
	overflow: hidden;
}

.slicknav_nav ul {
	list-style: none;
	overflow: hidden;
	padding: 0;
	margin: 0 0 0 20px;
}

.slicknav_nav .slicknav_row {
	padding: 5px 10px;
	margin: 2px 5px;
}

.slicknav_nav .slicknav_row:hover {
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	background: #7943EB;
	color: #fff;
}

.slicknav_nav a {
	padding: 5px 10px;
	margin: 2px 5px;
	text-decoration: none;
	color: #fff;
}

.slicknav_nav a:hover {
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	background: #7943EB;
	color: white;
}

.slicknav_nav .slicknav_txtnode {
	margin-left: 15px;
}

.slicknav_nav .slicknav_item a {
	padding: 0;
	margin: 0;
}

.slicknav_nav .slicknav_parent-link a {
	padding: 0;
	margin: 0;
}

.slicknav_brand {
	color: #fff;
	font-size: 18px;
	line-height: 30px;
	padding: 7px 12px;
	height: 44px;
} */
</style>
