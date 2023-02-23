import IDevice from '@/domain/models/types/device/IDevice'

export interface GetAllDevice {
  getAll: (
    _id: string,
  ) => Promise<GetAllDevice.Result>
}

export namespace GetAllDevice {
  export type Result = IDevice[]
}
