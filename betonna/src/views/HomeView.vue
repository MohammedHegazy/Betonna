<template>
  <div class="home">
    <div class="home-page">
      <div class="container text-light">
        <div
          class="row d-flex justify-content-start align-items-center text-start"
        >
          <div class="col mt-5">
            <h1 style="width: 50%; font-weight: 800">SEARCH NOW</h1>
          </div>
        </div>
        <div
          class="row d-flex justify-content-start align-items-center text-start"
        >
          <div class="col">
            <h4 style="width: 70%; font-weight: 800">"{{ Text1 }}"</h4>
          </div>
        </div>
        <form action="/">
          <div class="row text-start my-3">
            <div class="col-md-2 col-sm-3 col-6">
              <span class="mx-2 radio-item"
                ><input
                  type="radio"
                  id="sell"
                  name="sell_rent"
                  value="sell"
                  v-model="sell_rent"
                  checked
                />
                <label class="form-check-label" for=""> Sell </label></span
              >
            </div>
            <div class="col-md-2 col-sm-3 col-6">
              <span class="mx-2 radio-item"
                ><input
                  type="radio"
                  id="rent"
                  name="sell_rent"
                  value="rent"
                  v-model="sell_rent"
                />
                <label class="form-check-label" for=""> rent </label></span
              >
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <button class="nav-list form-home1" style="pointer-events: none">
                <Icon
                  icon="zondicons:location"
                  color="#e57c23"
                  width="25"
                  height="25"
                />
                Iraq
              </button>
            </div>
            <div class="col-md-6">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(1)"
                  @blur="changic1(1)"
                >
                  <Icon
                    icon="zondicons:location"
                    color="#585858"
                    width="25"
                    height="25"
                  />
                  {{ city }}
                  <Icon :icon="icon1" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu">
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      @click="changecity('Baghdad')"
                      :style="{ color: city_btn1 }"
                    >
                      Baghdad
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      @click="changecity('Arbeel')"
                      :style="{ color: city_btn2 }"
                    >
                      Arbeel
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      @click="changecity('Albosra')"
                      :style="{ color: city_btn3 }"
                    >
                      Albosra
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      @click="changecity('Alsulimanieh')"
                      :style="{ color: city_btn4 }"
                    >
                      Alsulaimanieh
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(2)"
                  @blur="changic1(2)"
                >
                  <Icon
                    icon="zondicons:location"
                    color="#585858"
                    width="25"
                    height="25"
                  />
                  {{ place }}
                  <Icon :icon="icon2" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu">
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      :style="{ color: place_btn1 }"
                      @click="changeplace('Al-Jomhoria street')"
                    >
                      Al-Jomhoria street
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      :style="{ color: place_btn2 }"
                      @click="changeplace('AL-Kalaa')"
                    >
                      AL-Kalaa
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      :style="{ color: place_btn3 }"
                      @click="changeplace('Kadaa Alhoaijeh')"
                    >
                      Kadaa Alhoaijeh
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="city-btn"
                      :style="{ color: place_btn4 }"
                      @click="changeplace('Karmee Ali')"
                    >
                      Karmee Ali
                    </button>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="
                    changic1(3);
                    show_hide_dropdown();
                  "
                >
                  <Icon
                    icon="mdi:home-search"
                    color="#585858"
                    width="25"
                    height="25"
                  />
                  {{ choosen_type }}
                  <Icon :icon="icon3" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu" id="type_drop" style="width: 700px">
                  <div class="dropdown-item">
                    <div class="row row-cols-auto">
                      <div
                        class="col-4 d-flex justify-content-center align-items-center"
                        style="border-right: 5px solid #ffffff"
                      >
                        <button
                          type="button"
                          class="realest_type p-3"
                          :style="{ color: color1, width: '100%' }"
                          @click="changetype(1)"
                        >
                          <Icon
                            icon="healthicons:agriculture-outline"
                            width="20"
                            height="20"
                          />
                          agricultural
                        </button>
                      </div>
                      <div
                        class="col-4 d-flex justify-content-center align-items-center"
                        style=""
                      >
                        <button
                          type="button"
                          class="realest_type p-3"
                          :style="{
                            color: color2,
                            width: '100%',
                          }"
                          @click="changetype(2)"
                        >
                          <Icon icon="fa6-solid:shop" width="20" height="20" />
                          Commercial
                        </button>
                      </div>
                      <div
                        class="col-4 d-flex justify-content-center align-items-center"
                      >
                        <button
                          type="button"
                          class="realest_type p-3"
                          :style="{
                            borderRight: 'none',
                            color: color3,
                            width: '100%',
                          }"
                          @click="changetype(3)"
                        >
                          <Icon
                            icon="maki:residential-community"
                            width="20"
                            height="20"
                          />
                          Residential
                        </button>
                      </div>
                    </div>
                  </div>
                  <li><hr class="dropdown-divider" /></li>
                  <div class="dropdown-item">
                    <div class="row">
                      <div
                        class="col-4 my-3"
                        v-for="item_type in types"
                        v-bind:key="item_type.id"
                      >
                        <div class="card" style="height: 90px; width: 90%">
                          <button
                            type="button"
                            class="realest_type d-flex justify-content-center align-items-center"
                            style="
                              border: none;
                              border-radius: 5px;
                              height: 100%;
                            "
                            @click="choosen_type = item_type.name"
                          >
                            <div>
                              <div class="card-img-top">
                                <Icon
                                  :icon="item_type.icon"
                                  width="24"
                                  height="24"
                                />
                              </div>
                              <div class="card-text text-center">
                                {{ item_type.name }}
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(4)"
                  @blur="changic1(4)"
                >
                  <Icon
                    icon="mdi:dollar"
                    color="#585858"
                    width="25"
                    height="25"
                  />
                  Price
                  <Icon :icon="icon4" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu price-drop">
                  <div class="dropdown-item">
                    <div class="row">
                      <div class="col-6">Minimum_price</div>
                      <div class="col-6">Maximum_price</div>
                    </div>
                  </div>
                  <div class="dropdown-item">
                    <div class="row">
                      <div class="col-5 number-wrapper2">
                        <input
                          type="number"
                          class="list-inp"
                          min="0"
                          v-model="minimum_price"
                          style="background-color: #dddddd"
                        /><Icon
                          icon="mdi:dollar"
                          color="#585858"
                          style="
                            margin-left: -30px;
                            z-index: 2;
                            pointer-events: none;
                          "
                        />
                      </div>
                      <div class="col-1">
                        <Icon
                          icon="solar:arrow-right-linear"
                          color="black"
                          height="25"
                          width="25"
                        ></Icon>
                      </div>
                      <div class="col-5 number-wrapper2">
                        <input
                          type="number"
                          class="list-inp"
                          min="0"
                          v-model="maximum_price"
                          style="background-color: #dddddd"
                        /><Icon
                          icon="mdi:dollar"
                          color="#585858"
                          style="
                            margin-left: -30px;
                            z-index: 2;
                            pointer-events: none;
                          "
                        />
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(5)"
                  @blur="changic1(5)"
                >
                  More options
                  <Icon :icon="icon5" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu price-drop" style="width: 300px">
                  <li>
                    <div class="row d-flex justify-content-center">
                      <div class="col-11 my-2 number-wrapper2">
                        <input
                          style="background-color: #dddddd"
                          type="number"
                          class="list-inp"
                          min="0"
                          placeholder="Space m2"
                          v-model="space"
                        /><Icon
                          icon="material-symbols:space-dashboard-sharp"
                          color="#585858"
                          style="
                            margin-left: -40px;
                            z-index: 2;
                            pointer-events: none;
                          "
                        />
                      </div>
                      <div class="col-11 my-2 number-wrapper2">
                        <input
                          style="background-color: #dddddd"
                          type="number"
                          class="list-inp"
                          min="0"
                          placeholder="Number of rooms"
                          v-model="rooms"
                        /><Icon
                          icon="mdi:sofa"
                          color="#585858"
                          style="
                            margin-left: -40px;
                            z-index: 2;
                            pointer-events: none;
                          "
                        />
                      </div>
                      <div class="col-11 my-2 number-wrapper2">
                        <input
                          style="background-color: #dddddd"
                          type="number"
                          class="list-inp"
                          min="0"
                          placeholder="Number of bathrooms"
                          v-model="baths"
                        /><Icon
                          icon="fa6-solid:bath"
                          color="#585858"
                          style="
                            margin-left: -40px;
                            z-index: 2;
                            pointer-events: none;
                          "
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <button type="submit" class="home-btn">SEARCH</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="latest-offers">
      <p class="mt-5 text-start ms-5" style="font-size: 25px; font-weight: 600">
        Latest offers
      </p>
      <!-- slider -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="container portfolio-details">
          <section>
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div
                  class="swiper-slide d-flex justify-content-center mixed-array-demo"
                >
                  <div class="d-flex el-01">
                    <div
                      v-for="latest_offer in latest_offers[current_page]"
                      v-bind:key="latest_offer.id"
                      class="card mb-5 mx-3"
                      style="height: 480px; border-radius: 10px; width: 325px"
                    >
                      <img
                        :src="latest_offer.src"
                        class="card-top-img"
                        style="border-radius: 10px; width: 100%; height: 229px"
                      />
                      <div class="card-title">
                        <div class="row">
                          <div
                            class="col-6 mt-3"
                            style="font-size: 20px; font-weight: 600"
                          >
                            {{ latest_offer.name }}
                          </div>
                          <div
                            class="col-6 mt-3"
                            style="color: #e57c23; font-size: 20px"
                          >
                            {{ latest_offer.price }}
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-text text-start ms-3 mt-2"
                        style="color: #585858"
                      >
                        <Icon
                          icon="material-symbols:location-on-rounded"
                          height="24"
                          width="24"
                        />{{ latest_offer.location }}
                      </div>
                      <div
                        class="card-text text-start ms-3 mt-2"
                        style="color: #585858"
                      >
                        <div class="row mt-4">
                          <div class="col-9">
                            <div class="row">
                              <div class="col-6">
                                <p style="font-size: 12px">
                                  <Icon
                                    icon="ic:sharp-space-dashboard"
                                    height="18"
                                    width="18"
                                  />
                                  {{ latest_offer.space }}
                                </p>
                              </div>
                              <div class="col-6">
                                <p style="font-size: 12px">
                                  <Icon
                                    icon="bx:current-location"
                                    height="18"
                                    width="18"
                                  />
                                  {{ latest_offer.type }}
                                </p>
                              </div>
                              <div class="col-6">
                                <p style="font-size: 12px">
                                  <Icon icon="mdi:bed" height="18" width="18" />
                                  Bedrooms: {{ latest_offer.beedrooms }}
                                </p>
                              </div>
                              <div class="col-6">
                                <p style="font-size: 12px">
                                  <Icon
                                    icon="fa6-solid:bath"
                                    height="18"
                                    width="18"
                                  />
                                  Bathrooms: {{ latest_offer.bathrooms }}
                                </p>
                              </div>
                              <div class="col-6"></div>
                            </div>
                          </div>
                          <div class="col-3">
                            <img
                              src="../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"
                              class="card-img"
                              style="height: 45px; width: 55.5px"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-text d-flex justify-content-center align-items-center"
                      >
                        <router-link
                          to="/"
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination mb-5">
                <div class="row">
                  <div class="col-2">
                    <router-link
                      to="/"
                      style="color: black; text-decoration: underline #e57c23"
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
                  <div class="col-8">
                    <span
                      class="mx-2 radio-item"
                      v-for="(element, index) in latest_offers"
                      v-bind:key="index"
                      ><input
                        v-if="element != latest_offers.max_pages"
                        type="radio"
                        name="pagi"
                        :value="index"
                        :checked="index == 1 ? true : false"
                        v-model="current_page"
                        @click="slide()"
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import anime from "animejs";

export default {
  name: "HomeView",
  data() {
    return {
      icon1: "fe:arrow-down",
      icon2: "fe:arrow-down",
      icon3: "fe:arrow-down",
      icon4: "fe:arrow-down",
      icon5: "ph:dots-three-vertical-bold",
      city_btn1: "black",
      city_btn2: "black",
      city_btn3: "black",
      city_btn4: "black",
      place_btn1: "black",
      place_btn2: "black",
      place_btn3: "black",
      place_btn4: "black",
      color1: "#e57c23",
      color2: "black",
      color3: "black",
      city: "City",
      place: "Place",
      sell_rent: "sell",
      minimum_price: "",
      maximum_price: "",
      space: "",
      rooms: "",
      baths: "",
      choosen_type: "Type",
      types: [
        {
          id: 1,
          name: "Agricultural Land",
          icon: "mdi:beach",
        },
        {
          id: 2,
          name: "Agricultural House",
          icon: "simple-icons:homeassistant",
        },
        {
          id: 3,
          name: "Farm",
          icon: "game-icons:ground-sprout",
        },
      ],
      Text1:
        "Welcome to Betonna, the ideal destination for selling and renting real estate in Iraq. Explore our wide range of diverse options, and get a chance to get your dream home. We are here to fulfill your real estate desires.",
      flag: 0,
      latest_offers: {
        1: {
          1: {
            id: 1,
            name: "Exterior flat1",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          2: {
            id: 2,
            name: "Exterior flat2",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          3: {
            id: 3,
            name: "Exterior flat3",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          4: {
            id: 4,
            name: "Exterior flat4",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
        },
        2: {
          5: {
            id: 5,
            name: "Exterior flat5",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          6: {
            id: 6,
            name: "Exterior flat6",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          7: {
            id: 7,
            name: "Exterior flat7",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          8: {
            id: 8,
            name: "Exterior flat8",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
        },
        3: {
          9: {
            id: 9,
            name: "Exterior flat9",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
          10: {
            id: 10,
            name: "Exterior flat10",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/antonovich-design-thumb20226jT4labATjDg.jpg"),
          },
        },
        max_pages: 3,
      },
      current_page: 1,
    };
  },
  components: {
    Icon,
  },
  methods: {
    slide() {
      var el = document.querySelector(".mixed-array-demo  .el-01");

      anime({
        targets: [el, ".mixed-array-demo  .el-01", ".mixed-array-demo  .el-01"],
        keyframes: [
          { translateX: "-200%" },
          { translateY: "-500%" },
          { translateX: "200%" },
          { translateY: "0%" },
          { translateX: "0%" },
        ],
        duration: 1000,
        easing: "easeInOutQuad",
      });
    },
    show_hide_dropdown() {
      const element = document.getElementById("type_drop");
      if (this.flag == 0) {
        element.removeAttribute("class");
        element.setAttribute(
          "class",
          "dropdown-menu position-absolute d-inline-block"
        );
        this.flag = 1;
      } else {
        element.removeAttribute("class");
        element.setAttribute("class", "dropdown-menu position-absolute d-none");
        this.flag = 0;
      }
    },
    changic1(x) {
      switch (x) {
        case 1:
          if (this.icon1 == "fe:arrow-down") {
            this.icon1 = "fe:arrow-up";
          } else {
            this.icon1 = "fe:arrow-down";
          }
          break;
        case 2:
          if (this.icon2 == "fe:arrow-down") {
            this.icon2 = "fe:arrow-up";
          } else {
            this.icon2 = "fe:arrow-down";
          }
          break;
        case 3:
          if (this.icon3 == "fe:arrow-down") {
            this.icon3 = "fe:arrow-up";
          } else {
            this.icon3 = "fe:arrow-down";
          }
          break;
        case 4:
          if (this.icon4 == "fe:arrow-down") {
            this.icon4 = "fe:arrow-up";
          } else {
            this.icon4 = "fe:arrow-down";
          }
          break;
        case 5:
          if (this.icon5 == "ph:dots-three-vertical-bold") {
            this.icon5 = "eos-icons:three-dots-loading";
          } else {
            this.icon5 = "ph:dots-three-vertical-bold";
          }
      }
    },
    changecity(x) {
      this.city = x;
      switch (x) {
        case "Baghdad":
          if (this.city_btn1 == "black") {
            this.city_btn1 = "#e57c23";
            this.city_btn2 = "black";
            this.city_btn3 = "black";
            this.city_btn4 = "black";
          }
          break;
        case "Arbeel":
          if (this.city_btn2 == "black") {
            this.city_btn2 = "#e57c23";
            this.city_btn1 = "black";
            this.city_btn3 = "black";
            this.city_btn4 = "black";
          }
          break;
        case "Albosra":
          if (this.city_btn3 == "black") {
            this.city_btn3 = "#e57c23";
            this.city_btn1 = "black";
            this.city_btn2 = "black";
            this.city_btn4 = "black";
          }
          break;
        case "Alsulimanieh":
          if (this.city_btn4 == "black") {
            this.city_btn4 = "#e57c23";
            this.city_btn1 = "black";
            this.city_btn2 = "black";
            this.city_btn3 = "black";
          }
          break;
      }
    },
    changeplace(x) {
      this.place = x;
      switch (x) {
        case "Al-Jomhoria street":
          if (this.place_btn1 == "black") {
            this.place_btn1 = "#e57c23";
            this.place_btn2 = "black";
            this.place_btn3 = "black";
            this.place_btn4 = "black";
          }
          break;
        case "AL-Kalaa":
          if (this.place_btn2 == "black") {
            this.place_btn2 = "#e57c23";
            this.place_btn1 = "black";
            this.place_btn3 = "black";
            this.place_btn4 = "black";
          }
          break;
        case "Kadaa Alhoaijeh":
          if (this.place_btn3 == "black") {
            this.place_btn3 = "#e57c23";
            this.place_btn1 = "black";
            this.place_btn2 = "black";
            this.place_btn4 = "black";
          }
          break;
        case "Karmee Ali":
          if (this.place_btn4 == "black") {
            this.place_btn4 = "#e57c23";
            this.place_btn1 = "black";
            this.place_btn2 = "black";
            this.place_btn3 = "black";
          }
          break;
      }
    },
    changetype(x) {
      switch (x) {
        case 1:
          this.types = [
            {
              id: 1,
              name: "Agricultural Land",
              icon: "mdi:beach",
            },
            {
              id: 2,
              name: "Agricultural House",
              icon: "simple-icons:homeassistant",
            },
            {
              id: 3,
              name: "Farm",
              icon: "game-icons:ground-sprout",
            },
          ];
          this.color1 = "#e57c23";
          this.color2 = "black";
          this.color3 = "black";
          break;
        case 2:
          this.types = [
            {
              id: 1,
              name: "Office",
              icon: "ph:office-chair-fill",
            },
            {
              id: 2,
              name: "Hotel",
              icon: "ri:hotel-line",
            },
            {
              id: 3,
              name: "Commercial appartment",
              icon: "ic:baseline-apartment",
            },
            {
              id: 4,
              name: "Commercial land",
              icon: "emojione-monotone:umbrella-on-ground",
            },
            {
              id: 5,
              name: "Commercial house",
              icon: "game-icons:house",
            },
            {
              id: 6,
              name: "Commercial building",
              icon: "fa6-solid:building",
            },
            {
              id: 7,
              name: "Commercial warehouse",
              icon: "nimbus:store",
            },
            {
              id: 8,
              name: "Commercial Shop",
              icon: "solar:shop-2-bold",
            },
            {
              id: 9,
              name: "Commercial Floor",
              icon: "mdi:floor-plan",
            },
          ];
          this.color1 = "black";
          this.color2 = "#e57c23";
          this.color3 = "black";
          break;
        case 3:
          this.types = [
            {
              id: 1,
              name: "Villa",
              icon: "material-symbols:villa-rounded",
            },
            {
              id: 2,
              name: "Home",
              icon: "ic:round-house",
            },
            {
              id: 3,
              name: "Appartment",
              icon: "fluent-emoji-high-contrast:department-store",
            },
            {
              id: 4,
              name: "Residential land",
              icon: "maki:residential-community",
            },
          ];
          this.color1 = "black";
          this.color2 = "black";
          this.color3 = "#e57c23";
          break;
      }
    },
  },
  mounted() {
    console.log(this.latest_offers);
  },
};
</script>

<style lang="scss">
.home-page {
  height: 100%;
  width: 100%;
  background-image: url(../assets/images/Homepage/Png.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.form-home1 {
  border-radius: 10px;
  width: 100%;
  height: 50px;
  background-color: white;
  border: none;
  margin: 10px;
  font-weight: 900;
}

.form-home2 {
  text-align: start;
  padding-left: 20px;
  font-weight: 900;
  color: #585858;
}

.home-btn {
  border-radius: 10px;
  width: 100%;
  height: 50px;
  color: white;
  background-color: #e57c23;
  border: none;
  margin: 10px;
  font-weight: 900;
}

.list-inp {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  border: none;
  padding-left: 10px;
}

.price-drop {
  width: 400px;
}

.city-btn {
  border: none;
  background-color: white;
  font-weight: 900;
}

.realest_type {
  height: 100%;
  border: none;
  border-right: 2px solid #dddddd;
  background-color: white;
  transition: 0.5s ease-out;
}

.realest_type:hover {
  color: #e57c23;
  transition: 0.5s ease-in;
}

div .dropdown-item:hover {
  background-color: white;
}

.dropdown-item .row:hover {
  background-color: white;
}

.number-wrapper2 {
  position: relative;
}

.number-wrapper2:after,
.number-wrapper2:before {
  position: absolute;
  right: 14px;
  width: 1.6em;
  height: 1em;
  font-size: 10px;
  pointer-events: none;
  background: #dddddd;
}

.number-wrapper2:after {
  color: #585858;
  content: "\2B9D";
  margin-top: 10px;
}

.number-wrapper2:before {
  color: #585858;
  content: "\2B9F";
  margin-bottom: 15px;
  bottom: -0.5em;
}

.card-img {
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(99, 99, 99, 0.6);
  -moz-box-shadow: 0px 0px 10px 0px rgba(99, 99, 99, 0.6);
  box-shadow: 0px 0px 10px 0px rgba(99, 99, 99, 0.6);
}

.card {
  background-color: white;
}

.slide-left {
  animation: slide-left 0.5s ease-in-out;
}

@keyframes slide-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100px);
  }
}

@media screen and (max-width: 700px) {
  .price-drop {
    width: 300px;
  }
}
</style>
