

function total_adult(){
  var no_of_tickets = document.getElementById("QuantityA").value;
  total = no_of_tickets * 30;
  document.getElementById("adult_total").innerHTML = "$" + total;
  return total;
}

function total_youth(){
  var no_of_tickets = document.getElementById("QuantityY").value;
  total = no_of_tickets * 20;
  document.getElementById("youth_total").innerHTML = "$" + total;
  return total;
}

function total_children(){
  var no_of_tickets = document.getElementById("QuantityC").value;
  total = no_of_tickets * 10;
  document.getElementById("children_total").innerHTML = "$" + total;
  return total;
}

function all_total(){
  total = total_adult() + total_youth()  + total_children();
  document.getElementById("all_total").innerHTML = "$" + total;
}
