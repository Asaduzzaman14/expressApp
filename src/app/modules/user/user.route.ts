import express from "express";
import { createuser } from "./user.controller";


const router = express.Router()

router.get('/', createuser)






export default router;