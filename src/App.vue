<script setup lang="ts">
import { collection, getDocs } from 'firebase/firestore'
import { RouterLink, RouterView } from 'vue-router'
import { firestoreDB } from './firebase/firebaseConfig.js'
import { onMounted } from 'vue'

const authorized = false

onMounted(async () => {
  const querySnapshot = await getDocs(collection(firestoreDB, 'test'))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data())
  })
})
</script>

<template>
  <div class="context">
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #031633">
      <div class="container-fluid" id="spacer">
        <RouterLink class="navbar-brand" to="/">
          <img
            src="/favicon.ico"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Group Shopping App
        </RouterLink>

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
            <li class="nav-item" v-if="authorized">
              <RouterLink class="nav-link" to="/">Grupy zakupowe</RouterLink>
            </li>
            <li class="nav-item" v-if="authorized">
              <RouterLink class="nav-link" to="/">Moja strefa</RouterLink>
            </li>
            <li class="nav-item dropdown" v-if="authorized">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://fastly.picsum.photos/id/279/1920/1080.jpg?hmac=C8zPgdG1vyFSEXKiwZls3F3j_-OKLvNa0QUQ8UZ-8NU"
                  alt="Profile picture"
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

            <li class="nav-item" v-if="!authorized">
              <RouterLink class="nav-link" to="/login"
                ><button class="btn btn-outline-primary btn-sm" type="submit">
                  Zaloguj
                </button></RouterLink
              >
            </li>
            <li class="nav-item" v-if="!authorized">
              <RouterLink class="nav-link" to="/regster">
                <button class="btn btn-outline-secondary btn-sm" type="submit">Zarejestruj</button>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="spacer" class="vertcalSpacer"><RouterView /></div>
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
  </div>
</template>

<style scoped>
#spacer {
  max-width: 1280px;
  margin: 0 auto;
}

.vertcalSpacer {
  padding-top: 6%;
  padding-bottom: 3%;
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
