<template>
  <span style="width: 100%; font-size: 25px; font-weight: 800">
    <div
      class="row d-flex justify-content-center align-items-center text-center"
      style="background-color: black; height: 100px"
    >
      <div class="col-lg-2 col-6">
        <router-link to="/">
          <img src="../assets/Png.png" alt="LOGO" class="nav-logo" />
        </router-link>
      </div>
      <div class="col-lg-4 col-6 text-light nav-sen-div">
        <p class="nav-sentence">Explore the world of real estate in Iraq</p>
      </div>
      <div class="col-lg-2 col-5">
        <Icon class="mx-2" icon="mdi:bell" color="white" />
        <Icon class="mx-2" icon="material-symbols:mail" color="white" />
      </div>
      <div class="col-lg-1 col-2 mx-auto">
        <div class="dropdown">
          <button
            class="nav-special nav-list dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="background-color: white"
          >
            <img id="dropimg" class="dropimg" :src="imgsrc" alt="" />
            {{ lan }}
          </button>
          <ul class="dropdown-menu">
            <li
              @click="
                lan = 'Arabic';
                imgsrc = require('@/assets/images/flags/iraq.png');
              "
            >
              <a class="dropdown-item" href="#">
                <img
                  src="@/assets/images/flags/iraq.png"
                  height="20"
                  width="30"
                  alt=""
                  style="margin-right: 10px"
                />Arabic</a
              >
            </li>
            <li
              @click="
                lan = 'English';
                imgsrc = require('@/assets/images/flags/USA.png');
              "
            >
              <a class="dropdown-item" href="#"
                ><img
                  src="@/assets/images/flags/USA.png"
                  height="20"
                  width="30"
                  alt=""
                  style="margin-right: 10px"
                />English</a
              >
            </li>
            <li
              @click="
                lan = 'Kurdish';
                imgsrc = require('@/assets/images/flags/kurdish.png');
              "
            >
              <a class="dropdown-item" href="#"
                ><img
                  src="@/assets/images/flags/kurdish.png"
                  height="20"
                  width="30"
                  alt=""
                  style="margin-right: 10px"
                />Kurdish</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-1 col-2 mx-auto">
        <div class="dropdown">
          <button
            class="nav-special nav-list dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="background-color: white"
          >
            {{ currency }}
          </button>
          <ul class="dropdown-menu">
            <li @click="currency = '$USD'">
              <a class="dropdown-item" href="#">$USD</a>
            </li>
            <li @click="currency = 'IQD'">
              <a class="dropdown-item" href="#">IQD</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-1 col-2 mx-auto">
        <button class="nav-special nav-btn">LOG IN</button>
      </div>
    </div>
  </span>
  <nav
    class="navbar navbar-expand-xl border-bottom border-bottom-dark"
    data-bs-theme="light"
    style="background-color: white"
  >
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
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/real_estates"
              >Real estates</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/projects"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/services"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/agents"
              >real estate agents</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/map"
              >Find on map</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand nav-link" to="/add_real"
              >Add your real estate</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "NavBar",
  data() {
    return {
      lan: "English",
      imgsrc: require("@/assets/images/flags/USA.png"),
      currency: "$USD",
    };
  },
  components: {
    Icon,
  },
};
</script>

<style>
.nav-logo {
  height: 30px;
}

.nav-special {
  height: 50px;
  width: 130px;
  border-radius: 10px;
  font-size: 17px;
  border: none;
}

.nav-list {
  color: #e57c23;
  font-weight: 800;
}

.nav-btn {
  background-color: #e57c23;
  color: white;
  font-weight: 800;
  transition: ease-in 0.5s;
}

.nav-btn:hover {
  background-color: #bc671e;
  transition: ease-out 0.5s;
}

.dropimg {
  height: 20px;
  width: 40px;
}

@media screen and (max-width: 1390px) {
  .nav-sentence {
    font-size: 22px;
  }

  .nav-sen-div {
    height: 30%;
  }

  .nav-logo {
    height: 30px;
  }

  .nav-special {
    height: 50px;
    width: 100px;
    font-size: 12px;
  }

  .dropimg {
    height: 15px;
    width: 30px;
  }

  .nav-logo {
    height: 30px;
  }

  .nav-special {
    height: 50px;
    width: 100px;
    font-size: 12px;
  }

  .dropimg {
    height: 15px;
    width: 30px;
  }
}

@media screen and (max-width: 1247px) {
  .nav-sentence {
    font-size: 17px;
  }
}

@media screen and (max-width: 1044px) {
  .nav-sentence {
    font-size: 17px;
  }

  .nav-logo {
    height: 20px;
  }

  .nav-special {
    height: 50px;
    width: 90px;
    font-size: 12px;
  }

  .dropimg {
    height: 10px;
    width: 20px;
  }
}

@media screen and (max-width: 961px) {
  .nav-sentence {
    font-size: 14px;
  }

  .nav-special {
    height: 50px;
    width: 80px;
    font-size: 10px;
  }

  .dropimg {
    height: 9px;
    width: 18px;
  }
}

@media screen and (max-width: 529px) {
  .nav-sentence {
    font-size: 9px;
  }

  .nav-sen-div {
    height: 10%;
  }

  .nav-logo {
    height: 20px;
  }

  .nav-special {
    height: 30px;
    width: 60px;
    font-size: 8px;
  }

  .dropimg {
    height: 7px;
    width: 14px;
  }
}
</style>
