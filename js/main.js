$(document).ready(function(){
    // nav
    $("nav>ul>li").hover(function(){
        $(this).find('li').fadeIn(150);
    },function(){
        $(this).find('li').fadeOut(150);
    });
    
    // slide
    var slideheight=$(".slide_con").height();
    function slidetopmove() {
        $(".slide_box").animate({
            top: -slideheight
        },function(){
            $(".slide_con:first-child").appendTo(".slide_box");
            $(".slide_box").css("top",0);
        });
    }
    setInterval(slidetopmove, 3000);

    // gallery 
    $(".gallery-box .ga-img:nth-child(2)").click(function(){
        location.href = "https://www.naver.com";
    });

    // pop
    $("#pop").hide();
    $(".notice ul li:first-child").click(function(){
        $("#pop").show();
    });
    $("#pop button").click(function(){
        $("#pop").hide();
    });



});