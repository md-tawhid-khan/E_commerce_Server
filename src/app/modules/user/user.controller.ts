import { Request, Response } from "express";
import { userServices } from "./user.services";


const createUser = async (req :Request,res:Response)=>{
    const result = await userServices.createUser();
}

export const userController = {
    createUser
}