import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function formatTimestamp(date = new Date()) {
  const pad = (n) => n.toString().padStart(2, "0");

  let hours = date.getHours();
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear().toString().slice(-2);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0 to 12 for 12 AM

  const hourStr = pad(hours);

  return `${hourStr}:${minutes} ${ampm} ${day}-${month}-${year}`;
}

export default function viteLoggerPlugin() {
  // Prepare paths
  const logDir = path.resolve(__dirname, "src/console");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  const logPath = path.join(logDir, "log.json");
  const errorPath = path.join(logDir, "error.json");

  // Clear logs on startup (optional)
  fs.writeFileSync(logPath, "");
  fs.writeFileSync(errorPath, "");

  return {
    name: "vite:log-to-file",
    configureServer(server) {
      // Log endpoint (for normal logs)
      server.middlewares.use("/__log", async (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const { args } = JSON.parse(body);
            const stringifyArgs = args.map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            );
            const msg = `[${formatTimestamp()}] ${stringifyArgs.join(" ")}\n`;

            fs.appendFileSync(logPath, msg);
          } catch (err) {
            console.error("❌ Logger error:", err);
          }
          res.end("ok");
        });
      });

      server.middlewares.use("/__error", async (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          // console.log("Received error log POST:", body); // <== Add this line for debug

          try {
            const { args } = JSON.parse(body);
            const stringifyArgs = args.map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            );
            const msg = `[${new Date().toISOString()}] ${stringifyArgs.join(" ")}\n`;
            fs.appendFileSync(errorPath, msg);
          } catch (err) {
            console.error("❌ Error logger error:", err);
          }
          res.end("ok");
        });
      });
    },
  };
}
