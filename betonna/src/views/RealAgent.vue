<template>
  <div class="real-agent">
    <div class="d-block">
      <div class="row row-cols-auto my-5 ms-3">
        <div class="col-4 ms-5 my-3">
          <div class="card sticky-top" style="z-index: 0">
            <div class="">
              <div class="row">
                <div class="col-8 mt-3 text-start ms-3">
                  <div
                    class="card-title"
                    style="font-size: 20px; font-weight: 600"
                  >
                    {{ this.name }}
                  </div>
                  <div class="card-text text-start mt-2" style="color: #585858">
                    <Icon
                      class="me-2"
                      icon="material-symbols:location-on-rounded"
                      height="24"
                      width="24"
                    />{{ this.location }}
                  </div>
                </div>
                <div class="col-3 mt-3 text-end">
                  <img :src="com_logo" alt="" class="company_logo" />
                </div>
              </div>
              <div
                class="card-text text-start ms-3 mt-2"
                style="color: #585858"
              >
                <Icon
                  icon="ion:language"
                  height="24"
                  width="24"
                  class="me-2"
                />Languages:
                <span v-for="(ele, index) in langs" :key="index"
                  >{{ ele
                  }}<span v-if="index != Object.keys(langs).length"
                    >,
                  </span></span
                >
              </div>
              <div
                class="card-text text-start ms-3 mt-2"
                style="color: #585858"
              >
                <Icon
                  icon="fluent:building-home-24-filled"
                  height="24"
                  width="24"
                  class="me-2"
                />Added real estates: {{ this.real_estates_added }}
              </div>
              <div
                class="card-text text-start ms-3 my-2"
                style="font-size: 20px; font-weight: 600"
              >
                Social media
              </div>
              <div class="row card-text ms-3">
                <div
                  class="col-6 d-flex justify-content-start align-items-center my-2"
                  v-for="(social, index) in contact"
                  :key="index"
                >
                  <a :href="social">
                    <Icon
                      class="mx-2"
                      :icon="
                        index == 'facebook'
                          ? 'logos:facebook'
                          : index == 'instagram'
                          ? 'skill-icons:instagram'
                          : index == 'snapchat'
                          ? 'uil:snapchat-square'
                          : index == 'twitter'
                          ? 'formkit:twitter'
                          : null
                      "
                      :color="
                        index == 'snapchat'
                          ? '#FFD233'
                          : index == 'twitter'
                          ? '#00ACEE'
                          : null
                      "
                      height="24"
                      width="24"
                    />{{ index }}
                  </a>
                </div>
              </div>
              <div
                class="card-text text-start ms-3 my-2"
                style="font-size: 20px; font-weight: 600"
              >
                Contact
              </div>
              <div
                class="card-text d-flex justify-content-center align-items-center"
              >
                <div class="card-link">
                  <div class="row">
                    <div class="col-12 call">
                      <button
                        class="call_email mx-1"
                        @click.stop="show_hide('phone')"
                      >
                        <Icon icon="ic:round-call" color="#e57c23" />Call
                      </button>
                      <div
                        class="container mt-5"
                        style="display: none"
                        id="phone"
                        @focusout.stop="show_hide('phone')"
                      >
                        <div
                          style="
                            width: fit-content;
                            padding: 10px;
                            border-radius: 10px;
                          "
                          class="bg-light shadow"
                        >
                          <div>Phone: {{ this.phone }}</div>
                          <div>
                            <button
                              class="call_email2 shadow"
                              id="ph_btn"
                              @click.stop="copy('phone')"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        class="call_email mx-1"
                        @click.stop="show_hide('whatsapp')"
                      >
                        <Icon
                          icon="logos:whatsapp-icon"
                          color="#e57c23"
                        />Whatsapp
                      </button>
                      <div
                        class="container mt-5"
                        style="display: none"
                        id="whatsapp"
                        @focusout.stop="show_hide('whatsapp')"
                      >
                        <div
                          style="
                            width: fit-content;
                            padding: 10px;
                            border-radius: 10px;
                          "
                          class="bg-light shadow"
                        >
                          <div>Whatsapp: {{ this.phone }}</div>
                          <div
                            class="d-flex justify-content-center align-items-center whats"
                          >
                            <a
                              class="call_email2 shadow whats_app d-flex justify-content-center align-items-center p-2"
                              :href="'https://wa.me/' + this.whatsapp"
                              target="_blank"
                              id="wa_btn"
                              >Go to Whatsapp
                            </a>
                          </div>
                        </div>
                      </div>
                      <button
                        class="call_email mx-1"
                        id="msg_btn"
                        @click="show_hide('email')"
                      >
                        <Icon icon="ic:baseline-email" color="#e57c23" />
                        Message
                      </button>
                      <div
                        class="container mt-5"
                        style="display: none"
                        id="email"
                      >
                        <div
                          style="
                            width: fit-content;
                            padding: 10px;
                            border-radius: 10px;
                          "
                          class="bg-light shadow"
                        >
                          <div>Email: {{ this.email }}</div>
                          <div>
                            <button
                              class="call_email2"
                              id="em_btn"
                              @click.stop="copy('email')"
                              @blur.stop="show_hide('email')"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 d-flex justify-content-center my-3">
          <div class="d-block w-100">
            <div class="card" style="background: unset">
              <div class="photo-container">
                <img :src="src" alt="" class="profile-photo" />
                <div class="fav" v-if="fav == '0'">
                  <button
                    type="button"
                    class="btn-show"
                    @click="change_icon(1)"
                  >
                    <Icon
                      :icon="icon"
                      class="icon"
                      height="24"
                      width="24"
                      color="black"
                    />
                  </button>
                  <button type="button" class="btn-show" @click="show_share()">
                    <Icon
                      icon="ph:share-fat-fill"
                      class="icon"
                      height="24"
                      width="24"
                      color="black"
                    />
                  </button>
                </div>
                <div class="fav" v-if="fav == '1'">
                  <button
                    type="button"
                    class="btn-show"
                    @click="change_icon(1)"
                  >
                    <Icon
                      :icon="icon2"
                      class="icon"
                      height="24"
                      width="24"
                      color="black"
                    />
                  </button>
                  <button type="button" class="btn-show" @click="show_share()">
                    <Icon
                      icon="ph:share-fat-fill"
                      class="icon"
                      height="24"
                      width="24"
                      color="black"
                    />
                  </button>
                </div>
                <div class="fav" style="margin-left: 100px">
                  <button type="button" class="btn-show" @click="show_photo()">
                    <Icon
                      icon="material-symbols:display-external-input-rounded"
                      class="icon"
                      height="24"
                      width="24"
                      color="black"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popup2" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_photo()">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          <button type="button" class="imgbtn" style="pointer-events: none">
            <img :src="src" id="popimg" alt="" class="popup_photo" />
          </button>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center mb-5">
      <div class="col-11">
        <div class="card p-4">
          <div
            class="card-title heading-1 text-start d-flex align-items-center ms-5"
          >
            Offers ({{ real_estates_added }})
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <hr
              style="
                width: 95%;
                color: #e57c23;
                background-color: #e57c23;
                height: 1px;
                opacity: 1;
              "
            />
          </div>
          <div class="row p-4">
            <div
              class="col-3 d-flex align-items-center justify-content-center"
              v-for="real in real_estates"
              :key="real.id"
            >
              <RealestateCard
                :id="real.id"
                :name="real.name"
                :price="real.price"
                :location="real.location"
                :space="real.space"
                :type="real.type"
                :bedrooms="real.bedrooms"
                :bathrooms="real.bathrooms"
                :src="real.src"
                :logo="real.logo"
                :state="real.state"
                :fav="real.fav"
                :phone="real.phone"
                :email="real.email"
                page_type="real-estate"
              ></RealestateCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShareSocial></ShareSocial>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import RealestateCard from "@/components/RealestateCard.vue";
import ShareSocial from "@/components/ShareSocial.vue";
export default {
  name: "real-agent",
  data() {
    return {
      icon: "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love",
      icon2: "noto:heart-suit",
      //
      fav: 0,
      name: "Mohamad alturkey",
      location: "Iraq,Arbeel",
      langs: { 1: "Arabic", 2: "English", 3: "Kurdish" },
      real_estates_added: 6,
      com_logo: require("@/assets/images/logo.png"),
      contact: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        snapchat: "https://snapchat.com",
      },
      phone: "+963933097404",
      whatsapp: "+963933097404",
      email: "test@test.com",
      src: require("@/assets/images/profile.png"),
      real_estates: {
        1: {
          id: 1,
          name: "Exterior flat1",
          price: "60,000$",
          phone: "+963933097404",
          email: "test@test.com",
          location: "Arbeel, central park",
          space: "156m2",
          type: "sell",
          bedrooms: "4",
          bathrooms: "2",
          state: "new",
          fav: "1",
          src: require("../assets/images/Exterior flat/Exterior.jpg"),
          logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        },
        2: {
          id: 2,
          name: "Exterior flat2",
          price: "60,000$",
          phone: "+963933097404",
          email: "test@test.com",
          location: "Arbeel, central park",
          space: "156m2",
          type: "sell",
          bedrooms: "4",
          bathrooms: "2",
          state: "new",
          fav: "0",
          src: require("../assets/images/Exterior flat/Exterior.jpg"),
          logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        },
        3: {
          id: 3,
          name: "Exterior flat3",
          price: "60,000$",
          phone: "+963933097404",
          email: "test@test.com",
          location: "Arbeel, central park",
          space: "156m2",
          type: "sell",
          bedrooms: "4",
          bathrooms: "2",
          state: "old",
          fav: "0",
          src: require("../assets/images/Exterior flat/Exterior.jpg"),
          logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        },
        4: {
          id: 4,
          name: "Exterior flat4",
          price: "60,000$",
          phone: "+963933097404",
          email: "test@test.com",
          location: "Arbeel, central park",
          space: "156m2",
          type: "rent",
          bedrooms: "4",
          bathrooms: "2",
          state: "old",
          fav: "1",
          src: require("../assets/images/Exterior flat/Exterior.jpg"),
          logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        },
        5: {
          id: 5,
          name: "Exterior flat5",
          price: "60,000$",
          phone: "+963933097404",
          email: "test@test.com",
          location: "Arbeel, central park",
          space: "156m2",
          type: "rent",
          bedrooms: "4",
          bathrooms: "2",
          state: "new",
          fav: "1",
          src: require("../assets/images/Exterior flat/Exterior.jpg"),
          logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        },
        6: {
          id: 6,
          name: "Exterior flat6",
          price: "60,000$",
          phone: "+963933097404",
          email: "test@test.com",
          location: "Arbeel, central park",
          space: "156m2",
          type: "rent",
          bedrooms: "4",
          bathrooms: "2",
          state: "rented",
          fav: "0",
          src: require("../assets/images/Exterior flat/Exterior.jpg"),
          logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        },
      },
    };
  },
  components: {
    Icon,
    RealestateCard,
    ShareSocial,
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
    async show_hide(type) {
      const element = document.getElementById("phone");
      const element2 = document.getElementById("email");
      const element3 = document.getElementById("whatsapp");
      if (type == "phone") {
        if (element.style.display == "none") {
          element.style.display = "block";
          const element4 = document.getElementById("ph_btn");
          element4.focus();
          element2.style.display = "none";
          const element5 = document.getElementById("em_btn");
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("wa_btn");
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element.style.display = "none";
          const element4 = document.getElementById("ph_btn");
          element4.innerHTML = "Copy";
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      } else if (type == "email") {
        if (element2.style.display == "none") {
          element2.style.display = "block";
          element.style.display = "none";
          const element4 = document.getElementById("em_btn");
          element4.focus();
          const element5 = document.getElementById("ph_btn");
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("wa_btn");
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element2.style.display = "none";
          const element4 = document.getElementById("em_btn");
          element4.innerHTML = "Copy";
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      } else if (type == "whatsapp") {
        if (element3.style.display == "none") {
          element3.style.display = "block";
          element.style.display = "none";
          const element4 = document.getElementById("wa_btn");
          element4.focus();
          const element5 = document.getElementById("ph_btn");
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("em_btn");
          element6.innerHTML = "Copy";
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element3.style.display = "none";
          const element4 = document.getElementById("wa_btn");
          element4.style.backgroundColor = "White";
          element4.style.color = "black";
        }
      }
    },
    async copy(type) {
      if (type == "phone") {
        const element = document.getElementById("ph_btn");
        navigator.clipboard.writeText(this.phone);
        element.innerHTML = "Copied";
        element.style.backgroundColor = "green";
        element.style.color = "white";
      } else {
        const element = document.getElementById("em_btn");
        navigator.clipboard.writeText(this.email);
        element.innerHTML = "Copied";
        element.style.backgroundColor = "green";
        element.style.color = "white";
      }
    },
    show_photo() {
      const element2 = document.getElementById("popup2");
      if (element2.style.visibility == "hidden") {
        element2.style.visibility = "visible";
        element2.style.opacity = 1;
      } else {
        element2.style.visibility = "hidden";
        element2.style.opacity = 0;
      }
    },
    show_share() {
      const title = window.document.title;
      const url = window.document.location.href;

      if (navigator.share && window.innerWidth < 500) {
        navigator
          .share({
            title: `${title}`,
            url: `${url}`,
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        const element2 = document.getElementById("popup3");
        if (element2.style.visibility == "hidden") {
          element2.style.visibility = "visible";
          element2.style.opacity = 1;
        } else {
          element2.style.visibility = "hidden";
          element2.style.opacity = 0;
        }
      }
    },
  },
};
</script>

<style scoped>
.btn-show {
  background-color: unset;
  border: none;
}
.heading-1 {
  font-size: 22px;
  font-weight: 600;
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
  margin-top: 30px;
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
.imgbtn {
  padding: 0;
  border: 0;
  margin: 0;
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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

.popup_photo {
  height: 500px;
}
.card {
  border-radius: 10px;
  height: 100%;
}
.fav {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: end;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 4px;
  border-radius: 5px;
  pointer-events: auto inherit;
}
.photo-container {
  border: 1px solid #e57c23;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
}
.profile-photo {
  height: fit-content;
  width: 400px;
}
.company_logo {
  height: 60px;
}

a:link {
  color: #585858;
  text-decoration: none;
  transition: 0.5s ease-in-out;
}

a:hover {
  text-decoration: none;
  font-size: 20px;
}
a:active {
  color: #585858;
  text-decoration: none;
}
a:visited {
  color: #585858;
  text-decoration: none;
}

.whats_app {
  transition: 0.5s ease-in-out;
  color: black;
}

.whats_app:hover {
  background-color: #25d366;
}
.call {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.call_email:hover {
  margin-bottom: 40px;
}

.call_email2 {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: fit-content;
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

.call_email {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: 115px;
  height: 40px;
  font-size: 13px;
  font-weight: 600;
  border: #e57c23 solid 1px;
  transition: 0.5s ease-in;
}

.container {
  width: fit-content;
  position: absolute;
  bottom: -90px;
  font-size: 20px;
  font-weight: 600;
}

.shadow {
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
}
</style>
