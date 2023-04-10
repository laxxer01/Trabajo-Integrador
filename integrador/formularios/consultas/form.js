$.validator.setDefaults( {
    submitHandler: function () {
       alert( "submitted!" );
    }
 });
 
 
 $(document).ready(function(){
    $('#signupForm').validate({
       rules: {
          fullname: {
             required: true,
             minlength: 5
          },
          comments: {
             required: true
          },
          password: {
             required: true,
             minlength: 5
          },
          confirm_password: {
             required: true,
             minlength: 5,
             equalTo: "#password"
          },
          email: {
             required: true,
             email: true
          },
          agree: "required"
       },
       messages: {           
          fullname: {
             required: "Ingresa tu nombre completo",
             minlength: "Tu nombre debe ser de no menos de 5 caracteres"
          },
          comments: "Ingresa un comentario",
          password: {
             required: "Ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres"
          },
          confirm_password: {
             required: "Ingresa tu contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres",
             equalTo: "Ingresa la misma contraseña de arriba"
          },
          email: "Ingresa un correo válido",
          agree: "Acepta nuestros terminos de condiciones",
          luckynumber: {
             required: "Por favor"
          }
       },
       errorElement: "em",
       errorPlacement: function (error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");
 
          if (element.prop( "type" ) === "checkbox") {
             error.insertAfter(element.parent("label") );
          } else {
             error.insertAfter(element);
          }
       },
       highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
       },
       unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
       } 
    });
 });