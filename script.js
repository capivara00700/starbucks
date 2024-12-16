function menu() {
    let tamanho = innerWidth

    let menu = $('.row').find('.menu-div')
    let janela = $('section').find('.parametro')
    let ul = $('footer, .row').find('ul')

    if(tamanho <= 576){
        //menu
        $(menu).addClass('col-sm')
        $(menu).removeClass('col-7')
        $(menu).removeClass('col-5')
        
        //index janelas
        $(janela).addClass('flex-column-reverse')

        //rodapé
        $(ul).addClass('d-none')

        let btn = $('.rdp1').find('button')

        $(btn).on('click', e => {
            console.log($(e.target()).parent())
        })


    } else if(tamanho => 576){
        //menu
        $(menu).removeClass('col-sm')
        $('.row').find('.div1').addClass('col-7')
        $('.row').find('.div2').addClass('col-5')

      //index janelas
      $(janela).removeClass('flex-column-reverse')        

        //rodapé
        $(ul).removeClass('d-none')
    }
}

$(document).ready(() => {
    menu()
})
