var data = new Date();

var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

var pElement = document.createElement('p');
var idAtribute = document.createAttribute('id');

idAtribute.value = 'datep'

pElement.attributes.setNamedItem(idAtribute);

pElement.innerHTML = dia + "<a>.</a> " + mes + "<a>.</a> " + ano;

document.getElementById('date').appendChild(pElement)
