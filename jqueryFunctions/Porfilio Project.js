

$(document).ready(function () {
    let sliderImages = $(".slide"),
        arrowLeft = $("#arrow-left"),
        arrowRight = $("#arrow-right"),
        current = 0;

    // Clear all images
    function reset() {
        sliderImages.hide();
    }

    // Init slider
    function startSlide() {
        reset();
        sliderImages.eq(0).show();
    }

    // Show prev
    function slideLeft() {
        reset();
        sliderImages.eq(current - 1).show();
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages.eq(current + 1).show();
        current++;
    }

    // Left arrow click
    arrowLeft.on("click", function () {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Right arrow click
    arrowRight.on("click", function () {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });

    startSlide();

    // Read more/less button click
    let myfunction=$("#myBtn").on("click", function () {
        var dots = $("#dots1");
        var moreText = $("#more1");
        var btnText = $(this);

        if (dots.css("display") === "none") {
            dots.css("display", "inline");
            btnText.text("show more");
            moreText.css("display", "none");
        } else {
            dots.css("display", "none");
            btnText.text("show less");
            moreText.css("display", "inline");
        }
    });
});
let myfunc=$("#myBtn2").on("click", function () {
    var dots = $("#dots2");
    var moreText = $("#more2");
    var btnText = $(this);

    if (dots.css("display") === "none") {
        dots.css("display", "inline");
        btnText.text("show more");
        moreText.css("display", "none");
    } else {
        dots.css("display", "none");
        btnText.text("show less");
        moreText.css("display", "inline");
    }
});


$(document).ready(function () {

    $('#contact').load("/contact.html");

})
var colors = ["white", "black", "aqua",]
 var currentColor = 0 
 var lis1 = $(".message")
   var li2= $(".btn")
   
function changeColor(lis) {  
    --currentColor 
    if (currentColor < 0) currentColor = colors.length - 1 
    for (var i = 0; i < lis.length; i++) {
         lis[i].style.color = colors[(currentColor + i) % colors.length] }   }
         setInterval(function(){changeColor(lis1),
            changeColor(li2)},1000)


            
        
            
            
            
            
            
                 