<template>
  <div class="addordownload-card">
    <div
      class="card mb-5 mx-3"
      style="
        height: fit-content;
        border-radius: 10px;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
      "
    >
      <img :src="src" alt="" style="height: 100%; widows: 100%" />
      <label
        style="position: absolute; z-index: 2; height: 100%"
        class="d-flex justify-content-center align-items-start"
      >
        <div class="d-block p-4 text-start">
          <div style="font-size: 24px; font-weight: 700" class="my-4">
            Do you have a property for sale or rent?
          </div>
          <div style="font-size: 18px; font-weight: 700" class="my-4">
            Then you are in the right place. Easily add your properties.
          </div>
          <div
            style="font-size: 24px"
            class="text-center d-flex justify-content-center align-items-center my-4"
          >
            <router-link to="/" class="add-real">Add real estate</router-link>
          </div>
          <div style="font-size: 18px; font-weight: 700" class="my-4">
            Discover the world of real estates by using the application
            <span style="color: #e57c23">Betonna</span>
          </div>
          <div
            class="d-flex justify-content-center align-items-center"
            style="font-size: 28px; margin-top: 30px"
          >
            <a
              href=""
              class="nav-special nav-btn d-flex justify-content-center align-items-center me-2"
              style="width: 130px; height: fit-content; text-decoration: none"
              ><img
                src="../assets/images/Homepage/get_from_appstore.png"
                alt=""
                style="width: 130px"
            /></a>
            <a
              href=""
              class="nav-special nav-btn d-flex justify-content-center align-items-center ms-2"
              style="width: 130px; height: fit-content; text-decoration: none"
              ><img
                src="../assets/images/Homepage/get_from_google.png"
                alt=""
                style="width: 130px"
            /></a>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "addordownload-card",
  data() {
    return { src: require("../assets/images/Real Estates/ph2.png") };
  },
};
</script>

<style>
.add-real {
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border: none;
  width: 252px;
  height: 54px;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
