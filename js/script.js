(function () {
    let whatsappButton = document.querySelector('#whatsapp-button');
    whatsappButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.open(
            `https://wa.me/5493456434179?text=Hola,%20estuve%20viendo%20su%20sitio%20web%20y%20quiero%20entrar%20en%20contacto:%20${window.location}`
        );
    });
})();

// Carousel Index
window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 800,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    draggable: true,
                },
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    draggable: true,
                },
            },
        ],
    });
});
