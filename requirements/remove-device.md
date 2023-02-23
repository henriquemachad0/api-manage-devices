# Remover dispositivo

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/api-manage-devices/device/remove/{_id}**
2. ✅ **Remove** o dispositivo com o id fornecido
3. ✅ Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **403** se não for encontrado um dispositvo com o id fornecido
3. ✅ Retorna erro **400** se name não for fornecido pelo client
4. ✅ Retorna erro **500** se der erro ao tentar remover o cadastro do dispositivo
