

$(document).ready(function () {
    $("#signup_btn").click(function () {
        $("#main").animate({ left: "22.5%" }, 400);
        $("#main").animate({ left: "30%" }, 500);
        $("#loginform").css("visibility", "hidden");
        $("#loginform").animate({ left: "25%" }, 400);

        $("#signupform").animate({ left: "17%" }, 400);
        $("#signupform").animate({ left: "30%" }, 500);
        $("#signupform").css("visibility", "visible");
    });

    $("#login_btn").click(function () {
        $("#main").animate({ left: "77.5%" }, 400);
        $("#main").animate({ left: "70%" }, 500);
        $("#signupform").css("visibility", "hidden");
        $("#signupform").animate({ left: "75%" }, 400);

        $("#loginform").animate({ left: "83.5%" }, 400);
        $("#loginform").animate({ left: "70%" }, 500);
        $("#loginform").css("visibility", "visible");
    });




    $("#signup_btn2").click(function () {
        $("#main2").animate({ left: "22.5%" }, 400);
        $("#main2").animate({ left: "30%" }, 500);
        $("#loginform2").css("visibility", "hidden");
        $("#loginform2").animate({ left: "25%" }, 400);

        $("#signupform2").animate({ left: "17%" }, 400);
        $("#signupform2").animate({ left: "30%" }, 500);
        $("#signupform2").css("visibility", "visible");
    });

    $("#login_btn2").click(function () {
        $("#main2").animate({ left: "77.5%" }, 400);
        $("#main2").animate({ left: "70%" }, 500);
        $("#signupform2").css("visibility", "hidden");
        $("#signupform2").animate({ left: "75%" }, 400);

        $("#loginform2").animate({ left: "83.5%" }, 400);
        $("#loginform2").animate({ left: "70%" }, 500);
        $("#loginform2").css("visibility", "visible");
    });
});

$(document).ready(function () {
    $("#SouAluno").click(function () {
        $('#box').show('medium');
        // $('.test').css("filter", " brightness(25%)");
        $('#desfoque').css("filter", "brightness(25%)");
    });

    $("#SouProfessor").click(function () {
        $('#box2').show('medium');
        // $('.test').css("filter", " brightness(25%)");
        $('#desfoque').css("filter", "brightness(25%)");
    });

    $('#desfoque').not('#isso').click(function () {
        $('#box').hide('medium');
        $('#box2').hide('medium');
        $('#desfoque').css("filter", "brightness(100%)");
        $('.landing').css("filter", "brightness(100%)");
    });

    $('#desfoque').not('#isso').click(function () {
        $('#box').hide('medium');
        $('#box2').hide('medium');
        $('#desfoque').css("filter", "brightness(100%)");
        $('.landing').css("filter", "brightness(100%)");
    });

    $('#SouAluno').not('#isso').click(function () {
        $('#box2').hide('medium');
    });

    $('#SouProfessor').not('#isso').click(function () {
        $('#box').hide('medium');
    });

    $('#resto').not('#isso').click(function () {
        $('#box').hide('medium');
        $('#box2').hide('medium');
        $('#desfoque').css("filter", "brightness(100%)");
        $('.landing').css("filter", "brightness(100%)");
    });


})