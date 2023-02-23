import { makeLogControllerDecorator } from '@/main/factories'
import { makeDbRemoveDevice } from '@/main/factories/usecases/device/remove-device-factory'
import { makeDbGetByIdDevice } from '@/main/factories/usecases/device/get-by-id-device-factory'
import { Controller } from '@/presentation/protocols'
import { RemoveDeviceController } from '@/presentation/controllers/device/remove-device-controller'

export const makeRemoveDeviceController = (): Controller => {
  const controller = new RemoveDeviceController(makeDbGetByIdDevice(),makeDbRemoveDevice())
  return makeLogControllerDecorator(controller)
}
