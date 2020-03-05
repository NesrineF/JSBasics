function gettasks(){
    var tk = JSON.parse(localStorage.getItem("task")) || [];
    var ul=document.getElementById("myul2");
    var t = JSON.parse(localStorage.getItem("users")) || [];
    var con=JSON.parse(localStorage.getItem("con")) || "";
    ul.innerHTML="";
   tk.forEach(task => {
    var corr_user=t.find(k => k.id == task.iduser);
     if(task.iduser == con.id) {
       var html=` <li> les taches de ${corr_user.nom} sont ${task.Task1} et ${task.Task2} </li>
       `
       ul.innerHTML+=html}
   });
}
//bonjour nes nes