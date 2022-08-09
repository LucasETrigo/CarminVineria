(function () {
    let whatsappButton = document.querySelector("#whatsapp-button");
    whatsappButton.addEventListener("click", function(event){
        event.preventDefault()
        window.open(`https://wa.me/5493456434179?text=Hola,%20estuve%20viendo%20su%20sitio%20web%20y%20quiero%20entrar%20en%20contacto:%20${window.location}`);
    })
})();


