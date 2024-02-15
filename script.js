function submitForm() {
    var name = document.getElementById("name").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


    if ( name ==="" || prenom ==="" || email ==="" ||  message ==="") {
        alert("Veuillez remplir tous les champs.");
        return

    }

    

    
    
}
