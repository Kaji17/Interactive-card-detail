var cardNumber = document.getElementById("cardNumber");
var inputcardnumbertitulaire = document.getElementById("cardnumbertitulaire");
var inputcardNameTitulaire = document.getElementById("nametitulaire");
var cardNameTitulaire = document.getElementById("cardNameTitulaire");
var inputExpmm = document.getElementById("expmm");
var numberMonth = document.getElementById("numberMonth");
var inputexpyy = document.getElementById("expyy");
var numberYears = document.getElementById("numberYears");
var numberCVC = document.getElementById("numberCVC");
var inputcvc = document.getElementById("cvc");
//Add spcace after 4 caratère
cardNumber.innerText = addSpace(cardNumber.textContent);


// Add Card Name when we complete input
inputcardNameTitulaire.addEventListener("input", (e) => {
    let value = e.currentTarget.value;
    cardNameTitulaire.innerText = value.toUpperCase();

    // Add la valeur par défaut quand le champs est vide
    if (value === "") {
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
    let val = addZeroRigth(value, count);
    document.getElementById("cardNumber").innerText = addSpace(val);
})

// Add month experation when we complete input
inputExpmm.addEventListener("input", (e) => {
    let value1 = e.currentTarget.value;
    if (value1 <= 9) {
        numberMonth.innerText = addZeroLeft(value1);
    } else {
        numberMonth.innerText = value1;
    }

    // Add la valeur par défaut quand le champs est vide
    if (value1 === "") {
        numberMonth.innerText = "00";
    }
})


// Add Years experation when we complete input
inputexpyy.addEventListener("input", (e)=>{
    let value1 = e.currentTarget.value;
    numberYears.innerText = value1;
    // Add la valeur par défaut quand le champs est vide
    if (value1 === "") {
        numberYears.innerText = "00";
    }
})

// Add CVC when we complete input
inputcvc.addEventListener("input", (e)=>{
    let value1 = e.currentTarget.value;
    numberCVC.innerText = value1;
    // Add la valeur par défaut quand le champs est vide
    if (value1 === "") {
        numberCVC.innerText = "000";
    }
})

// Add exact zero after value of input 
function addZeroRigth(string = "", n) {
    return string + "0".repeat(n);
}

function addZeroLeft(int = 00) {
    return "0" + int;
}

// Add space after 4 charater in string
function addSpace(string) {
    let joy = string.match(/.{1,4}/g);
    return joy.join(' ');
}

