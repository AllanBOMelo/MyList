const openModalWindow = () => {
    document.getElementById('janela-modal').classList.add('open');
}




const botaoCancel = document.querySelector("#Cancel");

botaoCancel.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('janela-modal').classList.remove('open');

    document.querySelector("#textForm").value = "";
});




const botaoSend = document.querySelector("#Send");

botaoSend.addEventListener('click', function(e) {

    e.preventDefault();

    const textInput = document.querySelector("#textForm");

    var text = textInput.value;

    newItemFunction(text);

    document.getElementById('janela-modal').classList.remove('open');

    document.querySelector("#textForm").value = "";
});