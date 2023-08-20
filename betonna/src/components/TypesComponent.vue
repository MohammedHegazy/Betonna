<template>
  <div class="types-component">
    <div class="dropdown">
      <button
        class="form-home1 form-home2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
        id="dropbtn"
        @click="changic1(3)"
        @blur="changic1(3)"
      >
        <Icon icon="mdi:home-search" color="#585858" width="25" height="25" />
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
                id="type1"
                :style="{ color: color1, width: '100%' }"
                @click="
                  changetype(1);
                  type_id = 'type1';
                "
              >
                <Icon
                  icon="healthicons:agriculture-outline"
                  width="20"
                  height="20"
                />
                agricultural
              </button>
            </div>
            <div class="col-4 d-flex justify-content-center align-items-center">
              <button
                type="button"
                class="realest_type p-3"
                id="type2"
                :style="{
                  color: color2,
                  width: '100%',
                }"
                @click="
                  changetype(2);
                  type_id = 'type2';
                "
              >
                <Icon icon="fa6-solid:shop" width="20" height="20" />
                Commercial
              </button>
            </div>
            <div class="col-4 d-flex justify-content-center align-items-center">
              <button
                type="button"
                class="realest_type p-3"
                id="type3"
                :style="{
                  borderRight: 'none',
                  color: color3,
                  width: '100%',
                }"
                @click="
                  changetype(3);
                  type_id = 'type3';
                "
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
                  @click="
                    choose_type(index, item_type.name);
                    type_id = item_type.name + item_type.id;
                  "
                >
                  <div>
                    <div class="card-img-top">
                      <Icon :icon="item_type.icon" width="24" height="24" />
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
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "types-component",
  components: {
    Icon,
  },
  data() {
    return {
      color1: "#e57c23",
      color2: "black",
      color3: "black",
      icon3: "fe:arrow-down",
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
    };
  },
  methods: {
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
  },
};
</script>
