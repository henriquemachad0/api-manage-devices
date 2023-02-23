import { makeLogControllerDecorator } from '@/main/factories'
import { makeDbGetByIdDevice } from '@/main/factories/usecases/device/get-by-id-device-factory'
import { Controller } from '@/presentation/protocols'
import { GetByIdDeviceController } from '@/presentation/controllers/device/get-by-id-device-controller'

export const makeGetByIdDeviceController = (): Controller => {
  const controller = new GetByIdDeviceController(makeDbGetByIdDevice())
  return makeLogControllerDecorator(controller)
}
