$(document).ready(function() {
    $( "#student" ).click(function() {
        this.disabled = true;
        $(this).css("border", "2px #03A9F4 solid");
        $( "#instructor" ).css("border", "none");
        $( "#instructor" ).prop('disabled',false);
        $( ".courses" ).empty();
        $( ".courses" ).html("<div class=\card blue lighten-1\"><div class=\"card-content\"><span class=\"card-title\">HST 318</span></div><div class=\"card-action\"><a href=\"\">Home</a><a href=\"\">Calendar</a></div></div><div class=\"card blue lighten-1\"><div class=\"card-content\"><span class=\"card-title\">SER 321</span></div><div class=\"card-action\"><a href=\"\">Home</a><a href=\"\">Calendar</a></div></div>");
    });

    $( "#instructor" ).click(function() {
        this.disabled = true;
        $(this).css("border", "2px #03A9F4 solid");
        $( "#student" ).css("border", "none");
        $( "#student" ).prop('disabled',false);
        $( ".courses" ).empty();
        $( ".courses" ).html("<div class=\card blue lighten-1\"><div class=\"card-content\"><span class=\"card-title\">SER 315</span></div><div class=\"card-action\"><a href=\"\">Home</a><a href=\"\">Calendar</a></div></div>");
    });
});