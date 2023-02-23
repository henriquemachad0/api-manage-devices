export const removeDevicePath = {
  delete: {
    description: 'Remoção de um dispositivo pelo id',
    summary: 'Remoção de um dispositivo pelo id',
    tags: ['Device'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Id da dispositivo',
        required: true
      }
    ],
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
