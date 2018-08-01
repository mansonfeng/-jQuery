$(function(){
    var $header = $('.header')
    $(window).scroll(function(){
        if(($(this).scrollTop() >= 70)){
            $header.addClass('active')
        }else{
            $header.removeClass('active')
        }
    })
})
