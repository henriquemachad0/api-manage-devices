import swaggerConfig from '@/main/docs'
import { noCache } from '@/main/middlewares/no-cache'

import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-manage-devices/docs', noCache, serve, setup(swaggerConfig))
}
