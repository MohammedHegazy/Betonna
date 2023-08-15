<template>
  <div class="companies-card">
    <div
      class="card mx-3"
      style="
        border-radius: 10px;
        border: 1px #e57c23 inset;
        width: 303px;
        height: 225px;
      "
    >
      <div class="fav d-flex justify-content-end p-3">
        <Icon
          icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
          height="24"
          width="24"
          style="pointer-events: all"
        />
      </div>
      <div class="logo d-flex justify-content-center">
        <img
          class="card-img-top"
          :src="img1"
          style="
            height: 90px;
            width: 90px;
            border-radius: 50%;
            border: 0.3px #e57c23 inset;
            position: absolute;
            bottom: 180px;
          "
          alt=""
        />
        <div class="icon">
          <img
            src="../assets/images/مدالية_الذهبية.png"
            alt=""
            style="
              height: 26px;
              width: 24px;
              z-index: 2;
              position: absolute;
              right: 110px;
              bottom: 180px;
            "
          />
        </div>
      </div>
      <div class="card-title" style="font-size: 27px">
        {{ this.name }}
      </div>
      <div class="card-link">
        <div class="row">
          <div class="col-6 ps-5">
            <button
              class="call_email"
              @click.stop="show_hide('phone', this.new_id)"
            >
              <Icon
                icon="ic:round-call"
                color="#e57c23"
                height="24"
                width="24"
              />Call
            </button>
            <div
              class="container"
              style="display: none"
              :id="'phone' + this.new_id"
            >
              Phone: {{ this.phone }}
              <button
                class="call_email"
                :id="'ph_btn' + this.new_id"
                @click.stop="copy('phone')"
              >
                Copy
              </button>
            </div>
          </div>
          <div class="col-6 pb-4 pe-5">
            <button
              class="call_email"
              @click.stop="show_hide('email', this.new_id)"
            >
              <Icon
                icon="ic:baseline-email"
                color="#e57c23"
                height="24"
                width="24"
              />Email
            </button>
            <div class="container" style="display: none" :id="'email' + new_id">
              Email: {{ this.email }}
              <button
                class="call_email"
                :id="'em_btn' + this.new_id"
                @click.stop="copy('email')"
              >
                Copy
              </button>
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
  name: "companies-card",
  data() {
    return {
      new_id: 0,
    };
  },
  components: {
    Icon,
  },
  methods: {
    async show_hide(type, id) {
      const element = document.getElementById("phone" + id);
      const element2 = document.getElementById("email" + id);
      if (type == "phone") {
        if (element.style.display == "none") {
          element.style.display = "block";
          element2.style.display = "none";
          const element3 = document.getElementById("em_btn" + id);
          element3.innerHTML = "Copy";
          element3.style.backgroundColor = "white";
          element3.style.color = "black";
        } else {
          element.style.display = "none";
          const element4 = document.getElementById("ph_btn" + id);
          element4.innerHTML = "Copy";
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      }
      if (type == "email") {
        if (element2.style.display == "none") {
          element2.style.display = "block";
          element.style.display = "none";
          const element3 = document.getElementById("ph_btn" + id);
          element3.innerHTML = "Copy";
          element3.style.backgroundColor = "white";
          element3.style.color = "black";
        } else {
          element2.style.display = "none";
          const element4 = document.getElementById("em_btn" + id);
          element4.innerHTML = "Copy";
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      }
    },
    async copy(type) {
      if (type == "phone") {
        const element = document.getElementById("ph_btn" + this.new_id);
        navigator.clipboard.writeText(this.phone);
        element.innerHTML = "Copied";
        element.style.backgroundColor = "green";
        element.style.color = "white";
      } else {
        const element = document.getElementById("em_btn" + this.new_id);
        navigator.clipboard.writeText(this.email);
        element.innerHTML = "Copied";
        element.style.backgroundColor = "green";
        element.style.color = "white";
      }
    },
  },
  props: {
    id: Number,
    img1: String,
    name: String,
    phone: String,
    email: String,
  },
  mounted() {
    this.new_id = Math.floor(Math.random() * 10) * 10 + this.id;
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
  margin-top: 10px;
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: 600;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s ease-in;
}
.call_email {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s ease-in;
}
.call_email:hover {
  padding-bottom: 20px;
}
</style>
