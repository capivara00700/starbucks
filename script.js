const sla = $(document).ready(() => {
    
        let tamanho = innerWidth
    
        if(tamanho => 576 && $('section').find('.parametro').hasClass('flex-column-reverse')){
            $('section').find('.parametro').removeClass('flex-column-reverse')
        }
    
        if(tamanho <= 575){
            $('section').find('.parametro').addClass('flex-column-reverse')
    }

        /*--Rodapé--pt1*/
        if(tamanho => 576){
            $('.rdp1').find('.row, div').addClass('col')
        }
        
        if(tamanho <= 575){
            $('.rdp1').find('.row, div').removeClass('col')
        }

        /*--Rodapé--*/
        if(tamanho => 576){
            $('.btnr').show()
        }
        
        if(tamanho <= 575){
            $('.btnr').hide()
    } 

})

function janela() {  //preciso melhorar isso, pq ta uma gambiarra do krl 
    
    let tamanho = innerWidth

    if(tamanho => 576 && $('section').find('.parametro').hasClass('flex-column-reverse')){
        $('section').find('.parametro').removeClass('flex-column-reverse')
    }

    if(tamanho <= 575){
        $('section').find('.parametro').addClass('flex-column-reverse')
    }

    /*--Rodapé--pt1*/
    if(tamanho => 576){
        $('.rdp1').find('.row, div').addClass('col')
    }
    
    if(tamanho <= 575){
        $('.rdp1').find('.row, div').removeClass('col')
    }

    
    /*--Rodapé--*/
    if(tamanho => 576){
        $('.btnr').show()
    }
    
    if(tamanho <= 575){
        $('.btnr').hide()
    } 

}

function btn_rodape(){
    $('.btnr').toggle('medio')
}
