    $(document).ready(function(){
            var headerHeight = $('#header').height();
            var mainHeight = $('#main').height();
            var sec01Height = $('#sec01').height();
            var sec02Height = $('#sec02').height();
            var sec03Height = $('#sec03').height();
            var sec04Height = $('#sec04').height();
            //var sec04Height = $('#sec04 > .logo').height();
            var sec02pdHeight = $('.sec02_pd').height();
            var imgHeight = $('.sec02_img').height();
            var Height = headerHeight + mainHeight + sec01Height + sec02Height + sec03Height;

            $(window).scroll(function(){
                var scrTop = $(document).scrollTop();
                if(Height <= scrTop){
                    $('.sec04_wrapper').fadeIn(500);
                }else {
                    $('.sec04_wrapper').css('display','none');
                }
            });
            // 스크롤 내리면 Sec04 wrapper 노출 
            
            $(window).scroll(function(){
                var scrTop = $(document).scrollTop();
                if(scrTop >= headerHeight + mainHeight + sec02pdHeight/2) {
                    $('.sec02_img img').fadeIn(1000);
                } else {
                    $('.sec02_img img').fadeOut(500);
                }
            });
            // sec02 이미지 1 노출

            $(window).scroll(function(){
                var scrTop = $(document).scrollTop();
                if(scrTop >= headerHeight + mainHeight + sec02pdHeight*2) {
                    $('.sec02_img_02 img').fadeIn(1000);
                } else {
                    $('.sec02_img_02 img').fadeOut(500);
                }
            });
            // sec02 이미지 2 노출

            $(window).scroll(function(){
                var scrTop = $(document).scrollTop();
                console.log(scrTop);
                console.log(headerHeight + mainHeight + imgHeight*3);

                if(scrTop >= headerHeight + mainHeight + imgHeight*3) {
                    // $('.pd03_img_01 img').animate({
                    //     opacity: '1',
                    //     top: '50%'
                    // }, 500, function(){
                    //     $('.pd03_img_02 img').animate({
                    //         opacity: '1',
                    //         top: '50%'
                    //     }, 500, function(){
                    //         $('.pd03_img_03 img').animate({
                    //             opacity: '1',
                    //             top: '50%'
                    //         }, 500, function(){
                    //             $('.pd03_img_04 img').animate({
                    //                 opacity: '1',
                    //                 top: '50%'
                    //             }, 500);
                    //         });
                    //     });
                    // });
                    for(var i = 1; i < 5; i++) {
                        $('.pd03_img_0' + i).find('img').delay(i * 150).fadeIn(1000);
                    }
                }
            });
            // sec03 이미지 3 노출
        }); 
        

    function openModal(){
        $('.popping').fadeIn(300);
    }
    $('.close').on('click', function(){
        $('.popping').fadeOut(300);
    });
    // 언어 변경 

    $(document).ready(function(){
        $("#nav_btn").click(function(){
            $('.navi_cont').toggle();
            $('.navi').toggleClass('on');
        });
    });
    // 네비 노출 토글

    $('.sec03_wrapper a').hover(function(){
        $(this).find('.box').css('display','block');
        slideShow();
    }, function(){
        $(this).find('.box').css('display','none');
    });
    function slideShow() {            
    }
    // 해시 태그 

