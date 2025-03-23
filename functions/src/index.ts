import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { app } from "../../lib/index.js";
// ✅ Define Express API function
export const api = onRequest(app);

// ✅ Define Simple Hello World Function
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
