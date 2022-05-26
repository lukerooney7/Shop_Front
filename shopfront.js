/*
 * This is a starting point only -- not yet complete!
 */
/*
 * item_id: string (id of item)
 * element: string (tag name of element)
 */
function getStockItemValue(item_id, element) {
  var i = document.getElementById(item_id);
  var e = i.getElementsByTagName(element)[0];  // assume only 1!
  var v = e.innerHTML;
  return v;
}

/*
 * item_id: string (id of item)
 * element: string (tag name of element)
 * value: string (the value of the element)
 */
function setStockItemValue(item_id, element, value) {
  var i = document.getElementById(item_id);
  var e = i.getElementsByTagName(element)[0];  // assume only 1!
  e.innerHTML = value;
}

function setDeliveryCharge(value){
  document.getElementById("delivery_charge").innerHTML = value;
}
function getDeliveryCharge(price){
  if(price < 100){
    var deliveryCharge = price / 10;
    deliveryCharge = deliveryCharge.toFixed(2);
    return deliveryCharge;
  }
  return 0;
}

function setVat(value){
  document.getElementById("vat").innerHTML = value;
}
function getVat(sub_total, delivery_charge){
  var price = Number(sub_total) + Number(delivery_charge)
  var vat = price / 5;
  vat = vat.toFixed(2);
  return vat;
}

function setTotal(sub_total, delivery_charge, vat){
  var value = Number(sub_total) + Number(delivery_charge) + Number(vat);
  document.getElementById("total").innerHTML = value;
}

function updateCosts(cost, item_id){
  alert("AAAAAAA");
  updateLineCost(cost, item_id);
  var sub_total = getSubTotal();
  setSubTotal(sub_total);
  var delivery_charge = getDeliveryCharge(sub_total);
  setDeliveryCharge(delivery_charge);
  var vat = getVat(sub_total, delivery_charge);
  setVat(vat);
  setTotal(sub_total, delivery_charge, vat);
}

/*
 * e: object from DOM tree (item_quantity that made )
 * item_id: string (id of item)
 */
function updateLineCost(e, item_id) {
  var p = getStockItemValue(item_id, "item_price");
  var q = e.value;
  var c = p * q; // implicit type conversion
  c = c.toFixed(2); // 2 decimal places always.
  setStockItemValue(item_id, "line_cost", c);

  // Also need to update sub_total, delivery_charge, vat, and total.

}

function getLineCharge(item_id) {
  var i = document.getElementById(item_id);
  var e = i.getElementsByTagName("line_cost")[0];  // assume only 1!
  var v = e.innerHTML;
  return v;
}

function getSubTotal() {
  var sub_total = 0;
  const id_array = ["crawdad", "gorilla", "ninja", "psion", "totem"];
  for(var i = 0; i < id_array.length; i++){
    sub_total += Number(getLineCharge(id_array[i]));
  }
  return sub_total;
}

function setSubTotal(value) {
  document.getElementById("sub_total").innerHTML = value;
}





function submitPressed() {
  alert("wot")
  var cc_type = checkCardType();
  alert("1")
  checkCardNumber(cc_type);
  alert("2")
  checkCardCode();
  alert("3")
  checkEmail();
  alert("!")
  checkNotEmpty();
}

function checkCardType() {
  let cc_type = document.forms["order"]["cc_type"].value;
  if (cc_type != "") {
    return cc_type;
  }
  else {
    return cc_type;
    //alert("invalid");
  }
}

function checkCardNumber(cc_type) {
  let cc_number = document.forms["order"]["cc_number"].value;
  if (cc_number.length == 16 && !isNaN(cc_number)) {
    var first_digit = Number(cc_number.charAt(0));
    if (cc_type == "Mastercard" && first_digit == 5) {
      //alert("valid");
    }
    else if (cc_type == "Visa" && first_digit == 4) {
      //alert("valid");
    }
    else {
      //alert("invalid");
    }
  }
  else {
    //alert("invalid");
  }
}

function checkCardCode() {
  let cc_code = document.forms["order"]["cc_code"].value;
  if(cc_code.length == 3 && !isNaN(cc_code)) {
    if(cc_code > 0) {
      //alert("valid");
    }
    else{
      //alert("invalid");
    }
  }
  else {
    //alert("invalid");
  }
}


function checkEmail() {
  let email = document.forms["order"]["email"].value;
  if (email.includes("@") && email.includes(".") && !email.includes(" ")) {
    //alert("valid");
  }
  else {
    //alert("invalid");
  }
}

function checkNotEmpty() {
  alert("!")
  let name = document.forms["order"]["cc_name"].value;
  alert(name);
  let name = document.forms["order"]["delivery_address"].value;
  alert(name);
  let name = document.forms["order"]["delivey_postcode"].value;
  alert(name);
  let name = document.forms["order"]["delivery_country"].value;
  alert(name);

}