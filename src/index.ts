import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Import and use routes
import helloRoutes from "./routes/helloRoutes.js";
app.use("/", helloRoutes);

// Export the Express app
export { app };
