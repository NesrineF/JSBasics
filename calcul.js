function calcul(){
    var x=Number(document.getElementById("input1").value);
    var y=(document.getElementById("input2").value);
    var z=Number(document.getElementById("input3").value);
    if (y=="+") {
        w=x+z;
    }
    else if(y=="-"){
        w=x-z;
    }
    else if(y=="*"){
        w=x*z;
    }
    else if (y=="/") {
        w=x/z;
    }
    else {window.alert("saisir une opération")}
    document.getElementById("input4").value=w;

}