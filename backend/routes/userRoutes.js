import express from "express";
import { authUser, userProfile, regUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, userProfile);
router.route('/register').post(regUser)

export default router;