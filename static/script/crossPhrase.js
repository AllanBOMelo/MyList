var cross = (idNumber) => {

    var id = idNumber.toString();

    if (document.getElementById(id).style.textDecoration === "line-through") {
        document.getElementById(id).style.textDecoration = "none";
    } else {
        document.getElementById(id).style.textDecoration = "line-through";
    }
    
}