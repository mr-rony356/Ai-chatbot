import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRoutes = Router();
userRoutes.get('/',getAllUsers)
userRoutes.post('/signup',userSignup)
userRoutes.post('/login',userSignup)


export default userRoutes;