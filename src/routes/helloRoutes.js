import { Router } from "express";
import { helloWorldHandler, greetUserHandler, } from "../handlers/helloHandlers.js";
const router = Router();
router.get("", helloWorldHandler);
router.get("/greet/:name", greetUserHandler);
export default router;
