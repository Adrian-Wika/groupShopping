<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="context">
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #031633">
      <div class="container-fluid" id="spacer">
        <a class="navbar-brand" href="#">
          <img
            src="/favicon.ico"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Group Shopping App
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav" id="navbarItems">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">Strona główna</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Grupy zakupowe</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Moja strefa</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://fastly.picsum.photos/id/279/1920/1080.jpg?hmac=C8zPgdG1vyFSEXKiwZls3F3j_-OKLvNa0QUQ8UZ-8NU"
                  alt="Logo"
                  width="35"
                  height="30"
                  class="d-inline-block align-text-top"
                  id="profilePic"
                />
              </a>
              <ul class="dropdown-menu">
                <li><div class="dropdown-item">Adrian Wika</div></li>
                <li><hr class="dropdown-divider" /></li>
                <li><RouterLink class="dropdown-item" to="/about">Ustawienia</RouterLink></li>
                <li><RouterLink class="dropdown-item" to="/">Wyloguj</RouterLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div id="spacer" class="vertcalSpacer"><RouterView /></div>
  </div>
</template>

<style scoped>
#spacer {
  max-width: 1280px;
  margin: 0 auto;
}

.vertcalSpacer {
  padding-top: 5%;
  padding-bottom: 5%;
  min-height: 100vh;
}

#navbarItems {
  display: flex;
  justify-content: end;
  width: 100%;
  font-size: large;
}
#profilePic {
  border-radius: 10%;
}
</style>
