import { NextFunction, Request, Response } from "express";
import { creaToUserToDb, getUserFromDb } from "./user.service";


export const createuser = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body
    console.log(req.body);

    const user = await creaToUserToDb(data)
    res.status(200).json({
        status: true,
        data: user
    })
}

export const getusers = async (req: Request, res: Response, next: NextFunction) => {

    const users = await getUserFromDb()
    res.status(200).json({
        status: true,
        data: users
    })
}
