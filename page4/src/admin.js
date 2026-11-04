const product={}

const formProduit = document.getElementById("productForm");
const btnNext = document.getElementById("nextBtn");

const stockProduit=document.getElementById("stock");
const nomProduit = document.getElementById("productName");
const typeProduit=document.getElementById("articleType");
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
const stockError=document.getElementById("stocke");
const typeError=document.getElementById("errorType")


const regexNom = /^[a-zA-ZÀ-ÿ0-9\s'-]{3,50}$/;
const regexprice = /^\d+(\.\d{1,2})?$/;



//validation 
btnNext.addEventListener("click", function (event) {
    event.preventDefault();
    nameEror.textContent = "";
    priceEror.textContent = "";
    descriEror.textContent = "";
    promoError.textContent = "";
    stockError.textContent="";
    typeError.textContent="";
    


    const texte = description.value.trim();
    let valide = true;

    if (!regexNom.test(nomProduit.value.trim())) {
        nameEror.textContent = "Nom invalide";
        valide = false;
    }
    if(typeProduit.value===""){
        typeError.textContent="Veuillez choisir un type";
        valide=false;
    }
    if (
        !regexprice.test(priceProduit.value) ||
        Number(priceProduit.value) <= 0){

        priceEror.textContent = "Veuillez saisir un prix valide";
        valide = false;
    }

    // Descrip
    if (texte.length < 10 || texte.length > 500) {
        descriEror.textContent = "La description doit contenir entre 10 et 500 caractères.";
        valide = false;
    }
    
    
    if( Number(stockProduit.value) <= 0){
        stockError.textContent="Veuillez saisir un stock valide.";
        valide=false;
        console.log(stockProduit.value);
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
            product.name=nomProduit.value.trim();
            product.prix=Number(priceProduit.value);
            product.stock=Number(stockProduit.value);
            product.description=description.value.trim();
            product.type=typeProduit.value;
            console.log(product);

//             Swal.fire({
//   title: "valide",
//   icon: "success",
//   draggable: true
// });
            
        }else{
            Swal.fire({
            icon: "error",
            title: "Formulaire invalide",
            text: "Veuillez corriger les erreurs avant de continuer."
        });
        }
    })
promotion.addEventListener("change", function () {

    if (promotion.checked) {
        promotionFields.hidden = false;
    } else {
        promotionFields.hidden = true;
    }

});








