// const reponse = fetch("http://localhost:5678/api/users/POST/login");
// console.log(reponse)
	
//     const form = document.querySelector('#contact');
//     form.addEventListener("submit", (event) => {
//         // On empêche le comportement par défaut
//         event.preventDefault();
    
//         // On récupère les deux champs et on affiche leur valeur
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
// 		// const emailv = event.target.dataset.email;
        
// 		if(email === EmailSophie ){
//         console.log(ok)
//        } else{
//         console.log("Une erreur est survenue : ")
//        }

       
       
       
       
       
//         // console.log(password);
//         // console.log(email);
// });


async function login(email, password) {
    const url = 'http://localhost:5678/api/users/login';
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})});
        if( response.status === 200){
        const responseData = await response.json();
        localStorage.setItem('userId', responseData.userId);
        localStorage.setItem('token', responseData.token);
    }
}

document.querySelector('#contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
    location.replace("index.html")
    return false;
})

