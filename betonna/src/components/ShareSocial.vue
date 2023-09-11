<template>
  <div class="share-social">
    <div id="popup3" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_share()">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          <div class="row">
            <div class="col-2 mx-1" v-for="(ele, index) in social" :key="index">
              <a :class="ele.name + 1" href="" target="_blank">
                <Icon
                  :icon="ele.icon"
                  :color="ele.color"
                  :class="ele.name + ' share_icons'"
                  height="40"
                  width="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "share-social",
  data() {
    return {
      link: "",
      social: {
        1: {
          name: "facebook",
          icon: "ri:facebook-circle-fill",
          color: "#3B5998",
        },
        2: {
          name: "twitter",
          icon: "ant-design:twitter-circle-filled",
          color: "#00ACEE",
        },
        3: {
          name: "whatsapp",
          icon: "logos:whatsapp-icon",
          color: "#1FAF38",
        },
        4: {
          name: "snapchat",
          icon: "uil:snapchat-square",
          color: "#FFFC00",
        },
        5: {
          name: "gmail",
          icon: "cib:gmail",
          color: "#DB4437",
        },
      },
    };
  },
  components: {
    Icon,
  },
  methods: {
    show_share() {
      const element2 = document.getElementById("popup3");
      if (element2.style.visibility == "hidden") {
        element2.style.visibility = "visible";
        element2.style.opacity = 1;
      } else {
        element2.style.visibility = "hidden";
        element2.style.opacity = 0;
      }
    },
  },
  mounted() {
    this.link = window.location.href;
    const gmail = document.querySelector(".gmail1");
    gmail.href =
      "https://mail.google.com/mail/u/0/?to&su=Betonna&body=" +
      this.link +
      "&bcc&cc&fs=1&tf=cm";

    const facebook = document.querySelector(".facebook1");
    facebook.href =
      "https://www.facebook.com/sharer.php?t=Betonna&u=" + this.link;
    const twitter = document.querySelector(".twitter1");
    twitter.href =
      "https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Ftext%3DBetonna%26url%3D" +
      this.link;
    const whatsapp = document.querySelector(".whatsapp1");
    whatsapp.href = "https://api.whatsapp.com/send?text=" + this.link;
    const snapchat = document.querySelector(".snapchat1");
    snapchat.href =
      "https://www.snapchat.com/scan?attachmentUrl=" +
      this.link +
      "&utm_source=sharethis";
  },
};
</script>

<style scoped>
.share_icons {
  transition: 0.5s ease-in-out;
}
.share_icons:hover {
  margin-left: 10px;
  margin-top: 10px;
}
.gmail {
  padding: 0;
  background: linear-gradient(
    137deg,
    rgba(198, 198, 198, 1) 50%,
    rgba(218, 218, 218, 1) 60%,
    rgba(226, 226, 226, 1) 70%,
    rgba(238, 238, 238, 1) 80%
  );
  border-radius: 10px;
}
.social-btn {
  background-color: unset;
  border: none;
}
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 380px;
  height: 200px;
  padding: 30px;
  position: relative;
  transition: all 5s ease-in-out;
}
.popup .content {
  margin-top: 60px;
  height: max-content;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  background-color: #f4f4f4;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
.popup .close:hover {
  color: #e57c23;
}
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  transition: opacity 500ms;
}
</style>
