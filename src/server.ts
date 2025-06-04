import app from './app';
import { debug } from 'node:console';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// --- Graceful Shutdown ---
const gracefulShutdown = async (signal: string) => {
  debug(`\nReceived signal: ${signal}. Initiating graceful shutdown...`);

  server.close((err) => {
    if (err) {
      console.error('Error closing server:', err);
      process.exit(1);
    }

    console.log('Server closed.');
    console.log('Graceful shutdown complete. Exiting process.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcing shutdown after timeout!');
    process.exit(1);
  }, 10000).unref(); // 10 seconds timeout, unref prevents this from keeping the event loop alive
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('--- Uncaught Exception ---');
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);

  gracefulShutdown('uncaughtException');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('--- Unhandled Rejection ---');
  console.error('Reason:', reason);
  console.error('Promise:', promise);

  gracefulShutdown('unhandledRejection');
});

// --- Process Termination Signals ---
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGQUIT', () => gracefulShutdown('SIGQUIT'));
