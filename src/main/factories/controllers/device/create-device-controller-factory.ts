import { makeLogControllerDecorator } from '@/main/factories'
import { makeDbCreateDevice } from '@/main/factories/usecases/device/create-device-factory'
import { Controller } from '@/presentation/protocols'
import { CreateDeviceController } from '@/presentation/controllers/device/create-device-controller'

export const makeCreateDeviceController = (): Controller => {
  const controller = new CreateDeviceController(makeDbCreateDevice())
  return makeLogControllerDecorator(controller)
}
