function conversion(){
    var x=Number(document.getElementById("input1").value);
    var z=Number(document.getElementById("conv").value);
    if (z==1) {
        y=x*3.5;
    }
    else if (z==2){
        y=x*2.18;
    }
    else y=x*1.5;
    document.getElementById("input2").value=y;
}