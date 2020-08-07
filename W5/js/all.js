var FirstChecked = false;
$(document).ready(function(){
    $('.button-toggle').click(function(){
        $('.menu').toggleClass('active')
    })

    $('#ElectronicInvoice').click(function(e){
        e.preventDefault();
        if(FirstChecked == false){
            $(this).toggleClass('active')
            FirstChecked = true
        }else{
            if($(this).hasClass('active')){
                return
            }else{
                $(this).toggleClass('active')
                $('#MailInvoice').toggleClass('active')
            }
        }
    })

    $('#MailInvoice').click(function(e){
        e.preventDefault();
        if(FirstChecked == false){
            $(this).toggleClass('active')
            FirstChecked = true
        }else{
            if($(this).hasClass('active')){
                return
            }else{
                $(this).toggleClass('active')
                $('#ElectronicInvoice').toggleClass('active')
            }
        }
    })

})