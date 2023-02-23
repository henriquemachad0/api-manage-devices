# Busca de todos os dispositivos

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api-manage-devices/device**
2. ✅ Retorna **204** se não tiver nenhum dispositivo
3. ✅ Retorna **200** com os dados dos dispositvos

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **500** se der erro ao tentar listar os dispositvos
