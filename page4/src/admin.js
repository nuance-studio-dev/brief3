

const formProduit = document.getElementById("productForm");
const btnNext = document.getElementById("nextBtn");


const nomProduit = document.getElementById("productName");
const priceProduit = document.getElementById("price");
const description = document.getElementById("description");

const promotion = document.getElementById("promotion");
const promotionFields = document.getElementById("promotionFields");
const discount = document.getElementById("discount");
const date = document.getElementById("endDate");




const nameEror = document.getElementById("erorName");
const priceEror = document.getElementById("erorPrice");
const descriEror = document.getElementById("erorDescri");
const promoError = document.getElementById("promo");
const dateError = document.getElementById("time");


const regexNom = /^[a-zA-ZÀ-ÿ0-9\s'-]{3,50}$/;
const regexprice = /^\d+(\.\d{1,2})?$/;



//validation 
btnNext.addEventListener("click", function (event) {
    event.preventDefault();
    nameEror.textContent = "";
    priceEror.textContent = "";
    descriEror.textContent = "";
    promoError.textContent = "";


    const texte = description.value.trim();
    let valide = true;

    if (!regexNom.test(nomProduit.value.trim())) {
        nameEror.textContent = "Nom invalide";
        valide = false;
    }
    if (
        !regexprice.test(priceProduit.value) ||
        Number(priceProduit.value) <= 0
    ) {
        priceEror.textContent = "Veuillez saisir un prix valide";
        valide = false;
    }

    // Descrip
    if (texte.length < 10 || texte.length > 500) {
        descriEror.textContent = "La description doit contenir entre 10 et 500 caractères.";
        valide = false;
    }






    if (promotion.Checked) {
        if (discount.value === "" || Number(discount.value) < 1 || Number(discount.value) > 100) {
            promoError.textContent = "Veuillez saisir une réduction entre 1 et 100%.";
            valide = false;
        }
        }
        if (date.value === "") {
            dateError.textContent = "Veuillez choisir une date de fin.";
            valide = false;

        } if (valide) {
            console.log("Tous les champs sont valides !")}

    })
promotion.addEventListener("change", function () {

    if (promotion.checked) {
        promotionFields.hidden = false;
    } else {
        promotionFields.hidden = true;
    }

});








