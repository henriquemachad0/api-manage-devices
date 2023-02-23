import IDevice from '@/domain/models/types/device/IDevice'

export interface CreateDevice {
  create: (data: CreateDevice.Params) => Promise<void>
}

export namespace CreateDevice {
  export type Params = Omit<IDevice, '_id'>
}
