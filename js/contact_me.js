// $(function() {
//   $('#name').keyup(function(){
//     namevalidation();
//   });



//   // this is my function


// function namevalidation(){
//   console.log("fghj")
//   var name=$('#name').val();
//   var letters=/^[-a-zA-Z-()]+(\s+[-a-zA-z-()]+)*$/;
//   if(name==""){
//     $('#namespan').html("filed is required")
//     return false;
//   }
//   else if(name.match(letters)){
//     $('#namespan').html("")
//     return true;
//   }
//   else if(name==" "){
//     $('#namespan').html("Don't use space at first letter")\
//     return false;
//   }
//   else{
//     $('#namespan').html("Use only character")
//     return false;
//   }

// }

// // this is old one
//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var phone = $("input#phone").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//       $.ajax({
//         url: "././mail/contact_me.php",
//         type: "POST",
//         data: {
//           name: name,
//           phone: phone,
//           email: email,
//           message: message
//         },
//         cache: false,
//         success: function() {
//           // Success message
//           $('#success').html("<div class='alert alert-success'>");
//           $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-success')
//             .append("<strong>Your message has been sent. </strong>");
//           $('#success > .alert-success')
//             .append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         error: function() {
//           // Fail message
//           $('#success').html("<div class='alert alert-danger'>");
//           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
//           $('#success > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         complete: function() {
//           setTimeout(function() {
//             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//           }, 1000);
//         }
//       });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
//  });



$(document).ready(function () {

  $('#name').keyup(function () {
    namevalidation();
  });

  $('#email').keyup(function () {
    emailValidation();
  })

  $('#phone').keyup(function () {
    mobileValidation();
  })

  $('#messagetext').keyup(function () {
    messageValidation();
  })







})






// this is my function


function namevalidation() {

  var name = $('#name').val();
  var letters = /^[A-Za-z]+([\ A-Za-z]+)*/;
  if (name == "") {
    $('#namepara').html("filed is required")
    return false;
  }
  else if (name.match(letters)) {
    $('#namepara').html("")
    return true;
  }

  else {
    $('#namepara').html("Use only character")
    return false;
  }

}

function emailValidation() {
  var email = $('#email').val();
  var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (email == "") {
    $('#emailpara').html("Filed is required")
    return false;
  } else if (email == " ") {
    $('#emailpara').html("Don't use Space at first letter");
    return false;
  }
  else if (email.match(letters)) {
    $('#emailpara').html("")
    return true;
  } else {
    $('#emailpara').html("Enter valid E-mail")
    return false;
  }
}

function mobileValidation() {
  var mobile = $('#phone').val();
  var letters = /^\d{10}$/;
  if (mobile == "") {
    $('#mobilepara').html("Filed is required")
    return false;
  } else if (mobile.match(letters)) {
    $('#mobilepara').html("")
    return true;
  } else {
    $('#mobilepara').html("Enter valid mobile number")
    return false;
  }

}

function messageValidation() {

  var message = $('#messagetext').val();
  if (message == "") {
    $('#messagepara').html("Filed is required")
    return false;
  } else if (message == " ") {
    $('#messagepara').html("Don't use Space at first letter")
    return false;

  } else if (message.length <= 15) {
    $('#messagepara').html("Enter minimum 15 character")
    return false;
  } else if (message.length > 15) {
    $('#messagepara').html("")
    return true;
  } else {
    $('#messagepara').html("")
    return true;
  }
}





