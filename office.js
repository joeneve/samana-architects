$(function(){
    $("#top-residential").click(function(){
        $("#bottom-residential").toggle(500);
        $("#more-residential").toggle();
        $("#less-residential").toggle();
    });
    $("#top-office").click(function(){
        $("#bottom-office").toggle(500);
        $("#more-office").toggle();
        $("#less-office").toggle();
    });
    $("#top-commerce").click(function(){
        $("#bottom-commerce").toggle(500);
        $("#more-commerce").toggle();
        $("#less-commerce").toggle();
    });

    /* slider logic */

    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let images = document.querySelector(".slideshow").children;
    let totalImages = images.length;
    let index = 0;

    prev.addEventListener("click", () => {
        nextImage("prev");
    });

    next.addEventListener("click", () => {
        nextImage("next");
    });

    function nextImage(direction) {
        if (direction == "next") {
            index++;
            if (index == totalImages) {
                index = 0;
            }
        } else {
            if (index == 0) {
                index = totalImages -1;
            } else {
                index--;
            }
        }

        for (let i = 0; i < totalImages; i++) {
            images[i].classList.remove("main");
        }
        images[index].classList.add("main");
    }

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