var link = 'https://api-ratp.pierre-grimaud.fr/v4/';
var apiStations = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/8";


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
    var e = document.getElementById("stationmetro");
    var metroselect = e.options[e.selectedIndex].text;
    var url = this.link + 'schedules/metros/8/' + metroselect +'/A+R';
    
    fetch(url, {
      method: "get"
    })
    .then(response => response.json())
    .then(data => {
      let test= data.result.schedules;
      let dest=''
      
      for (var i = 0; i < test.length; i++) {
        dest += "<div id = 'data' value=> Direction: " + test[i].destination + " <br>arrivé dans " +test[i].message +"<br></div>" 
      }
      document.getElementById("results").innerHTML = dest;
      var element = document.getElementById("data");
      element.style.backgroundColor = "#00FF00";
  })
  })

}
req1();


