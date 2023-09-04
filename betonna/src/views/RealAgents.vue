<template>
  <div class="favourite-realestates">
    <div class="row my-4" ref="target2">
      <div class="col-12">
        <div class="container d-flex justify-content-center align-items-center">
          <div class="row" style="width: 1140px">
            <div class="col-2 d-flex justify-content-center align-items-center">
              <button
                type="button"
                class="mybtn"
                :style="{
                  color: id2 == global_id ? '#E57C23' : 'black',
                  border:
                    id2 == global_id
                      ? '1px solid #E57C23'
                      : '0.5px solid rgba(229, 124, 35, 0.49)',
                }"
                @click="changeid(id2)"
              >
                Real estates companies
              </button>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
              <button
                type="button"
                class="mybtn"
                :style="{
                  color: id3 == global_id ? '#E57C23' : 'black',
                  border:
                    id3 == global_id
                      ? '1px solid #E57C23'
                      : '0.5px solid rgba(229, 124, 35, 0.49)',
                }"
                @click="changeid(id3)"
              >
                Real estates Agents
              </button>
            </div>
            <div class="col-8 d-flex justify-content-end align-items-center">
              <router-link to="/favourite-list" class="myfav">
                <Icon
                  class="mx-2"
                  icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                  color="#FF0000"
                  height="24"
                  width="24"
                />Favorite</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 mx-4">
        <div class="row">
          <div
            class="col-4"
            v-for="offer in offers[current_page]"
            v-bind:key="offer.id"
          >
            <CompaniesCard
              class="my-5"
              v-if="global_id == 'btn2' || global_id == 'btn3'"
              :id="offer.id"
              :img1="offer.img1"
              :name="offer.name"
              :phone="offer.phone"
              :email="offer.email"
              :fav="offer.fav"
              :type="type"
            ></CompaniesCard>
          </div>
        </div>
      </div>
      <div class="col-3">
        <AddordownloadCard></AddordownloadCard>
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
                  current_page = offers.max_pages;
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
            v-for="(element, index) in offers"
            v-bind:key="index"
          >
            <button
              v-if="element != offers.max_pages"
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
                if (current_page == offers.max_pages) {
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
import AddordownloadCard from "@/components/AddordownloadCard.vue";
import CompaniesCard from "@/components/CompaniesCard.vue";

export default {
  name: "favourite-realestates",
  components: {
    Icon,
    AddordownloadCard,
    CompaniesCard,
  },
  data() {
    return {
      id2: "btn2",
      id3: "btn3",
      global_id: "btn2",
      type: "agent",
      offers: {},
      current_page: 1,
      Agents: {
        1: {
          1: {
            id: 1,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 1",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          2: {
            id: 2,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 2",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          3: {
            id: 3,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 3",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          4: {
            id: 4,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 4",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          5: {
            id: 5,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 5",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          6: {
            id: 6,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 6",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          7: {
            id: 7,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 7",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          8: {
            id: 8,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 8",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          9: {
            id: 9,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 9",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          10: {
            id: 10,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 10",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          11: {
            id: 11,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 11",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          12: {
            id: 12,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 12",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
        },
        2: {
          13: {
            id: 13,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 13",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          14: {
            id: 14,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 14",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          15: {
            id: 15,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 15",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          16: {
            id: 16,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 16",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          17: {
            id: 17,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 17",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          18: {
            id: 18,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 18",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          19: {
            id: 19,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 19",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          20: {
            id: 20,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 20",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          21: {
            id: 21,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 21",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          22: {
            id: 22,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 22",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          23: {
            id: 23,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 23",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          24: {
            id: 24,
            img1: require("../assets/images/profile.png"),
            name: "Mohammed Ahmed 24",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
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
            fav: "0",
            email: "test@test.com",
          },
          2: {
            id: 2,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 2",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          3: {
            id: 3,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 3",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          4: {
            id: 4,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 4",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          5: {
            id: 5,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 5",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          6: {
            id: 6,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 6",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          7: {
            id: 7,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 7",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          8: {
            id: 8,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 8",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          9: {
            id: 9,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 9",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          10: {
            id: 10,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 10",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          11: {
            id: 11,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 11",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          12: {
            id: 12,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 12",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
        },
        2: {
          13: {
            id: 13,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 13",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          14: {
            id: 14,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 14",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          15: {
            id: 15,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 15",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          16: {
            id: 16,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 16",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          17: {
            id: 17,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 17",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          18: {
            id: 18,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 18",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          19: {
            id: 19,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 19",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          20: {
            id: 20,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 20",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          21: {
            id: 21,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 21",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          22: {
            id: 22,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 22",
            phone: "+966456789789",
            fav: "0",
            email: "test@test.com",
          },
          23: {
            id: 23,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 23",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
          24: {
            id: 24,
            img1: require("../assets/images/3aa11431-e9c0-4417-b1b2-c51fdf1b8084.jpg"),
            name: "Tamim General Contracting Company 24",
            phone: "+966456789789",
            fav: "1",
            email: "test@test.com",
          },
        },
        max_pages: 2,
      },
    };
  },
  methods: {
    changeid(x) {
      this.global_id = x;
      this.changedata();
    },
    changedata() {
      this.current_page = 1;
      if (this.global_id == "btn2") {
        this.offers = this.Agents;
        this.type = "agent";
      } else {
        this.offers = this.Companies;
        this.type = "company";
      }
    },
    scrollToElement() {
      this.$refs.target2.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.changedata();
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  height: 100px;
  border: 1px solid rgba(229, 124, 35, 0.3);
  border-radius: 15px;
}
.mybtn {
  width: 173px;
  height: 56px;
  font-size: 14px;
  font-weight: 300;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s ease-in;
}
.mybtn:hover {
  color: #e57c23;
}
.myfav {
  border-radius: 25px;
  border: 1px solid #e57c2380;
  height: 60px;
  width: 160px;
  text-decoration: none;
  color: #000000;
  font-size: 19px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0.1px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0.1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0.1px 4px 0px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in;
}
.myfav:hover {
  color: #ff0000;
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
</style>
