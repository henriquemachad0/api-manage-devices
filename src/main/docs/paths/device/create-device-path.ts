export const createDevicePath = {
  post: {
    summary: 'Cadastro de dispositivo',
    description: 'Essa rota será responsável por cadastrar um dispositivo',
    tags: ['Device'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/device'
          },
          example: {
            name: 'iPhone XR',
            temperature: '25°C',
            moisture: '90 %',
            luminosity: '65 %'
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
