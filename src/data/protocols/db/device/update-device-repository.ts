import { UpdateDevice } from '@/domain/usecases/device/update-device'

export interface UpdateDeviceRepository {
  update: (data: UpdateDeviceRepository.Params, _id: string) => Promise<void>
}

export namespace UpdateDeviceRepository {
  export type Params = UpdateDevice.Params
}
