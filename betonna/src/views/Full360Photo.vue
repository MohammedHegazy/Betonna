<template>
  <div class="full36-photo">
    <div class="bg-light d-block">
      <div class="d-block">
        <nav
          class="navbar navbar-expand-xl border-bottom border-bottom-dark"
          data-bs-theme="light"
          style="
            background-color: white;
            z-index: 2;
            margin-bottom: 70px;
            direction: ltr;
          "
        >
          <button
            @click="changeroute()"
            type="button"
            class="navbar-brand mx-4 d-flex justify-content-center align-items-center close-btn"
          >
            <Icon
              icon="iconamoon:close-bold"
              height="28"
              width="28"
              class="nav-close"
            />
          </button>
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="navbar-brand nav-link dropdown-toggle"
                    href="#"
                    to="/360-photos"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Entrance</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li
                      v-for="(element, index) in photos360['enterys']"
                      :key="index"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        :style="{
                          color: src == element.src ? '#e57c23' : 'black',
                        }"
                        @click="src = element.src"
                        >Entrance&nbsp;{{ index }}</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="navbar-brand nav-link dropdown-toggle"
                    href="#"
                    to="/360-photos"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Reception room</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li
                      v-for="(element, index) in photos360['reception_room']"
                      :key="index"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        :style="{
                          color: src == element.src ? '#e57c23' : 'black',
                        }"
                        @click="src = element.src"
                        >Reception room&nbsp;{{ index }}</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="navbar-brand nav-link dropdown-toggle"
                    href="#"
                    to="/360-photos"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Sitting room</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li
                      v-for="(element, index) in photos360['sittingrooms']"
                      :key="index"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        :style="{
                          color: src == element.src ? '#e57c23' : 'black',
                        }"
                        @click="src = element.src"
                        >Sitting room&nbsp;{{ index }}</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="navbar-brand nav-link dropdown-toggle"
                    href="#"
                    to="/360-photos"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Bed room</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li
                      v-for="(element, index) in photos360['bedrooms']"
                      :key="index"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        :style="{
                          color: src == element.src ? '#e57c23' : 'black',
                        }"
                        @click="src = element.src"
                        >Bed room&nbsp;{{ index }}</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="navbar-brand nav-link dropdown-toggle"
                    href="#"
                    to="/360-photos"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Bathroom</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li
                      v-for="(element, index) in photos360['bathrooms']"
                      :key="index"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        :style="{
                          color: src == element.src ? '#e57c23' : 'black',
                        }"
                        @click="src = element.src"
                        >Bathroom&nbsp;{{ index }}</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="navbar-brand nav-link dropdown-toggle"
                    href="#"
                    to="/360-photos"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Kitchen</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li
                      v-for="(element, index) in photos360['kitchens']"
                      :key="index"
                    >
                      <a
                        class="dropdown-item"
                        href="#"
                        :style="{
                          color: src == element.src ? '#e57c23' : 'black',
                        }"
                        @click="src = element.src"
                        >Kitchen&nbsp;{{ index }}</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <My360Photo :myphoto="src"></My360Photo>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import My360Photo from "@/components/My360Photo.vue";
import router from "@/router";
export default {
  name: "full36-photo",
  data() {
    return {
      src: "",
      photos360: {
        bathrooms: {
          1: { src: require("@/assets/images/360photos/p4.jpg") },
        },
        enterys: {
          1: { src: require("@/assets/images/360photos/p1.jpg") },
          2: { src: require("@/assets/images/360photos/p1.jpg") },
        },
        sittingrooms: {
          1: { src: require("@/assets/images/360photos/p1.jpg") },
          2: { src: require("@/assets/images/360photos/p3.jpg") },
        },
        bedrooms: {
          1: { src: require("@/assets/images/360photos/p4.jpg") },
        },
        kitchens: {
          1: { src: require("@/assets/images/360photos/p1.jpg") },
          2: { src: require("@/assets/images/360photos/p1.jpg") },
          3: { src: require("@/assets/images/360photos/p1.jpg") },
          4: { src: require("@/assets/images/360photos/p1.jpg") },
        },
        reception_room: {
          1: { src: require("@/assets/images/360photos/p3.jpg") },
        },
      },
    };
  },
  components: {
    Icon,
    My360Photo,
  },
  methods: {
    changeroute() {
      router.push("/real-estate-info");
    },
  },
  mounted() {
    this.src = this.photos360["enterys"][1].src;
  },
};
</script>

<style>
.nav-close {
  transition: 0.5s ease-in-out;
}
.nav-close:hover {
  color: #e57c23;
}
.close-btn {
  border: none;
  background-color: unset;
}
</style>
