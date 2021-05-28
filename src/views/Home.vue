<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <br />
    <button @click="throwError">
      Throw error
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import * as Sentry from '@sentry/vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    throwError() {
      Sentry.captureMessage('Something went wrong');
    },
  },
};
</script>
