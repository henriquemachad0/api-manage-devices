export interface RemoveDevice {
  remove: (_id: string) => Promise<void>
}
