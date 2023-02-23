
import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeCreateDeviceController } from '../factories/controllers/device/create-device-controller-factory'
import { makeGetAllDeviceController } from '../factories/controllers/device/get-all-device-controller-factory'
import { makeGetByIdDeviceController } from '../factories/controllers/device/get-by-id-device-controller-factory'
import { makeRemoveDeviceController } from '../factories/controllers/device/remove-device-controller-factory'
import { makeUpdateDeviceController } from '../factories/controllers/device/update-device-controller-factory'

const router = Router()

router.post('/create', adaptRoute(makeCreateDeviceController()))
router.get('/', adaptRoute(makeGetAllDeviceController()))
router.get('/:_id', adaptRoute(makeGetByIdDeviceController()))
router.patch('/update/:_id', adaptRoute(makeUpdateDeviceController()))
router.delete('/remove/:_id', adaptRoute(makeRemoveDeviceController()))

export default router
