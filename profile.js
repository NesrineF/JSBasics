function settasks(){
    var tk = JSON.parse(localStorage.getItem("task")) || [];
    var obj = new Object();
    var con=JSON.parse(localStorage.getItem("con")) || "";
    var t = JSON.parse(localStorage.getItem("users")) || [];
    var x = document.getElementById("select1");
    var z=t.find(e => e.nom == x.options[x.selectedIndex].text);
    obj.iduser=z.id;
    obj.id=Math.floor(Math.random()*1000);
    obj.Task1=document.getElementById("P1").value;
    obj.Task2=document.getElementById("P2").value ;
    tk.push(obj);
    localStorage.setItem("task",JSON.stringify(tk));
   }
   function gettasks(){
    var tk = JSON.parse(localStorage.getItem("task")) || [];
    var ul=document.getElementById("myul");
    var t = JSON.parse(localStorage.getItem("users")) || [];
    t.forEach(e => {
        var x = document.getElementById("select1");
        var option = document.createElement("option");
        option.text = e.nom;
        x.add(option);
    })
    ul.innerHTML="";
   tk.forEach(e => {
    var z=t.find(w => w.id == e.iduser);
     
       var html=` <li> les taches de ${z.nom} sont ${e.Task1} et ${e.Task2} </li>
       `
       ul.innerHTML+=html
   });
   }
   function deletetasks(){
    var tk = JSON.parse(localStorage.getItem("task")) || [];
    var obj = new Object();
    obj.id=Math.floor(Math.random()*1000);
    obj.Task1=document.getElementById("P1").value;
    obj.Task2=document.getElementById("P2").value ;
    tk.pop();
    localStorage.setItem("task",JSON.stringify(tk));
   }