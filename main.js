let rickandmorty = {
     {
    "id": 216,
        "url": "https://www.tvmaze.com/shows/216/rick-and-morty",
            "name": "Rick and Morty",
                "type": "Animation",
                    "language": "English",
                        "summary": "<p>Rick takes Morty to another dimension to get some seeds for him but Morty's parents are considering to put Rick in a retirement home for keeping Morty away from school to help him in his lab.</p>",
        },
{
    "id": 14309,
        "url": "https://www.tvmaze.com/episodes/14309/rick-and-morty-1x02-lawnmower-dog",
            "name": "Lawnmower Dog",
                "type": "regular",
                    "summary": "<p>Morty's small, white dog Snuffles gets on the nerves of the family, so Rick quickly builds a knowledge enhancing helmet for the dog. In the meantime, Rick and Morty decide to incept the dreams of Morty's math teacher, Mr. Goldenfold in order to convince him to give Morty A's in math. While the duo are sent on an epic dream world journey, Snuffles slowly gains sentience, which leads to a slew of even more problems.</p>"
}
    
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
        console.log(data.id);
        $("#rickandmorty").html(data.id);

    });
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("rickandmorty").innerHTML = this.responseText;
        }