<script setup lang="ts">
import GithubButton from 'vue-github-button'
</script>

<template>
  <div class="socials container-fluid">
    <a href="https://vuejs.org/">
      <img
        src="/vue-logo.svg"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
    </a>
    <a href="https://vuejs.org/">
      <img
        src="/bootstrap-logo.svg"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
    </a>
    <!-- Firebase logo i vercela jeszcze -->
    <a href="https://vuejs.org/">
      <img
        src="/github-logo.svg"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
    </a>
    <a href="https://vuejs.org/" class="cursor">
      <img
        src="/github-logo.svg"
        alt="Logo"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
    </a>
    <div>
      <github-button href="https://github.com/Adrian-Wika">Follow @Adrian Wika</github-button>
    </div>

    <github-button href="https://github.com/Adrian-Wika/groupShopping">Repository</github-button>
  </div>
</template>

<style>
.socials {
  display: flex;
  justify-items: baseline;
  align-items: baseline;
}
.cursor {
  cursor: pointer;
}
</style>
