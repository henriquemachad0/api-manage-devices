import IDevice from '@/domain/models/types/device/IDevice'

export interface GetAllDeviceRepository {
  getAll: () => Promise<GetAllDeviceRepository.Result>
}

export namespace GetAllDeviceRepository {
  export type Result = IDevice[]
}
