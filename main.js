var apiDestinations = "https://api-ratp.pierre-grimaud.fr/v4/destinations/metros/8";
var apiStations = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/8";
var apiHorairesA = "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/8/balard/A"

function req1() {
  fetch(apiStations, {
    method: "get"
  })
  .then(response => response.json())
  .then(data => {
    let allstations = data.result.stations;
    let html = '';
    for (var i = 0; i < allstations.length; i++) {
      html += "<option value=" + allstations[i].slug + ">" + allstations[i].name + "</option>"
    }
    document.getElementById("stationmetro").innerHTML = html;
  })
}
req1();


