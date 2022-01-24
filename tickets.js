// Adult tickets calculations
function total_adult() {
  const no_of_tickets = document.getElementById('adultTic').value;
  const seniorspromo = document.getElementById('check03');
  let total = no_of_tickets * 30;
  if (seniorspromo.checked == true) {
    total *= 0.9;
  }
  document.getElementById('adult_total').innerHTML = `$${total}`;
  return total;
}

// Youth tickets calculations
function total_youth() {
  const no_of_tickets = document.getElementById('youthTic').value;
  const studentpromo = document.getElementById('check02');
  total = no_of_tickets * 20;
  if (studentpromo.checked == true) {
    total *= 0.8;
  }
  document.getElementById('youth_total').innerHTML = `$${total}`;
  return total;
}

// Children tickets calculations
function total_children() {
  const no_of_tickets = document.getElementById('childTic').value;
  const total = no_of_tickets * 10;
  document.getElementById('child_total').innerHTML = `$${total}`;
  return total;
}

// Total tickets calculations
function all_total() {
  const total = total_adult() + total_youth() + total_children();
  document.getElementById('all_total').innerHTML = `$${total}`;
}

// Alert for when booking
function booking() {
  const dom = document.getElementById('paymentmethod');
  if (dom.options[dom.selectedIndex].value === 'null') {
    alert('Please select your tickets');
  } else {
    alert('Thank you for booking with us');
  }
}

// Alert upon clicking passes
function emailalert() {
  alert('Please email marvelparks@customer_service.com to purchase pass');
}

// Initializing and adding the map
function initMap() {
  // The location of SIM
  const SIM = { lat: 1.32941, lng: 103.77617 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    mapId: '8895b6f658baf3db',
    center: SIM
  });
  // The marker, positioned at SIM
  const marker = new google.maps.Marker({
    position: SIM,
    map
  });
}
