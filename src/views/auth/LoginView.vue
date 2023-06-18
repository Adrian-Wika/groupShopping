<template>
  <div class="main">
    <div class="border">
      <form class="form needs-validation" novalidate @submit.prevent="validate">
        <div class="mb-3">
          <div class="mb-3 d-flex justify-content-between gap-5"></div>
          <label for="inputEmail" class="form-label">Adres email</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
            <input type="email" class="form-control" id="inputEmail" v-model="email" />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="mb-5">
          <label for="inputPassword" class="form-label">Hasło</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
            <input type="password" class="form-control" id="inputPassword" v-model="password" />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">Zaloguj</button>
        </div>
      </form>
    </div>

    <div class="border">
      <div class="buttons">
        <button type="submit" class="btn btn-primary" disabled>
          <i class="bi bi-google"></i> Google
        </button>
        <button type="submit" class="btn btn-primary" disabled>
          <i class="bi bi-microsoft"></i> Microsoft
        </button>
        <button type="submit" class="btn btn-primary" disabled>
          <i class="bi bi-facebook"></i> Facebook
        </button>
      </div>
    </div>
  </div>

  <div class="info">
    <p>Nie masz konta? <RouterLink to="/register">Zarejestruj się</RouterLink></p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'vue3-toastify'

export default {
  name: 'registerComponent',
  setup(props) {
    return props
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUserIn() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.info('Zalogowano')
        })
        .catch((error) => {
          console.error(error.message)
          console.error(error.code)
        })
    },
    validate() {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const regexPassword = /[0-9a-zA-Z]{6,}/

      if (regexEmail.test(this.email) && regexPassword.test(this.password)) {
        this.signUserIn()
      } else {
        toast.error('Nieprawidłowe dane!', { theme: 'dark', transition: 'zoom' })
      }
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  height: 70vh;
}
@media only screen and (max-width: 1000px) {
  .main {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 10px;
  }
}
.main div {
  margin: auto 0;
}

.info {
  text-align: center;
}

form {
  margin: 5rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 420px;
  padding: 0 100px;
}
</style>
