var link = 'https://api-ratp.pierre-grimaud.fr/v4/';
var apiStations = "https://api-ratp.pierre-grimaud.fr/v4/stations/metros/8";

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
    Validate();
    
  })
  function Validate() {
    document.getElementById("results").innerHTML =""
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
            dest += "<div id='dataapi' value=> Direction: " + test[i].destination + " <br>Information :" +test[i].message +"<br></div><br>" 
          }
          document.getElementById("results").innerHTML = dest;
          var element = document.getElementById("dataapi");
          element.style.backgroundColor = "#00FF00";
        
      })
    }