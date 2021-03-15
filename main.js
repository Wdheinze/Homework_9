let rickAndMorty = {
    "id": 216,
    "url": "https://www.tvmaze.com/shows/216/rick-and-morty",
    "name": "Rick and Morty",
    "type": "Animation",
    "language": "English"
}

$(function () {
    $("button").click(function () {
        showrickandmorty();
    });
});


function showrickandmorty() {
    $("#rickandmorty").html("hi")
    $.getJSON("data/dataset.JSON", function (data) {

        console.log(data.id);
        $("#rickandmorty").html(data.id);

    });
}