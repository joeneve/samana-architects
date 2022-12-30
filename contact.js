$(function(){

    /* mobile nav logic */
    $("#hamb-icon").click(function(){
        $(this).hide();
        $(".x-icon").show();
        $(".menu-mobile").show();
    });

    $("#x-icon").click(function(){
        $(this).hide();
        $("#hamb-icon").show();
        $(".menu-mobile").hide();
    });

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          firstname: "required",
          lastname: "required",
          message: "required",
          email: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        // Specify validation error messages
        messages: {
          firstname: "Please enter your first name",
          lastname: "Please enter your last name",
          message: "Please provide your message",
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
          email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
    });


    /* newsletter */
    $("form[name='registration-news']").validate({
        // Specify validation rules
        rules: {
          email: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          }
        },
        // Specify validation error messages
        messages: {
          email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
    });
 
});