<template>
  <header id="sticker" class="header-top">
    <div class="container-fulid">
      <div class="col-md-2 col-sm-2">
        <div class="logo">
          <!-- <router-link tag="a" to="/" class="overlay">
            <img
              :src="logoFallback"
              :onerror="`this.onerror=null; this.src='${logoFallback}'`"
              alt="Stormix"
            />
          </router-link> -->
        </div>
      </div>
      <!-- start mainmenu. -->
      <div class="text-center col-md-8 col-sm-8">
        <div class="mainmenu">
          <div class="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
              tabindex="0"
              class="slicknav_btn slicknav_collapsed"
              style=""
            >
              <span class="slicknav_menutxt"></span>
              <span class="slicknav_icon slicknav_no-text">
                <span class="slicknav_icon-bar"> </span
                ><span class="slicknav_icon-bar"> </span
                ><span class="slicknav_icon-bar"></span> </span
            ></a>
            <ul
              class="slicknav_nav slicknav_hidden"
              style="display: none;"
              aria-hidden="true"
              role="menu"
            >
              <li class="current">
                <a href="#home" role="menuitem" tabindex="-1">Home</a>
              </li>
              <li><a href="#about" role="menuitem" tabindex="-1">About</a></li>
              <li>
                <a href="#resume" role="menuitem" tabindex="-1">Resume</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://blog.anasmazouni.dev/"
                  role="menuitem"
                  tabindex="-1">Blog</a
                >
              </li>
              <li>
                <a href="#testimonials" role="menuitem" tabindex="-1"
                  >Testimonials</a
                >
              </li>
              <li>
                <a href="#contact" role="menuitem" tabindex="-1">Contact</a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://status.stormix.co/"
                  role="menuitem"
                  tabindex="-1"
                  >Server Status</a
                >
              </li>
            </ul>
          </div>
          <ul id="nav" class="list-inline">
            <li class="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a target="_blank" href="https://blog.anasmazouni.dev/">Blog</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a target="_blank" href="https://status.stormix.co/"
                >Server Status</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- mainmenu end. -->
      <!-- select language start. -->
      <div class="pr-0 text-right col-md-2 col-sm-2">
        <div class="secect-language">
          <ul class="list-inline">
            <!-- <li>
              <a
                :class="{ active: activeLang('fr') }"
                href="#"
                @click="setLang('fr')"
              >
                FR
              </a>
            </li> -->
            <!-- <li>
              <a
                :class="{ active: activeLang('en') }"
                href="#"
                @click="setLang('en')"
              >
                EN
              </a>
            </li> -->
          </ul>
        </div>
      </div>
      <!-- select language end. -->
    </div>
  </header>
  <!-- end header section. -->
</template>

<script>
import $ from 'jquery'
import "slicknav/dist/slicknav.min.css";
import "slicknav/dist/jquery.slicknav.min.js";

export default {
  name: "HeaderComponent",
  data() {
    return {
      //   logo: 'assets/img/logo/logo.svg',
      //   logoFallback: 'assets/img/logo/light-logo.png'
    };
  },
  mounted() {
    this.$nextTick(function() {
      $('#nav').slicknav({
        prependTo: '.mainmenu',
        label: ''
      })
    })
  },
  methods: {
    
    activeLang(lang) {
      //   return this.$i18n.locale === lang
    },
    setLang(lang) {
      //   this.$i18n.locale = lang
    },
  },
};
</script>

<style lang="scss">
@import '../../sass/_variables.scss';

$color_0: rgba(255, 255, 255, 0.75);
$color_btn: #222;
$color_text: #fff;
$color_shadow: #000;
$color_hover_bg: $primary-color;
$color_hover_text: $primary-color;

.slicknav_menu {
  font-size: 16px;
  box-sizing: border-box;
  background: transparent;
  padding: 1rem 0rem;
  * {
    box-sizing: border-box;
  }
  .slicknav_menutxt {
    color: $color_text;
    font-weight: bold;
    text-shadow: 0 1px 3px $color_shadow;
  }
  .slicknav_icon-bar {
    background: $color_text;
  }
}
.slicknav_btn {
  margin: 5px 5px 6px;
  text-decoration: none;
  text-shadow: 0 1px 1px $color_0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: transparent;
}
.slicknav_nav {
  color: $color_text;
  margin: 0;
  padding: 0;
  font-size: 0.875em;
  list-style: none;
  overflow: hidden;
  ul {
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 0 0 0 20px;
  }
  .slicknav_row {
    padding: 5px 10px;
    margin: 2px 5px;
    &:hover {
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
      background: $color_hover_bg;
      color: $color_text;
    }
  }
  a {
    padding: 5px 10px;
    margin: 2px 5px;
    text-decoration: none;
    color: $color_text;
    &:hover {
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
      background: $color_hover_bg;
      color: $color_hover_text;
    }
  }
  .slicknav_txtnode {
    margin-left: 15px;
  }
  .slicknav_item a {
    padding: 0;
    margin: 0;
  }
  .slicknav_parent-link a {
    padding: 0;
    margin: 0;
  }
}
.slicknav_brand {
  color: $color_text;
  font-size: 18px;
  line-height: 30px;
  padding: 7px 12px;
  height: 44px;
}
</style>
