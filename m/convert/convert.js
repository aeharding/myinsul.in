var iv = 2;
var sens = 0.80;
function cust() {
  iv = document.insulin.iv.value;
  sens = document.insulin.sens.value;
  if(iv != "cust") {
    document.getElementById("cust").innerHTML="";
    convert();
  }
  else {
    document.getElementById("cust").innerHTML="Rate: <INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='largerText' size='4' maxlength='4'>";
    convert();
  }
}

// Calculate Basal Insulin
function convert() {
  if(document.insulin.food.checked==true) {
    if(iv != "cust") {
      var tdd = (iv)*(24)*(sens);
    }
    else {
      var custnum = document.insulin.custnum.value;
      var tdd = (custnum)*(24)*(sens);
    }
  }
  else
  {
    if(iv != "cust") {
      var tdd = (iv)*(24)*(2)*(sens);
    }
    else {
      var custnum = document.insulin.custnum.value;
      var tdd = (custnum)*(24)*(2)*(sens);
    }
  }
  
  tdd = Math.round(tdd);
  document.getElementById("tdd").innerHTML=tdd;
  document.getElementById("button").innerHTML="<button type='button' class='largerText' onclick=\"parent.location='../tdd/index.html?tdd=" + tdd + "'\">Calculate new regimen...</button>";
}