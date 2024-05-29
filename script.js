document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var destination = document.getElementById("destination").value;
    var start = document.getElementById("start").value;
    var date = document.getElementById("date").value;
    if (validateBooking(destination, date)) {
        var ticketInfo = "Start from " + start + "<br>Date: " + date;
        document.getElementById("ticketInfo").innerHTML = ticketInfo;
        displayAvailableBuses(destination,start);
    } else {
        alert("Please fill out all fields.");
    }
});

function validateBooking(destination, date) {
    return destination !== "" && date !== "";
}

function displayAvailableBuses(destination,start) {
    
    var buses = [
        { name: "Tech Express", departure: "08:00 AM", arrival: "12:00 PM", fare: "rs-770" },
        { name: "Innovation Shuttle", departure: "10:00 AM", arrival: "02:00 PM", fare: "rs-750" },
        { name: "Code Cruiser", departure: "12:00 PM", arrival: "04:00 PM", fare: "rs-810" }
    ];

    var busListHTML = `<h2>Available Buses for ${start} To ${destination}</h2>`;
    busListHTML += "<ul>";
    buses.forEach(function(bus) {
        busListHTML += "<li><strong>" + bus.name + "</strong><br>";
        busListHTML += "Departure: " + bus.departure + "<br>";
        busListHTML += "Arrival: " + bus.arrival + "<br>";
        busListHTML += "Fare: " + bus.fare + "</li>";
    });
    busListHTML += "</ul>";

    document.getElementById("busList").innerHTML = busListHTML;
}
