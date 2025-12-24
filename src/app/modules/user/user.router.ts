import { Router } from "express";
import { userController } from "./user.controller";

const router = Router() ;

router.post('/create_user',userController.createUser)

export const userRouter = router ;