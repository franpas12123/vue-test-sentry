<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ inputmsg }}</h3>
    <br />
    <input type="text" placeholder="Enter something" v-model="inputmsg" />
    <button @click="clicked">Click me!</button>
    <br />
    <input type="text" placeholder="Enter something" v-model="inputmsg2" />
    <button @click="clicked2">Another one!</button>
  </div>
</template>

<script>
import * as Sentry from '@sentry/vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      inputmsg: '',
      inputmsg2: '',
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        '-' +
        (current.getMonth() + 1) +
        '-' +
        current.getDate();
      const time =
        current.getHours() +
        ':' +
        current.getMinutes() +
        ':' +
        current.getSeconds();
      const dateTime = date + ' ' + time;

      return dateTime;
    },
    clicked() {
      const t = this.currentDateTime();
      const msg = `${t} -- some user -- ${this.inputmsg}`;
      Sentry.captureMessage(msg);
      console.log(`sent to sentry. ${msg}`);
    },
    clicked2() {
      const t = this.currentDateTime();
      const msg = `${t} -- some user -- ${this.inputmsg2}`;
      Sentry.captureMessage(msg);
      console.log(`sent to sentry. ${msg}`);
    },
  },
};
</script>
