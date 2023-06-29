<template>
  <div class="context">
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #031633">
      <div class="container-fluid" id="spacer">
        <RouterLink class="navbar-brand d-flex gap-3 align-items-center" to="/">
          <img
            src="/favicon.ico"
            alt="Logo"
            width="40"
            height="40"
            class="d-inline-block align-text-top"
          />
          <p class="m-0">Group Shopping App</p>
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
                <li class="dropdown-item">Wyloguj</li>
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
              <RouterLink class="nav-link" to="/register">
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

<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  name: 'mainLayout',
  data() {
    return {
      authorized: false,
      watcher: null
    }
  },
  watch: {
    $data: {
      handler: function (newvalue) {
        if (newvalue.authorized) {
          localStorage.setItem('auth', getAuth()?.currentUser.uid)
        } else {
          localStorage.removeItem('auth')
        }
      },
      deep: true
    }
  },
  methods: {
    authWatcher() {
      this.watcher = setInterval(() => {
        console.log('watcher')
        if (getAuth()?.currentUser !== null) {
          this.authorized = true
        } else {
          this.authorized = false
        }
      }, 500)
    },
    logOut() {
      console.log('logout')
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.authorized = false
        })
        .catch((error) => {
          console.error(error.message)
        })
    }
  },
  mounted() {
    this.authWatcher()
  },
  beforeUnmount() {
    clearInterval(this.watcher)
  }
}
</script>

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
