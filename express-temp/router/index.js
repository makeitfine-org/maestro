import {Router} from 'express'
import {getAll} from '../controller/index.js'

const router = Router()

router.get('/api/server', getAll)

export default router