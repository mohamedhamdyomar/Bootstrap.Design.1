$(function(){
    var windowh= $(window).height(),
    navbarh =$(".navbar").innerHeight(),
    upperh= $(".upper-bar").innerHeight();
    $(".slider , .carousel-inner").height(windowh -(navbarh+upperh));

    $(".featured-worked ul li").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");

        if( $(this).data('class') === "All"){
          $(".shuffle-imgs .col-md").css("opacity","0.5");
        }

        else{
            $(".shuffle-imgs .col-md").css("opacity","0.1");
            $($(this).data('class')).parent().css("opacity","1");
        }
    });

});