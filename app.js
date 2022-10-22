// const mainImages = document.getElementsByTagName("img");
// const anchors = document.getElementsByTagName("a");
// const show_image_popup = document.getElementById("show_image_popup");
// const popUpImage = document.getElementById("pop-up-image");
// const closeButton = document.getElementById("close-btn");

// for (let i = 0; i < mainImages.length; i++) {
//     mainImages[i].addEventListener("click", function () {
//         for (let j = 0; j < mainImages.length; j++) {
//             mainImages[i].classList.remove("active");
//         }
//         this.classList.add("active");
//         let srcVal = this.src;
//         popUpImage.src = srcVal;
//         showModal();
//     });
// }
// function showModal() {
//     show_image_popup.style.display = "block";
// }
// closeButton.addEventListener("click", function () {
//     for (let i = 0; i < mainImages.length; i++) {
//         mainImages[i].classList.remove("active");
//     }
//     closeModal();
// });
// function closeModal() {
//     show_image_popup.style.display = "none";
// }

$(document).ready(function () {
    //header sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150 && $(this).scrollTop() < 550) {
            $(".main_h").addClass("sticky");
        } else {
            $(".main_h").removeClass("sticky");
        }
    });

    //photo gallery
    $(".mainImage>img").click(function () {
        let path = $(this).attr("src");
        $("#pop-up-image").attr("src", path);
        $(".mainImage>img").removeClass("active");
        $(".mainImage>img").addClass("active");
        $("#show_image_popup").fadeIn();
    });

    $("#close-btn").click(function () {
        $("#show_image_popup").slideUp();
        $(".mainImage>img").removeClass("active");
    });

    // Mobile Navigation
    $(".mobile-toggle").click(function () {
        if ($(".main_h").hasClass("open-nav")) {
            $(".main_h").removeClass("open-nav") &&
                $("nav ul").css("display", "none");
        } else {
            $(".main_h").addClass("open-nav") &&
                $("nav ul").css({
                    display: "flex",
                    "flex-direction": "column",
                    "text-align": "center",
                    "padding-top": "40px",
                });
        }
    });

    $(".main_h li a").click(function () {
        if ($(".main_h").hasClass("open-nav")) {
            $(".navigation").removeClass("open-nav");
            $(".main_h").removeClass("open-nav");
        }
    });
});

// navigation scroll
$("nav a").click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $("html, body").animate(
        {
            scrollTop: target,
        },
        500
    );
    event.preventDefault();
});
