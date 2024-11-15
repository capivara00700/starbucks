const sla = $(document).ready(() => {
        console.log('rodou')
    
        let tamanho = innerWidth
    
        if(tamanho => 576 && $('section').find('.parametro').hasClass('flex-column-reverse')){
            $('section').find('.parametro').removeClass('flex-column-reverse')
        }
    
        if(tamanho <= 575){
            $('section').find('.parametro').addClass('flex-column-reverse')
    }
})

function janela() {  //preciso melhorar isso, pq ta uma gambiarra do krl 
    console.log('rodou')
    
    let tamanho = innerWidth

    if(tamanho => 576 && $('section').find('.parametro').hasClass('flex-column-reverse')){
        $('section').find('.parametro').removeClass('flex-column-reverse')
    }

    if(tamanho <= 575){
        $('section').find('.parametro').addClass('flex-column-reverse')
}
}
