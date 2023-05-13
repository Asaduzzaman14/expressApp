import express from "express";
import { createuser, getusers } from "./user.controller";
import { getUserFromDb } from "./user.service";


const router = express.Router()

router.get('/', getusers)
router.post('/create-user', createuser)






export default router;