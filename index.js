//Function checking if email was entered for newsletter
function newsletter() {
  if (document.getElementById("email").value === "") {
    alert("Please input a valid email address");
  } else {
    alert("Thank you for subscribing to our newsletter!");
  }
}
// Initialize and add the map
function initMap() {
  // The location of SIM
  const SIM = { lat: 1.32941, lng: 103.77617 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    mapId:"8895b6f658baf3db",
    center: SIM,

  });
  // The marker, positioned at SIM
  const marker = new google.maps.Marker({
    position: SIM,
    map: map,
  });
}
