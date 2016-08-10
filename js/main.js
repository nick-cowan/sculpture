$(function(){


//http://960.gs/ - basic grid, might be better to use than Bootstrap

function mobileDetect(){
  var $viewportWidth = $(window).width();
  var mobileThreshold = 500;
  return $viewportWidth < mobileThreshold;
}

//https://jonsuh.com/hamburgers/ -  hamburger menu
$( '.hamburger' ).on('click', function(e) {
  $( '.navigation' ).toggle();
  $( '.navigation').toggleClass('mobile-menu');
  $( '.logo').toggle();
  $( '.hamburger' ).toggleClass('is-active');
  e.preventDefault();
});



//on load nav
  if(mobileDetect()){
      $(".hamburger").show();
      $(".navigation").hide();
      $( "#home" ).show();
    } else{
      $(".navigation").show();
      $(".hamburger").hide();
      $( "#home" ).hide();
  }

//on viewport resize
  $(window).on('resize', function() {
    if(mobileDetect()){
      console.log('hide nav');
      $('.navigation').hide();
      $('.hamburger').show();
      $( "#home" ).show();
    }
    else {
      $('.navigation').show();
      $('.hamburger').hide();
      $( "#home" ).hide();
    }
  });

//if nav is open on resize, close nav


//nav if closed, do nothing

//lightbox for ./gallery.html
  $(".fancybox").fancybox();



  $('#burger-delivery').validate({
    rules: {
      fullName: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      fullName: {
        required: "Enter your name",
      },
      email: {
        required: "Enter a valid email address",
      },
      address1: {
        required: "Enter your house or flat number",
      },
      address2: {
        required: "Enter your street",
      },
      address3: {
        required: "Enter your town",
      },
      postcode: {
        required: "Enter your postcode",
      }
    },
    errorClass : "form-group",
    // use highlight and unhighlight
    highlight: function (element, errorClass, validClass) {
        $(element).parents('.form-group')
        .addClass("has-danger");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).parents('.form-group')
      .removeClass("has-danger");
    }
  });

    $('#order-burger').validate({
      messages: {
        burgerType: {
          required: "You didn't choose a burger",
        }
      },
      errorClass : "form-group",
      // use highlight and unhighlight
      highlight: function (element, errorClass, validClass) {
          $(element).parents('.form-group')
          .addClass("has-danger");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parents('.form-group')
        .removeClass("has-danger");
      }
  });

  $('#burger-fillings').validate({
    messages: {
      fillings: {
        required: "You didn't choose a burger",
      }
    },
    errorClass : "form-group",
    // use highlight and unhighlight
    highlight: function (element, errorClass, validClass) {
        $(element).parents('.form-group')
        .addClass("has-danger");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).parents('.form-group')
      .removeClass("has-danger");
    }
});
// <!-- put a data attribute on the form field to be location:href - then the next page -->
// <!--
// bind event to submit button to look at what data has been chosen in localstorage + e.preventDefault to stop form submitting -->
$("#order-burger").on('submit', function(e) {
  // e.preventDefault();
  var selectedType = this.burgerType.value;

  if (selectedType) {
    console.log(selectedType);

//swtich is a better way of doing if else, if you are writing it a lot of times
    if (selectedType === 'veggie') {
      $(this).attr('action', 'veggie.html');
    } else {

    }
  }
});

//stop form from submitting

});
