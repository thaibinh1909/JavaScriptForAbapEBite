$(document).ready(() => {
    // alert("document loaded");
    $("#button1").click(() => {
        $("#text1").text("this text changed!");
    })
    $("#text1").on({
        mouseenter: function () {
            $(this)
                .text("hey! you hovered me!")
                .css("background-color", "DodgerBlue")
                .css("color", "white");
            
        },
        mouseleave: function () {
            $(this)
                .text("jQuery awesome!")
                .css("background-color", "")
                .css("color", "");
        }
    })
    $("#form-button").click(() => {
        $("#form").hide("slow"); // element "form-div"
    })
    $("#delete-button").click(() => {
        let confirmationText = "<div><p>thank you.</p></div>";
        $("#form-div").remove();
        $("div:last").append(confirmationText);
    })
})

$("#some-button").click(() => {
    $.get("http://example.web", (data, status) => {
        // some logic
    })
})


