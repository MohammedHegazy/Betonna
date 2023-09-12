<template>
  <div class="service-companies">
    <div
      class="container shadow w-100 d-flex justify-content-center align-items-center mt-5"
      style="background-color: white; border-radius: 5px"
      ref="target2"
    >
      <div class="row d-flex justify-content-center align-items-center w-100">
        <div class="col-2 d-flex justify-content-center align-items-center">
          <button type="button" class="place">
            <Icon
              icon="material-symbols:location-on-rounded"
              color="black"
            />Iraq
          </button>
        </div>
        <div class="col-2 dropdown">
          <CitySearch></CitySearch>
        </div>
        <div class="col-2 dropdown dr2">
          <ServiceCategorysearch></ServiceCategorysearch>
        </div>
        <div class="col-2"></div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <button type="button" class="search">Search</button>
        </div>
      </div>
    </div>
    <div class="row w-100 mt-5 p-5">
      <div class="col-12 text-start ms-5" v-if="location == null">
        <h4>Companies ({{ companies_num }})</h4>
      </div>
      <div class="col-12 text-start ms-5" v-else>
        <h4>Companies in {{ location }} is ({{ companies_num }})</h4>
      </div>
      <div
        class="col-3 mt-3"
        v-for="ser_company in ser_companies[current_page]"
        :key="ser_company.id"
      >
        <ServicecompanyCard
          :id="ser_company.id"
          :name="ser_company.name"
          :location="ser_company.address"
          :service="ser_company.service"
          :src="ser_company.img"
          :fav="ser_company.fav"
          :phone="ser_company.phone"
          :email="ser_company.email"
          :whatsapp="ser_company.whatsapp"
        ></ServicecompanyCard>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div
          class="container pagi d-flex justify-contnet-center align-items-center mb-5"
        >
          <div class="mx-3">
            <button
              type="button"
              class="left-arrow"
              @click="
                if (current_page == 1) {
                  current_page = ser_companies.max_pages;
                } else {
                  current_page--;
                }
                scrollToElement();
              "
            >
              <Icon icon="material-symbols:arrow-forward-ios-rounded" />
            </button>
          </div>
          <span
            class="mx-3 d-flex justify-content-center align-items-center"
            v-for="(element, index) in ser_companies"
            v-bind:key="index"
          >
            <button
              v-if="element != ser_companies.max_pages"
              type="button"
              class="page_number"
              :style="{
                backgroundColor: current_page == index ? '#e57c23' : 'white',
              }"
              @click="
                current_page = index;
                scrollToElement();
              "
            >
              {{ index }}
            </button>
          </span>
          <div class="mx-3">
            <button
              type="button"
              class="right-arrow"
              @click="
                if (current_page == ser_companies.max_pages) {
                  current_page = 1;
                } else {
                  current_page++;
                }
                scrollToElement();
              "
            >
              <Icon icon="material-symbols:arrow-forward-ios-rounded" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import CitySearch from "@/components/CitySearch.vue";
import ServiceCategorysearch from "@/components/ServiceCategorysearch.vue";
import ServicecompanyCard from "@/components/ServicecompanyCard.vue";
export default {
  name: "services-view",
  data() {
    return {
      location: null,
      companies_num: 4,
      ser_companies: {
        1: {
          1: {
            id: 1,
            name: "AlNour Company",
            address: "Iraq,Arbeel",
            service: "Transportaion service",
            email: "test@test.com",
            phone: "+963933097404",
            whatsapp: "+963933097404",
            img: require("@/assets/images/Services/company2.jpg"),
            fav: 0,
          },
          2: {
            id: 2,
            name: "AlHouda Company",
            address: "Iraq,Arbeel",
            service: "Transportaion service",
            email: "test@test.com",
            phone: "+963933097404",
            whatsapp: "+963933097404",
            img: require("@/assets/images/Services/company2.jpg"),
            fav: 1,
          },
        },
        2: {
          3: {
            id: 3,
            name: "RahetAlbal Company",
            address: "Iraq,Arbeel",
            service: "Transportaion service",
            email: "test@test.com",
            phone: "+963933097404",
            whatsapp: "+963933097404",
            img: require("@/assets/images/Services/company2.jpg"),
            fav: 0,
          },
          4: {
            id: 4,
            name: "AlTaqua Company",
            address: "Iraq,Arbeel",
            service: "Transportaion service",
            email: "test@test.com",
            phone: "+963933097404",
            whatsapp: "+963933097404",
            img: require("@/assets/images/Services/company2.jpg"),
            fav: 0,
          },
        },
        max_pages: 2,
      },
      current_page: 1,
    };
  },
  components: {
    Icon,
    CitySearch,
    ServiceCategorysearch,
    ServicecompanyCard,
  },
  methods: {
    scrollToElement() {
      this.$refs.target2.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.pagi {
  background-color: white;
  height: 64px;
  width: max-content;
  border: none;
  border-radius: 15px;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
.left-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  font-size: 24px;
  transform: scaleX(-1);
}
.right-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  font-size: 24px;
}

.page_number {
  border-radius: 3px;
  border: none;
  font-size: 18px;
}
.search {
  width: 121px;
  height: 54px;
  border: none;
  border-radius: 25px;
  background-color: #e57c23;
  color: white;
  font-size: 17px;
}
.dropdown {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 56px;
  margin: 20px 10px 20px 10px;
  font-size: 15px;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.75);
}
.dr2 {
  width: 250px;
}
.place {
  pointer-events: none;
  border: 0.5px solid #e57c23;
  border-radius: 15px;
  background-color: white;
  color: black;
  font-size: 20px;
  height: 55px;
  width: 100px;
}
.shadow {
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
