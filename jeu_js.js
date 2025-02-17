
const jouer =document.querySelector("#jouer");
const choix = document.querySelector("#choix");
const inputnumber = document.querySelector("#nombre");
const renseign = document.querySelector("#renseignement");
let aleanumber;
let tentative=0;
 let   nbRestants;
 let intervalle;
 jouer.addEventListener("click",play);
function lancer(m) {

    aleanumber = Math.floor(Math.random() * intervalle);
    

    while (tentative < m) {
        let userInput = parseInt(inputnumber.value);
        
        if (inputnumber.value.trim() === "" ) {
        alert("Veuillez entrer un nombre !");
    return;}
        
        

     if (userInput === aleanumber) {
            alert( "Bravo ! Vous avez trouvé le bon nombre.");
            
            break;
        } else if(userInput !== aleanumber  ) {
            tentative++;
            nbRestants=m-tentative;
            
            
            alert("Désolé ! Ce n'est pas le bon nombre.\nLe nombre était " + aleanumber + ". Il vous reste " + nbRestants + " tentative(s).");
        }

        if (nbRestants > 0) {
            inputnumber.value = ""; 
            
        }
    }

    if (tentative == m) {
        let nouvelle = prompt("Partie terminée ! Lancer une autre partie ? (oui/non)", "oui");
        tentative=0;
        if (nouvelle === "oui") {
            inputnumber.value = "";
        choix.value="";
        renseign.textContent="";
         
 let   nbRestants;
            jouer.addEventListener("click",play);
        }
        else{
            inputnumber.value = "";
        choix.value="";
        renseign.textContent="";
        return;
    }
}}

function play() {
    switch (choix.value) {
        case "difficile":
       
            intervalle=1001;
            lancer(1);  
            break;
        case "intermediaire":
            
            intervalle=500;
            lancer(3); 
            break;
        case "facile":

            intervalle=100;
            lancer(5);  
            break;
    }}
    function renseignf(){
        switch (choix.value) {
        case "difficile":
        renseign.textContent="choisissez un nombre entre 0 et 1000,vous avez une seul tentative !"
            
            break;
        case "intermediaire":
            renseign.textContent="choisissez un nombre entre 0 et 500,vous avez 3 tentatives !"
            
            break;
        case "facile":
               renseign.textContent="choisissez un nombre entre 0 et 100,vous avez 5 tentatives !"
            
            break;
    }
    }