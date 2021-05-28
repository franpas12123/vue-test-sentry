import { createApp } from 'vue'
import App from './App.vue'
// import * as Sentry from "@sentry/vue";
// import { Integrations } from "@sentry/tracing";
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing';

createApp(App).mount('#app')

Sentry.init({
  dsn: "https://d93ba71757534f52bc7b0cc8b09bc88d@o744737.ingest.sentry.io/5789875",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  logError: true
});