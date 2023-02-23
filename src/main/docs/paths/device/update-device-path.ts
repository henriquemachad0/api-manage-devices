export const updateDevicePath = {
  patch: {
    summary: 'Atualização do dispositivo',
    description: 'Essa rota será responsável por atualizar um dispositivo',
    tags: ['Device'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Id para edição do dispositivo',
        required: true
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/device'
          },
          example: {
            name: 'iPhone XR',
            temperature: '35°C',
            moisture: '70 %',
            luminosity: '35 %'

          }
        }
      }
    },
    responses: {
      500: {
        $ref: '#/components/serverError'
      },
      204: {
        description: 'Sucesso, mas sem dados para exibir'
      }
    }
  }
}
