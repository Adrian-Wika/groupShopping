<template>
  <div class="main">
    <div class="border">
      <form class="form needs-validation" novalidate @submit.prevent="validate">
        <div class="mb-3">
          <div class="mb-3 d-flex justify-content-between gap-5">
            <div>
              <label for="input-name" class="form-label">Imie</label>
              <input
                type="text"
                class="form-control"
                id="input-name"
                v-model="name"
                required
                :on-change="checkvalid('name')"
              />
              <div class="invalid-feedback">Wpisz swoje imie.</div>
              <div class="valid-feedback">Wygląda dobrze!</div>
            </div>
            <div>
              <label for="input-surname" class="form-label">Nazwisko</label>
              <input
                type="text"
                class="form-control"
                id="input-surname"
                v-model="surname"
                :on-change="checkvalid('surname')"
                required
              />
              <div class="invalid-feedback">Wpisz swoje nazwisko.</div>
              <div class="valid-feedback">Wygląda dobrze!</div>
            </div>
          </div>
          <label for="input-email" class="form-label">Adres email</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
            <input
              type="email"
              class="form-control"
              id="input-email"
              v-model="email"
              required
              :on-change="checkvalid('email')"
            />
            <div class="invalid-feedback">Wpisz swój email.</div>
            <div class="valid-feedback">Wygląda dobrze!</div>
          </div>
        </div>
        <div class="mb-5">
          <label for="input-password" class="form-label">Hasło</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
            <input
              type="password"
              class="form-control"
              id="input-password"
              aria-describedby="passwordHelp"
              v-model="password"
              required
              :on-change="checkvalid('password')"
            />

            <div class="invalid-feedback">Wpisz hasło - minimum 6 znaków.</div>
            <div class="valid-feedback">Wygląda dobrze!</div>
          </div>
          <div id="passwordHelp" class="form-text text-end">Minimum 6 znaków.</div>
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">Zarejestruj</button>
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
    <p>Masz już konto? <RouterLink to="/login">Zaloguj się</RouterLink></p>
  </div>
</template>

<script>
import { firestoreDB } from '@/firebase/firebaseConfig'
import { doc, setDoc } from '@firebase/firestore'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { toast } from 'vue3-toastify'

export default {
  name: 'registerComponent',
  setup(props) {
    return props
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      valid: false
    }
  },
  methods: {
    signUserUp() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          setDoc(doc(firestoreDB, 'users', userCredential.user.uid), {
            email: userCredential.user.email
          })
          console.info('Utworzono konto & zalogowano')
          toast.success('Utworzono konto & zalogowano', { theme: 'dark', transition: 'zoom' })
        })
        .catch((error) => {
          toast.error(error.message, { theme: 'dark', transition: 'zoom' })
          console.error(error.message)
          console.error(error.code)
        })
    },
    checkvalid(prop) {
      const element = document.getElementById(`input-${prop}`)
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const regexPassword = /[0-9a-zA-Z]{6,}/

      if (element) {
        element.classList.remove('is-valid')
        element.classList.remove('is-invalid')

        if (prop == 'email') {
          if (regexEmail.test(this[prop])) {
            if (this.valid) element.classList.add('is-valid')
          } else {
            if (this.valid) element.classList.add('is-invalid')
          }
        } else if (prop == 'password') {
          if (regexPassword.test(this[prop])) {
            if (this.valid) element.classList.add('is-valid')
          } else {
            if (this.valid) element.classList.add('is-invalid')
          }
        } else {
          if (this[prop] !== '' && this[prop] !== undefined) {
            if (this.valid) element.classList.add('is-valid')
          } else {
            if (this.valid) element.classList.add('is-invalid')
          }
        }
      }
    },
    validate() {
      this.valid = true
      setTimeout(() => {
        const check = document.querySelectorAll('.is-valid').length
        if (check === 4) {
          this.signUserUp()
        } else {
          this.checkvalid('name')
          this.checkvalid('surname')
          this.checkvalid('email')
          this.checkvalid('password')
        }
      }, 10)
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
  height: 530px;
  padding: 0 100px;
}
</style>
