import express from 'express'
import { createObject, getObject } from '../controllers/personController'
const router = express.Router()

router.route("/").get(getObject).post(createObject)

export default router
