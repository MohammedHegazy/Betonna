<template>
  <span
    style="width: 100%; height: max-content; font-size: 25px; font-weight: 800"
  >
    <div
      class="d-flex justify-content-center align-items-center"
      style="background-color: black; height: 100px"
    >
      <div class="d-flex justify-content-center align-items-center me-5">
        <router-link
          to="/"
          class="d-flex justify-content-center align-items-center mb-1"
        >
          <img src="@/assets/Png.png" alt="LOGO" class="nav-logo" />
        </router-link>
      </div>
      <div
        class="d-flex justify-content-center align-items-center text-light me-5"
      >
        Explore the world of real estate in Iraq
      </div>
      <div class="d-flex justify-content-center align-items-center ms-5">
        <Icon class="mx-2" icon="mdi:bell" color="white" />
        <Icon class="mx-2" icon="material-symbols:mail" color="white" />
      </div>
      <div class="d-flex justify-content-center align-items-center mx-2">
        <div class="dropdown">
          <button
            class="nav-special nav-list dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="background-color: white"
          >
            <img id="dropimg" class="dropimg" :src="imgsrc" alt="" />
            {{ lan }}
          </button>
          <ul class="dropdown-menu">
            <li
              @click="
                lan = 'Arabic';
                imgsrc = require('@/assets/images/flags/iraq.png');
                change_font_ar();
              "
            >
              <a class="dropdown-item" href="#">
                <img
                  src="@/assets/images/flags/iraq.png"
                  height="20"
                  width="30"
                  alt=""
                  style="margin-right: 10px"
                />Arabic</a
              >
            </li>
            <li
              @click="
                lan = 'English';
                imgsrc = require('@/assets/images/flags/USA.png');
                change_font_en();
              "
            >
              <a class="dropdown-item" href="#"
                ><img
                  src="@/assets/images/flags/USA.png"
                  height="20"
                  width="30"
                  alt=""
                  style="margin-right: 10px"
                />English</a
              >
            </li>
            <li
              @click="
                lan = 'Kurdish';
                imgsrc = require('@/assets/images/flags/kurdish.png');
                change_font_ar();
              "
            >
              <a class="dropdown-item" href="#"
                ><img
                  src="@/assets/images/flags/kurdish.png"
                  height="20"
                  width="30"
                  alt=""
                  style="margin-right: 10px"
                />Kurdish</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mx-2">
        <div class="dropdown">
          <button
            class="nav-special nav-list dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="background-color: white"
          >
            {{ currency }}
          </button>
          <ul class="dropdown-menu">
            <li @click="currency = '$USD'">
              <a class="dropdown-item" href="#">$USD</a>
            </li>
            <li @click="currency = 'IQD'">
              <a class="dropdown-item" href="#">IQD</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center mx-2">
        <button class="nav-special nav-btn">LOG IN</button>
      </div>
    </div>
  </span>
  <navbar></navbar>
  <router-view />
  <div class="footer" style="background-color: #000000; color: white">
    <div class="row d-flex justify-content-center align-items-start">
      <div class="col-3">
        <div class="d-block m-5">
          <div>
            <img :src="src" alt="" style="height: 80px; width: fit-content" />
          </div>
          <div class="my-4 text-start">
            Our vision is for <span style="color: #e57c23">Betonna</span> to
            become the perfect place to realize your real estate dreams in Iraq
          </div>
          <div class="my-4">
            <button class="nav-special nav-btn">LOG IN</button>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="d-block m-5">
          <div
            class="text-start"
            style="color: #e57c23; font-size: 25px; font-weight: 700"
          >
            Home
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link"> Home</router-link>
          </div>
          <div class="text-start footer-item">
            <router-link to="/real-estates" class="footer-link">
              Real estates</router-link
            >
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link"> Projects</router-link>
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link"> Services</router-link>
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link">
              Add real estate</router-link
            >
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link">
              real estate agents</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="d-block m-2 mt-5">
          <div
            class="text-start"
            style="color: #e57c23; font-size: 25px; font-weight: 700"
          >
            About Website
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link"> About us</router-link>
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link">
              Service policy</router-link
            >
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link">
              Terms and Conditions</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="d-block m-2 mt-5">
          <div
            class="text-start"
            style="color: #e57c23; font-size: 25px; font-weight: 700"
          >
            Support
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link">
              Technical support</router-link
            >
          </div>
          <div class="text-start footer-item">
            <router-link to="/" class="footer-link"> Contact us</router-link>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="d-block m-2 mt-5">
          <div
            class="text-start"
            style="color: #e57c23; font-size: 25px; font-weight: 700"
          >
            Social media
          </div>
          <div class="text-start footer-item">
            <a href="" class="footer-link"
              ><img
                class="social"
                :src="fb"
                alt=""
                style="background-color: #e57c23; border-radius: 50%"
              />
              Facebook</a
            >
          </div>
          <div class="text-start footer-item">
            <a href="" class="footer-link"
              ><img
                class="social"
                :src="twitter"
                alt=""
                style="background-color: #e57c23; border-radius: 50%"
              />
              Twitter</a
            >
          </div>
          <div class="text-start footer-item">
            <a href="" class="footer-link"
              ><img
                class="social"
                :src="snap"
                alt=""
                style="background-color: #e57c23; border-radius: 25%"
              />
              Snapchat</a
            >
          </div>
          <div class="text-start footer-item">
            <a href="" class="footer-link"
              ><img
                class="social"
                :src="insta"
                alt=""
                style="background-color: white; border-radius: 25%"
              />
              Instagram</a
            >
          </div>
          <div class="text-start footer-item">
            <a href="" class="footer-link"
              ><img
                class="social"
                :src="Tiktok"
                alt=""
                style="background-color: white; border-radius: 25%"
              />
              Tik Tok</a
            >
          </div>
          <div class="text-start footer-item">
            <a href="" class="footer-link"
              ><img
                class="social"
                :src="linkd"
                alt=""
                style="background-color: white; border-radius: 25%"
              />
              Linkedin</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { Icon } from "@iconify/vue";

export default {
  name: "MyApp",
  components: { Navbar, Icon },
  data() {
    return {
      lan: "English",
      imgsrc: require("@/assets/images/flags/USA.png"),
      currency: "$USD",
      src: require("@/assets/logo2.png"),
      fb: require("@/assets/images/Social media/fb.png"),
      insta: require("@/assets/images/Social media/Instagram.png"),
      linkd: require("@/assets/images/Social media/Linkdin.png"),
      snap: require("@/assets/images/Social media/Snapchat.png"),
      Tiktok: require("@/assets/images/Social media/TikTok.png"),
      twitter: require("@/assets/images/Social media/twitter.png"),
    };
  },
  methods: {
    change_font_ar() {
      var r = document.querySelector(":root");
      // var b = document.querySelector("body");
      r.style.setProperty("--font", "expoarabic");
      // b.style.direction = "rtl";
    },
    change_font_en() {
      var r = document.querySelector(":root");
      // var b = document.querySelector("body");
      r.style.setProperty("--font", "expoenglish");
      r.style.setProperty("--dir", "'ltr'");
      // b.style.direction = "ltr";
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: expoarabic;
  src: url("assets/Expo_Arabic/Expo_Arabic_Light/Expo_Arabic_Light.ttf");
}
@font-face {
  font-family: expoenglish;
  src: url(assets/Expo_English/Roboto-Medium.ttf);
}

:root {
  --font: expoenglish;
}

body {
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-family: var(--font);
  background-color: #eeeeee;
  width: 100dvw;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #e57c23;
      text-decoration: underline;
      font-weight: 900;
    }
  }
  a:focus {
    color: #e57c23;

    &.router-link-exact-active {
      color: #e57c23;
      text-decoration: underline;
      font-weight: 900;
    }
  }
}

.radio-item input[type="radio"] {
  visibility: hidden;
  width: 20px;
  height: 20px;
  margin: 0 5px 0 5px;
  padding: 0;
}

.radio-item input[type="radio"]:before {
  position: relative;
  margin: 4px -25px -4px 0;
  display: inline-block;
  visibility: visible;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: white;
  content: "";
}

.radio-item input[type="radio"]:checked:after {
  position: relative;
  top: 0;
  left: 9px;
  display: inline-block;
  visibility: visible;
  border-radius: 6px;
  width: 12px;
  height: 12px;
  background: #e57c23;
  content: "";
}

.radio-item label {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  margin: 0;
  padding: 0;
}

.footer-item {
  font-size: 20px;
  font-weight: 400;
}

.footer-link {
  color: white;
  text-decoration: none;
  transition: 0.5s ease-out;
}

.footer-link:hover {
  color: #e57c23;
}

.social {
  height: 24px;
  width: 24px;
}
</style>
