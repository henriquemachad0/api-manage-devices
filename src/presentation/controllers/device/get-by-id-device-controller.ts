import { Controller, HttpResponse } from '@/presentation/protocols'
import { serverError, ok, forbidden } from '@/presentation/helpers'
import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'
import { InvalidParamError } from '@/presentation/errors'

export class GetByIdDeviceController implements Controller {
  constructor (
    private readonly getByIdDevice: GetByIdDevice
  ) {}

  async handle (
    request: GetByIdDeviceController.Request
  ): Promise<HttpResponse> {
    try {
      const device = await this.getByIdDevice.getById(
        request._id
      )
      if (!device) {
        return forbidden(new InvalidParamError('_id'))
      }
      return ok(device)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetByIdDeviceController {
  export type Request = {
    _id: string
    user: {
      id: string
      token: string
    }
  }
}
