



var Trains = []
var unclickedTrains = []
const searchTrain = gif => {
    $.get("https://transportapi.com/v3/uk/train/station/WAT///timetable.json?app_id=c50a71de&app_key=589821feff923209b1caab6838b53538&train_status=passenger").then(response => {
        for (let i = 0; i < response.departures.all.length; i++) {

            let destinationName = `${response.departures.all[i].destination_name}`;
            let trainName = `${response.departures.all[i].operator_name}`;
            let platform = `${response.departures.all[i].platform}`;
            let departureTime = `${response.departures.all[i].aimed_departure_time}`;
           
             $(".destination").append(


                '<br><br>' + destinationName

            )
            $(".train-name").append(
                '<br><br>' + trainName
            )
            $(".platform").append(
                '<br><br>' + platform
            )
            $(".departure").append(
                
                '<br><br>' + departureTime
            )
        }

    })
}
searchTrain()
