import { GetByIdDevice } from '@/domain/usecases/device/get-by-id-device'
import { UpdateDevice } from '@/domain/usecases/device/update-device'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, noContent, serverError } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'

export class UpdateDeviceController implements Controller {
  constructor (
    private readonly getByIdDevice: GetByIdDevice,
    private readonly updateDevice: UpdateDevice) {}

  async handle (
    request: UpdateDeviceController.Request
  ): Promise<HttpResponse> {
    try {
      if (!request.name) {
        return forbidden(new InvalidParamError('name'))
      }
      const device = await this.getByIdDevice.getById(request._id)
      if (!device) {
        return forbidden(new InvalidParamError('_id'))
      }
      await this.updateDevice.update(
        {
          ...request
        },
        request._id
      )

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace UpdateDeviceController {
  export type Request = UpdateDevice.Params
}
