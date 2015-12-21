$(document).ready(function () {

    //menu
    $(".toggle").click(function () {
        $(".main-nav").slideToggle();
        $("a.logo").toggleClass("menu-open");
        $(".main-header").toggleClass("dark")
    });

    var t = function () {
        $(".main-nav").slideUp();
        $(".main-header").removeClass("dark");
        $("a.logo").removeClass("menu-open");
    };

    $(".main-nav a").click(t);
    $("a.logo").click(t);


    //scroll
    $(window).scroll(function (event) {

        if (window.pageYOffset >= $(window).height()) {
            $(".main-header").addClass("not-first-page");
        } else {
            $(".main-header").removeClass("not-first-page");
        }
    });

    //form
    $("a[href=#order]").click(function () {
        setTimeout(function () {
            $("#order-name").focus()
        }, 10);
    })

    $("form").on('submit', function (event) {
        event.preventDefault();
        $(".alert").text("Подождите...");
        $("form input").removeClass("error");

        $.ajax({
                method: "POST",
                url: "#.php",
                data: $(this).serializeArray()
            })
            .done(function () {
                $(".alert").text("Мы вам перезвоним!").css("color", "#fff");
                $('form input').val('');
            }).fail(function () {
                $(".alert").text("Не получилось отправить данные")
            });
    });

    var check = function () {
        if ($("input:invalid").length) {
            $("form input").addClass("error");
            $(".order-submit").css({
                "background": "#c2c2c2",
                "color": "#c2c2c2"
            }).addClass("error");
            $(".alert").text("Не заполнены необходимые поля!").css("color", "#ff6066")
        } else {
            $("form input").removeClass("error");
            $(".order-submit").css("color", "#fff");
            $(".alert").text("")
        }
    }
    $("form input").blur(check);
    $("form input").keyup(check);

})