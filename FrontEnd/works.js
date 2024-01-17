
const reponse = await fetch(`http://localhost:5678/api/works`);
const pieces = await reponse.json();
console.log(pieces)

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const figure = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".gallery");
        // Création d’une balise dédiée à une figure d'images
        const pieceElement = document.createElement("figure");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;
        const nomElement = document.createElement("figcaption");
        nomElement.innerText = figure.title;
        
        // On rattache la balise figure a la section Fiches
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
    
     }
     
    }
    
    
        genererPieces(pieces);


        const boutonAll = document.querySelector(".btn-all");

        boutonAll.addEventListener("click", function () {
            const piecesFiltrees = pieces.filter(function (piece) {
                return piece.category.name  ;
            });
            document.querySelector(".gallery").innerHTML = "";
            genererPieces(piecesFiltrees);
        });
        
        const boutonObjet = document.querySelector(".btn-object");

        boutonObjet.addEventListener("click", function () {
            const piecesFiltrees = pieces.filter(function (piece) {
                return piece.category.name === "Objets" ;
            });
            document.querySelector(".gallery").innerHTML = "";
            genererPieces(piecesFiltrees);
        });
        
        const boutonAppart = document.querySelector(".btn-appartement");

        boutonAppart.addEventListener("click", function () {
            const piecesFiltrees = pieces.filter(function (piece) {
                return piece.category.name === "Appartements" ;
            });
            document.querySelector(".gallery").innerHTML = "";
            genererPieces(piecesFiltrees);
        });
        
        const boutonHotels = document.querySelector(".btn-hotels");

        boutonHotels.addEventListener("click", function () {
            const piecesFiltrees = pieces.filter(function (piece) {
                return piece.category.name === "Hotels & restaurants" ;
            });
            document.querySelector(".gallery").innerHTML = "";
            genererPieces(piecesFiltrees);
        });


        

        // modal bloc 
        let modal = null 

        const openModal = function (e) {
            e.preventDefault();
            const target = document.querySelector (e.target.getAttribute('href'))
            target.style.display = null 
            target.removeAttribute('aria-hidden')
            target.setAttribute('aria-modal','true')
            modal = target
            modal.addEventListener('click' , closeModal)
        }
        const closeModal = function(e){
            if ( modal === null) return
            e.preventDefault();
            modal.style.display = "none" 
            modal.setAttribute('aria-hidden' , 'true')
            modal.removeAttribute('aria-modal','true')
            modal.removeEventListener('click' , closeModal)
            modal = null
            
        }
        document.querySelectorAll('.js-modal').forEach(a => {
            a.addEventListener('click' , openModal)
        })