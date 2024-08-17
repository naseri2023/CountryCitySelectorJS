let countriesSelectBox = document.getElementById("country")
let citySelected = document.getElementById("city")

let countries = {
    "Iran":["Tehran","Qom","Mashhad","Tabriz","Shiraz"],
    "Canada":["Quebec","Toronto","Montreal"],
    "United Kingdom":["London","Manchester","Arsenal","Liverpool"],
    "United States":["Florida","LosAngeles","SanDiego"]
}
function updateCities(){

let city = countries[countriesSelectBox.value]
    citySelected.innerHTML=""

city.forEach(function (items) {
    let option = document.createElement("option")
    option.value = items
    option.innerHTML=items
    citySelected.appendChild(option)
    console.log(city)

    })
}
