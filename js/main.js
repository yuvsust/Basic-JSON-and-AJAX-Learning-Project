var ourRequest = new XMLHttpRequest()
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info")
var pageCounter = 1

btn.addEventListener("click", function () {
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText)
        console.log(ourData)
        renderHtml(ourData)
    }
    ourRequest.send()
    pageCounter++
    if (pageCounter > 3) {
        btn.classList.add('hide-me')
    }
})

function renderHtml(data) {
    var htmlString = ""
    for (var i in data) {
        htmlString += "<p><strong>" + data[i].name + "</strong> is a " + data[i].species + ". He loves "

        for (var j in data[i].foods.likes) {
            if (j == data[i].foods.likes.length - 1) {
                htmlString += "and " + data[i].foods.likes[j]
            }
            else {
                htmlString += data[i].foods.likes[j] + " "
            }
        }
        htmlString += "</p><br>"
    }
    animalContainer.insertAdjacentHTML("beforeend", htmlString)
}