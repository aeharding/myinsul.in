/* Convert onkeyup */
function a1cconvert() {
  var a1c = document.a1c.input.value;
  a1c = parseFloat(a1c);
  a1c = (28.7*a1c)-46.7;
  a1c = Math.round(a1c);
  if (a1c < 0) { //If not valid
    document.getElementById("output").innerHTML="0";
  }
  else if (isNaN(a1c)) { //If not valid
  document.getElementById("output").innerHTML="0";
  }
  else { //Print
  document.getElementById("output").innerHTML=a1c;
  }
}

var weight = "kg";

function setkg() {
  document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button><button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button>";
  weight = "kg";
  bmiconvert();
}
function setlb() {
  document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button><button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
  weight = "lb";
  bmiconvert();
}

function bmiconvert() {
  var feet = document.bmi.feet.value;
  var inches = document.bmi.inches.value;
  var BW = document.bmi.BW.value;
  if(weight=="kg") {
    BW = BW*2.20462262;
  }
  var height = (feet*12)+parseInt(inches);
  var bmi = ((BW)/(height*height))*703;
  document.getElementById("bmi").innerHTML=Math.round(bmi*10)/10;
}

/* Disable enter button */
function stopRKey(evt) { 
  var evt = (evt) ? evt : ((event) ? event : null); 
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 
document.onkeypress = stopRKey; 