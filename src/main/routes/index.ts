import { Router } from 'express'

import Device from './device-routes.routes'

const router = Router()

router.use('/device', Device)

export { router }
