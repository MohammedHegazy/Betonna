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
            <h4 style="width: 70%; font-weight: 800">
              "Welcome in Betonna, the ideal destination for selling and renting
              real estate in Iraq. Explore our wide range of diverse options and
              get a chance to find your dream home. We are here to fulfill your
              real estate desires."
            </h4>
          </div>
        </div>
        <form>
          <div class="row text-start my-3">
            <div class="col-md-2 col-sm-3 col-6">
              <span class="mx-2 radio-item"
                ><input
                  class=""
                  type="radio"
                  id="sell"
                  name="sell_rent"
                  checked
                />
                <label class="form-check-label" for=""> Sell </label></span
              >
            </div>
            <div class="col-md-2 col-sm-3 col-6">
              <span class="mx-2 radio-item"
                ><input class="" type="radio" id="rent" name="sell_rent" />
                <label class="form-check-label" for=""> rent </label></span
              >
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-md-6">
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
            <div class="col-xl-3 col-md-6">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(1)"
                >
                  <Icon
                    icon="zondicons:location"
                    color="#585858"
                    width="25"
                    height="25"
                  />
                  City
                  <Icon :icon="icon1" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu">
                  <li @click="currency = '$USD'">
                    <a class="dropdown-item" href="#">$USD</a>
                  </li>
                  <li @click="currency = 'IQD'">
                    <a class="dropdown-item" href="#">IQD</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-2 col-md-4">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(2)"
                >
                  <Icon
                    icon="zondicons:location"
                    color="#585858"
                    width="25"
                    height="25"
                  />
                  Place
                  <Icon :icon="icon2" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu">
                  <li @click="currency = '$USD'">
                    <a class="dropdown-item" href="#">$USD</a>
                  </li>
                  <li @click="currency = 'IQD'">
                    <a class="dropdown-item" href="#">IQD</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-md-4">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(3)"
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
                <ul class="dropdown-menu">
                  <li @click="currency = '$USD'">
                    <a class="dropdown-item" href="#">$USD</a>
                  </li>
                  <li @click="currency = 'IQD'">
                    <a class="dropdown-item" href="#">IQD</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-md-4">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(4)"
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
                    <form>
                      <div class="row">
                        <div class="col-6">Minimum</div>
                        <div class="col-6">Maximum</div>
                        <div class="col-5">
                          <input type="text" class="list-inp" /><Icon
                            icon="mdi:dollar"
                            color="rgb(0, 0, 0)"
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
                        <div class="col-5">
                          <input type="text" class="list-inp" /><Icon
                            icon="mdi:dollar"
                            color="rgb(0, 0, 0)"
                            style="
                              margin-left: -30px;
                              z-index: 2;
                              pointer-events: none;
                            "
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-2 col-md-4">
              <div class="dropdown">
                <button
                  class="form-home1 form-home2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="changic1(5)"
                >
                  More options
                  <Icon :icon="icon5" color="#585858" width="25" height="25" />
                </button>
                <ul class="dropdown-menu">
                  <li @click="currency = '$USD'">
                    <a class="dropdown-item" href="#">$USD</a>
                  </li>
                  <li @click="currency = 'IQD'">
                    <a class="dropdown-item" href="#">IQD</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-md-8">
              <button class="home-btn">SEARCH</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "HomeView",
  data() {
    return {
      icon1: "fe:arrow-down",
      icon2: "fe:arrow-down",
      icon3: "fe:arrow-down",
      icon4: "fe:arrow-down",
      icon5: "ph:dots-three-vertical-bold",
    };
  },
  components: {
    Icon,
  },
  methods: {
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
  },
};
</script>

<style>
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
  border-radius: 10px;
  background-color: #d1d1d1;
  border: none;
  padding-left: 10px;
}

.price-drop {
  width: 400px;
}

@media screen and (max-width: 700px) {
  .price-drop {
    width: 300px;
  }
}
</style>
