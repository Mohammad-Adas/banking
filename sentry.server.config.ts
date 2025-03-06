// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://419974f4fb2cc5bbc5c15c467b769456@o4508584670527488.ingest.us.sentry.io/4508584674590720",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
