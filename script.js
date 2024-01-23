document.addEventListener('DOMContentLoaded', function() {
    
    const contactButton = document.getElementById('button-contact');
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        console.log('Email: ' + emailInput.value);
    });

    
    function createParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
    }

    
    /*const paragraphElement = createParagraph("Welcome! Have a nice day!");
    document.body.appendChild(paragraphElement);*/

    
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        console.log('Email: ' + emailInput.value);
    });

    const nameInput = document.getElementById('name');
    nameInput.addEventListener('input', function() {
        console.log('Name: ' + nameInput.value);
    });

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        const phoneParagraph = createParagraph(phoneInput.value);
        console.log(phoneParagraph);
    });
});




