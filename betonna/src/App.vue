<template>
  <navbar></navbar>
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "MyApp",
  components: { Navbar },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: #e57c23;
      text-decoration: underline;
      font-weight: 900;
    }
  }
}

.radio-item input[type="radio"] {
  visibility: hidden;
  width: 20px;
  height: 20px;
  margin: 0 5px 0 5px;
  padding: 0;
}

.radio-item input[type="radio"]:before {
  position: relative;
  margin: 4px -25px -4px 0;
  display: inline-block;
  visibility: visible;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: white;
  content: "";
}

.radio-item input[type="radio"]:checked:after {
  position: relative;
  top: 0;
  left: 9px;
  display: inline-block;
  visibility: visible;
  border-radius: 6px;
  width: 12px;
  height: 12px;
  background: #e57c23;
  content: "";
}

.radio-item label {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  margin: 0;
  padding: 0;
}
</style>
