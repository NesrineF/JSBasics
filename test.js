function Hello(person) {
    return "hello " + person.Nom + person.Prenom + person.Age;
}
var user = { Nom: "Nesrine",
    Prenom: "Zahrouni",
    Age: 22 };
document.body.textContent = Hello(user);
