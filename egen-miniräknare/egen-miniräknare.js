function typefunction(str){
    document.getElementById("summa").value += str;
}

function calculate(){
    document.getElementById("summa").value = eval(result);
}

function clearAll(){
    document.getElementById("summa").value = "";
}