export interface RemoveDeviceRepository {
  remove: (_id: string) => Promise<void>
}
