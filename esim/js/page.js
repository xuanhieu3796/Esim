$(document).ready(function() {
// Swiper: Slider
    new Swiper('.swiper_reviews', {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20
    });

    new Swiper('.swiper_video', {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1028: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});


$(document).on('click', '[nh-show-password]', function(e) {
    e.preventDefault();

    var inputPassword = $(this).closest('.form-group').find('input[name="password"]');
    var attrType = inputPassword.attr('type') == 'password' ? 'text' : 'password';
    inputPassword.attr('type', attrType);
  });


$(document).ready(function() {  
    $(document).on('click', '[nh-quantity-product="subtract"]', function(e){
        var wrapElement = $(this).closest('[nh-quantity-product="wrap"]');
        var input = wrapElement.find('[nh-quantity-product="quantity"]');
          var value = parseInt(input.val()) - 1;
          if(value < 1) value = 1;
          input.val(value);
      });

      $(document).on('click', '[nh-quantity-product="add"]', function(e){
        var wrapElement = $(this).closest('[nh-quantity-product="wrap"]');
        var input = wrapElement.find('[nh-quantity-product="quantity"]');
          var value = parseInt(input.val()) + 1;
          if(value > 1000) value = 1000;
          input.val(value);
      });
});

$(document).ready(function() {
    
    $('[nh-video="start"]').on( "click", function() {
      var wrapElement = $(this).closest('.item-video');
      var url_video = wrapElement.find('[nh-video="start"]').data('src');
      
      $('[nh-video="video"]').addClass('wrp-video-banner');
        $('[nh-video="video"]').html('<video id="entire-video" autoplay loop muted><source src="'+ url_video +'" type="video/mp4"></video>');
      $(this).remove();
    });

    $('[nh-video="video"]').on( "click", function(e) {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){   
            $('#entire-video').trigger('pause');
        } else {
            $('#entire-video').trigger('play');
        }
    });
});
