<template>
  <div class="realestates-search">
    <form>
      <div class="row my-5 d-flex justify-content-center align-items-center">
        <div class="col-1 ms-4 me-5">
          <button type="button" class="place">
            <Icon
              icon="material-symbols:location-on-rounded"
              color="black"
            />Iraq
          </button>
        </div>
        <div class="col-10 search-line">
          <div
            class="container d-flex justify-content-center align-items-center"
          >
            <div class="dropdown mx-2" style="width: 120px">
              <button
                class="form-home1 form-home2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="changic1(2)"
                @blur="changic1(2)"
              >
                {{ search_type }}
                <Icon :icon="icon2" color="#585858" width="25" height="25" />
              </button>
              <ul class="dropdown-menu">
                <li class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="city-btn"
                    @click="
                      search_type = 'Sell';
                      changecolortype(1);
                    "
                    :style="{ color: search_type_color1 }"
                  >
                    Sell
                  </button>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="city-btn"
                    @click="
                      search_type = 'Rent';
                      changecolortype(2);
                    "
                    :style="{ color: search_type_color2 }"
                  >
                    Rent
                  </button>
                </li>
                <li><hr class="dropdown-divider" /></li>
              </ul>
            </div>
            <div class="dropdown mx-2">
              <CitySearch></CitySearch>
            </div>
            <div class="dropdown mx-2">
              <PlaceSearch></PlaceSearch>
            </div>
            <div class="dropdown mx-2" style="width: 160px">
              <TypesComponent></TypesComponent>
            </div>
            <div class="dropdown mx-2" style="width: 160px">
              <PriceSearch></PriceSearch>
            </div>
            <div class="d-flex justify-content-center align-items-center mx-2">
              <button type="button" class="search">Search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import TypesComponent from "./TypesComponent.vue";
import CitySearch from "./CitySearch.vue";
import PlaceSearch from "./PlaceSearch.vue";
import PriceSearch from "./PriceSearch.vue";
export default {
  name: "realestates-search",
  data() {
    return {
      icon2: "fe:arrow-down",
      search_type: "sell",
      search_type_color1: "#E57C23",
      search_type_color2: "#000000",
    };
  },
  components: {
    Icon,
    TypesComponent,
    CitySearch,
    PlaceSearch,
    PriceSearch,
  },
  methods: {
    changic1(x) {
      switch (x) {
        case 2:
          if (this.icon2 == "fe:arrow-down") {
            this.icon2 = "fe:arrow-up";
          } else {
            this.icon2 = "fe:arrow-down";
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
    changecolortype(x) {
      if (x == 1) {
        this.search_type_color1 = "#E57C23";
        this.search_type_color2 = "#000000";
      } else {
        this.search_type_color1 = "#000000";
        this.search_type_color2 = "#E57C23";
      }
    },
  },
};
</script>

<style lang="css" scoped>
.place {
  pointer-events: none;
  border: 0.5px solid #e57c23;
  border-radius: 15px;
  background-color: white;
  color: black;
  font-size: 24px;
  height: 85px;
  width: 140px;
}

.search {
  width: 121px;
  height: 54px;
  border: none;
  border-radius: 25px;
  background-color: #e57c23;
  color: white;
  font-size: 24px;
}
.dropdown {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 56px;
  font-size: 15px;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
}

.container {
  background-color: white;
  width: fit-content;
  height: 100px;
  border: 1px solid rgba(229, 124, 35, 0.3);
  border-radius: 15px;
}
</style>
