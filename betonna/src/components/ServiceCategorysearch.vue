<template>
  <div class="service-categorysearch">
    <div class="dropdown" style="border-radius: 5px">
      <button
        class="form-home1 form-home2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        @click="changic1(1)"
        @blur="changic1(1)"
      >
        <Icon
          icon="bxs:category"
          color="#585858"
          :height="page_type == 'home' ? '25px' : ''"
          :width="page_type == 'home' ? '25px' : ''"
        />
        {{ category }}
        <Icon
          :icon="icon1"
          color="#585858"
          :height="page_type == 'home' ? '25px' : ''"
          :width="page_type == 'home' ? '25px' : ''"
        />
      </button>
      <ul class="dropdown-menu">
        <div v-for="category in categorys" v-bind:key="category.id">
          <li class="d-flex justify-content-center">
            <button
              type="button"
              class="city-btn"
              :id="category.id"
              :style="{
                color: category.id === category_id ? '#e57c23' : 'black',
              }"
              @click="changecity(category.name, category.id)"
            >
              {{ category.name }}
            </button>
          </li>
          <li><hr class="dropdown-divider" /></li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "service-categorysearch",
  data() {
    return {
      icon1: "fe:arrow-down",
      category: "Category",
      category_id: null,
      categorys: {
        1: { id: 1, name: "Waste removal" },
        2: { id: 2, name: "Transportation services" },
        3: { id: 3, name: "Security services" },
        4: { id: 4, name: "plumbing" },
        5: { id: 5, name: "Painters" },
        6: { id: 6, name: "Blacksmith" },
        7: { id: 7, name: "Lawyers" },
        8: { id: 8, name: "Kitchen design" },
        9: { id: 9, name: "Internet services" },
        10: { id: 10, name: "Interior designs" },
        11: { id: 11, name: "Garden cleaning" },
        12: { id: 12, name: "Exterior designs" },
        13: { id: 13, name: "Contracting" },
        14: { id: 14, name: "Construction workers" },
        15: { id: 15, name: "Cleaning services" },
        16: { id: 16, name: "Carpentry" },
        17: { id: 17, name: "Building engineers" },
        18: { id: 18, name: "Air conditioning system" },
      },
    };
  },
  components: {
    Icon,
  },
  props: {
    page_type: String,
  },
  methods: {
    changecity(x, id) {
      this.category = x;
      this.category_id = id;
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
      }
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 200px;
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
.shadow {
  -webkit-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
