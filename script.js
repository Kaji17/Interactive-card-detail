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
var btnconfirm = document.getElementById("btnconfirm");

const regexCardName = new RegExp("[A-Za-z]");
const regexCardNumber = new RegExp("1234 5678 9123 0000");
const regexCardMMYY = new RegExp("[0-9]{1,2}");
const regexCardCvc = new RegExp("[0-9]{3}");
//Add spcace after 4 caratère
cardNumber.innerText = addSpace(cardNumber.textContent);


// Add Card Name when we complete input
inputcardNameTitulaire.addEventListener("input", (e) => {
    addError("errorCardName", "");
    let value = e.currentTarget.value;
    cardNameTitulaire.innerText = value.toUpperCase();

    // Add la valeur par défaut quand le champs est vide
    if (value === "") {
        cardNameTitulaire.innerText = "Jane Appleseed";
    }
})

// Add Card Number when we complete input
inputcardnumbertitulaire.addEventListener("input", (e) => {
    addError("errorCardNumber", "");
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
    addError("errorCardMM", "" );
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
inputexpyy.addEventListener("input", (e) => {
    addError("errorCardMM", "" );
    let value1 = e.currentTarget.value;
    numberYears.innerText = value1;
    // Add la valeur par défaut quand le champs est vide
    if (value1 === "") {
        numberYears.innerText = "00";
    }
})

// Add CVC when we complete input
inputcvc.addEventListener("input", (e) => {
    addError("errorCardCvc", "" );
    let value1 = e.currentTarget.value;
    numberCVC.innerText = value1;
    // Add la valeur par défaut quand le champs est vide
    if (value1 === "") {
        numberCVC.innerText = "000";
    }
})


btnconfirm.addEventListener("click", () => {

    if (regexCardName.test(cardNameTitulaire.textContent) && regexCardNumber.test(cardNumber.textContent) &&
        regexCardMMYY.test(numberMonth.textContent) &&
        regexCardMMYY.test(numberYears.textContent) && regexCardCvc.test(numberCVC.textContent) && (inputExpmm.value != "") &&
        (inputexpyy.value != "") && (inputcvc.value != "")
    ) {
        cardNumber.innerText= "0000 0000 0000 0000";
        cardNameTitulaire.innerText= "Jane Appleseed";
        numberMonth.innerText= "00";
        numberYears.innerText= "00";
        numberCVC.innerText= "000";
        document.getElementById("formcontent").style.display = "none";
    } 
    if (regexCardName.test(cardNameTitulaire.textContent)==false|| (inputcardNameTitulaire.value=="")) {
        addError("errorCardName", " Wrong format, text only " );
    }
    if (regexCardNumber.test(cardNumber.textContent)==false || (inputcardnumbertitulaire.value=="")) {
        addError("errorCardNumber","Wrong format, numbers only" );
    }
    if (regexCardMMYY.test(numberMonth.textContent)==false || (inputExpmm.value=="")) {
        addError("errorCardMM", "Can't be blank" );
    }
    if (regexCardMMYY.test(numberYears.textContent)==false|| (inputexpyy.value=="")) {
        addError("errorCardMM", "Can't be blank" );
    }
    if (regexCardCvc.test(numberCVC.textContent)==false|| (inputcvc.value=="")) {
        addError("errorCardCvc", "Can't be blank" );
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

function addError(id, error) {
    return document.getElementById(id).textContent= error;
}

