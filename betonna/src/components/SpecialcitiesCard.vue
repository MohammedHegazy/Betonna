<template>
  <div class="specialcities-card">
    <div
      class="card mb-5 mx-3"
      style="
        height: fit-content;
        border-radius: 30px;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(rgba(0, 0, 0, 0.62), #2c2b2b);
        border: none;
      "
    >
      <div class="card-img-top">
        <img
          :src="src"
          class="card-top-img card-img"
          style="border-radius: 30px; width: 303px; height: 250px; opacity: 0.3"
        />
      </div>
      <label style="position: absolute; z-index: 2; color: white">
        <div style="font-size: 30px">
          {{ name }}
        </div>
        <div style="font-size: 25px" class="mb-3">
          {{ real_estates }} real estate
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
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialcities-card",
  props: {
    id: Number,
    name: String,
    real_estates: Number,
    src: String,
  },
};
</script>
