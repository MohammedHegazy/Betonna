<template>
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
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style>
.nav-logo {
  height: 30px;
}

.nav-special {
  border-radius: 10px;
  font-size: 17px;
  border: none;
}

.nav-list {
  height: 54px;
  width: 100px;
  font-size: 15px;
  color: #e57c23;
  font-weight: 800;
}

.nav-btn {
  height: 54px;
  width: 144px;
  background-color: #e57c23;
  color: white;
  font-weight: 800;
  transition: ease-in 0.5s;
}

.nav-btn:hover {
  background-color: #bc671e;
  transition: ease-out 0.5s;
}
</style>
