import express from 'express'
import { userLogin, userLogout, userRegistration } from './users.controller.js'

const router = express.Router()

router.route("/register").post(userRegistration)
router.route("/login").post(userLogin)
router.route("/logout").get(userLogout)

export default router
