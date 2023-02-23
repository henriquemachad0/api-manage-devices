export const getAllDevicePath = {
  get: {
    description: 'Busca de todos os dispositivos',
    summary: 'Busca de todos os dispositivos',
    tags: ['Device'],
    responses: {
      500: {
        $ref: '#/components/serverError'
      },
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/schemas/device'
              }
            }
          }
        }
      }
    }
  }
}
