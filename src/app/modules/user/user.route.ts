import express from "express";
import { createuser, getUserById, getusers } from "./user.controller";


const router = express.Router()

router.get('/', getusers)
router.get('/:id', getUserById)
router.post('/create-user', createuser)






export default router;