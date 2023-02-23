import components from './components'
import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API manage device',
    description: 'API para armazenamento de dispositivos',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:5051/api-manage-devices',
      description: 'API manage devices'
    }
  ],
  paths,
  schemas,
  components
}
