$(document).ready(function () {

    $("span").each(function () { 

        $(this).hover(function () {

            $(this).css("background-color", "bisque");
            var st = $(this).text();
            if (st.includes("th")) {
                $(this).css({ "font-style": "italic", "text-shadow": "2px 2px pink", "font-weight": "bolder" });
            }
        }, function () {

                $(this).css("background-color", "white");

        });
    });
    
});