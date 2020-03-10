const getSubmitButton = document.getElementById('enviar');
const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Paraná',
  'Paraíba',
  'Pará',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondonia',
  'Roraima',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins'
];

function addAllStates() {
  document.getElementById('estado').innerHTML =
    "<option value=''>Selecione</option>";
  for (let i = 0; i < estados.length; i += 1) {
    const option = document.createElement('option');
    option.text = estados[i];
    document.getElementById('estado').appendChild(option);
  }
}
addAllStates();