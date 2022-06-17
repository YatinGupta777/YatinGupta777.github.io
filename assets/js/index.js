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
  // The location of Uluru
  var locations = [
      ['Bangkok', 13.75633, 100.50176, 17],
      ['Cocoa Beach', 28.32, -80.60755, 16],
      ['NASA space Kennedy center', 28.59845, -80.6786, 15],
      ['Daytona', 29.21081, -81.02283, 14],
      ['Tampa', 27.95057, -82.45717, 13],
      ['St Augustine', 29.90124, -81.31243, 12],
      ['Clearwater',27.96585, -82.8001, 11],
      ['Kissimmee', 28.29195, -81.40757, 10],
      ['Miami', 25.79065, -80.13004, 9],
      ['Orlando', 28.53833, -81.37923, 8],
      ['Goa', 15.29932, 74.12399, 15],
      ['Jodhpur', 26.23894, 73.0243, 14],
      ['Darjeeling', 27.036, 88.26267, 13],
      ['Gangtok', 27.33893, 88.6065, 12],
      ['Naintal',29.3803, 79.46356, 11],
      ['Rishikesh', 30.08692, 78.26761, 10],
      ['Shimla', 31.10481, 77.1734, 9],
      ['Agra', 27.17667, 78.00807, 8],
      ['Vaishno Devi', 33.03082, 74.94904, 7],
      ['Shirdi', 19.76453, 74.47621, 6],
      ['Kanyakumari', 8.0883, 77.53845, 5],
      ['Amritsar', 31.63397, 74.87226, 4],
      ['Odisha', 20.95166, 85.09852, 3],
      ['Mumbai', 19.07598, 72.87765, 2],
      ['Delhi', 28.68627, 77.22178, 1]
    ];
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
    mapIframe.frameBorder ="0";
    mapIframe.scrolling = "0";
    mapIframe.style.border= "none";
    mapIframe.style.background = "white";
    mapDiv.appendChild(mapIframe)
}