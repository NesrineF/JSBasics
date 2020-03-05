interface Person { 
    Nom: string;
    Prenom: string;
    Age: number;
    

}
function Hello(person: Person){
    return "hello " + person.Nom + person.Prenom + person.Age
}
let user = {Nom: "Nesrine",
          Prenom: "Zahrouni",
         Age: 22 }
document.body.textContent = Hello(user);
