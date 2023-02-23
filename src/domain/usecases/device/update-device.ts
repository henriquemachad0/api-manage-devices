import IDevice from '@/domain/models/types/device/IDevice'

export interface UpdateDevice {
  update: (data: UpdateDevice.Params, _id: string) => Promise<void>
}

export namespace UpdateDevice {
  export type Params = IDevice

}
