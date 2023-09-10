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
          <div class="sharethis-inline-share-buttons"></div>
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
    return {};
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
  mounted() {},
};
</script>

<style scoped>
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
  width: max-content;
  position: relative;
  transition: all 5s ease-in-out;
}
.popup .content {
  text-align: start;
  margin-top: 60px;
  overflow: auto;
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
