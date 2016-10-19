$(document).ready(function () {
    console.log("ready!");
    $(".dropdown-button").dropdown();
});

$(".movie").click(function(e){
    $(".content iframe").remove();
    $('<iframe width="100%" height="100%" frameborder="0" allowfullscreen autoplay></iframe>')
    .attr("src", "http://www.youtube.com/embed/" + $(this).attr("movieSrc") + "?autoplay=1")
    .appendTo(".content");
});