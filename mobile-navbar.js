$('.hamburguer').on('click', () => {
    if($('.menu-mobile').hasClass('aberto')){
        $('.menu-mobile').animate({'margin-left': '-0px'}, 'medio')
        $('.menu-mobile').removeClass('aberto')
    } else {
        $('.menu-mobile').animate({'margin-left': '-2000px'}, 'medio')
        $('.menu-mobile').addClass('aberto')
    }
})

//botão
$('.hamburguer').on('click', () => {
    $('.nav').toggleClass('active')
})
