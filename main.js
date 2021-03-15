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
    //$("#rickandmorty").html("hi")
    $.getJSON("data/dataset.JSON", function (data) {
        console.log(data);
        console.log(data[0].id);
        var temp = "";
        for(var i = 0; i < data.length; i++)
        {
            temp = temp + data[i].id + "<br>" + data[i].url 
            + "<br>" + data[i].name + "<br>" + data[i].type + "<br>"
            + data[i].summary + "<p>";
        }
        $("#rickandmorty").html(temp);

    });
}