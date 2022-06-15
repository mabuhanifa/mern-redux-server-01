import express from "express";
import {
    authUser,
    getUserProfile,
    registerUser
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc   Get all user
// @route  GET /api/v1/user
// @access Public
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
