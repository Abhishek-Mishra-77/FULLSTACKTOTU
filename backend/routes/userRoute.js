import express from "express";
const router = express.Router();
import { addUser, getAllUser, getUserById, getUserByName, removeUser } from "../controllers/userController.js";

router.post("/add", addUser);
router.get("/getUser", getAllUser)
router.get("/get/:id", getUserById)
router.get("/getName", getUserByName)
router.delete("/remove/:id", removeUser)

export default router;