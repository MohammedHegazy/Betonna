<template>
  <div class="realestate-projectinfo">
    <div class="d-block">
      <div class="row row-cols-auto my-5 ms-3">
        <div class="col-4 ms-5 my-3">
          <div class="card sticky-top" style="z-index: 0">
            <div class="card-title">
              <div class="row" style="font-size: 20px; font-weight: 600">
                <div class="col-8 mt-3 text-start ms-3">
                  {{ this.name }}
                  <span
                    v-if="Negotiable == 'true'"
                    style="color: #585858; font-size: 16px"
                  >
                    (Negotiable)
                  </span>
                </div>
                <div class="col-3 mt-3 text-end" style="color: #e57c23">
                  {{ this.price }}
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
                />{{ this.location }}
              </div>
              <div class="card-text text-start ms-4 mt-2">
                <div class="row mt-4 info-box w-100 d-flex">
                  <div class="col-6 info mt-3">
                    <p>
                      <Icon icon="material-symbols:calendar-month-rounded" />
                      Publish Date:{{ this.publish_date }}
                    </p>
                  </div>
                  <div class="col-6 info mt-3">
                    <p>
                      <Icon icon="mdi:home-search" />
                      Property Type:{{ this.real_type }}
                    </p>
                  </div>
                  <div class="col-6 info">
                    <p>
                      <Icon icon="ic:sharp-space-dashboard" />
                      Space:{{ this.space }}m2
                    </p>
                  </div>
                  <div class="col-6 info">
                    <p>
                      <Icon icon="bx:current-location" />
                      Purpose:{{ this.type }}
                    </p>
                  </div>
                  <div class="col-6 info">
                    <p>
                      <Icon icon="mdi:bed" />
                      Bedrooms: {{ this.bedrooms }}
                    </p>
                  </div>
                  <div class="col-6 info">
                    <p>
                      <Icon icon="fa6-solid:bath" />
                      Bathrooms: {{ this.bathrooms }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="card-text text-start ms-3 my-4"
                style="font-size: 20px; font-weight: 600"
              >
                Real Estate Agent
              </div>
              <router-link to="/" class="Agents_router">
                <div
                  class="w-100 d-flex justify-content-center align-items-center my-3"
                >
                  <div class="card card-shadow shadow">
                    <div class="row">
                      <div class="col-3">
                        <div style="width: 100%; height: 100%">
                          <img
                            :src="img"
                            style="
                              height: 100%;
                              width: 100%;
                              border-radius: 5px;
                            "
                          />
                        </div>
                      </div>
                      <div
                        class="col-8 d-flex justify-content-center align-items-center"
                      >
                        <div class="d-block w-100">
                          <div class="company_name name text-start">
                            {{ this.company_name }}
                          </div>
                          <div class="location text-start">
                            <Icon
                              icon="material-symbols:location-on-rounded"
                              height="24"
                              width="24"
                            />{{ this.company_location }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <router-link to="/agent" class="Agents_router">
                <div
                  class="w-100 d-flex justify-content-center align-items-center my-3"
                >
                  <div class="card card-shadow shadow">
                    <div class="row">
                      <div class="col-3">
                        <div style="width: 100%; height: 100%">
                          <img
                            class="m-1 me-0"
                            :src="img_agent"
                            style="height: 90%; width: 90%; border-radius: 5px"
                          />
                        </div>
                      </div>
                      <div
                        class="col-8 d-flex justify-content-center align-items-center"
                      >
                        <div class="d-block w-100">
                          <div class="Agent-name name text-start">
                            {{ this.Agent_name }}
                          </div>
                          <div class="location text-start">
                            {{ this.company_name }}
                          </div>
                          <div class="location text-start">
                            {{ this.real_estates_added }} Real Estates has been
                            added
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <div
                class="card-text text-start ms-3 my-4"
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
                        class="call_email"
                        @click.stop="show_hide('phone')"
                      >
                        <Icon icon="ic:round-call" color="#e57c23" />Call
                      </button>
                      <div
                        class="container-3 shadow mt-5"
                        style="display: none"
                        id="phone"
                        @focusout.stop="show_hide('phone')"
                      >
                        Phone: {{ this.phone }}
                        <button
                          class="call_email2 shadow"
                          id="ph_btn"
                          @click.stop="copy('phone')"
                        >
                          Copy
                        </button>
                      </div>
                      <button
                        class="call_email"
                        @click.stop="show_hide('whatsapp')"
                      >
                        <Icon
                          icon="logos:whatsapp-icon"
                          color="#e57c23"
                        />Whatsapp
                      </button>
                      <div
                        class="container-3 shadow mt-5"
                        style="display: none"
                        id="whatsapp"
                        @focusout.stop="show_hide('whatsapp')"
                      >
                        Whatsapp: {{ this.phone }}
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <a
                            class="call_email2 shadow whats_app"
                            :href="'https://wa.me/' + this.phone"
                            target="_blank"
                            id="wa_btn"
                            >Go to Whatsapp
                          </a>
                        </div>
                      </div>
                      <button
                        class="call_email"
                        id="msg_btn"
                        @click="show_hide('email')"
                      >
                        <Icon icon="ic:baseline-email" color="#e57c23" />
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 d-flex justify-content-center my-3">
          <div class="d-block w-100">
            <div class="container-icon-photo shadow">
              <div class="row d-flex justify-content-center align-items-center">
                <div
                  class="col d-flex justify-content-center align-items-center"
                  style="border-right: 1px solid #d0d0d0"
                >
                  <button
                    type="button"
                    class="mybtn-photo-type"
                    :style="{ color: type_ph == 'photo' ? '#e57c23' : 'black' }"
                    @click="
                      type_ph = 'photo';
                      clear_arr();
                    "
                  >
                    <Icon icon="ic:baseline-image" height="23" width="23" />
                  </button>
                </div>
                <div
                  class="col d-flex justify-content-center align-items-center"
                  style="border-right: 1px solid #d0d0d0"
                >
                  <button
                    type="button"
                    class="mybtn-photo-type"
                    :style="{ color: type_ph == 'video' ? '#e57c23' : 'black' }"
                    @click="
                      type_ph = 'video';
                      clear_arr();
                    "
                  >
                    <Icon
                      icon="material-symbols:video-library-rounded"
                      height="23"
                      width="23"
                    />
                  </button>
                </div>
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <button
                    type="button"
                    class="mybtn-photo-type"
                    :style="{ color: type_ph == '360' ? '#e57c23' : 'black' }"
                    @click="$router.push('/360-photos')"
                  >
                    <Icon icon="tabler:view-360" height="23" width="23" />
                  </button>
                </div>
              </div>
            </div>
            <div class="photo-container">
              <img
                :src="src"
                alt=""
                class="photo-slider-selected"
                v-if="type_ph == 'photo'"
              />
              <div class="fav" v-if="fav == '0' && type_ph == 'photo'">
                <Icon
                  :icon="icon"
                  class="icon"
                  height="24"
                  width="24"
                  color="black"
                  @click="change_icon(1)"
                />
              </div>
              <div class="fav" v-if="fav == '1' && type_ph == 'photo'">
                <Icon
                  :icon="icon2"
                  class="icon"
                  height="24"
                  width="24"
                  color="black"
                  @click="change_icon(1)"
                />
              </div>
              <div class="" v-if="type_ph == 'photo'">
                <button
                  type="button"
                  class="fav"
                  style="border: none; margin-left: 70px"
                  @click="show_photo()"
                >
                  <Icon
                    icon="material-symbols:display-external-input-rounded"
                    class="icon"
                    height="24"
                    width="24"
                    color="black"
                  />
                </button>
              </div>
              <iframe
                v-else-if="type_ph == 'video'"
                class="mybtn-video-type"
                :src="src"
                title="Vue.js IFrame Embed Component For Youtube,Dailymotion,Vimeo Videos Using v-video-embed Library"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div
                class="my-3 d-flex justify-content-center align-items-center"
              >
                <div class="row row-cols-auto">
                  <div
                    class="col my-2"
                    v-for="(element, index) in slider_images"
                    :key="element.id"
                  >
                    <button
                      type="button"
                      class="photo_btn mx-1"
                      @click="photo_changer(index)"
                      :style="{ backgroundImage: 'url(' + element.src + ')' }"
                    >
                      <div
                        v-if="rest > 0 && index == slider_length"
                        class="show-more"
                      >
                        +{{ rest }}
                      </div>
                      <div v-if="type_ph == 'video'">
                        <iframe
                          class="mybtn-video-type-btn"
                          :src="element.src"
                          title="Vue.js IFrame Embed Component For Youtube,Dailymotion,Vimeo Videos Using v-video-embed Library"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                          style="pointer-events: none"
                        ></iframe>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <hr style="height: 2px; background: #626262; color: #626262" />
              <div
                class="mt-3 row information d-flex justify-content-center align-items-center ms-1"
                style="width: 100%; height: 90px"
              >
                <div class="col info-col">
                  <button
                    type="button"
                    class="shadow btn-des-line"
                    :style="{ color: info == 'details' ? '#e57c23' : 'black' }"
                    @click="
                      info = 'details';
                      scroller();
                    "
                  >
                    <Icon icon="ooui:view-details-ltr" /> Details
                  </button>
                </div>
                <div class="col info-col">
                  <button
                    type="button"
                    class="shadow btn-des-line"
                    :style="{
                      color: info == 'advantages' ? '#e57c23' : 'black',
                    }"
                    @click="
                      info = 'advantages';
                      scroller();
                    "
                  >
                    <Icon icon="mdi:feature-highlight" />Advantages
                  </button>
                </div>
                <div class="col info-col">
                  <button
                    type="button"
                    class="shadow btn-des-line"
                    :style="{ color: info == 'services' ? '#e57c23' : 'black' }"
                    @click="
                      info = 'services';
                      scroller();
                    "
                  >
                    <Icon icon="ic:twotone-miscellaneous-services" />Services
                  </button>
                </div>
                <div class="col info-col">
                  <button
                    type="button"
                    class="shadow btn-des-line"
                    :style="{
                      color: info == 'description' ? '#e57c23' : 'black',
                    }"
                    @click="
                      info = 'description';
                      scroller();
                    "
                  >
                    <Icon icon="ic:round-real-estate-agent" />Description
                  </button>
                </div>
                <div class="col info-col">
                  <button
                    type="button"
                    class="shadow btn-des-line"
                    :style="{
                      color: info == 'show_on_map' ? '#e57c23' : 'black',
                    }"
                    @click="
                      info = 'show_on_map'
                      // scroller();
                    "
                  >
                    <Icon icon="material-symbols:location-on-rounded" />Show on
                    map
                  </button>
                </div>
                <div class="col info-col">
                  <button
                    type="button"
                    class="shadow btn-des-line"
                    :style="{ color: info == 'planning' ? '#e57c23' : 'black' }"
                    @click="
                      info = 'planning';
                      scroller();
                    "
                  >
                    Engineering planning
                  </button>
                </div>
              </div>
              <div class="card my-4" id="details">
                <div
                  class="card-title text-start ps-3 pt-3 name-info"
                  style="padding-bottom: 0; margin-bottom: 0"
                >
                  Details
                </div>
                <div class="d-flex justify-content-center w-100">
                  <hr
                    style="
                      padding-top: 0;
                      color: #e57c23;
                      background-color: #e57c23;
                      height: 2px;
                      opacity: 1;
                      width: 95%;
                    "
                  />
                </div>
                <div class="card-text">
                  <div class="row w-100 ms-3">
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="material-symbols:calendar-month-rounded" />
                        Publish Date:{{ this.publish_date }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:home-search" />
                        Property Type:{{ this.real_type }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="fluent:number-symbol-square-20-filled" />
                        Property Number:{{ this.prop_number }}
                      </p>
                    </div>

                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="bx:current-location" />
                        Purpose:{{ this.type }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="material-symbols:calendar-month-rounded" />
                        Year of construction:{{ this.real_built }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="ic:sharp-space-dashboard" />
                        Space:{{ this.space }}m2
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="ic:twotone-construction" />
                        Building state: {{ this.rel_state }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:dollar" />
                        Meter price: {{ this.rel_m_price }}$
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:home-search" />
                        furnished:{{ this.real_furn }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card my-4" id="advantages">
                <div
                  class="card-title text-start ps-3 pt-3 name-info"
                  style="padding-bottom: 0; margin-bottom: 0"
                >
                  Advantages
                </div>
                <div class="d-flex justify-content-center w-100">
                  <hr
                    style="
                      padding-top: 0;
                      color: #e57c23;
                      background-color: #e57c23;
                      height: 2px;
                      opacity: 1;
                      width: 95%;
                    "
                  />
                </div>
                <div class="card-text">
                  <div class="row w-100 ms-3">
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:bed" />
                        Bedrooms:{{ this.bedrooms }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:sofa" />
                        Sitting room:{{ this.sitting_rooms }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:sofa" />
                        Reception room:{{ this.reception_room }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="fa6-solid:bath" />
                        Bathrooms:{{ this.bathrooms }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="mdi:kitchen-counter" />
                        Kitchens:{{ this.kitchens }}
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="ic:twotone-balcony" />
                        Balcony:{{ this.balcony }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card my-4" id="services">
                <div
                  class="card-title text-start ps-3 pt-3 name-info"
                  style="padding-bottom: 0; margin-bottom: 0"
                >
                  Services
                </div>
                <div class="d-flex justify-content-center w-100">
                  <hr
                    style="
                      padding-top: 0;
                      color: #e57c23;
                      background-color: #e57c23;
                      height: 2px;
                      opacity: 1;
                      width: 95%;
                    "
                  />
                </div>
                <div class="card-text">
                  <div class="row w-100 ms-3">
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="ic:twotone-balcony" />
                        Garden cleaning
                      </p>
                    </div>
                    <div class="col-4 info info2 mt-3">
                      <p>
                        <Icon icon="game-icons:home-garage" />
                        Garage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card my-4" id="description">
                <div
                  class="card-title text-start ps-3 pt-3 name-info"
                  style="padding-bottom: 0; margin-bottom: 0"
                >
                  Description
                </div>
                <div class="d-flex justify-content-center w-100">
                  <hr
                    style="
                      padding-top: 0;
                      color: #e57c23;
                      background-color: #e57c23;
                      height: 2px;
                      opacity: 1;
                      width: 95%;
                    "
                  />
                </div>
                <div class="card-text ms-3 mb-3 text-start">
                  Apartment for sell in {{ location }}, space {{ space }}, it's
                  Consisting of: {{ describtion }}
                </div>
              </div>
              <div class="card my-4" id="planning">
                <div
                  class="card-title text-start ps-3 pt-3 name-info"
                  style="padding-bottom: 0; margin-bottom: 0"
                >
                  Engineering planning
                  <div
                    class="container-icon-photo container-icon-photo2 shadow"
                  >
                    <div
                      class="row d-flex justify-content-center align-items-center"
                    >
                      <div
                        class="col d-flex justify-content-center align-items-center"
                        style="border-right: 1px solid #d0d0d0"
                      >
                        <button
                          type="button"
                          class="mybtn-photo-type"
                          :style="{
                            color: '#ffffff',
                            backgroundColor:
                              planning_type == '2d' ? '#e57c23' : 'black',
                          }"
                          @click="planning_type = '2d'"
                        >
                          <Icon icon="mdi:video-2d" height="23" width="23" />
                        </button>
                      </div>
                      <div
                        class="col d-flex justify-content-center align-items-center"
                      >
                        <button
                          type="button"
                          class="mybtn-photo-type"
                          :style="{
                            color: '#ffffff',
                            backgroundColor:
                              planning_type == '3d' ? '#e57c23' : 'black',
                          }"
                          @click="planning_type = '3d'"
                        >
                          <Icon icon="mdi:video-3d" height="23" width="23" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center w-100">
                  <hr
                    style="
                      padding-top: 0;
                      color: #e57c23;
                      background-color: #e57c23;
                      height: 2px;
                      opacity: 1;
                      width: 95%;
                    "
                  />
                </div>
                <div class="card-text ms-3 mb-3 text-start">
                  <img :src="plan_src" alt="" class="photo-slider-selected" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="latest-offers">
      <p class="mt-5 text-start ms-5" style="font-size: 25px; font-weight: 600">
        Similar offers
      </p>
      <!-- slider -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="container portfolio-details d-flex justify-content-center">
          <section>
            <div class="portfolio-details-slider swiper">
              <div
                class="swiper-wrapper align-items-center"
                style="width: 1320px"
              >
                <div class="parent arrow" style="height: 480px">
                  <button
                    type="button"
                    class="d-flex justify-content-center align-items-center arrow-style"
                    @click="swap_btn_back(3)"
                  >
                    <Icon
                      icon="ep:arrow-left-bold"
                      height="24"
                      width="24"
                      color="#E57C23"
                    />
                  </button>
                </div>
                <div
                  class="swiper-slide d-flex justify-content-center mixed-array-demo"
                >
                  <div class="d-flex el-01" style="z-index: 1">
                    <RealestateCard
                      v-for="latest_offer in latest_offers[current_page]"
                      v-bind:key="latest_offer.id"
                      :id="latest_offer.id"
                      :name="latest_offer.name"
                      :price="latest_offer.price"
                      :location="latest_offer.location"
                      :space="latest_offer.space"
                      :type="latest_offer.type"
                      :bedrooms="latest_offer.bedrooms"
                      :bathrooms="latest_offer.bathrooms"
                      :src="latest_offer.src"
                      :logo="latest_offer.logo"
                      :state="latest_offer.state"
                      :fav="latest_offer.fav"
                    ></RealestateCard>
                  </div>
                  <div
                    class="parent arrow arrow"
                    style="justify-content: end; height: 480px"
                  >
                    <button
                      type="button"
                      class="d-flex justify-content-center align-items-center arrow-style"
                      @click="swap_btn_for(3)"
                    >
                      <Icon
                        icon="ep:arrow-right-bold"
                        height="24"
                        width="24"
                        color="#E57C23"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <div class="row">
                  <div class="col-2">
                    <router-link
                      to="/real-estates"
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
                  <div
                    class="col-8 d-flex justify-content-center"
                    style="height: 80px"
                  >
                    <span
                      class="mx-2 radio-item radio-item-swiper"
                      v-for="(element, index) in latest_offers"
                      v-bind:key="index"
                      :id="
                        index == 2
                          ? 'id222'
                          : index == 1
                          ? 'id111'
                          : index == 3
                          ? 'id333'
                          : 'false'
                      "
                      ><input
                        type="radio"
                        name="pagi"
                        :id="'id3' + index"
                        :value="index"
                        :checked="index == 1 ? true : false"
                        v-model="current_page"
                        v-if="element != latest_offers.max_pages"
                        @click="slide(1)"
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div id="popup1" class="overlay" style="visibility: hidden; opacity: 0">
      <div class="popup">
        <button type="button" class="close" @click="show_hide('email')">
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            height="20"
            width="20"
          />
        </button>
        <div class="content">
          Hey I'm interested in property ({{ name }}) that have the number
          {{ prop_number }}
        </div>
        <div class="message">
          <textarea
            class="shadow"
            v-model="message"
            rows="7"
            cols="80"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <div class="w-100 d-flex justify-content-end align-items-center my-2">
          <button type="button" class="nav-btn mybtn">Send</button>
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
          <div class="text-start my-3">Click on the photo to zoom</div>
          <button type="button" class="imgbtn" @click="enlargeImg()">
            <img :src="src" id="popimg" alt="" class="popup_photo" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import anime from "animejs";
import RealestateCard from "@/components/RealestateCard.vue";

export default {
  name: "realestate-projectinfo",
  data() {
    return {
      type_ph: "photo",
      src: "",
      slider_images: {},
      slider_length: 0,
      rest: 0,
      info: "details",
      plan_src: require("@/assets/images/Property Photo/apartment_plan.jpg"),
      icon: "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love",
      icon2: "noto:heart-suit",
      planning_type: "2d",
      //
      latest_offers: {
        1: {
          1: {
            id: 1,
            name: "Exterior flat1",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            bedrooms: "4",
            bathrooms: "2",
            state: "old",
            fav: "1",
            src: require("../assets/images/Exterior flat/Exterior.jpg"),
            logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
          },
          2: {
            id: 2,
            name: "Exterior flat2",
            price: "60,000$",
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
          3: {
            id: 3,
            name: "Exterior flat3",
            price: "60,000$",
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
          4: {
            id: 4,
            name: "Exterior flat4",
            price: "60,000$",
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
        },
        2: {
          5: {
            id: 5,
            name: "Exterior flat5",
            price: "60,000$",
            location: "Arbeel, central park",
            space: "156m2",
            type: "sell",
            bedrooms: "4",
            bathrooms: "2",
            state: "old",
            fav: "1",
            src: require("../assets/images/Exterior flat/Exterior.jpg"),
            logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
          },
          6: {
            id: 6,
            name: "Exterior flat6",
            price: "60,000$",
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
          7: {
            id: 7,
            name: "Exterior flat7",
            price: "60,000$",
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
          8: {
            id: 8,
            name: "Exterior flat8",
            price: "60,000$",
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
        },
        3: {
          9: {
            id: 9,
            name: "Exterior flat9",
            price: "60,000$",
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
          10: {
            id: 10,
            name: "Exterior flat10",
            price: "60,000$",
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
          11: {
            id: 11,
            name: "Exterior flat11",
            price: "60,000$",
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
          12: {
            id: 12,
            name: "Exterior flat12",
            price: "60,000$",
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
        },
        max_pages: 3,
      },
      current_page: 1,
      name: "ExteriorFlat1",
      prop_number: "BNL/1001",
      price: "60,000$",
      Negotiable: "true",
      location: "Arbeel,Central Park",
      publish_date: "10-05-2023",
      real_type: "Apartment",
      space: "156",
      type: "Sell",
      real_built: "2010",
      rel_state: "established",
      real_furn: "NO",
      rel_m_price: 66,
      bathrooms: 2,
      bedrooms: 4,
      kitchens: 1,
      balcony: 1,
      sitting_rooms: 2,
      reception_room: 1,
      describtion: "3 sitting rooms, 2 bathrooms and 1 kitchen",
      img: require("@/assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
      company_name: "Tamim General Contracting Company",
      company_location: "Arbeel,Central Park",
      Agent_name: "Mohammed Alsabah",
      real_estates_added: 12,
      img_agent: require("@/assets/images/profile.png"),
      phone: "+963933097404",
      email: "test@test.com",
      message: "",
      fav: 0,
      images: {
        1: { id: 1, src: require("@/assets/images/Property Photo/p1.jpg") },
        2: { id: 2, src: require("@/assets/images/Property Photo/p2.jpg") },
        3: { id: 3, src: require("@/assets/images/Property Photo/p3.jpg") },
        4: { id: 4, src: require("@/assets/images/Property Photo/p4.jpg") },
        5: { id: 5, src: require("@/assets/images/Property Photo/p5.jpg") },
        6: { id: 6, src: require("@/assets/images/Property Photo/p6.jpg") },
        7: { id: 7, src: require("@/assets/images/Property Photo/p7.jpg") },
        8: { id: 8, src: require("@/assets/images/Property Photo/p8.jpg") },
        9: { id: 9, src: require("@/assets/images/Property Photo/p9.jpg") },
        10: { id: 10, src: require("@/assets/images/Property Photo/p10.jpg") },
      },
      videos: {
        1: { id: 1, src: "https://www.youtube.com/embed/y9j-BL5ocW8" },
        2: { id: 2, src: "https://www.youtube.com/embed/ec_fXMrD7Ow" },
        3: { id: 3, src: "https://www.youtube.com/embed/0Sp1-NokEkY" },
        4: { id: 4, src: "https://www.youtube.com/embed/y9j-BL5ocW8" },
        5: { id: 5, src: "https://www.youtube.com/embed/ec_fXMrD7Ow" },
        6: { id: 6, src: "https://www.youtube.com/embed/0Sp1-NokEkY" },
        7: { id: 7, src: "https://www.youtube.com/embed/y9j-BL5ocW8" },
        8: { id: 8, src: "https://www.youtube.com/embed/ec_fXMrD7Ow" },
        9: { id: 9, src: "https://www.youtube.com/embed/0Sp1-NokEkY" },
        10: { id: 10, src: "https://www.youtube.com/embed/y9j-BL5ocW8" },
        11: { id: 11, src: "https://www.youtube.com/embed/ec_fXMrD7Ow" },
        12: { id: 12, src: "https://www.youtube.com/embed/0Sp1-NokEkY" },
      },

      flag: 0,
    };
  },
  components: {
    Icon,
    RealestateCard,
  },
  methods: {
    async show_hide(type) {
      const element = document.getElementById("phone");
      const element2 = document.getElementById("popup1");
      const element3 = document.getElementById("whatsapp");
      if (type == "phone") {
        if (element.style.display == "none") {
          element.style.display = "block";
          const element4 = document.getElementById("ph_btn");
          element4.focus();
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
        if (element2.style.visibility == "hidden") {
          element2.style.visibility = "visible";
          element2.style.opacity = 1;
          element.style.display = "none";
          const element5 = document.getElementById("ph_btn");
          element5.innerHTML = "Copy";
          element5.style.backgroundColor = "white";
          element5.style.color = "black";
          const element6 = document.getElementById("wa_btn");
          element6.style.backgroundColor = "white";
          element6.style.color = "black";
        } else {
          element2.style.visibility = "hidden";
          element2.style.opacity = 0;
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
    clear_arr() {
      let element;
      let element2;
      let i;
      this.rest = 0;
      this.slider_images = {};
      if (this.type_ph == "video") {
        element2 = Object.keys(this.videos);
        if (element2.length > 7) {
          for (i = 1; i <= 7; i++) {
            this.slider_images[i] = this.videos[i];
          }
        } else {
          for (i = 1; i <= element2.length; i++) {
            this.slider_images[i] = this.videos[i];
          }
        }
      } else if (this.type_ph == "photo") {
        element2 = Object.keys(this.images);
        if (element2.length > 7) {
          for (i = 1; i <= 7; i++) {
            this.slider_images[i] = this.images[i];
          }
        } else {
          for (i = 1; i <= element2.length; i++) {
            this.slider_images[i] = this.images[i];
          }
        }
      }
      element = Object.keys(this.slider_images);
      this.slider_length = element.length;
      if (this.slider_length < element2.length) {
        this.rest = element2.length - this.slider_length;
      }
      this.src = this.slider_images[1].src;
    },
    photo_changer(index) {
      if (index == this.slider_length && this.rest > 0) {
        this.rest = 0;
        let element;
        if (this.type_ph == "photo") {
          element = Object.keys(this.images);
          for (let i = 8; i <= element.length; i++) {
            this.slider_images[i] = this.images[i];
          }
        } else {
          element = Object.keys(this.videos);
          for (let i = 8; i <= element.length; i++) {
            this.slider_images[i] = this.videos[i];
          }
        }
      } else {
        this.src = this.slider_images[index].src;
      }
    },
    swap_btn_for(id) {
      if (id == 3) {
        if (this.current_page == this.latest_offers.max_pages) {
          this.current_page = 1;
          const ele = document.getElementById("id3" + this.current_page);
          const ele2 = document.getElementById(
            "id3" + this.latest_offers.max_pages
          );
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(1);
        } else {
          const ele2 = document.getElementById(
            "id3" + this.latest_offers.max_pages
          );
          this.current_page++;
          const ele = document.getElementById("id3" + this.current_page);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(1);
        }
      }
    },
    swap_btn_back(id) {
      if (id == 3) {
        if (this.current_page == 1) {
          this.current_page = this.latest_offers.max_pages;
          const ele = document.getElementById("id3" + this.current_page);
          const ele2 = document.getElementById("id3" + 1);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(1);
        } else {
          const ele2 = document.getElementById(
            "id3" + this.latest_offers.max_pages
          );
          this.current_page--;
          const ele = document.getElementById("id3" + this.current_page);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(1);
        }
      }
    },
    slide(id) {
      if (id == 1) {
        var el = document.querySelector(".mixed-array-demo  .el-01");
        anime({
          targets: [
            el,
            ".mixed-array-demo  .el-01",
            ".mixed-array-demo  .el-01",
          ],
          keyframes: [
            { translateX: "-200%" },
            { translateY: "-2000%" },
            { translateX: "200%" },
            { translateY: "0%" },
            { translateX: "0%" },
          ],
          duration: 1000,
          easing: "easeInOutQuad",
        });
      }
    },
    scroller() {
      const element = document.getElementById(this.info);
      element.scrollIntoView({ behavior: "smooth" });
    },
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
    enlargeImg() {
      // Set image size to 1.5 times original
      const element = document.getElementById("popimg");
      if (this.flag == 0) {
        this.flag = 1;
        element.style.transform = "scale(2.5)";
        // Animation effect
        element.style.transition = "transform 0.25s ease";
      } else {
        // Set image size to original
        this.flag = 0;
        element.style.transform = "scale(1)";
        element.style.transition = "transform 0.25s ease";
      }
    },
  },
  mounted() {
    this.clear_arr();
  },
};
</script>

<style scoped>
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
.popup_photo {
  height: 500px;
}
.fav {
  position: absolute;
  top: 240px;
  margin-left: 20px;
  display: flex;
  justify-content: end;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 4px;
  border-radius: 5px;
  pointer-events: auto inherit;
}
.name-info {
  font-size: 22px;
  font-weight: 600;
}
.btn-des-line {
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  height: 50px;
  width: 120px;
  font-size: 15px;
  transition: 0.5s ease-in-out;
}
.btn-des-line:hover {
  color: #e57c23;
}
.shadow {
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
.information {
  background-color: #ffffff;
  border: 1px solid #e57c23;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-col {
  width: fit-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.show-more {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  transition: 0.5s ease-in-out;
}
.show-more:hover {
  height: 100px;
  width: 100px;
}
.photo_btn {
  height: 80px;
  width: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 10px;
  -webkit-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
}
.photo_btn:hover {
  height: 100px;
  width: 100px;
  .mybtn-video-type-btn {
    height: 100px;
    width: 100px;
  }
}
.photo-container {
  height: fit-content;
  width: 800px;
  border-radius: 10px;
}
.photo-slider-selected {
  height: fit-content;
  width: 100%;
  border-radius: 10px;
}
.mybtn-photo-type {
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mybtn-video-type {
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mybtn-video-type-btn {
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
}

.container-icon-photo {
  width: 175px;
  height: 33px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 375px;
  top: 180px;
}
.container-icon-photo2 {
  right: 10px;
  top: 20px;
}

.info {
  color: #585858;
  font-size: 13px;
  display: flex;
  justify-content: start;
  align-items: center;
}

.info2 {
  font-size: 16px;
}

.info-box {
  border: 1px solid #e57c23;
  border-radius: 5px;
}

.card-shadow {
  width: 90%;
  border: none;
}
.Agents_router {
  text-decoration: none;
  transition: 0.5s ease-in-out;
}

.mybtn {
  border-radius: 10px;
  border: none;
}

.Agents_router:hover {
  .location {
    color: #e57c23;
  }
  .name {
    color: #e57c23;
  }
}

.location {
  font-size: 14px;
  font-weight: 300;
  color: #585858;
  transition: 0.5s ease-in-out;
}

.name {
  font-size: 16px;
  font-weight: 600;
  transition: 0.5s ease-in-out;
}

.call_email {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: 100px;
  margin: 10px;
  padding: 13px;
  height: fit-content;
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
  margin-bottom: 40px;
}

.call_email2 {
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  width: 90px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  font-weight: 600;
  transition: 0.5s ease-in;
}

.call_email2:hover {
  margin-bottom: 20px;
  background-color: #25d366;
}

.whats_app {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: fit-content;
}

.container-3 {
  width: 200px;
  position: absolute;
  bottom: 80px;
  z-index: 15;
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  font-size: 20px;
  font-weight: 600;
  transition: 0.5s ease-in;
}

textarea {
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  border: 0;
}

textarea:focus {
  outline: none !important;
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

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: max-content;
  position: relative;
  transition: all 5s ease-in-out;
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
.popup .content {
  text-align: start;
  margin-top: 30px;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
</style>
