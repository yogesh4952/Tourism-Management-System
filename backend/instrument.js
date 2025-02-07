import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: 'https://1103f59c7d7a42ab7b27df911dc36226@o4508776496889856.ingest.us.sentry.io/4508776499642368',
  integrations: [nodeProfilingIntegration()],
  // Tracing
  // tracesSampleRate: 1.0, // Capture 100% of the transactions
});

// Manually call startProfiler and stopProfiler
// to profile the code in between
Sentry.profiler.startProfiler();

// Starts a transaction that will also be profiled
Sentry.startSpan(
  {
    name: 'My First Transaction',
  },
  () => {
    // the code executing inside the transaction will be wrapped in a span and profiled
  }
);

// Calls to stopProfiling are optional - if you don't stop the profiler,
// it will keep profiling your application until the process exits or stopProfiling is called.
Sentry.profiler.stopProfiler();
