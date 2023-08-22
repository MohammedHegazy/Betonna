<template>
  <div class="price-search">
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
        :height="page_type == 'home' ? '25px' : ''"
        :width="page_type == 'home' ? '25px' : ''"
      />
      Price
      <Icon
        :icon="icon4"
        color="#585858"
        :height="page_type == 'home' ? '25px' : ''"
        :width="page_type == 'home' ? '25px' : ''"
      />
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
              style="margin-left: -30px; z-index: 2; pointer-events: none"
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
              style="margin-left: -30px; z-index: 2; pointer-events: none"
            />
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "price-search",
  data() {
    return {
      icon4: "fe:arrow-down",
      minimum_price: "",
      maximum_price: "",
    };
  },
  components: {
    Icon,
  },
  props: {
    page_type: String,
  },
  methods: {
    changic1(x) {
      switch (x) {
        case 4:
          if (this.icon4 == "fe:arrow-down") {
            this.icon4 = "fe:arrow-up";
          } else {
            this.icon4 = "fe:arrow-down";
          }
          break;
      }
    },
  },
};
</script>
