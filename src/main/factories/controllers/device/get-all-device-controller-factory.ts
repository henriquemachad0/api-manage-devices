import { makeLogControllerDecorator } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { GetAllDeviceController } from '@/presentation/controllers/device/get-all-device-controller'
import { makeDbGetAllDevice } from '@/main/factories/usecases/device/get-all-device-factory'

export const makeGetAllDeviceController = (): Controller => {
  const controller = new GetAllDeviceController(makeDbGetAllDevice())
  return makeLogControllerDecorator(controller)
}
