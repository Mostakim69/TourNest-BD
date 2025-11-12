export function setupClientLogging() {
  // Capture and send JavaScript errors to the server in development mode
  window.addEventListener("error", (event) => {
    if (import.meta.env.DEV) {
      fetch("/__error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          args: [event.message, event.filename, event.lineno, event.colno],
        }),
      }).catch(() => {});
    }
  });

  // Capture and send unhandled promise rejections to the server in development mode
  window.addEventListener("unhandledrejection", (event) => {
    if (import.meta.env.DEV) {
      fetch("/__error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          args: ["Unhandled Promise Rejection:", event.reason],
        }),
      }).catch(() => {});
    }
  });

  // Override console.log to send logs to the server in development mode while preserving browser console output
  const originalLog = console.log;
  console.log = (...args) => {
    originalLog(...args);

    if (import.meta.env.DEV) {
      fetch("/__log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ args }),
      }).catch(() => {});
    }
  };
}