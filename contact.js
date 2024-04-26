let contact = document.querySelector('#votre-contact-id');

// Ajoutez un écouteur d'événements pour le soumission du formulaire
contact.addEventListener('submit', function(event) {
    // Empêchez le comportement par défaut du formulaire de se produire (rechargement de la page)
    event.preventDefault();

    // Récupérez tous les champs du formulaire
    let inputs = contact.querySelectorAll('input, textarea');

    // Vérifiez si tous les champs sont remplis
    let tousRemplis = true;
    inputs.forEach(input => {
        if (input.value === '') {
            tousRemplis = false;
        }
    });

    // Si un ou plusieurs champs sont vides, affichez un message d'alerte
    if (!tousRemplis) {
        alert('Veuillez remplir l\'ensemble des champs');
    } else {
        // Si tous les champs sont remplis, affichez leurs valeurs dans la console
        inputs.forEach(input => {
            console.log(`${input.name}: ${input.value}`);
        });
    }
});