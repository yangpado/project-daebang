/* gnb */
$(function(){
    $('.gnb>li>a').on('mouseenter focus',function(){
        var gnbindex = $('.gnb>li>a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
    });
    $('header').on('mouseleave',function(){
        $('.gnb .inner').removeClass('on');
    })
})

// fix header
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

// 윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
});

// 고정header함수 -> fixHeader(); 작성
function fixHeader(){
    if(scrollFix > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// 글자애니메이션 Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

// .top-visual slide slick js
$(function(){
    $('.visual .slide').slick({
        arrow:true,
        dots:true,
        autoplay:true,
        fade:true,
        autoplaySpeed:7000,
        pauseOnhover:false,
        pauseOnfocus:false
    });
    $('.slick-prev').text("prev");

    // .slide2 slide
    $('.slide2').slick({
        arrow:false,
        dots:true,
        autoplay:true,
        infinite:true,
        slidesToShow:2,
        slideToScroll:1,
        autoplaySpeed:5000,
        pauseOnhover:true,
        pauseOnfocus:true
    });

    $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지");
    $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차");
    $('.slide2 #slick-slide-control12').text("화성동탄1차 대방디엠시티 더 센텀");
    $('.slide2 #slick-slide-control13').text("광주 수원 대방노블랜드 6차");
});

