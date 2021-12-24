import { Router } from "express";
const router = Router();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//models import
import User from "../models/user.js";

router.get("/new-user", async (req, res) => {
try {
  const user = await User.create({
    name: "Benjamin",
    email: "a@b.com",
    password: "121212"
  });
  res.json({"status":"success"});
}

catch (error) {
  console.log(error);
  res.json({"status":"fail"});
}




});

export default router;
