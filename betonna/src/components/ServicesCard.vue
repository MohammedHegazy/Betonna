<template>
  <div class="services-card">
    <div
      class="card mb-5 mx-3"
      style="
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: none;
        width: fit-content;
      "
    >
      <router-link to="/" class="service-link">
        <img
          :src="src"
          alt=""
          class="card-top-img"
          style="width: 266.66px; height: 176px; border-radius: 30px"
        />
        <div class="my-4" style="font-size: 24px; font-weight: medium">
          {{ name }}
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "services-card",
  props: {
    id: Number,
    name: String,
    src: String,
  },
};
</script>

<style lang="scss">
.services-card {
  .service-link {
    color: black;
    text-decoration: none;
    transition: ease-in-out 0.5s;
  }
}
.services-card:hover {
  .service-link {
    color: #e57c23;
  }
}
</style>
