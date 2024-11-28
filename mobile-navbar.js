$('#botao-menu-responsivo').on('click', () => {
    if($('.menu-mobile').hasClass('aberto')){
        $('.menu-mobile').animate({'margin-left': '-0px'}, 'medio')
        $('.menu-mobile').removeClass('aberto')
    } else {
        $('.menu-mobile').animate({'margin-left': '-1000px'}, 'medio')
        $('.menu-mobile').addClass('aberto')
    }
})

