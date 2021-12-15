import { Router } from "express";
const router = Router();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//models import
import User from "../models/user.js";

router.get("/new-user", async (req, res) => {

const user = await User.create({
    name: "Benjamin",
    email: "a@a.com",
    password: "121212"
});

});

export default router;
