$(document).ready(function () {
    $("#convert").on("click", function () {
        var lang_one = $("#lang_one").val();
        var lang_two = $("#lang_two").val();
        var text = $("#text").val();

        $.ajax({
            url: "process.php",
            type: "POST",
            data: { 
                lang_one: lang_one, 
                lang_two: lang_two, 
                text: text 
            },
            beforeSend: function() {
                $('#convert').html('converting ...');
            },
            complete: function() {
                $('#convert').html('convert');
            },
            success: function (status) {
                text = $("#text").val(status);
            },
        });

    });
});