import express from "express";
import { authUser } from "../controllers/userController.js";
const router = express.Router();

// @desc   Get all user
// @route  GET /api/v1/user
// @access Public
router.post("/login",authUser)


export default router;