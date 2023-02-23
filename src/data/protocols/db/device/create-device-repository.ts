import { CreateDevice } from '@/domain/usecases/device/create-device'

export interface CreateDeviceRepository {
  create: (data: CreateDeviceRepository.Params) => Promise<void>
}

export namespace CreateDeviceRepository {
  export type Params = CreateDevice.Params
}
