<template>
  <div class="services-view">
    <div class="cover">
      <div
        class="card d-flex justify-content-center align-items-center"
        style="background-color: unset; border: none; height: 300px"
      >
        <div class="title">
          <div class="d-block">
            <div class="d-flex justify-content-center align-items-center">
              <h1>Best Services</h1>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <h3>
                Find exclusive and distinctive services provided by the best
                experts from our main website
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container w-100 d-flex justify-content-center align-items-center"
    >
      <div class="card shadow card-absolute">
        <div class="row d-flex justify-content-center align-items-center">
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
    </div>
    <div
      class="row w-100 mt-5 p-5 d-flex justify-content-start align-items-center"
    >
      <div class="col-3" v-for="service in services" :key="service.id">
        <ServicesCard
          :id="service.id"
          :name="service.name"
          :src="service.img"
        ></ServicesCard>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import CitySearch from "@/components/CitySearch.vue";
import ServiceCategorysearch from "@/components/ServiceCategorysearch.vue";
import ServicesCard from "@/components/ServicesCard.vue";
export default {
  name: "services-view",
  data() {
    return {
      services: {
        1: {
          id: 1,
          name: "Waste removal",
          img: require("@/assets/images/Services/Waste removal.jpg"),
        },
        2: {
          id: 2,
          name: "Transportation services",
          img: require("@/assets/images/Services/Transportation services.jpg"),
        },
        3: {
          id: 3,
          name: "Security services",
          img: require("@/assets/images/Services/Security services.jpg"),
        },
        4: {
          id: 4,
          name: "Plumbing",
          img: require("@/assets/images/Services/plumbing.jpg"),
        },
        5: {
          id: 5,
          name: "Painters",
          img: require("@/assets/images/Services/Painters.jpg"),
        },
        6: {
          id: 6,
          name: "Blacksmith",
          img: require("@/assets/images/Services/Blacksmith.jpg"),
        },
        7: {
          id: 7,
          name: "Lawyers",
          img: require("@/assets/images/Services/Lawyers.png"),
        },
        8: {
          id: 8,
          name: "Kitchen design",
          img: require("@/assets/images/Services/Kitchen design.jpg"),
        },
        9: {
          id: 9,
          name: "Internet services",
          img: require("@/assets/images/Services/Internet services.jpg"),
        },
        10: {
          id: 10,
          name: "Interior designs",
          img: require("@/assets/images/Services/Interior designs.jpg"),
        },
        11: {
          id: 11,
          name: "Garden cleaning",
          img: require("@/assets/images/Services/Garden cleaning.jpg"),
        },
        12: {
          id: 12,
          name: "Exterior designs",
          img: require("@/assets/images/Services/Exterior designs.jpg"),
        },
        13: {
          id: 13,
          name: "Contracting",
          img: require("@/assets/images/Services/Contracting.jpg"),
        },
        14: {
          id: 14,
          name: "Construction workers",
          img: require("@/assets/images/Services/construction workers.jpg"),
        },
        15: {
          id: 15,
          name: "Cleaning services",
          img: require("@/assets/images/Services/Cleaning services.jpg"),
        },
        16: {
          id: 16,
          name: "Carpentry",
          img: require("@/assets/images/Services/Carpentry.jpg"),
        },
        17: {
          id: 17,
          name: "Building engineers",
          img: require("@/assets/images/Services/Building engineers.jpg"),
        },
        18: {
          id: 18,
          name: "Air conditioning system",
          img: require("@/assets/images/Services/Air conditioning system.jpg"),
        },
      },
    };
  },
  components: {
    Icon,
    CitySearch,
    ServiceCategorysearch,
    ServicesCard,
  },
};
</script>

<style scoped>
.title {
  color: white;
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
.cover {
  height: 300px;
  width: 100%;
  background-image: url("../assets/images/Services/Services2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-absolute {
  position: absolute;
  width: 1000px;
  border: 1px solid #e57c23;
}
.shadow {
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
