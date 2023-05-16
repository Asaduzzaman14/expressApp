import express from "express";
import { createuser, getAdminUsers, getUserById, getusers } from "./user.controller";


const router = express.Router()

router.get('/', getusers)
router.get('/admins', getAdminUsers)
router.post('/create-user', createuser)
router.get('/:id', getUserById)






export default router;
