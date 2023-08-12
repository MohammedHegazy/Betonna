<template>
  <div class="companies-card">
    <div
      class="card mx-3"
      style="
        border-radius: 10px;
        border: 1px #e57c23 inset;
        width: 303px;
        height: max-content;
      "
    >
      <div class="fav d-flex justify-content-end p-3">
        <Icon :icon="icon" height="24" width="24" style="pointer-events: all" />
      </div>
      <div class="logo d-flex justify-content-center">
        <img
          class="card-img-top"
          :src="img1"
          style="
            height: 90px;
            width: 90px;
            border-radius: 50%;
            border: 0.3px #e57c23 inset;
            position: absolute;
            bottom: 180px;
          "
          alt=""
        />
        <div class="icon">
          <img
            :src="img2"
            alt=""
            style="
              height: 26px;
              width: 24px;
              z-index: 2;
              position: absolute;
              right: 110px;
              bottom: 180px;
            "
          />
        </div>
      </div>
      <div class="card-title" style="font-size: 27px">
        {{ this.name }}
      </div>
      <div class="card-text">
        <div class="row">
          <div class="col-6 pb-4 ps-5">
            <button
              style="
                border-radius: 10px;
                background-color: #ffffff;
                border: none;
                width: 100px;
                height: 50px;
                font-size: 20px;
                font-weight: 600;
                -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
              "
            >
              <Icon
                icon="ic:round-call"
                color="#e57c23"
                height="24"
                width="24"
              />Call
            </button>
          </div>
          <div class="col-6 pb-4 pe-5">
            <button
              style="
                border-radius: 10px;
                background-color: #ffffff;
                border: none;
                width: 100px;
                height: 50px;
                font-size: 20px;
                font-weight: 600;
                -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
              "
            >
              <Icon
                icon="ic:baseline-email"
                color="#e57c23"
                height="24"
                width="24"
              />Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "companies-card",
  components: {
    Icon,
  },
  props: {
    id: Number,
    img1: String,
    img2: String,
    icon: String,
    name: String,
    phone: String,
    email: String,
  },
};
</script>
