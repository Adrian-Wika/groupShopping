<template>
  <div class="main">
    <div class="border">
      <form class="form needs-validation" novalidate @submit.prevent="signUserUp">
        <div class="mb-3">
          <div class="mb-3 d-flex justify-content-between gap-5">
            <div>
              <label for="inputName" class="form-label">Imie</label>
              <input type="text" class="form-control" id="inputName" v-model="name" />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
            <div>
              <label for="inputSurname" class="form-label">Nazwisko</label>
              <input type="text" class="form-control" id="inputSurname" v-model="surname" />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
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
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              aria-describedby="passwordHelp"
              v-model="password"
            />
            <div class="invalid-feedback">Please choose a username.</div>
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

<script lang="ts">
import { firestoreDB } from '@/firebase/firebaseConfig'
import { doc, setDoc } from '@firebase/firestore'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export default {
  name: 'registerComponent',
  setup(props) {
    return props
  },
  data() {
    return {
      name: '' as string,
      surname: '' as string,
      email: '' as string,
      password: '' as string
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
        })
        .catch((error) => {
          console.error(error.message)
          console.error(error.code)
        })
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
