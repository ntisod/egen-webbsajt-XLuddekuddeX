function typeSymbol(str){
        document.getElementById("summa").value += str;
}

function calculate(){
    var summa = String(document.getElementById("summa").value);
    console.log(summa);
    document.getElementById("summa").value = eval(summa);
}

function clearAll(){
    document.getElementById("summa").value = "";
}