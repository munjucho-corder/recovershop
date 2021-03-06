$(document).ready( function(){

    /**
     * @param string
     * @brief header sub 슬라이드 동작.
     */
    $('.header_slide').slick({
        slide: 'div',		
        infinite : true, 	
        slidesToShow : 1,		
        slidesToScroll : 1,		
        speed : 1000,	
        arrows : true, 		
        dots : false, 		
        autoplay : true,			
        autoplaySpeed : 700, 		
        prevArrow : ".slick-prev",		
        nextArrow : ".slick-next",		
        dotsClass : "slick-dots", 	
        draggable : true, 	

    });


    /**
     * @param string
     * @brief header left 탭메뉴 탭동작.
     */
    $('.tablinks').each( function(){
        $(this).click( function(){
            
            $(".tablinks").removeClass("f_active");
            $(this).addClass("f_active");
            
        
            $(".tabcontent").removeClass("tab_active");
            $(".tabcontent").css("display", "none");
        
            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");
        });
    
    });

    /**
     * @param string
     * @brief header 메뉴버튼 클릭시 header left 메뉴 펼쳐짐. 
     */
    $('.menu_btn, .M_bg,.hdl_close').click( function(){ 
        $(".hd_wrap, .M_bg, .hdl_close ").toggle();

    });

    /**
    * @brief left_menu login check
    */
    $('#login_form').submit( function(e){
        e.preventDefault();
        var formObject = $(this).serializeObject();
        if(formObject['mb_id'] == "")
        {
            alert("아이디를 입력해주세요.");
            return false;
        }

        if(formObject['mb_password'] == "")
        {
            alert("비밀번호를 입력해주세요.");
            return false;
        }

    });
    
    /**
     * @param string
     * @brief aside right top, bottom 버튼 동작.
     */
    $(".top_btn").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $(".bottom_btn").click(function () {
        $('html').animate({
            scrollTop: ($('footer').offset().top)
        }, 500);
    });

});