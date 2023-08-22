<template>
  <div class="place-search">
    <button
      class="form-home1 form-home2"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="changic1(3)"
      @blur="changic1(3)"
    >
      <Icon
        icon="zondicons:location"
        color="#585858"
        :height="page_type == 'home' ? '25px' : ''"
        :width="page_type == 'home' ? '25px' : ''"
      />
      {{ place }}
      <Icon
        :icon="icon3"
        color="#585858"
        :height="page_type == 'home' ? '25px' : ''"
        :width="page_type == 'home' ? '25px' : ''"
      />
    </button>
    <ul class="dropdown-menu">
      <div v-for="place in places" v-bind:key="place.id">
        <li class="d-flex justify-content-center">
          <button
            type="button"
            class="city-btn"
            :id="place.id"
            :style="{
              color: place.id === place_id ? '#e57c23' : 'black',
            }"
            @click="changeplace(place.name, place.id)"
          >
            {{ place.name }}
          </button>
        </li>
        <li><hr class="dropdown-divider" /></li>
      </div>
    </ul>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "place-search",
  data() {
    return {
      icon3: "fe:arrow-down",
      place: "Place",
      place_id: null,
      places: {
        1: { id: 1, name: "Al-Jomhoria" },
        2: { id: 2, name: "AL-Kalaa" },
        3: { id: 3, name: "Kadaa Alhoaijeh" },
        4: { id: 4, name: "Karmee Ali" },
      },
    };
  },
  props: {
    page_type: String,
  },
  components: {
    Icon,
  },
  methods: {
    changic1(x) {
      switch (x) {
        case 3:
          if (this.icon3 == "fe:arrow-down") {
            this.icon3 = "fe:arrow-up";
          } else {
            this.icon3 = "fe:arrow-down";
          }
          break;
      }
    },
    changeplace(x, id) {
      this.place = x;
      this.place_id = id;
    },
  },
};
</script>
