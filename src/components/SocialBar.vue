<script setup lang="ts">
import GithubButton from 'vue-github-button'
</script>

<template>
  <div class="socials container-fluid">
    <a href="https://vuejs.org/" target="_blank">
      <img
        src="/vue-logo.svg"
        alt="Logo vue"
        width="50"
        height="50"
        class="d-inline-block align-text-top"
      />
    </a>

    <a href="https://getbootstrap.com/" target="_blank">
      <img
        src="/bootstrap-logo.svg"
        alt="Logo bootstrap"
        width="60"
        height="50"
        class="d-inline-block align-text-top"
      />
    </a>
    <a href="https://firebase.google.com/" target="_blank">
      <img
        src="/firebase-logo.svg"
        alt="Logo firebase"
        width="50"
        height="50"
        class="d-inline-block align-text-top"
      />
    </a>
    <a href="https://vercel.com/" target="_blank">
      <svg aria-label="Vercel logotype" height="50" role="img" viewBox="0 0 283 64" width="110">
        <path
          d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
          fill="white"
        ></path>
      </svg>
    </a>

    <github-button href="https://github.com/Adrian-Wika">Follow @Adrian Wika</github-button>
    <github-button href="https://github.com/Adrian-Wika/groupShopping">Repository</github-button>
  </div>
</template>

<style>
.socials {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
</style>
