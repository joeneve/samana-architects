$(function(){
    setTimeout(function(){
        $(".main-heading").fadeIn("slow");
    }, 1000);
    
    setTimeout(function(){
        $(".sub-heading").fadeIn("slow");
    }, 2000);


    $("#residential-pill").click(function(){
        $(this).css("background-color", "#8bacd1");
        $(".office-pill").css("background-color", "white");
        $(".commerce-pill").css("background-color", "white");
        $(this).on({
            mouseenter: function(){
                $(this).css("background-color", "#8bacd1");
            },
            mouseleave: function(){
                $(this).css("background-color", "#8bacd1");
            }
        });
        $(".office-pill").on({
            mouseenter: function(){
                $(this).css("background-color", "#ebf3ff");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            }
        });
        $(".commerce-pill").on({
            mouseenter: function(){
                $(this).css("background-color", "#ebf3ff");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            }
        });
        $(".residential").fadeIn(1000);
        $(".office").css("display", "none");
        $(".commerce").css("display", "none");
    });

    /*  */

    $("#office-pill").click(function(){
        $(this).css("background-color", "#8bacd1");
        $(".residential-pill").css("background-color", "white");
        $(".commerce-pill").css("background-color", "white");
        $(this).on({
            mouseenter: function(){
                $(this).css("background-color", "#8bacd1");
            },
            mouseleave: function(){
                $(this).css("background-color", "#8bacd1");
            }
        });
        $(".residential-pill").on({
            mouseenter: function(){
                $(this).css("background-color", "#ebf3ff");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            }
        });
        $(".commerce-pill").on({
            mouseenter: function(){
                $(this).css("background-color", "#ebf3ff");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            }
        });
        $(".residential").css("display", "none");
        $(".office").fadeIn(1000)
        $(".office").css("display", "flex");
        $(".commerce").css("display", "none");
    });

    $("#commerce-pill").click(function(){
        $(this).css("background-color", "#8bacd1");
        $(".residential-pill").css("background-color", "white");
        $(".office-pill").css("background-color", "white");
        $(this).on({
            mouseenter: function(){
                $(this).css("background-color", "#8bacd1");
            },
            mouseleave: function(){
                $(this).css("background-color", "#8bacd1");
            }
        });
        $(".residential-pill").on({
            mouseenter: function(){
                $(this).css("background-color", "#ebf3ff");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            }
        });
        $(".office-pill").on({
            mouseenter: function(){
                $(this).css("background-color", "#ebf3ff");
            },
            mouseleave: function(){
                $(this).css("background-color", "white");
            }
        });
        $(".residential").css("display", "none");
        $(".office").css("display", "none");
        $(".commerce").fadeIn(1000)
        $(".commerce").css("display", "flex");
    });

    $("#button-click").click(function(){
        $("#button-content").toggle(200);
        $(".arrow-less").toggle();
        $(".arrow-more").toggle();
    }); 


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



    /* newsletter */
    $("form[name='registration']").validate({
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