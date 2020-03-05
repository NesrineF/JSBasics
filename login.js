function tabob(){
    var t = JSON.parse(localStorage.getItem("users")) || [];
    var obj = new Object();
    obj.id=Math.floor(Math.random()*1000);
    obj.nom=document.getElementById("input1").value;
    obj.username=document.getElementById("input2").value ;
    obj.adresse=document.getElementById("input3").value;
    t.push(obj);
    localStorage.setItem("users",JSON.stringify(t));
    }
function verifyobject(){
    var t = JSON.parse(localStorage.getItem("users")) || [];
    var obj = new Object();
    x=document.getElementById("input1").value;
    y=document.getElementById("input2").value;
    var z=t.find(e => e.nom == x);
    if (z){
        localStorage.setItem("con", JSON.stringify(z));
        if (z.nom =="admin" & z.username == "admin"){
        window.location.href="success.html";}
        else{window.location.href="user.html";}
    }
    else { window.location.href="register.html";}
}
  //  if (Obj2.nom==x && Obj2.username==y){
    //    alert("you're loged in")
   // }
    //else {alert("please register first")}
     //}
     function getobject(){
        var obj, json,text;
        var Obj2={nom:"", username:"", adresse:""};
        Obj2.nom=document.getElementById("input1").value;
        Obj2.username=document.getElementById("input2").value;
        Obj2.adresse=document.getElementById("input3").value;
        json=JSON.stringify(Obj2);
        localStorage.setItem("testJSON", json);
        }
   