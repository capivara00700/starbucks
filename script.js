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

function btn_rodape(e){

    if(e === '1'){
        $('.ul1').toggle('medio')

        if($('#btn-1').hasClass('rotate')){
            $('#btn-1').removeClass('rotate')
            $('#btn-1').animate({'rotate': '180deg'}, 'medio')
        } else {
            $('#btn-1 ').animate({'rotate': '0deg'}, 'medio')
            $('#btn-1').addClass('rotate')
        }
    }

    if(e === '2'){
        $('.ul2').toggle('medio')

        if($('#btn-2').hasClass('rotate')){
            $('#btn-2').removeClass('rotate')
            $('#btn-2').animate({'rotate': '180deg'}, 'medio')
        } else {
            $('#btn-2 ').animate({'rotate': '0deg'}, 'medio')
            $('#btn-2').addClass('rotate')
        }
    }

    if(e === '3'){
        $('.ul3').toggle('medio')

        if($('#btn-3').hasClass('rotate')){
            $('#btn-3').removeClass('rotate')
            $('#btn-3').animate({'rotate': '180deg'}, 'medio')
        } else {
            $('#btn-3 ').animate({'rotate': '0deg'}, 'medio')
            $('#btn-3').addClass('rotate')
        }
    }

    if(e === '4'){
        $('.ul4').toggle('medio')

        if($('#btn-4').hasClass('rotate')){
            $('#btn-4').removeClass('rotate')
            $('#btn-4').animate({'rotate': '180deg'}, 'medio')
        } else {
            $('#btn-4 ').animate({'rotate': '0deg'}, 'medio')
            $('#btn-4').addClass('rotate')
        }
    }

}
