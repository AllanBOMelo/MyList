var hora = "15:00";
var quantidade = 1;

function newItemFunction(x) {
    
    var texto = "teste";
    var lista = document.getElementById('list').innerHTML;


    if (x==1) {
        lista = lista + itemListPatternLight(texto);
    
        document.getElementById('list').innerHTML = lista;
    }

    if (x==2) {
        lista = lista + itemListPatternDark(texto);
    
        document.getElementById('list').innerHTML = lista;
    }
    
    quantidade =+ 1;

}

var itemListPatternLight = function (texto) {

    return (

        '<li class="texto">' + 
        
        '<p id="hora">' + hora + "</p>" + 
        '<p id="texto">' + texto + "</p>" + 
            
        "</li>"
            
        );
}

var itemListPatternDark = function (texto) {

    return (
    
        '<li class="texto">' + 
            
        '<p id="hora">' + hora + "</p>" + 
        '<p id="texto">' + texto + "</p>" + 
                
        "</li>"
                
        );
}    

