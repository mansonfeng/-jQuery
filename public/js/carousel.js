$(function(){
    var $Lis = $('.carousel .banner .slide .list .item')
    var $Points = $('.carousel .banner .point .pointList .pointItem')
    banner()
    function banner(){
        var num =0;
        var timer = setInterval(function(){
            $($Lis[num]).removeClass('active')
            $($Points[num]).removeClass('active')
            num++;
            if(num === $Lis.length) {
                num = 0
            }
            $($Lis[num]).addClass('active')
            $($Points[num]).addClass('active')
        },3000)
    }
})
