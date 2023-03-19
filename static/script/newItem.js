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
        
        '<a id="hora' + quantidade + '" style="color: #543B2B">' + hora + "</a>" + 
        '<p id="texto' + quantidade + '" style="color: #543B2B">' + texto + "</p>" + 
            
        "</li>"
            
        );
}

var itemListPatternDark = function (texto) {

    return (
    
        '<li class="texto">' + 
            
        '<a id="hora" style="color: #F2F2F2">' + hora + "</a>" + 
        '<p id="texto" style="color: #F2F2F2">' + texto + "</p>" + 
                
        "</li>"
                
        );
}    

