function total_adult() {
  var no_of_tickets = document.getElementById("adultTic").value;
  var seniorspromo =   document.getElementById("check03");
  var total = no_of_tickets * 30;
  if(seniorspromo.checked == true) {
    total = total * 0.9;
  }
  document.getElementById("adult_total").innerHTML = "$" + total;
  return total;
}

function total_youth() {
  var no_of_tickets = document.getElementById("youthTic").value;
  var studentpromo = document.getElementById("check02");
  total = no_of_tickets * 20;
  if(studentpromo.checked ==  true) {
    total = total * 0.8;
  }
  document.getElementById("youth_total").innerHTML = "$" + total;
  return total;
}

function total_children() {
  var no_of_tickets = document.getElementById("childTic").value;
  var total = no_of_tickets * 10;
  document.getElementById("child_total").innerHTML = "$" + total;
  return total;
}

function all_total() {
  var total = total_adult() + total_youth() + total_children();
  document.getElementById("all_total").innerHTML = "$" + total;
}

function booking() {
  var dom = document.getElementById("paymentmethod");
  if (dom.options[dom.selectedIndex].value === "null") {
    alert("Please select your tickets");
  } else {
    alert("Thank you for booking with us");
  }
}

function emailalert() {
  alert("Please email marvelparks@customer_service.com to purchase pass")
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
