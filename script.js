var cardNumber = document.getElementById("cardNumber");
var inputcardnumbertitulaire = document.getElementById("cardnumbertitulaire");

inputcardnumbertitulaire.addEventListener("input", (e) => {
    //Recupere le caratère saisie
    let value = e.currentTarget.value;

    // Transforme la valeur en chaine de caratère
    let valuestring = value.toString();

    // Compte le nombre d'occurence de la chaine
    let count = valuestring.length;

    // Nombre Exacte de à ajouter
    count = 16 - count;
    let val = addZero(value, count);
    document.getElementById("cardNumber").innerText = val;
})


// Add exact zero after value of input 
function addZero(string = "", n) {
    return string + "0".repeat(n);
}


