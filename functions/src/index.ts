import * as functions from "firebase-functions/v2";

export const hellpWorld = functions.https.onRequest((req, res) => {
  res.json({ message: "Hello world" });
});
