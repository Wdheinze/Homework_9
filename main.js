let rickAndMorty = {
    "id": 216,
    "url": "https://www.tvmaze.com/shows/216/rick-and-morty",
    "name": "Rick and Morty",
    "type": "Animation",
    "language": "English"
}

$.fn.faden = function () {
    this.css("background-image", "linear-gradient(white, black)");
    return this;
};

$(function () {
    $("button").click(function () {
        showrickandmorty();
        $("body").faden();
    });
});


function showrickandmorty() {
    //$("#rickandmorty").html("hi")
    $.getJSON("data/dataset.JSON", function (data) {
        console.log(data);
        console.log(data[0].id);
        var temp = "";
        for (var i = 0; i < data.length; i++) {
            temp = temp + data[i].id + "<br>" + data[i].url
                + "<br>" + data[i].name + "<br>" + data[i].type + "<br>"
                + data[i].summary + "<p>";
        }
        $("#rickandmorty").html(temp);

    });
}