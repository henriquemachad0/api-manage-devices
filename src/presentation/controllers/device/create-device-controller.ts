import { CreateDevice } from '@/domain/usecases/device/create-device'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, noContent, serverError } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'

export class CreateDeviceController implements Controller {
  constructor (
    private readonly createDevice: CreateDevice
  ) {}

  async handle (
    request: CreateDeviceController.Request
  ): Promise<HttpResponse> {
    try {
      if (!request.name) {
        return forbidden(new InvalidParamError('name'))
      }
      await this.createDevice.create({
        ...request
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace CreateDeviceController {
  export type Request = CreateDevice.Params
}
