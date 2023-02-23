import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, forbidden, noContent } from '@/presentation/helpers'
import { RemoveDevice } from '@/domain/usecases/device/remove-device'
import { InvalidParamError } from '@/presentation/errors'
import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'

export class RemoveDeviceController implements Controller {
  constructor (
    private readonly getByIdDevice: GetByIdDevice,
    private readonly removeDevice: RemoveDevice
  ) {}

  async handle (request: RemoveDeviceController.Request): Promise<HttpResponse> {
    try {
      const device = await this.getByIdDevice.getById(request._id)
      if (!device) {
        return forbidden(new InvalidParamError('_id'))
      }
      await this.removeDevice.remove(request._id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace RemoveDeviceController {
  export type Request = {
    _id: string
    user: {
      id: string
      token: string
    }
  }
}
