"use strict"; //Checking webp support

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //Header-Burger

/*
function burgerMenu() {
    let menu = $(".burger__menu");
    let burgerButton = $(".burger-menu__button");
    let links = $(".burger-menu__link");
    let overlay = $(".burger__menu-overlay");

    burgerButton.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    })

    links.on('click', () => toggleMenu());

    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger__menu-active');

        if(menu.hasClass('burger__menu-active')){
            $('body').css('overflow', 'hidden');
        }else{
            $('body').css('overflow', 'visible');
        }
    }
}
*/

$(document).ready(function () {
  var menu = $(".burger__menu");
  var burgerButton = $(".burger-menu__button");
  var links = $(".burger-menu__link");
  var overlay = $(".burger__menu-overlay");
  burgerButton.on('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  links.on('click', function () {
    return toggleMenu();
  });
  overlay.on('click', function () {
    return toggleMenu();
  });

  function toggleMenu() {
    menu.toggleClass('burger__menu-active');

    if (menu.hasClass('burger__menu-active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}); //Header-scroll

$(document).on('click', '.menu__list > .menu__item > a[href^="#"]', function (event) {
  event.preventDefault();
  $('.headerBurger').click();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
}); //Header-Slider

$(document).ready(function () {
  $(".next__slide").click(function () {
    var currentSlide = $('.slider-items__item.current__slide');
    var currentSlideIndex = $(".slider-items__item.current__slide").index();
    var nextSlideIndex = currentSlideIndex + 1;
    var nextSlide = $(".slider-items__item").eq(nextSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass("current__slide");

    if (nextSlideIndex == $(".slider-items__item:last").index() + 1) {
      $(".slider-items__item").eq(0).fadeIn(1000);
      $(".slider-items__item").eq(0).addClass("current__slide");
    } else {
      nextSlide.fadeIn(1000);
      nextSlide.addClass("current__slide");
    }
  });
  $(".prev__slide").click(function () {
    var currentSlide = $('.slider-items__item.current__slide');
    var currentSlideIndex = $(".slider-items__item.current__slide").index();
    var prevSlideIndex = currentSlideIndex - 1;
    var prevSlide = $(".slider-items__item").eq(prevSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass("current__slide");
    prevSlide.fadeIn(1000);
    prevSlide.addClass("current__slide");
  });
});