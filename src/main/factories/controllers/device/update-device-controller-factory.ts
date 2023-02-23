import { makeLogControllerDecorator } from '@/main/factories'
import { makeDbUpdateDevice } from '@/main/factories/usecases/device/update-device-factory'
import { makeDbGetByIdDevice } from '@/main/factories/usecases/device/get-by-id-device-factory'
import { Controller } from '@/presentation/protocols'
import { UpdateDeviceController } from '@/presentation/controllers/device/update-device-controller'

export const makeUpdateDeviceController = (): Controller => {
  const controller = new UpdateDeviceController(makeDbGetByIdDevice(), makeDbUpdateDevice())
  return makeLogControllerDecorator(controller)
}
