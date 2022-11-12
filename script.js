var cardNumber = document.getElementById("cardNumber");
var inputcardnumbertitulaire = document.getElementById("cardnumbertitulaire");
var inputcardNameTitulaire = document.getElementById("nametitulaire");
var cardNameTitulaire = document.getElementById("cardNameTitulaire");
var inputExpmm= document.getElementById("expmm"); 
var numberMonth = document.getElementById("numberMonth");

//Add spcace after 4 caratère
cardNumber.innerText = addSpace(cardNumber.textContent);


// Add Card Name when we complete input
inputcardNameTitulaire.addEventListener("input", (e)=>{
    let value = e.currentTarget.value;
    cardNameTitulaire.innerText = value.toUpperCase();

    // Add la valeur par défaut quand le champs est vide
    if (value==="") {
        cardNameTitulaire.innerText = "Jane Appleseed";
    }
})

// Add Card Number when we complete input
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
    document.getElementById("cardNumber").innerText = addSpace(val);
})


// Add exact zero after value of input 
function addZero(string = "", n) {
    return string + "0".repeat(n);
}

// Add space after 4 charater in string
function addSpace(string) {
    let joy = string.match(/.{1,4}/g);
    return joy.join(' ');
}

