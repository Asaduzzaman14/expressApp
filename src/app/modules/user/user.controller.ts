import { NextFunction, Request, Response } from "express";
import { creaToUserToDb } from "./user.service";


export const createuser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await creaToUserToDb()
    res.status(200).json({
        status: true,
        data: user
    })
}


