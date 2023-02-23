import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, serverError, ok } from '@/presentation/helpers'
import { GetAllDevice } from '@/domain/usecases/device/get-all-device'

export class GetAllDeviceController implements Controller {
  constructor (
    private readonly getAllDevice: GetAllDevice) {}

  async handle (request: GetAllDeviceController.Request): Promise<HttpResponse> {
    try {
      const devices = await this.getAllDevice.getAll(request._id)
      return devices.length ? ok(devices) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetAllDeviceController {
  export type Request = {
    _id: string
    status: boolean
    user: {
      id: string
      token: string
    }
  }
}
