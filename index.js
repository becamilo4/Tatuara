window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
          prev: '.carousel__previous',
          next: '.carousel__next',
        }, responsive: [
            {
              breakpoint: 775,
              settings: {
                slidesToShow: '1',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
});