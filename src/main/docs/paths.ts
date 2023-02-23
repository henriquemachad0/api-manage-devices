import { createDevicePath } from './paths/device/create-device-path'
import { getAllDevicePath } from './paths/device/get-all-device-path'
import { getByIdDevicePath } from './paths/device/get-by-id-device-path'
import { updateDevicePath } from './paths/device/update-device-path'
import { removeDevicePath } from './paths/device/remove-device-path'

export default {

  '/device/create': createDevicePath,
  '/device/': getAllDevicePath,
  '/device/{id}': getByIdDevicePath,
  '/device/update/{id}': updateDevicePath,
  '/device/remove/{id}': removeDevicePath
}
