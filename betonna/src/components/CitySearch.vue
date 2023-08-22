<template>
  <div class="city-search">
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
          :height="page_type == 'home' ? '25px' : ''"
          :width="page_type == 'home' ? '25px' : ''"
        />
        {{ city }}
        <Icon
          :icon="icon1"
          color="#585858"
          :height="page_type == 'home' ? '25px' : ''"
          :width="page_type == 'home' ? '25px' : ''"
        />
      </button>
      <ul class="dropdown-menu">
        <div v-for="city in citys" v-bind:key="city.id">
          <li class="d-flex justify-content-center">
            <button
              type="button"
              class="city-btn"
              :id="city.id"
              :style="{
                color: city.id === city_id ? '#e57c23' : 'black',
              }"
              @click="changecity(city.name, city.id)"
            >
              {{ city.name }}
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
  name: "city-search",
  data() {
    return {
      icon1: "fe:arrow-down",
      city: "City",
      city_id: null,
      citys: {
        1: { id: 1, name: "Baghdad" },
        2: { id: 2, name: "Arbeel" },
        3: { id: 3, name: "Albosra" },
        4: { id: 4, name: "Alsulaimanieh" },
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
      this.city = x;
      this.city_id = id;
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
