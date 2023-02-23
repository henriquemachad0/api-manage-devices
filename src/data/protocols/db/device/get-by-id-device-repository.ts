import IDevice from '@/domain/models/types/device/IDevice'

export interface GetByIdDeviceRepository {
  getById: (_id: string) => Promise<GetByIdDeviceRepository.Result>
}

export namespace GetByIdDeviceRepository {
  export type Result = IDevice
}
