import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "aframe";
import VueSocialSharing from "vue-social-sharing";

createApp(App)
  .use(store)
  .use(router)
  .use(VueSocialSharing, {
    networks: {
      fakeblock: "https://fakeblock.com/share?url=@url&title=@title",
    },
  })
  .mount("#app");
