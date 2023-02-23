export const getByIdDevicePath = {
  get: {
    description: 'Busca de um dispositivo pelo id',
    summary: 'Busca de um dispositivo pelo id',
    tags: ['Device'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Id do dispositivo',
        required: true
      }
    ],
    responses: {
      500: {
        $ref: '#/components/serverError'
      },
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/schemas/device'
            }
          }
        }
      }
    }
  }
}
