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
      <img
        :src="src"
        alt=""
        class="card-top-img"
        style="width: 303px; height: 200px; border-radius: 30px"
      />
      <div class="my-4" style="font-size: 24px; font-weight: medium">
        {{ name }}
      </div>
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
