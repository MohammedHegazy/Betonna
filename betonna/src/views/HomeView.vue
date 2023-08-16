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
                  Type
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
                        v-for="(item_type, index) in types[page]"
                        v-bind:key="item_type.id"
                      >
                        <div class="card" style="height: 90px; width: 90%">
                          <button
                            type="button"
                            :id="item_type.name + item_type.id"
                            class="realest_type d-flex justify-content-center align-items-center"
                            :style="{
                              border: 'none',
                              borderRadius: '5px',
                              height: '100%',
                              color: item_type.color,
                            }"
                            @click="choose_type(index, item_type.name)"
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
            <div class="col-md-6" style="margin-bottom: 150px">
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
        <div class="container portfolio-details d-flex justify-content-center">
          <section>
            <div class="portfolio-details-slider swiper">
              <div
                class="swiper-wrapper align-items-center"
                style="width: fit-content"
              >
                <div
                  class="parent"
                  style="
                    position: absolute;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    height: 480px;
                    right: 20px;
                  "
                >
                  <button
                    type="button"
                    class="d-flex justify-content-center align-items-center"
                    style="
                      background-color: rgba(255, 255, 255, 0.86);
                      height: 50px;
                      width: 50px;
                      z-index: 2;
                      border-radius: 50%;
                      border: none;
                      -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                    "
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
                      :bedrooms="latest_offer.beedrooms"
                      :bathrooms="latest_offer.bathrooms"
                      :src="latest_offer.src"
                      :logo="latest_offer.logo"
                    ></RealestateCard>
                  </div>
                  <div
                    class="parent"
                    style="
                      position: absolute;
                      display: flex;
                      justify-content: end;
                      align-items: center;
                      height: 480px;
                      width: 1343px;
                      left: 40px;
                    "
                  >
                    <button
                      type="button"
                      class="d-flex justify-content-center align-items-center"
                      style="
                        background-color: rgba(255, 255, 255, 0.86);
                        height: 50px;
                        width: 50px;
                        z-index: 2;
                        border-radius: 50%;
                        border: none;
                        -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      "
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
    <div class="special_citys">
      <p class="mt-5 text-start ms-5" style="font-size: 25px; font-weight: 600">
        Special Citys
      </p>
      <div class="d-flex justify-content-center align-items-center">
        <div class="container portfolio-details d-flex justify-content-center">
          <section>
            <div class="portfolio-details-slider swiper">
              <div
                class="swiper-wrapper align-items-center"
                style="width: 1343px"
              >
                <div
                  class="parent"
                  style="
                    position: absolute;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    height: 220px;
                    right: 20px;
                  "
                >
                  <button
                    type="button"
                    class="d-flex justify-content-center align-items-center"
                    style="
                      background-color: rgba(255, 255, 255, 0.86);
                      height: 50px;
                      width: 50px;
                      z-index: 2;
                      border-radius: 50%;
                      border: none;
                      -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                    "
                    @click="swap_btn_back(1)"
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
                  <div class="d-flex el-02" style="z-index: 1">
                    <SpecialcitiesCard
                      v-for="special_city in special_citys[current_page_2]"
                      v-bind:key="special_city.id"
                      :id="special_city.id"
                      :name="special_city.name"
                      :src="special_city.src"
                    ></SpecialcitiesCard>
                  </div>
                  <div
                    style="
                      position: absolute;
                      display: flex;
                      justify-content: end;
                      align-items: center;
                      height: 220px;
                      width: 1343px;
                      left: 40px;
                    "
                  >
                    <button
                      type="button"
                      class="d-flex justify-content-center align-items-center"
                      style="
                        background-color: rgba(255, 255, 255, 0.86);
                        height: 50px;
                        width: 50px;
                        z-index: 2;
                        border-radius: 50%;
                        border: none;
                        -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      "
                      @click="swap_btn_for(1)"
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
                  <div class="col-12">
                    <span
                      class="mx-2 radio-item radio-item-swiper"
                      v-for="(element, index) in special_citys"
                      v-bind:key="index"
                      ><input
                        v-if="element != special_citys.max_pages"
                        type="radio"
                        name="pagi_city"
                        :id="'id' + index"
                        :value="index"
                        :checked="index == 1 ? true : false"
                        v-model="current_page_2"
                        @click="slide(2)"
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="best-services">
      <p class="mt-5 text-start ms-5" style="font-size: 25px; font-weight: 600">
        Best services
      </p>
      <div class="d-flex justify-content-center align-items-center">
        <div class="container d-flex justify-content-center portfolio-details">
          <section>
            <div class="portfolio-details-slider swiper">
              <div
                class="swiper-wrapper align-items-center"
                style="width: 1343px"
              >
                <div
                  class="parent"
                  style="
                    position: absolute;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    height: 260px;
                    right: 20px;
                  "
                >
                  <button
                    type="button"
                    class="d-flex justify-content-center align-items-center"
                    style="
                      background-color: rgba(255, 255, 255, 0.86);
                      height: 50px;
                      width: 50px;
                      z-index: 2;
                      border-radius: 50%;
                      border: none;
                      -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                    "
                    @click="swap_btn_back(2)"
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
                  <div class="d-flex el-03" style="z-index: 1">
                    <ServicesCard
                      v-for="service in services[current_page_3]"
                      v-bind:key="service.id"
                      :id="service.id"
                      :name="service.name"
                      :src="service.src"
                    ></ServicesCard>
                  </div>
                  <div
                    class="parent"
                    style="
                      position: absolute;
                      display: flex;
                      justify-content: end;
                      align-items: center;
                      height: 260px;
                      width: 1343px;
                      left: 40px;
                    "
                  >
                    <button
                      type="button"
                      class="d-flex justify-content-center align-items-center"
                      style="
                        background-color: rgba(255, 255, 255, 0.86);
                        height: 50px;
                        width: 50px;
                        z-index: 2;
                        border-radius: 50%;
                        border: none;
                        -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                      "
                      @click="swap_btn_for(2)"
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
            </div>
          </section>
        </div>
      </div>
      <div class="mb-5" style="padding-bottom: 100px">
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
              See All</router-link
            >
          </div>
          <div class="col-8 d-flex justify-content-center">
            <span
              class="mx-2 radio-item radio-item-swiper"
              v-for="(element, index) in services"
              v-bind:key="index"
              ><input
                v-if="element != services.max_pages"
                type="radio"
                name="services"
                :id="'id2' + index"
                :value="index"
                :checked="index == 1 ? true : false"
                v-model="current_page_3"
                @click="slide(3)"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100dvw; background-color: #ffffff">
      <div class="special-realestates-companies pt-5">
        <p
          class="mt-5 text-start ms-5"
          style="font-size: 25px; font-weight: 600; margin-bottom: 100px"
        >
          Distinguished real estate companies
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <div
            class="container d-flex justify-content-center portfolio-details"
          >
            <section>
              <div class="portfolio-details-slider swiper">
                <div
                  class="swiper-wrapper align-items-center"
                  style="width: 1343px"
                >
                  <div
                    class="swiper-slide d-flex justify-content-center mixed-array-demo"
                  >
                    <div
                      class="parent"
                      style="
                        position: absolute;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        height: 198px;
                        right: 20px;
                      "
                    >
                      <button
                        type="button"
                        class="d-flex justify-content-center align-items-center"
                        style="
                          background-color: rgba(255, 255, 255, 0.86);
                          height: 50px;
                          width: 50px;
                          z-index: 2;
                          border-radius: 50%;
                          border: none;
                          -webkit-box-shadow: 0px 5px 4px 0px
                            rgba(0, 0, 0, 0.25);
                          -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                          box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        "
                        @click="swap_btn_back(4)"
                      >
                        <Icon
                          icon="ep:arrow-left-bold"
                          height="24"
                          width="24"
                          color="#E57C23"
                        />
                      </button>
                    </div>
                    <div class="d-flex el-04 mb-5" style="z-index: 1">
                      <CompaniesCard
                        v-for="company in Companies[current_page_4]"
                        v-bind:key="company.id"
                        :id="company.id"
                        :img1="company.img1"
                        :name="company.name"
                        :phone="company.phone"
                        :email="company.email"
                      ></CompaniesCard>
                    </div>
                    <div
                      class="parent"
                      style="
                        position: absolute;
                        display: flex;
                        justify-content: end;
                        align-items: center;
                        height: 198px;
                        width: 1343px;
                        left: 40px;
                      "
                    >
                      <button
                        type="button"
                        class="d-flex justify-content-center align-items-center"
                        style="
                          background-color: rgba(255, 255, 255, 0.86);
                          height: 50px;
                          width: 50px;
                          z-index: 2;
                          border-radius: 50%;
                          border: none;
                          -webkit-box-shadow: 0px 5px 4px 0px
                            rgba(0, 0, 0, 0.25);
                          -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                          box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        "
                        @click="swap_btn_for(4)"
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
              </div>
            </section>
          </div>
        </div>
        <div class="mb-5">
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
                See All</router-link
              >
            </div>
            <div
              class="col-8 d-flex justify-content-center"
              style="height: 80px"
            >
              <span
                class="mx-2 radio-item radio-item-swiper"
                v-for="(element, index) in Companies"
                v-bind:key="index"
                :id="
                  index == 2
                    ? 'id223'
                    : index == 1
                    ? 'id112'
                    : index == 3
                    ? 'id334'
                    : 'false'
                "
                ><input
                  v-if="element != Companies.max_pages"
                  type="radio"
                  name="distinguished-real-estate-companies"
                  :id="'id4' + index"
                  :value="index"
                  :checked="index == 1 ? true : false"
                  v-model="current_page_4"
                  @click="slide(4)"
              /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="special-real-estate-agents">
        <p
          class="mt-5 text-start ms-5"
          style="font-size: 25px; font-weight: 600; margin-bottom: 100px"
        >
          Distinguished real estate agents
        </p>
        <div class="d-flex justify-content-center align-items-center">
          <div
            class="container d-flex justify-content-center portfolio-details"
          >
            <section>
              <div class="portfolio-details-slider swiper">
                <div
                  class="swiper-wrapper align-items-center"
                  style="width: 1343px"
                >
                  <div
                    class="swiper-slide d-flex justify-content-center mixed-array-demo"
                  >
                    <div
                      class="parent"
                      style="
                        position: absolute;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        height: 198px;
                        right: 20px;
                      "
                    >
                      <button
                        type="button"
                        class="d-flex justify-content-center align-items-center"
                        style="
                          background-color: rgba(255, 255, 255, 0.86);
                          height: 50px;
                          width: 50px;
                          z-index: 2;
                          border-radius: 50%;
                          border: none;
                          -webkit-box-shadow: 0px 5px 4px 0px
                            rgba(0, 0, 0, 0.25);
                          -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                          box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        "
                        @click="swap_btn_back(5)"
                      >
                        <Icon
                          icon="ep:arrow-left-bold"
                          height="24"
                          width="24"
                          color="#E57C23"
                        />
                      </button>
                    </div>
                    <div class="d-flex el-05 mb-5" style="z-index: 1">
                      <CompaniesCard
                        v-for="agent in Agents[current_page_5]"
                        v-bind:key="agent.id"
                        :id="agent.id"
                        :img1="agent.img1"
                        :name="agent.name"
                        :phone="agent.phone"
                        :email="agent.email"
                      ></CompaniesCard>
                    </div>
                    <div
                      class="parent"
                      style="
                        position: absolute;
                        display: flex;
                        justify-content: end;
                        align-items: center;
                        height: 198px;
                        width: 1343px;
                        left: 40px;
                      "
                    >
                      <button
                        type="button"
                        class="d-flex justify-content-center align-items-center"
                        style="
                          background-color: rgba(255, 255, 255, 0.86);
                          height: 50px;
                          width: 50px;
                          z-index: 2;
                          border-radius: 50%;
                          border: none;
                          -webkit-box-shadow: 0px 5px 4px 0px
                            rgba(0, 0, 0, 0.25);
                          -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                          box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
                        "
                        @click="swap_btn_for(5)"
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
              </div>
            </section>
          </div>
        </div>
        <div class="mb-5">
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
                See All</router-link
              >
            </div>
            <div
              class="col-8 d-flex justify-content-center"
              style="height: 80px"
            >
              <span
                class="mx-2 radio-item radio-item-swiper"
                v-for="(element, index) in Agents"
                v-bind:key="index"
                :id="
                  index == 2
                    ? 'id224'
                    : index == 1
                    ? 'id113'
                    : index == 3
                    ? 'id335'
                    : 'false'
                "
                ><input
                  v-if="element != Agents.max_pages"
                  type="radio"
                  name="distinguished-real-estate-agents"
                  :id="'id5' + index"
                  :value="index"
                  :checked="index == 1 ? true : false"
                  v-model="current_page_5"
                  @click="slide(5)"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="if-you-want">
      <div class="row">
        <div class="col-md-1"></div>
        <div
          class="col-md-6 d-flex justify-content-center align-items-center"
          style="color: white; font-weight: 600"
        >
          <div class="d-block" style="left">
            <div
              class="text-start d-flex justify-content-center align-items-center"
              style="font-size: 45px; margin-bottom: 40px"
            >
              Do you want to sell or rent your property?
            </div>
            <div
              class="text-start d-flex justify-content-center align-items-center"
              style="font-size: 28px"
            >
              So, add your property now on our website with ease and benefit
              from a unique experience for selling and renting real estate in
              Iraq
            </div>
            <div
              class="text-start d-flex justify-content-center align-items-center"
              style="font-size: 28px; margin-left: 40px"
            >
              <router-link
                to="/"
                class="nav-special nav-btn d-flex justify-content-center align-items-center"
                style="width: 192px; text-decoration: none; margin-top: 80px"
                >Add your real estate</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <img src="../assets/images/Homepage/p1.png" />
        </div>
      </div>
    </div>
    <div class="download">
      <div class="row">
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <img src="../assets/images/Homepage/p3.png" alt="" />
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div class="d-block">
            <div
              class="text-center d-flex justify-content-center align-items-center"
              style="font-size: 45px; margin-bottom: 40px"
            >
              <span class="d-block">
                Discover the world of real estate with the
                <span style="color: #e57c23">Betoona app</span>
              </span>
            </div>
            <div
              class="text-center d-flex justify-content-center align-items-center"
              style="font-size: 28px"
            >
              The leading application specialized in selling and renting real
              estate in all cities of Iraq
            </div>
            <div
              class="text-center d-flex justify-content-center align-items-center"
            >
              <span
                style="
                  width: fit-content;
                  margin-top: 80px;
                  font-size: 30px;
                  font-weight: 900;
                  border-radius: 5px;
                "
              >
                Download it now</span
              >
            </div>
            <div
              class="d-flex justify-content-center align-items-center"
              style="font-size: 28px; margin-top: 30px"
            >
              <a
                href=""
                class="nav-special nav-btn d-flex justify-content-center align-items-center download"
                style="width: 192px; text-decoration: none; margin-right: 20px"
                ><img src="../assets/images/Homepage/p4.png" alt=""
              /></a>
              <a
                href=""
                class="nav-special nav-btn d-flex justify-content-center align-items-center download"
                style="width: 192px; text-decoration: none; margin-left: 20px"
                ><img src="../assets/images/Homepage/p5.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import anime from "animejs";
import RealestateCard from "@/components/RealestateCard.vue";
import SpecialcitiesCard from "@/components/SpecialcitiesCard.vue";
import ServicesCard from "@/components/ServicesCard.vue";
import CompaniesCard from "@/components/CompaniesCard.vue";

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
      choosen_type: [],
      types: {
        1: {
          1: {
            id: 1,
            name: "Agricultural Land",
            icon: "mdi:beach",
            color: "black",
          },
          2: {
            id: 2,
            name: "Agricultural House",
            icon: "simple-icons:homeassistant",
            color: "black",
          },
          3: {
            id: 3,
            name: "Farm",
            icon: "game-icons:ground-sprout",
            color: "black",
          },
        },
        2: {
          1: {
            id: 1,
            name: "Office",
            icon: "ph:office-chair-fill",
          },
          2: {
            id: 2,
            name: "Hotel",
            icon: "ri:hotel-line",
          },
          3: {
            id: 3,
            name: "Commercial appartment",
            icon: "ic:baseline-apartment",
          },
          4: {
            id: 4,
            name: "Commercial land",
            icon: "emojione-monotone:umbrella-on-ground",
          },
          5: {
            id: 5,
            name: "Commercial house",
            icon: "game-icons:house",
          },
          6: {
            id: 6,
            name: "Commercial building",
            icon: "fa6-solid:building",
          },
          7: {
            id: 7,
            name: "Commercial warehouse",
            icon: "nimbus:store",
          },
          8: {
            id: 8,
            name: "Commercial Shop",
            icon: "solar:shop-2-bold",
          },
          9: {
            id: 9,
            name: "Commercial Floor",
            icon: "mdi:floor-plan",
          },
        },
        3: {
          1: {
            id: 1,
            name: "Villa",
            icon: "material-symbols:villa-rounded",
          },
          2: {
            id: 2,
            name: "Home",
            icon: "ic:round-house",
          },
          3: {
            id: 3,
            name: "Appartment",
            icon: "fluent-emoji-high-contrast:department-store",
          },
          4: {
            id: 4,
            name: "Residential land",
            icon: "maki:residential-community",
          },
        },
      },
      page: 1,
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
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
            beedrooms: "4",
            bathrooms: "2",
            src: require("../assets/images/Exterior flat/Exterior.jpg"),
            logo: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
          },
        },
        max_pages: 3,
      },
      special_citys: {
        1: {
          1: {
            id: 1,
            name: "Baghdad",
            real_estates: "398",
            src: require("../assets/images/Citys/ezgif.com-webp-to-jpg.jpg"),
          },
          2: {
            id: 2,
            name: "Arbeel",
            real_estates: "1,287",
            src: require("../assets/images/Citys/Arbeel.jpg"),
          },
          3: {
            id: 3,
            name: "Albosra",
            real_estates: "1.539",
            src: require("../assets/images/Citys/124081.jpg"),
          },
          4: {
            id: 4,
            name: "Alsulaimanieh",
            real_estates: "398",
            src: require("../assets/images/Citys/Alsulaimanieh.jpg"),
          },
        },
        2: {
          5: {
            id: 5,
            name: "Duhok",
            real_estates: "398",
            src: require("../assets/images/Citys/Duhok.jpg"),
          },
          6: {
            id: 6,
            name: "Mosul",
            real_estates: "1.287",
            src: require("../assets/images/Citys/Mosul.jpg"),
          },
          7: {
            id: 7,
            name: "Najaf",
            real_estates: "25.3",
            src: require("../assets/images/Citys/Najaf.jpg"),
          },
          8: {
            id: 8,
            name: "Karbala",
            real_estates: "1.359",
            src: require("../assets/images/Citys/Karbala.jpg"),
          },
        },
        max_pages: 2,
      },
      services: {
        1: {
          1: {
            id: 1,
            name: "Transportation services",
            src: require("../assets/images/Services/Transportation services.jpg"),
          },
          2: {
            id: 2,
            name: "Air conditioning system",
            src: require("../assets/images/Services/Air conditioning system.jpg"),
          },
          3: {
            id: 3,
            name: "Cleaning services",
            src: require("../assets/images/Services/Cleaning services.jpg"),
          },
          4: {
            id: 4,
            name: "Lawyers",
            src: require("../assets/images/Services/Lawyers.png"),
          },
        },
        2: {
          5: {
            id: 5,
            name: "Contracting",
            src: require("../assets/images/Services/Contracting.jpg"),
          },
          6: {
            id: 6,
            name: "Plumbing",
            src: require("../assets/images/Services/plumbing.jpg"),
          },
          7: {
            id: 7,
            name: "Construction workers",
            src: require("../assets/images/Services/construction workers.jpg"),
          },
          8: {
            id: 8,
            name: "Security services",
            src: require("../assets/images/Services/Security services.jpg"),
          },
        },
        max_pages: 2,
      },
      Companies: {
        1: {
          1: {
            id: 1,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 1",
            phone: "+966456789789",
            email: "test@test.com",
          },
          2: {
            id: 2,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 2",
            phone: "+966456789789",
            email: "test@test.com",
          },
          3: {
            id: 3,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 3",
            phone: "+966456789789",
            email: "test@test.com",
          },
          4: {
            id: 4,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 4",
            phone: "+966456789789",
            email: "test@test.com",
          },
        },
        2: {
          5: {
            id: 5,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 5",
            phone: "+966456789789",
            email: "test@test.com",
          },
          6: {
            id: 6,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 6",
            phone: "+966456789789",
            email: "test@test.com",
          },
          7: {
            id: 7,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 7",
            phone: "+966456789789",
            email: "test@test.com",
          },
          8: {
            id: 8,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 8",
            phone: "+966456789789",
            email: "test@test.com",
          },
        },
        3: {
          9: {
            id: 9,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 9",
            phone: "+966456789789",
            email: "test@test.com",
          },
          10: {
            id: 10,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 10",
            phone: "+966456789789",
            email: "test@test.com",
          },
          11: {
            id: 11,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 11",
            phone: "+966456789789",
            email: "test@test.com",
          },
          12: {
            id: 12,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 12",
            phone: "+966456789789",
            email: "test@test.com",
          },
        },
        max_pages: 3,
      },
      Agents: {
        1: {
          1: {
            id: 1,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 1",
            phone: "+966456789789",
            email: "test@test.com",
          },
          2: {
            id: 2,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 2",
            phone: "+966456789789",
            email: "test@test.com",
          },
          3: {
            id: 3,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 3",
            phone: "+966456789789",
            email: "test@test.com",
          },
          4: {
            id: 4,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 4",
            phone: "+966456789789",
            email: "test@test.com",
          },
        },
        2: {
          5: {
            id: 5,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 5",
            phone: "+966456789789",
            email: "test@test.com",
          },
          6: {
            id: 6,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 6",
            phone: "+966456789789",
            email: "test@test.com",
          },
          7: {
            id: 7,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 7",
            phone: "+966456789789",
            email: "test@test.com",
          },
          8: {
            id: 8,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 8",
            phone: "+966456789789",
            email: "test@test.com",
          },
        },
        3: {
          9: {
            id: 9,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 9",
            phone: "+966456789789",
            email: "test@test.com",
          },
          10: {
            id: 10,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 10",
            phone: "+966456789789",
            email: "test@test.com",
          },
          11: {
            id: 11,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 11",
            phone: "+966456789789",
            email: "test@test.com",
          },
          12: {
            id: 12,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 12",
            phone: "+966456789789",
            email: "test@test.com",
          },
        },
        max_pages: 3,
      },
      current_page: 1,
      current_page_2: 1,
      current_page_3: 1,
      current_page_4: 1,
      current_page_5: 1,
    };
  },
  components: {
    Icon,
    RealestateCard,
    SpecialcitiesCard,
    ServicesCard,
    CompaniesCard,
  },
  methods: {
    choose_type(id, name) {
      const index = this.choosen_type.findIndex((med) => med.name === name);
      if (index > -1) {
        this.choosen_type.splice(index, 1);
        this.types[this.page][id].color = "black";
      } else {
        this.choosen_type.push({ name });
        this.types[this.page][id].color = "#e57c23";
      }
    },
    swap_btn_for(id) {
      if (id == 1) {
        if (this.current_page_2 == this.special_citys.max_pages) {
          this.current_page_2 = 1;
          const ele = document.getElementById("id" + this.current_page_2);
          const ele2 = document.getElementById(
            "id" + this.special_citys.max_pages
          );
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(2);
        } else {
          const ele2 = document.getElementById(
            "id" + this.special_citys.max_pages
          );
          this.current_page_2++;
          const ele = document.getElementById("id" + this.current_page_2);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(2);
        }
      } else if (id == 2) {
        if (this.current_page_3 == this.services.max_pages) {
          this.current_page_3 = 1;
          const ele = document.getElementById("id2" + this.current_page_3);
          const ele2 = document.getElementById("id2" + this.services.max_pages);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(3);
        } else {
          const ele2 = document.getElementById("id2" + this.services.max_pages);
          this.current_page_3++;
          const ele = document.getElementById("id2" + this.current_page_3);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(3);
        }
      } else if (id == 3) {
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
      } else if (id == 4) {
        if (this.current_page_4 == this.Companies.max_pages) {
          this.current_page_4 = 1;
          const ele = document.getElementById("id4" + this.current_page_4);
          const ele2 = document.getElementById(
            "id4" + this.Companies.max_pages
          );
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(4);
        } else {
          const ele2 = document.getElementById(
            "id4" + this.Companies.max_pages
          );
          this.current_page_4++;
          const ele = document.getElementById("id4" + this.current_page_4);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(4);
        }
      } else if (id == 5) {
        if (this.current_page_5 == this.Agents.max_pages) {
          this.current_page_5 = 1;
          const ele = document.getElementById("id5" + this.current_page_5);
          const ele2 = document.getElementById("id5" + this.Agents.max_pages);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(5);
        } else {
          const ele2 = document.getElementById("id5" + this.Agents.max_pages);
          this.current_page_5++;
          const ele = document.getElementById("id5" + this.current_page_5);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(5);
        }
      }
    },
    swap_btn_back(id) {
      if (id == 1) {
        if (this.current_page_2 == 1) {
          this.current_page_2 = this.special_citys.max_pages;
          const ele = document.getElementById("id" + this.current_page_2);
          const ele2 = document.getElementById("id" + 1);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(2);
        } else {
          const ele2 = document.getElementById(
            "id" + this.special_citys.max_pages
          );
          this.current_page_2--;
          const ele = document.getElementById("id" + this.current_page_2);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(2);
        }
      } else if (id == 2) {
        if (this.current_page_3 == 1) {
          this.current_page_3 = this.services.max_pages;
          const ele = document.getElementById("id2" + this.current_page_3);
          const ele2 = document.getElementById("id2" + 1);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(3);
        } else {
          const ele2 = document.getElementById("id2" + this.services.max_pages);
          this.current_page_3--;
          const ele = document.getElementById("id2" + this.current_page_3);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(3);
        }
      } else if (id == 3) {
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
      } else if (id == 4) {
        if (this.current_page_4 == 1) {
          this.current_page_4 = this.Companies.max_pages;
          const ele = document.getElementById("id4" + this.current_page_4);
          const ele2 = document.getElementById("id4" + 1);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(4);
        } else {
          const ele2 = document.getElementById(
            "id4" + this.Companies.max_pages
          );
          this.current_page_4--;
          const ele = document.getElementById("id4" + this.current_page_4);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(4);
        }
      } else if (id == 5) {
        if (this.current_page_5 == 1) {
          this.current_page_5 = this.Agents.max_pages;
          const ele = document.getElementById("id5" + this.current_page_5);
          const ele2 = document.getElementById("id5" + 1);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(5);
        } else {
          const ele2 = document.getElementById("id5" + this.Agents.max_pages);
          this.current_page_5--;
          const ele = document.getElementById("id5" + this.current_page_5);
          ele.setAttribute("checked", true);
          ele2.removeAttribute("checked");
          this.slide(5);
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
      } else if (id == 2) {
        var el2 = document.querySelector(".mixed-array-demo  .el-02");

        anime({
          targets: [
            el2,
            ".mixed-array-demo  .el-02",
            ".mixed-array-demo  .el-02",
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
      } else if (id == 3) {
        var el3 = document.querySelector(".mixed-array-demo  .el-03");

        anime({
          targets: [
            el3,
            ".mixed-array-demo  .el-03",
            ".mixed-array-demo  .el-03",
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
      } else if (id == 4) {
        var el4 = document.querySelector(".mixed-array-demo  .el-04");

        anime({
          targets: [
            el4,
            ".mixed-array-demo  .el-04",
            ".mixed-array-demo  .el-04",
          ],
          keyframes: [
            { translateX: "-200%" },
            { translateY: "-2300%" },
            { translateX: "200%" },
            { translateY: "0%" },
            { translateX: "0%" },
          ],
          duration: 1000,
          easing: "easeInOutQuad",
        });
      } else if (id == 5) {
        var el5 = document.querySelector(".mixed-array-demo  .el-05");

        anime({
          targets: [
            el5,
            ".mixed-array-demo  .el-05",
            ".mixed-array-demo  .el-05",
          ],
          keyframes: [
            { translateX: "-200%" },
            { translateY: "-2300%" },
            { translateX: "200%" },
            { translateY: "0%" },
            { translateX: "0%" },
          ],
          duration: 1000,
          easing: "easeInOutQuad",
        });
      }
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
          this.page = x;
          this.color1 = "#e57c23";
          this.color2 = "black";
          this.color3 = "black";
          break;
        case 2:
          this.page = x;
          this.color1 = "black";
          this.color2 = "#e57c23";
          this.color3 = "black";
          break;
        case 3:
          this.page = x;
          this.color1 = "black";
          this.color2 = "black";
          this.color3 = "#e57c23";
          break;
      }
    },
  },
  mounted() {
    // 1
    var element = document.getElementById("id222");
    element.style.marginTop = "30px";
    // 2
    element = document.getElementById("id111");
    element.style.marginTop = "-15px";
    // 3
    element = document.getElementById("id333");
    element.style.marginTop = "-15px";
    // 4
    element = document.getElementById("id223");
    element.style.marginTop = "30px";
    // 5
    element = document.getElementById("id112");
    element.style.marginTop = "-15px";
    // 6
    element = document.getElementById("id334");
    element.style.marginTop = "-15px";
    // 7
    element = document.getElementById("id224");
    element.style.marginTop = "30px";
    // 8
    element = document.getElementById("id113");
    element.style.marginTop = "-15px";
    // 9
    element = document.getElementById("id335");
    element.style.marginTop = "-15px";
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

.if-you-want {
  height: 100%;
  width: 100%;
  background-image: url(../assets/images/Homepage/p22.png);
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

.radio-item-swiper input[type="radio"]:before {
  position: relative;
  margin: 4px -25px -4px 0;
  display: inline-block;
  visibility: visible;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #cccccc;
  content: "";
}

.radio-item-swiper input[type="radio"]:checked:after {
  position: relative;
  top: 5px;
  left: 5px;
  display: inline-block;
  visibility: visible;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: #e57c23;
  content: "";
}

.parent {
  width: 1343px;
}

.child {
  width: 303px;
}

@media screen and (max-width: 700px) {
  .price-drop {
    width: 300px;
  }
}

.download {
  -webkit-box-shadow: 0px 10px 21px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 10px 21px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 10px 21px 0px rgba(0, 0, 0, 0.25);
}
</style>
