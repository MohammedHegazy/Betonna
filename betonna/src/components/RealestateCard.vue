<template>
  <div class="realestate-card">
    <div
      :class="'card mb-5 mx-1'"
      :style="{
        height: '420px',
        borderRadius: '10px',
        width: '290px',
      }"
    >
      <div class="fav" v-if="fav == '0'">
        <Icon
          :icon="icon"
          class="icon"
          height="24"
          width="24"
          color="black"
          style="pointer-events: all"
          @click="change_icon(1)"
        />
      </div>
      <div class="fav" v-if="fav == '1'">
        <Icon
          :icon="icon2"
          class="icon"
          height="24"
          width="24"
          color="black"
          style="pointer-events: all"
          @click="change_icon(2)"
        />
      </div>
      <div class="new" v-if="state == 'new'">
        <p class="my_new">New</p>
      </div>
      <div class="sold" v-if="state == 'sold'">
        <p class="my_sold">sold</p>
      </div>
      <div class="rented" v-if="state == 'rented'">
        <p class="my_sold">rented</p>
      </div>
      <router-link
        :to="'/real-estate-info?real_id=' + id"
        v-if="page_type == 'real-estate'"
        class="myrout"
      >
        <img
          :src="this.src"
          class="card-top-img"
          :style="{
            borderRadius: '10px',
            width: '290px',
            height: 'fit-content',
            zIndex: 0,
          }"
        />
      </router-link>
      <span v-else>
        <img
          :src="this.src"
          class="card-top-img"
          :style="{
            borderRadius: '10px',
            width: '290px',
            height: 'fit-content',
            zIndex: 0,
          }"
        />
      </span>
      <div class="card-title">
        <div class="row" style="font-size: 20px; font-weight: 600">
          <div class="col-6 mt-3">
            <router-link
              :to="'/real-estate-info?real_id=' + id"
              class="myrouter"
              v-if="page_type == 'real-estate'"
            >
              {{ this.name }}
            </router-link>
            <span v-else>{{ this.name }}</span>
          </div>
          <div class="col-6 mt-3" style="color: #e57c23">
            {{ this.price }}
          </div>
        </div>
      </div>
      <div class="card-text text-start ms-3 mt-2" style="color: #585858">
        <Icon
          icon="material-symbols:location-on-rounded"
          height="24"
          width="24"
        />{{ this.location }}
      </div>
      <div
        class="card-text text-start ms-3 mt-2"
        style="color: #585858; font-size: 11px"
      >
        <div class="row mt-4">
          <div class="col-9">
            <div class="row">
              <div class="col-6">
                <p>
                  <Icon
                    icon="ic:sharp-space-dashboard"
                    height="15"
                    width="15"
                  />
                  {{ this.space }}
                </p>
              </div>
              <div class="col-6">
                <p>
                  <Icon icon="bx:current-location" height="15" width="15" />
                  {{ this.type }}
                </p>
              </div>
              <div class="col-6">
                <p>
                  <Icon icon="mdi:bed" height="15" width="15" />
                  Bedrooms: {{ this.bedrooms }}
                </p>
              </div>
              <div class="col-6">
                <p>
                  <Icon icon="fa6-solid:bath" height="15" width="15" />
                  Bathrooms: {{ this.bathrooms }}
                </p>
              </div>
              <div class="col-6"></div>
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center">
            <router-link
              to="/"
              class="d-flex justify-content-center align-items-center"
            >
              <img
                :src="this.logo"
                class="card-img"
                style="height: 45px; width: fit-content"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="card-text d-flex justify-content-center align-items-center"
        v-if="page_type == NULL"
      >
        <router-link
          :to="'/real-estate-info?real_id=' + id"
          class="btn d-flex justify-content-center align-items-center"
          style="
            width: 180px;
            height: 51px;
            border-radius: 5px;
            font-weight: 300;
            background-color: #e57c23;
            color: white;
          "
          >More information</router-link
        >
      </div>
      <div
        class="card-text d-flex justify-content-center align-items-center"
        v-if="page_type == 'real-estate'"
      >
        <div class="card-link">
          <div class="row">
            <div class="col-12 call">
              <button
                class="call_email"
                @click.stop="show_hide('phone', this.new_id)"
              >
                <Icon icon="ic:round-call" color="#e57c23" />Call
              </button>
              <div
                class="container mt-5"
                style="display: none"
                :id="'phone' + this.new_id"
                @focusout.stop="show_hide('phone', this.new_id)"
              >
                Phone: {{ this.phone }}
                <button
                  class="call_email2"
                  :id="'ph_btn' + this.new_id"
                  @click.stop="copy('phone')"
                >
                  Copy
                </button>
              </div>
              <button
                class="call_email mx-1"
                @click.stop="show_hide('email', this.new_id)"
              >
                <Icon icon="ic:baseline-email" color="#e57c23" />Email
              </button>
              <div
                class="container mt-5"
                style="display: none"
                :id="'email' + new_id"
              >
                Email: {{ this.email }}
                <button
                  class="call_email2"
                  :id="'em_btn' + this.new_id"
                  @click.stop="copy('email')"
                  @blur.stop="show_hide('email', this.new_id)"
                >
                  Copy
                </button>
              </div>
              <button
                class="call_email"
                @click.stop="show_hide('whatsapp', this.new_id)"
              >
                <Icon icon="logos:whatsapp-icon" color="#e57c23" />Whatsapp
              </button>
              <div
                class="container mt-5"
                style="display: none"
                :id="'whatsapp' + this.new_id"
                @focusout.stop="show_hide('whatsapp', this.new_id)"
              >
                Whatsapp: {{ this.phone }}
                <div class="d-flex justify-content-center align-items-center">
                  <a
                    class="call_email2 whats_app"
                    :href="'https://wa.me/' + this.phone"
                    target="_blank"
                    :id="'wa_btn' + this.new_id"
                    >Go to Whatsapp
                  </a>
                </div>
              </div>
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
  name: "realestate-card",
  data() {
    return {
      new_id: 0,
      icon: "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love",
      icon2: "noto:heart-suit",
    };
  },
  components: {
    Icon,
  },
  props: {
    id: Number,
    name: String,
    price: String,
    location: String,
    space: String,
    type: String,
    bedrooms: String,
    bathrooms: String,
    src: String,
    logo: String,
    state: String,
    fav: String,
    page_type: String,
    phone: String,
    email: String,
  },
  methods: {
    async change_icon(num) {
      if (num == 1) {
        if (
          this.icon ==
          "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
        ) {
          this.icon = "noto:heart-suit";
        } else {
          this.icon =
            "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love";
        }
      } else {
        if (
          this.icon2 ==
          "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
        ) {
          this.icon2 = "noto:heart-suit";
        } else {
          this.icon2 =
            "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love";
        }
      }
    },
    async show_hide(type, id) {
      const element = document.getElementById("phone" + id);
      const element2 = document.getElementById("email" + id);
      const element3 = document.getElementById("whatsapp" + id);
      if (type == "phone") {
        if (element.style.display == "none") {
          element.style.display = "block";
          const element4 = document.getElementById("ph_btn" + id);
          element4.focus();
          element2.style.display = "none";
          const element5 = document.getElementById("em_btn" + id);
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("wa_btn" + id);
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element.style.display = "none";
          const element4 = document.getElementById("ph_btn" + id);
          element4.innerHTML = "Copy";
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      } else if (type == "email") {
        if (element2.style.display == "none") {
          element2.style.display = "block";
          element.style.display = "none";
          const element4 = document.getElementById("em_btn" + id);
          element4.focus();
          const element5 = document.getElementById("ph_btn" + id);
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("wa_btn" + id);
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element2.style.display = "none";
          const element4 = document.getElementById("em_btn" + id);
          element4.innerHTML = "Copy";
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      } else if (type == "whatsapp") {
        if (element3.style.display == "none") {
          element3.style.display = "block";
          element.style.display = "none";
          const element4 = document.getElementById("wa_btn" + id);
          element4.focus();
          const element5 = document.getElementById("ph_btn" + id);
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("em_btn" + id);
          element6.innerHTML = "Copy";
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element3.style.display = "none";
          const element4 = document.getElementById("wa_btn" + id);
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
  mounted() {
    if (this.page_type == "real-estate") {
      this.new_id = Math.floor(Math.random() * 100) * 10 + this.id;
      // const element = document.querySelector("card");
      // element.style.width = "310px";
    }
  },
};
</script>

<style lang="scss" scoped>
.myrouter {
  text-decoration: none;
  color: #000000;
  transition: 0.5s ease-in-out;
}
.myrouter:hover {
  color: #e57c23;
}

.fav {
  display: flex;
  justify-content: end;
}
.icon {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 5px;
  padding: 5px;
  z-index: 5;
  transition: 0.5s ease-out;
}

.icon:hover {
  height: 35px;
  width: 35px;
}

.my_new {
  position: absolute;
  z-index: 5;
  color: white;
  background-color: #e57c23;
  width: 100px;
  margin: 5px;
  border-radius: 10px;
}
.my_sold {
  position: absolute;
  z-index: 5;
  color: white;
  background-color: #e52323;
  width: 100px;
  margin: 5px;
  border-radius: 10px;
}

.call_email {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: 85px;
  height: 40px;
  font-size: 12px;
  font-weight: 600;
  border: #e57c23 solid 1px;
  transition: 0.5s ease-in;
}
.call {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.call_email:hover {
  margin-bottom: 20px;
}

.container {
  width: 200px;
  position: absolute;
  bottom: -90px;
  z-index: 15;
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

.call_email2 {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: 90px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s ease-in;
}

.call_email2:hover {
  margin-bottom: 20px;
}

.whats_app {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: fit-content;
}
.card-img {
  transition: 0.5s ease-in-out;
}
.card-img:hover {
  margin-bottom: 20px;
}
</style>
