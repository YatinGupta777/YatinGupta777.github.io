/*
    Carousel
*/
// var myNav = document.getElementById('myNavbar');
// window.onscroll = function () { 
//     "use strict";
//      if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 200 )
//     {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

// Initialize and add the map
function initMap() {
    let zoom = 1;
    if($(window).width()>=794)
    {
      zoom = 3
    } 
    const mapDiv = document.getElementById("map");
    const mapIframe = document.createElement("iframe");
    mapIframe.src = `https://www.google.com/maps/d/u/0/embed?mid=1YuFkPiqAtrCDTOoGpQB_FVnX0Pndjhmz&ehbc=2E312F&z=${zoom}`
    mapIframe.width = '100%';
    mapIframe.height = '500em';
    mapIframe.style.border= "none";
    mapIframe.style.background = "white";
    mapDiv.appendChild(mapIframe)
}

initMap();