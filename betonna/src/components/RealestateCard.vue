<template>
  <div class="realestate-card">
    <div
      class="card mb-5 mx-3"
      style="height: 420px; border-radius: 10px; width: 290px"
    >
      <div class="fav">
        <Icon
          :icon="icon"
          class="icon"
          height="24"
          width="24"
          color="black"
          style="pointer-events: all"
          @click="change_icon()"
        />
      </div>
      <img
        :src="this.src"
        class="card-top-img"
        style="
          border-radius: 10px;
          width: 290px;
          height: fit-content;
          z-index: 0;
        "
      />
      <div class="card-title">
        <div class="row" style="font-size: 20px; font-weight: 600">
          <div class="col-6 mt-3">
            {{ this.name }}
          </div>
          <div class="col-6 mt-3" style="color: #e57c23">
            {{ this.price }}
          </div>
        </div>
      </div>
      <div class="card-text text-start ms-3 mt-2" style="color: #585858">
        <Icon
          icon="material-symbols:location-on-rounded"
          height="24"
          width="24"
        />{{ this.location }}
      </div>
      <div
        class="card-text text-start ms-3 mt-2"
        style="color: #585858; font-size: 11px"
      >
        <div class="row mt-4">
          <div class="col-9">
            <div class="row">
              <div class="col-6">
                <p>
                  <Icon
                    icon="ic:sharp-space-dashboard"
                    height="15"
                    width="15"
                  />
                  {{ this.space }}
                </p>
              </div>
              <div class="col-6">
                <p>
                  <Icon icon="bx:current-location" height="15" width="15" />
                  {{ this.type }}
                </p>
              </div>
              <div class="col-6">
                <p>
                  <Icon icon="mdi:bed" height="15" width="15" />
                  Bedrooms: {{ this.beedrooms }}
                </p>
              </div>
              <div class="col-6">
                <p>
                  <Icon icon="fa6-solid:bath" height="15" width="15" />
                  Bathrooms: {{ this.bathrooms }}
                </p>
              </div>
              <div class="col-6"></div>
            </div>
          </div>
          <div class="col-2 d-flex justify-content-center">
            <img
              :src="this.logo"
              class="card-img"
              style="height: 45px; width: fit-content"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="card-text d-flex justify-content-center align-items-center">
        <router-link
          to="/"
          class="btn d-flex justify-content-center align-items-center"
          style="
            width: 180px;
            height: 51px;
            border-radius: 5px;
            font-weight: 300;
            background-color: #e57c23;
            color: white;
          "
          >More information</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "realestate-card",
  data() {
    return {
      icon: "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love",
    };
  },
  components: {
    Icon,
  },
  props: {
    id: Number,
    name: String,
    price: String,
    location: String,
    space: String,
    type: String,
    beedrooms: String,
    bathrooms: String,
    src: String,
    logo: String,
  },
  methods: {
    async change_icon() {
      if (
        this.icon ==
        "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
      ) {
        this.icon = "noto:heart-suit";
      } else {
        this.icon =
          "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love";
      }
    },
  },
};
</script>

<style scoped>
.fav {
  display: flex;
  justify-content: end;
}
.icon {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 5px;
  padding: 5px;
  z-index: 5;
  transition: 0.5s ease-out;
}

.icon:hover {
  height: 35px;
  width: 35px;
}
</style>
