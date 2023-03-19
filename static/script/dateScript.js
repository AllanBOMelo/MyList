var data = new Date();

var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

document.getElementById('date').innerHTML = '<p id="datep" style="color: #2D2017;">' + dia + "<a> - </a> " + mes + "<a> - </a> " + ano + "<p>";