import IDevice from '@/domain/models/types/device/IDevice'

export interface GetByIdDevice {
  getById: (_id: string) => Promise<GetByIdDevice.Result>
}

export namespace GetByIdDevice {
  export type Result = IDevice
}
