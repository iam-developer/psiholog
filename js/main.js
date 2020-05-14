
// Функция для слайдера (Диплом):

let big_img = document.querySelectorAll('.diplom-img');
let modalDiplom = document.querySelector('.modal-slider');
let modalDiplom2 = document.querySelector('.modal-slider2');
let modalDiplom3 = document.querySelector('.modal-slider3');

let index = 1;

slide(index);

function slide() {
    if(index < 1){index = big_img.length}
    if(index > big_img.length){index = 1}
        for(let i = 0; i < big_img.length; i ++) {
            big_img[i].style.display = 'none';
        }
            big_img[index-1].style.display = 'block';
            big_img[index-1].classList.add('wow', 'fadeIn');
            new WOW().init();
            dots(index);
           
}
function next() {
    slide(index += 1);
}
function prev() {
    slide(index -= 1);
}

    function diplomImg() {
       modalDiplom.classList.toggle("show-modal-slider");
    }
    function diplomImg2() {
       modalDiplom2.classList.toggle("show-modal-slider");
    }
    function diplomImg3() {
       modalDiplom3.classList.toggle("show-modal-slider");
    }
    function closeSlide() {
        modalDiplom.classList.toggle("show-modal-slider");
    }
    function closeSlide2() {
        modalDiplom2.classList.toggle("show-modal-slider");
    }
    function closeSlide3() {
        modalDiplom3.classList.toggle("show-modal-slider");
    }


// Bots:
 function dots() {
    let dot = document.querySelectorAll('.dots-item');

        for(let i = 0; i < dot.length; i ++) {
            dot[i].style.backgroundColor = 'rgb(204, 200, 200)';
        }
            dot[index-1].style.backgroundColor = 'rgb(124, 120, 120)';
 }

 // Функция для всплывающее окно Оставить заявку:
let modalContainer = document.querySelector('.modal-container');
let closeX = document.querySelector('.closeX');

function toggle_modal() {
    modalContainer.classList.toggle("show-modal");
}
openModal = toggle_modal;
closeX.onclick = toggle_modal;


// Читать дальше:

let readMore = document.querySelector('.read-more');
let about = document.querySelector('.about-her');
let closeText = document.querySelector('.close-text');

readMore.onclick = function() {
    about.style.display = "block";
    closeText.style.display = "block"
    this.style.display = "none";
}
closeText.onclick = function() {
    about.style.display = "none";
    readMore.style.display = "block"
    this.style.display = "none";
}

 // Слайдер блока "Отзывы":

$(document).ready(function() {
    $('.reviews-slide').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        Modecenter: false,
        waitForAnimate: false,
        slidesToScroll: 1, 
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

         // Кнопка наверх:
    $(window).scroll(function() {
        if($(this).scrollTop() != 0)
            $("#toTop").fadeIn();
        else
            $("#toTop").fadeOut();
    });
    
        $("#toTop").click(function() {
            $('body, html').animate({
                scrollTop:0
            }, 800);
        });

           // BURGER MENU 
$(".burger_menu").click(function() {
    $(".header-menu2").slideToggle(500);
        if($(".burger_menu").html() == '<i class="fas fa-bars"></i>') {
           $(this).html('<i class="fas fa-times"></i>');
        }
        else {
            $(this).html('<i class="fas fa-bars"></i>');
         }
    });

    // Скроллинг мобилное меню::

$('#aboutBtn').on("click", function(e){
    e.preventDefault();
        var top = $("#aboutMe").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 900);
});

$('#workBtn').on("click", function(e){
    e.preventDefault();
        var top = $("#work").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 900);
});

$('#servicesBtn').on("click", function(e){
    e.preventDefault();
        var top = $("#services").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 950);
});

$('#reviewsBtn').on("click", function(e){
    e.preventDefault();
        var top = $("#reviews").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 1000);
});

// Скроллинг для декстоп меню
$('.aboutDesk').on("click", function(e){
    e.preventDefault();
        var top = $("#aboutMe").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 900);
});

$('.workDesk').on("click", function(e){
    e.preventDefault();
        var top = $("#work").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 900);
});

$('.serviseDesk').on("click", function(e){
    e.preventDefault();
        var top = $("#services").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 900);
});

$('.reviewDesk').on("click", function(e){
    e.preventDefault();
        var top = $("#reviews").offset().top;
    $('html,body').animate({
       scrollTop: top
    }, 900);
});

$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        window.location.href = "thx.html";
        setTimeout(function() {
            th.trigger("reset");
        }, 1000);
    });
    return false;
});

});