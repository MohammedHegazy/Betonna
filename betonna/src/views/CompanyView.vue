<template>
  <div class="company-view">
    <div class="cover">
      <img class="background" :src="mycompany.img2" alt="" />
    </div>
    <div
      class="continer w-100 d-flex justify-content-center align-items-center"
    >
      <div class="card shadow card-absolute">
        <div class="fav">
          <button
            type="button"
            class="btn-show"
            @click="change_icon(1)"
            v-if="mycompany.fav == '0'"
          >
            <Icon
              :icon="icon"
              class="icon"
              height="24"
              width="24"
              color="black"
            />
          </button>
          <button
            type="button"
            class="btn-show"
            @click="change_icon(2)"
            v-if="mycompany.fav == '1'"
          >
            <Icon
              :icon="icon2"
              class="icon"
              height="24"
              width="24"
              color="black"
            />
          </button>
          <button type="button" class="btn-show" @click="show_share(7)">
            <Icon
              icon="ph:share-fat-fill"
              class="icon"
              height="24"
              width="24"
              color="black"
            />
          </button>
        </div>
        <div class="card-img-top">
          <img
            :src="mycompany.img1"
            alt=""
            style="
              height: 90px;
              width: 90px;
              border-radius: 50%;
              border: 0.3px #e57c23 inset;
              position: absolute;
              bottom: 120px;
              right: 43%;
            "
          />
          <div>
            <img
              src="../assets/images/مدالية_الذهبية.png"
              alt=""
              style="
                height: 26px;
                width: 24px;
                z-index: 2;
                position: absolute;
                right: 43%;
                bottom: 120px;
              "
            />
          </div>
        </div>
        <div class="card-title mt-5 mx-5" style="font-weight: 600">
          {{ mycompany.name }}
        </div>
        <div class="card-text my-2">
          <div
            class="row d-flex justify-content-center align-items-center"
            style="height: 70px"
          >
            <div class="col-2 mx-2">
              <button class="contact-btn shadow" @click="show_share(4)">
                <Icon
                  icon="dashicons:admin-site-alt3"
                  color="#e57c23"
                  class="mx-1"
                  height="18"
                  width="18"
                />
                Website
              </button>
            </div>
            <div class="col-2 mx-2">
              <button class="contact-btn shadow" @click="show_share(3)">
                <Icon
                  icon="logos:whatsapp-icon"
                  color="#1FAF38"
                  class="mx-1"
                  height="18"
                  width="18"
                />
                Whatsapp
              </button>
            </div>
            <div class="col-2 mx-2">
              <button class="contact-btn shadow" @click="show_share(1)">
                <Icon
                  icon="ic:baseline-email"
                  color="#e57c23"
                  class="mx-1"
                  height="18"
                  width="18"
                />Email
              </button>
            </div>
            <div class="col-2 mx-2">
              <button class="contact-btn shadow" @click="show_share(2)">
                <Icon
                  icon="ic:round-call"
                  color="#e57c23"
                  class="mx-1"
                  height="18"
                  width="18"
                />Phone
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-container">
      <div class="card p-5" style="width: 95%">
        <div
          class="card-title text-start"
          style="font-size: 20px; font-weight: 600"
        >
          Company overview
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <hr
            style="
              color: #e57c23;
              height: 2px;
              background-color: #e57c23;
              opacity: 1;
              width: 100%;
            "
          />
        </div>
        <div class="card-text text-start mt-2 mb-5">
          {{ mycompany.description }}
        </div>
        <div
          class="card-title text-start mt-5"
          style="font-size: 20px; font-weight: 600"
        >
          Company information
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <hr
            style="
              color: #e57c23;
              height: 2px;
              background-color: #e57c23;
              opacity: 1;
              width: 100%;
            "
          />
        </div>
        <div class="card-text" style="color: #585858">
          <div class="row text-start">
            <div class="col-4 my-2 info">
              <Icon
                icon="material-symbols:location-on-rounded"
                height="17"
                width="17"
                class="mx-3"
              />Address: {{ mycompany.address }}
            </div>
            <div class="col-4 my-2 info">
              <Icon
                icon="clarity:employee-solid"
                height="17"
                width="17"
                class="mx-3"
              />Employees: {{ mycompany.employees_num }}
            </div>
            <div class="col-4 my-2 info">
              <Icon
                icon="ion:language"
                height="17"
                width="17"
                class="mx-3"
              />Languages:
              <span v-for="(lang, index) in mycompany.languages" :key="index"
                >{{ lang
                }}<span v-if="index != Object.keys(mycompany.languages).length"
                  >,
                </span></span
              >
            </div>
            <div class="col-4 my-2 info">
              <Icon
                icon="ic:twotone-miscellaneous-services"
                height="17"
                width="17"
                class="mx-3"
              />Services: {{ mycompany.services }}
            </div>
            <div class="col-4 my-2 info">
              <Icon
                icon="mdi:house-city"
                height="17"
                width="17"
                class="mx-3"
              />Selling offers: {{ mycompany.offers_for_sell }}
            </div>
            <div class="col-4 my-2 info">
              <Icon
                icon="mdi:house-city"
                height="17"
                width="17"
                class="mx-3"
              />Renting offers: {{ mycompany.offers_for_rent }}
            </div>
          </div>
        </div>
        <div
          class="card-title text-start mt-5"
          style="font-size: 20px; font-weight: 600"
        >
          Crew
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <hr
            style="
              color: #e57c23;
              height: 2px;
              background-color: #e57c23;
              opacity: 1;
              width: 100%;
            "
          />
        </div>
        <div class="row mt-5 d-flex justify-content-start align-items-center">
          <div
            class="col-3 my-5"
            v-for="(ele, index) in mycompany.Agents"
            :key="index"
          >
            <CompaniesCard
              :id="ele.id"
              :img1="ele.img1"
              :name="ele.name"
              :phone="ele.phone"
              :fav="ele.fav"
              :email="ele.email"
            ></CompaniesCard>
          </div>
        </div>
        <div
          class="card-title text-start mt-5"
          style="font-size: 20px; font-weight: 600"
        >
          Offers({{ mycompany.offers_for_rent + mycompany.offers_for_sell }})
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <hr
            style="
              color: #e57c23;
              height: 2px;
              background-color: #e57c23;
              opacity: 1;
              width: 100%;
            "
          />
        </div>
        <div class="row mt-5 d-flex justify-content-start align-items-center">
          <div
            class="col-3"
            v-for="(offer, index) in mycompany.offers"
            :key="index"
          >
            <RealestateCard
              :id="offer.id"
              :name="offer.name"
              :price="offer.price"
              :location="offer.location"
              :space="offer.space"
              :type="offer.type"
              :bedrooms="offer.bedrooms"
              :bathrooms="offer.bathrooms"
              :src="offer.src"
              :logo="offer.logo"
              :state="offer.state"
              :fav="offer.fav"
              :phone="offer.phone"
              :email="offer.email"
              :company_id="offer.company_id"
              page_type="real-estate"
            ></RealestateCard>
          </div>
        </div>
        <div class="row d-flex justify-content-start">
          <div class="col-12 d-flex justify-content-start">
            <router-link
              to="/real-estates"
              style="
                color: black;
                text-decoration: underline #e57c23;
                padding: 30px;
              "
              ><Icon
                icon="material-symbols:arrow-back-rounded"
                class="mx-2"
                height="18"
                width="18"
                style="
                  color: #e57c23;
                  background-color: white;
                  border-radius: 50%;
                  border: solid 1px #e57c23;
                "
              />
              All offers</router-link
            >
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div style="width: fit-content">
              <div
                class="card-title text-start mt-5"
                style="font-size: 20px; font-weight: 600"
              >
                Company information
              </div>
              <div class="d-flex justify-content-start align-items-center">
                <hr
                  style="
                    color: #e57c23;
                    height: 2px;
                    background-color: #e57c23;
                    opacity: 1;
                    width: 100%;
                  "
                />
              </div>
            </div>
            <div class="card-text text-start info">
              <Icon
                icon="material-symbols:location-on-rounded"
                height="17"
                width="17"
                class="mx-3"
              />Address: {{ mycompany.address }}
            </div>
            <div
              class="card-text text-start info my-3 d-flex justify-content-start align-items-center"
            >
              <Icon
                icon="material-symbols:location-on-rounded"
                height="17"
                width="17"
                class="mx-3"
              />Working time:
              <div class="dropdown mx-1">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="color: #585858"
                >
                  {{ mycompany.working_time[1].day }}-{{
                    mycompany.working_time[1].start
                  }}-{{ mycompany.working_time[1].end }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li
                    class="d-flex justify-content-start mx-1 my-1"
                    style="pointer-events: none; color: #585858"
                    v-for="(day, index) in mycompany.working_time"
                    :key="index"
                  >
                    {{ day.day }}-{{ day.start }}-{{ day.end }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div style="width: fit-content">
              <div
                class="card-title text-start mt-5"
                style="font-size: 20px; font-weight: 600"
              >
                Call
              </div>
              <div class="d-flex justify-content-start align-items-center">
                <hr
                  style="
                    color: #e57c23;
                    height: 2px;
                    background-color: #e57c23;
                    opacity: 1;
                    width: 100%;
                  "
                />
              </div>
              <div class="d-block">
                <div
                  class="d-flex justify-content-center align-items-center my-2"
                >
                  <button class="contact-btn2 shadow" @click="show_share(2)">
                    <Icon
                      icon="ic:round-call"
                      color="#e57c23"
                      class="mx-1"
                      height="18"
                      width="18"
                    />Phone
                  </button>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center my-2"
                >
                  <button class="contact-btn2 shadow" @click="show_share(1)">
                    <Icon
                      icon="ic:baseline-email"
                      color="#e57c23"
                      class="mx-1"
                      height="18"
                      width="18"
                    />Email
                  </button>
                </div>

                <div
                  class="d-flex justify-content-center align-items-center my-2"
                >
                  <button class="contact-btn2 shadow" @click="show_share(3)">
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="#1FAF38"
                      class="mx-1"
                      height="18"
                      width="18"
                    />
                    Whatsapp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div style="width: fit-content">
              <div
                class="card-title text-start mt-5"
                style="font-size: 20px; font-weight: 600"
              >
                Socialmedia
              </div>
              <div class="d-flex justify-content-start align-items-center">
                <hr
                  style="
                    color: #e57c23;
                    height: 2px;
                    background-color: #e57c23;
                    opacity: 1;
                    width: 100%;
                  "
                />
              </div>
              <div class="d-block">
                <div
                  class="d-flex justify-content-start align-items-center my-2"
                  v-for="(social, index) in mycompany.contact"
                  :key="index"
                >
                  <a :href="social" class="mysocial">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popup4" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_share(1)">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          <div class="container mx-1">
            <button
              id="myemail"
              class="contact-btn2 shadow w-100"
              @click="copy(1)"
              @focusout="clear_color(1)"
            >
              Email: {{ mycompany.email }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="popup5" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_share(2)">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          <div class="container mx-1">
            <button
              id="myphone"
              class="contact-btn2 shadow w-100"
              @click="copy(2)"
              @focusout="clear_color(2)"
            >
              Phone: {{ mycompany.phone }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="popup6" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_share(3)">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          <div class="container mx-1">
            <a
              class="contact-btn2 shadow w-100 mysocial"
              style="color: black"
              :href="'https://wa.me/' + mycompany.whatsapp"
              target="_blank"
            >
              Whatsapp: {{ mycompany.phone }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="popup7" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_share(4)">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          <div class="container mx-1">
            <a
              class="contact-btn2 shadow w-100 mysocial"
              style="color: black"
              :href="mycompany.website"
              target="_blank"
            >
              Website: {{ mycompany.website }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <ShareSocial></ShareSocial>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import CompaniesCard from "@/components/CompaniesCard.vue";
import RealestateCard from "@/components/RealestateCard.vue";
import ShareSocial from "@/components/ShareSocial.vue";

export default {
  name: "company-view",
  data() {
    return {
      icon: "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love",
      icon2: "noto:heart-suit",
      mycompany: {
        id: 1,
        img1: require("@/assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
        img2: require("@/assets/images/cover.jpg"),
        name: "Tamim General Contracting Company",
        phone: "+963933097404",
        whatsapp: "+963933097404",
        email: "test@test.com",
        website: "https://test.com",
        description: "A company in ..... for selling real estes in Iraq",
        address: "Iraq,Arbeel",
        languages: { 1: "Arabic", 2: "English", 3: "Kurdish" },
        services: "General statements",
        offers_for_sell: 5,
        offers_for_rent: 3,
        employees_num: 6,
        fav: 1,
        Agents: {
          1: {
            id: 1,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 1",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          2: {
            id: 2,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 2",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          3: {
            id: 3,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 3",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          4: {
            id: 4,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 4",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          5: {
            id: 5,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 5",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          6: {
            id: 6,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 6",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
        },
        offers: {
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
            company_id: 1,
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
            company_id: 1,
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
            company_id: 1,
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
            company_id: 1,
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
            company_id: 1,
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
            company_id: 1,
          },
        },
        working_time: {
          1: {
            day: "Saturday",
            start: "5am",
            end: "8am",
          },
          2: {
            day: "Sunday",
            start: "5am",
            end: "8am",
          },
          3: {
            day: "Wedensday",
            start: "5am",
            end: "8am",
          },
          4: {
            day: "Friday",
            start: "5am",
            end: "8am",
          },
        },
        contact: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          twitter: "https://twitter.com",
          snapchat: "https://snapchat.com",
        },
      },
    };
  },
  components: {
    Icon,
    CompaniesCard,
    RealestateCard,
    ShareSocial,
  },
  methods: {
    show_share(num) {
      if (num == 1) {
        const element2 = document.getElementById("popup4");
        if (element2.style.visibility == "hidden") {
          element2.style.visibility = "visible";
          element2.style.opacity = 1;
        } else {
          element2.style.visibility = "hidden";
          element2.style.opacity = 0;
        }
      } else if (num == 2) {
        const element2 = document.getElementById("popup5");
        if (element2.style.visibility == "hidden") {
          element2.style.visibility = "visible";
          element2.style.opacity = 1;
        } else {
          element2.style.visibility = "hidden";
          element2.style.opacity = 0;
        }
      } else if (num == 3) {
        const element2 = document.getElementById("popup6");
        if (element2.style.visibility == "hidden") {
          element2.style.visibility = "visible";
          element2.style.opacity = 1;
        } else {
          element2.style.visibility = "hidden";
          element2.style.opacity = 0;
        }
      } else if (num == 4) {
        const element2 = document.getElementById("popup7");
        if (element2.style.visibility == "hidden") {
          element2.style.visibility = "visible";
          element2.style.opacity = 1;
        } else {
          element2.style.visibility = "hidden";
          element2.style.opacity = 0;
        }
      } else {
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
      }
    },
    copy(num) {
      var ele;
      if (num == 1) {
        ele = document.getElementById("myemail");
        navigator.clipboard.writeText(this.mycompany.email);
        ele.style.backgroundColor = "#009000";
      } else if (num == 2) {
        ele = document.getElementById("myphone");
        navigator.clipboard.writeText(this.mycompany.phone);
        ele.style.backgroundColor = "#009000";
      }
    },
    clear_color(num) {
      var ele;
      if (num == 1) {
        ele = document.getElementById("myemail");
        ele.style.backgroundColor = "White";
      } else if (num == 2) {
        ele = document.getElementById("myphone");
        ele.style.backgroundColor = "White";
      }
    },
    change_icon(num) {
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
  },
};
</script>

<style scoped>
.btn-show {
  background-color: unset;
  border: none;
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
.mysocial {
  text-decoration: none;
  color: #585858;
  transition: 0.5s ease-in-out;
}
.mysocial:active {
  text-decoration: none;
  color: #585858;
}
.mysocial:visited {
  text-decoration: none;
  color: #585858;
}
.mysocial:link {
  text-decoration: none;
  color: #585858;
}
.mysocial:hover {
  margin-left: 20px;
}
.contact-btn2 {
  background-color: white;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 13px;
  transition: 0.5s ease-in-out;
}
.contact-btn2:hover {
  margin-left: 20px;
}
.info {
  color: #585858;
}

.my-container {
  width: 100%;
  margin-top: 120px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-btn {
  background-color: white;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 13px;
  transition: 0.5s ease-in-out;
}
.contact-btn:hover {
  margin-bottom: 20px;
}
.background {
  height: 300px;
  width: 100%;
}

.card-absolute {
  position: absolute;
  width: 600px;
  border: 1px solid #e57c23;
}

.shadow {
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
