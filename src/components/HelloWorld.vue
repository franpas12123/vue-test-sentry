<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ inputmsg }}</h3>
    <input type="text" placeholder="Enter something" v-model="inputmsg" />
    <button @click="clicked">Click me!</button>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
