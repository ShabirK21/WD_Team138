// Initialize and add the map
function initMap() {
  // The location of SIM
  const SIM = { lat: 1.32941, lng: 103.77617 };
  // The map, centered at SIM
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
//to handle async promise errors
function myFunctionThatCatches() {
    try {
        return initMap();
    } catch (e) {
        // Maybe do something else here first.
        throw e;
    } finally {
        console.log('We do cleanup here');
    }
}
// to handle asyn promise errors
async function run() {
    try {
        await myFunctionThatCatches();
    } catch (e) {
        console.error(e);
    }
}

run();

//Function checking if email was entered for newsletter
function newsletter() {
  if (document.getElementById("email").value === "") {
    alert("Please input a valid email address");
  } else {
    alert("Thank you for subscribing to our newsletter!");
  }
}
