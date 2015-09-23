// MOBILE

function urlpara( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

var source = "weight";
var weight = "kg";

  //KG or #(lb)?
  function setkg() {
    document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button>";
    weight = "kg";
    convert();
  }
  function setlb() {
    document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
    weight = "lb";
    convert();
  }

function setweight() {
  document.getElementById("switchweighttdd").innerHTML="<button TYPE='button' class='largerText' NAME='tddsource' id='weights' ONCLICK='setweight()' style='width:95px;text-indent:-12px;' disabled='yes'>Weight</button> <button TYPE='button' class='largerText' NAME='tddsource' id='tdds' ONCLICK='settdd()' style='width:95px'>TDD</button> <button TYPE='button' class='largerText' NAME='tddsource' id='basals' ONCLICK='setbasal()' style='width:95px;text-indent:-5px;'>Basal</button>";
  document.getElementById("tddanswer").innerHTML="<span id='tdd' class='answer'>0</span> <span class='largerText'>Total Daily Dose (U)</span>";
  if(source == "tdd") {
    document.getElementById("hometddview").innerHTML="";
    if(tdd == "") {
      document.getElementById("source").innerHTML="<div style='text-align:center'><span class='largerText'>Weight:</span> <INPUT TYPE='tel' NAME='BW' ONKEYUP='convert()' class='largerText' size=3 maxlength=3 autofocus>  <span id='switchkglb'><button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button></span><br /><span class='largerText'>U/kg:</span><span id='ukgwizard'>        <select name='ukg' ACTION='#' ONCHANGE='cust()' class='largerText'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &lt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div></span><button type='button' class='largerText' onclick='ukgwizard(true);'>Guide me</button><span id='ukgexpand'><br /><a onclick='ukgexpand();'>More info &raquo;</a></span>";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
      }
      else {
      document.insulin.BW.value = BW;
      }
    }
    else {
      document.getElementById("source").innerHTML="<div style='text-align:center'><span class='largerText'>Weight:</span> <INPUT TYPE='tel' NAME='BW' ONKEYUP='convert()' class='largerText' size=3 maxlength=3 autofocus>  <span id='switchkglb'><button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button></span><br /><span class='largerText'>U/kg:</span><span id='ukgwizard'>        <select name='ukg' ACTION='#' ONCHANGE='cust()' class='largerText'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &lt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div></span><button type='button' class='largerText' onclick='ukgwizard(true);'>Guide me</button><span id='ukgexpand'><br /><a onclick='ukgexpand();'>More info &raquo;</a></span>";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
      }
      else {
      document.insulin.BW.value = BW;
      }
      if(ukg != 0.0 && ukg != 0.4) {
        document.getElementById("custukg").innerHTML="Custom u/kg ratio:<INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='largerText' size='4' maxlength='4'>";
        document.insulin.custnum.value = ukg;
        document.insulin.ukg.value = "cust";
      }
      else {
        document.insulin.ukg.value = "0.4";
        document.getElementById("custukg").innerHTML="";
      }
    }
  }
  else if(source == "basal") {
    if(tdd == "") {
      document.getElementById("source").innerHTML="<div style='text-align:center'><span class='largerText'>Weight:</span> <INPUT TYPE='tel' NAME='BW' ONKEYUP='convert()' class='largerText' size=3 maxlength=3 autofocus>  <span id='switchkglb'><button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button></span><br /><span class='largerText'>U/kg:</span><span id='ukgwizard'>        <select name='ukg' ACTION='#' ONCHANGE='cust()' class='largerText'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &lt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div></span><button type='button' class='largerText' onclick='ukgwizard(true);'>Guide me</button><span id='ukgexpand'><br /><a onclick='ukgexpand();'>More info &raquo;</a></span>";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
      }
      else {
      document.insulin.BW.value = BW;
      }
    }
    else {
      document.getElementById("source").innerHTML="<div style='text-align:center'><span class='largerText'>Weight:</span> <INPUT TYPE='tel' NAME='BW' ONKEYUP='convert()' class='largerText' size=3 maxlength=3 autofocus>  <span id='switchkglb'><button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button></span><br /><span class='largerText'>U/kg:</span><span id='ukgwizard'>        <select name='ukg' ACTION='#' ONCHANGE='cust()' class='largerText'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &lt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div></span><button type='button' class='largerText' onclick='ukgwizard(true);'>Guide me</button><span id='ukgexpand'><br /><a onclick='ukgexpand();'>More info &raquo;</a></span>";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
      }
      else {
      document.insulin.BW.value = BW;
      }
      if(ukg != 0.0 && ukg != 0.4) {
        document.getElementById("custukg").innerHTML="Custom u/kg ratio:<INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='largerText' size='4' maxlength='4'>";
        document.insulin.custnum.value = ukg;
        document.insulin.ukg.value = "cust";
      }
      else {
        document.insulin.ukg.value = "0.4";
        document.getElementById("custukg").innerHTML="";
      }
    }
  }
  source = "weight";
  convert();
}
function settdd() {
  document.getElementById("hometddview").innerHTML="";
  homemod = 1;
  homemodenable = false;
  document.getElementById("switchweighttdd").innerHTML="<button TYPE='button' class='largerText' NAME='tddsource' id='weights' ONCLICK='setweight()' style='width:95px;text-indent:-12px;'>Weight</button> <button TYPE='button' class='largerText' NAME='tddsource' id='tdds' ONCLICK='settdd()' style='width:95px' disabled='yes'>TDD</button> <button TYPE='button' class='largerText' NAME='tddsource' id='basals' ONCLICK='setbasal()' style='width:95px;text-indent:-5px;'>Basal</button>";
  document.getElementById("source").innerHTML="<div style='text-align:center'><span class='largerText'>Preexisting TDD:</span> <INPUT TYPE='tel' NAME='pretdd' ONKEYUP='convert()' class='largerText' size=3 maxlength=3 autofocus><br /><button type='button' class='largerText' onclick='hometddmod(true);'>Modify</button><span id='resethometdd'></span><br /><span class='largerText'>Weight:</span> <INPUT TYPE='tel' NAME='BW' ONKEYUP='convert()' class='largerText' size=3 maxlength=3>  <span id='switchkglb'><button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button></span><br />Please note that entering a weight is not required. Entering will give a U/kg ratio, which can be modified by clicking the 'weight' radio button.</div>";
  document.getElementById("tddanswer").innerHTML="<span id='tdd' class='answer'>0</span> <span class='largerText'>Total Daily Dose (U)</span><span id='preukg'></span>";
  if(source == "weight") {
    if(weight == "lb") {
      document.insulin.BW.value = lbBW;
      document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
    }
    else {
    document.insulin.BW.value = BW;
    }
    if(tdd != 0) {
    document.insulin.pretdd.value = tdd;
    }
  }
  else if(source == "basal") {
    if(weight == "lb") {
      document.insulin.BW.value = lbBW;
      document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
    }
    else {
    document.insulin.BW.value = BW;
    }
    if(tdd != 0) {
    document.insulin.pretdd.value = tdd;
    }
  }
  else {
  weight = "kg";
  tdd = "";
  ukg = 0;
  BW = "";
  custnum = "";
  lbBW = "";
  }
  source = "tdd";
  convert();
}

function setbasal() {
  document.getElementById("switchweighttdd").innerHTML="<button TYPE='button' class='largerText' NAME='tddsource' id='weights' ONCLICK='setweight()' style='width:95px;text-indent:-12px;'>Weight</button> <button TYPE='button' class='largerText' NAME='tddsource' id='tdds' ONCLICK='settdd()' style='width:95px'>TDD</button> <button TYPE='button' class='largerText' NAME='tddsource' id='basals' ONCLICK='setbasal()' style='width:95px;text-indent:-5px;' disabled='yes'>Basal</button>";
  document.getElementById("source").innerHTML="<div style='text-align:center'><span class='largerText'>Preexisting Basal:</span> <INPUT TYPE='tel' NAME='prebasal' ONKEYUP='convert()' class='largerText' size=3 maxlength=3 autofocus><br /><span class='largerText'>Weight: </span><INPUT TYPE='tel' NAME='BW' ONKEYUP='convert()' class='largerText' size=3 maxlength=3>  <span id='switchkglb'><button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;' disabled='yes'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;'>lb</button></span><br />Please note that entering a weight is not required. Entering will give a U/kg ratio, which can be modified by clicking the 'weight' radio button.</div>";
  document.getElementById("tddanswer").innerHTML="<span id='tdd' class='answer'>0</span> <span class='largerText'>Total Daily Dose (U)</span><span id='preukg'></span>";
  if(source == "weight") {
    if(weight == "lb") {
      document.insulin.BW.value = lbBW;
      document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
    }
    else {
    document.insulin.BW.value = BW;
    }
    if(tdd != 0) {
    document.insulin.prebasal.value = Math.round(tdd*basaldist);
    }
  }
  else if(source == "tdd") {
    if(weight == "lb") {
      document.insulin.BW.value = lbBW;
      document.getElementById("switchkglb").innerHTML="<button TYPE='button' class='largerText' NAME='weight' id='kg' ONCLICK='setkg()' style='width:20px;text-indent:-12px;'>kg</button> <button TYPE='button' class='largerText' NAME='weight' id='lb' ONCLICK='setlb()' style='width:20px;text-indent:-8px;' disabled='yes'>lb</button>";
    }
    else {
    document.insulin.BW.value = BW;
    }
    if(tdd != 0) {
    document.insulin.prebasal.value = Math.round(tdd*basaldist);
    }
  }
  else {
  weight = "kg";
  tdd = "";
  ukg = 0;
  BW = "";
  custnum = "";
  lbBW = "";
  }
  source = "basal";
  convert();
}

// Decide if custom selected + display custom text box
function cust() {
  ukg = document.insulin.ukg.value;
  if(ukg != "cust") {
    document.getElementById("custukg").innerHTML="";
    convert();
  }
  else {
    document.getElementById("custukg").innerHTML="Custom u/kg ratio:<INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='largerText' size='4' maxlength='4'>";
    convert();
  }
}

function pretask() {
  var titratetdd = urlpara("tdd");
  if(titratetdd != "") {
    document.getElementById("tdds").checked = true;
    settdd();
    document.insulin.pretdd.value = titratetdd;
    convert();
  }
}

function feedmeals() {
  if(document.insulin.feed.value == "cont") {
	document.getElementById("distnutrition").innerHTML="<select name='dist' action='#' onchange='convert()' class='largerText'><option value='.5'>50:50 - Typical</option><option value='.4' selected='yes'>40:60 - Continuous feed</option><option value='-1' disabled>40:00 - Not eating</option><option value='.4'>40:60 - Steroids</option><option value='.3'>30:70 - Steroids</option><option value='.33'>33:67 - Renal failure</option><option value='.33'>33:67 - Hepatic failure</option></select>";
	document.getElementById("boluschangesfeed").innerHTML="<select name='boluschanges' ACTION='#' ONCHANGE='boluschange()' class='largerText'><option value='aspart'>Aspart</option><option value='regular' selected='selected'>Regular</option><option value='glulisine'>Glulisine</option><option value='lispro'>Lispro</option></select>";
  } else {
  	document.getElementById("distnutrition").innerHTML="<select name='dist' action='#' onchange='convert()' class='largerText'><option value='.5'>50:50 - Typical</option><option value='.4' disabled>40:60 - Continuous feed</option><option value='-1' disabled>40:00 - Not eating</option><option value='.4'>40:60 - Steroids</option><option value='.3'>30:70 - Steroids</option><option value='.33'>33:67 - Renal failure</option><option value='.33'>33:67 - Hepatic failure</option></select>";
    document.getElementById("boluschangesfeed").innerHTML="<select name='boluschanges' ACTION='#' ONCHANGE='boluschange()' class='largerText'><option value='aspart'>Aspart</option><option value='regular'>Regular</option><option value='glulisine'>Glulisine</option><option value='lispro'>Lispro</option></select>";
  }
  if(document.insulin.feed.value == "bolT") {
    document.getElementById("bolTnum").innerHTML = "Feeding: <select name='bolTnum' ACTION='#' ONCHANGE='convert()' class='largerText'><option value=3>3 times per day</option><option value=4 selected='yes'>4 times per day</option><option value=5>5 times per day</option></select><br />";
    document.getElementById("boluschangesfeed").innerHTML="<select name='boluschanges' ACTION='#' ONCHANGE='boluschange()' class='largerText'><option value='aspart'>Aspart</option><option value='regular'>Regular</option><option value='glulisine'>Glulisine</option><option value='lispro'>Lispro</option></select>";
  } else {
    document.getElementById("bolTnum").innerHTML = "";
  }
  if(document.insulin.feed.value == "npo" || document.insulin.feed.value == "50") {
		document.getElementById("distnutrition").innerHTML="<select name='dist' action='#' onchange='convert()' class='largerText'><option value='.5'>50:00 - Typical</option><option value='.4' disabled>40:00 - Continuous feed</option><option value='-1' selected='yes'>40:00 - Not eating</option><option value='.4'>40:00 - Steroids</option><option value='.3'>30:00 - Steroids</option><option value='.33'>33:00 - Renal failure</option><option value='.33'>33:00 - Hepatic failure</option></select>";
	}
  boluschange();
  convert();
}

function incCBGf() {
  if(document.insulin.incCBG.value == "cust") {
    document.getElementById("incCBGcust").innerHTML = "<br /><span class='large'>Custom: </span><INPUT type='tel' NAME='incCBGcust' ONKEYUP='convert()' class='largerText' size='3' maxlength='3'> mg/dL";
  }
  else {
    document.getElementById("incCBGcust").innerHTML = "";
  }
  convert();
}


// Calculate Basal Insulin
var homemodenable = false;
var homemod = 1;
var tdd = "";
var ukg = 0;
var BW = "";
var custnum = "";
var lbBW = "";
var basaldist = "";
var bolusdist = "";
var basaltype = "";
var basaltwice = "";

function basalchange() {
  basaltype = document.insulin.basalchanges.value;
  if(basaltype == "nph2") {
    document.getElementById("basaltwiceamtenable").innerHTML = "<div style='text-align:center'><select name='basaltwiceamt' ACTION='#' ONCHANGE='basaltwicechange()' class='largerText'><option value='67'>67% AM, 33% PM</option><option value='50'>50% AM, 50% PM</option></select></div>";
    basaltwicechange();
  }
  else if(basaltype == "detemir2") {
    document.getElementById("basaltwiceamtenable").innerHTML = "";
    basaltwice = 50;
    convert();
  }
  else {
    document.getElementById("basaltwiceamtenable").innerHTML = "";
    basaltwicechange();
  }
}

function boluschange() {
    if(document.insulin.boluschanges.value == "aspart") { document.getElementById("supType").innerHTML = "Aspart"; }
    if(document.insulin.boluschanges.value == "regular") { document.getElementById("supType").innerHTML = "Regular"; }
    if(document.insulin.boluschanges.value == "glulisine") { document.getElementById("supType").innerHTML = "Glulisine"; }
    if(document.insulin.boluschanges.value == "lispro") { document.getElementById("supType").innerHTML = "Lispro"; }
}

function basaltwicechange() {
  basaltwice = document.insulin.basaltwiceamt.value;
  convert();
}

function ukgwizard(execute) {
  if(execute == false) {
    document.getElementById("ukgwizard").innerHTML = "<select class='largerText' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4' selected='selected'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select>";
    cust();
  }
  else {
    var z = confirm("This prompt is for finding a suitable U/kg ratio given a patient with hyperglycemia (with or without diabetes).\nClick 'OK' to continue.");
      if (z == true) {
      var h = confirm("The patient has creatine \u2265 2 mg/dL.\nPress 'OK' for yes, or press 'Cancel' for no.");
      if (h == false) {
        var i = confirm("The patient has type 2 diabetes AND is less than 70 years old.\nPress 'OK' for yes, or press 'Cancel' for no.");
        var j = confirm("The patient has evidence of difficult control; that is, he or she takes at least three oral agents at home, or the hemoglobin A1C is greater than 8%, or he or she reports fasting glucoses greater than 200 mg/dL (11.0 mmol/L) prior to admission.\nPress 'OK' for yes, or press 'Cancel' for no.");
        var k = confirm("The patient has a BMI greater than 35 kg/m2.\nPress 'OK' for yes, or press 'Cancel' for no.");
      }
      var l = 0.3;
      if (h == true) { l = 0.3; }
        else {
          if (i == true) { l += 0.1; }
          if (j == true) { l += 0.1; }
          if (k == true) { l += 0.1; }
        }
      switch(l) {
        case 0.3: document.getElementById("ukgwizard").innerHTML = "<select class='largerText' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3' selected='selected'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div>"; break;
        case 0.4: document.getElementById("ukgwizard").innerHTML = "<select class='largerText' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4' selected='selected'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div>"; break;
        case 0.5: document.getElementById("ukgwizard").innerHTML = "<select class='largerText' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5' selected='selected'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div>"; break;
        case 0.6: document.getElementById("ukgwizard").innerHTML = "<select class='largerText' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6' selected='selected'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><div id='custukg'></div>"; break;
      }
      cust();
    }
  }
}

function hometddmod(execute) {
  switch(execute) {
    case "reset" : {
      homemod = 1;
      homemodenable = false;
      convert();
      break;
    }
    case true : {
      var z = confirm("This prompt is for finding a suitable modification of a home TDD.\nIf the original TDD is desired preserved, do not use this guide to modify the TDD.\nClick 'OK' to continue.");
      if (z == true) {
        var i = confirm("Is it TYPE 1 diabetes with either\nuncontrolled glucoses (A1c >8%)\nOR\nfasting glucoses >200 mg/dL (11 mmol/L)?\nPress 'OK' for yes, or press 'Cancel' for no.");
        if (i == false) {
          var j = confirm("Is it TYPE 2 diabetes with either\nuncontrolled glucoses (A1c >8%)\nOR\nfasting glucoses >200 mg/dL (11 mmol/L)?\nPress 'OK' for yes, or press 'Cancel' for no.");
        }
        var k = confirm("Is the patient about to begin corticosteroids (newly prescribed for the inpatient stay)?\nPress 'OK' for yes, or press 'Cancel' for no.");
        var l = confirm("Does the patient report hypoglycemia unawareness?\nPress 'OK' for yes, or press 'Cancel' for no.");
        var m = confirm("Hypoglycemia within the past 24 h, with glucose:\nLESS THAN 50 mg/dL\nPress 'OK' for yes, or press 'Cancel' for no.");
        if(m == false) {
          var n = confirm("Hypoglycemia within the past 24 h, with glucose:\nBETWEEN 50-70 mg/dL\nPress 'OK' for yes, or press 'Cancel' for no.");
        }
        var o = confirm("Stable CKD stage I or II (GFR >40 mL/min):\nPress 'OK' for yes, or press 'Cancel' for no.");
        if (o == false) {
          var p = confirm("CKD stage III (GFR 30-39 mL/min):\nPress 'OK' for yes, or press 'Cancel' for no.");
          if (p == false) {
            var q = confirm("CKD stage IV (GFR 15-29 mL/min):\nPress 'OK' for yes, or press 'Cancel' for no.");
            if (q == false) {
              var r = confirm("CKD stage V (GFR 15 mL/min) or ESRD or acute renal injury:\nPress 'OK' for yes, or press 'Cancel' for no.");
            }
          }
        }

        var s = 1;
        if (i == true) { s += 0.1; }
        if (j == true) { s += 0.2; }
        if (k == true) { s += 0.2; }
        if (l == true) { s -= 0.2; }
        if (m == true) { s -= 0.4; }
        if (n == true) { s -= 0.3; }
        if (p == true) { s -= 0.3; }
        if (q == true) { s -= 0.5; }
        if (r == true) { s -= 0.6; }
        homemod = s;
        homemodenable = true;
        convert();
      }
    }
  }
  if(homemodenable == true) {
    document.getElementById("resethometdd").innerHTML="<button type='button' class='largerText' onclick=\"hometddmod('reset');\">Reset</button>";
    document.getElementById("hometddview").innerHTML="<span class='answer'>" + Math.round(homemod*100) + "%</span> <span class='largerText'>Home TDD Mod</span><br />";
  }
  else {
    document.getElementById("resethometdd").innerHTML="";
    document.getElementById("hometddview").innerHTML="";
  }
}

function convert() {
  var feed = document.insulin.feed.value;

  basaldist = document.insulin.dist.value;
  var nobolus = false;
  if(basaldist == -1) {
		// If eating less, have abnormal 40:00 ratio (doesn't add up to 100)
		basaldist = .4;
		bolusdist = 0;
		nobolus = true;
	}
	else {
		bolusdist = 1 - basaldist;
	}
  
  if(source == "weight") {
    ukg = document.insulin.ukg.value;
    BW = document.insulin.BW.value;
    
    //carb Calc
    if(weight=="lb") {
      lbBW = BW;
      BW = BW/2.20462262; //Conversion lb -- kg
    }
    if(ukg != "cust") {
      tdd = BW*ukg;
    }
    else {
        custnum = document.insulin.custnum.value;
        tdd = BW*custnum;
    }
  }
  if(source == "tdd") {
    var pretdd = document.insulin.pretdd.value*homemod;
    BW = document.insulin.BW.value;
    if(BW != "") {
      //carb Calc
      if(weight=="lb") {
        lbBW = BW;
        BW = BW/2.20462262; //Conversion lb -- kg
      }
      ukg = Math.round((pretdd/BW)*100)/100;
      tdd = BW*ukg;
      if(ukg == "0") {
        document.getElementById("preukg").innerHTML="<br /><span class='largerText'>From </span><span class='answer'>0.00</span> <span class='largerText'>U/kg ratio</span>";
      }
      else {
        document.getElementById("preukg").innerHTML="<br /><span class='largerText'>From </span><span class='answer'>" + ukg.toFixed(2) + "</span> <span class='largerText'>U/kg ratio</span>";
      }
    }
    else {
      tdd = pretdd;
      document.getElementById("preukg").innerHTML="";
    }
  }
  if(source == "basal") {
    var prebasal = document.insulin.prebasal.value;
    BW = document.insulin.BW.value;
    if(prebasal != 0){
      tdd = parseFloat(prebasal)+parseFloat(((prebasal/basaldist)*bolusdist));
    }
    else {
      tdd = 0;
    }
    if(BW != "") {
      //carb Calc
      if(weight=="lb") {
        lbBW = BW;
        BW = BW/2.20462262; //Conversion lb -- kg
      }
      ukg = Math.round((tdd/BW)*100)/100;
      if(ukg == "0") {
        document.getElementById("preukg").innerHTML="<br /><span class='largerText'>From </span><span class='answer'>0.00</span> <span class='largerText'>U/kg ratio</span>";
      }
      else {
        document.getElementById("preukg").innerHTML="<br /><span class='largerText'>From </span><span class='answer'>" + ukg.toFixed(2) + "</span> <span class='largerText'>U/kg ratio</span>";
      }
    }
    else {
      document.getElementById("preukg").innerHTML="";
    }
  }
  
  if(feed == "norm")
  {
    var bas = basaldist*tdd;
    var nut = bolusdist*tdd;
    var nutfeed = nut/3;
    document.getElementById("nutdesc").innerHTML="Units/meal";
    //document.getElementById("nutType").innerHTML="Aspart";
    //document.getElementById("supType").innerHTML="Aspart";
    document.getElementById("diabeticdiet").innerHTML="Make sure patient is on a diabetic diet.";
  }
  if(feed == "cont") {
    var bas = basaldist*tdd;
    var nut = bolusdist*tdd;
    var nutfeed = nut/4;
    document.getElementById("nutdesc").innerHTML="Units/6 hrs";
    //document.getElementById("nutType").innerHTML="Regular";
    //document.getElementById("supType").innerHTML="Regular";
    document.getElementById("diabeticdiet").innerHTML="";
  }
  if(feed == "bolT") {
    var bas = basaldist*tdd;
    var nut = bolusdist*tdd;
    if(document.insulin.bolTnum.value == 3) {
      var nutfeed = nut/3;
      document.getElementById("nutdesc").innerHTML="Units/3x daily";
    }
    if(document.insulin.bolTnum.value == 4) {
      var nutfeed = nut/4;
      document.getElementById("nutdesc").innerHTML="Units/4x daily";
    }
    if(document.insulin.bolTnum.value == 5) {
      var nutfeed = nut/5;
      document.getElementById("nutdesc").innerHTML="Units/5x daily";
    }
    //document.getElementById("nutType").innerHTML="Aspart";
    //document.getElementById("supType").innerHTML="Aspart";
    document.getElementById("diabeticdiet").innerHTML="";
  }
  if(feed == "npo" || feed == "50") {
		var bas = basaldist*tdd;
    var nut = 0;
    var nutfeed = 0;
    document.getElementById("nutdesc").innerHTML="Units/meal";
    document.getElementById("diabeticdiet").innerHTML="Continue bolus insulin once eating normally.";
	}
    
  if(tdd < 40) {
    document.getElementById("req").innerHTML="LOW";
  }
  if(tdd >= 40 && tdd <= 80) {
    document.getElementById("req").innerHTML="MODERATE";
  }
  if(tdd > 80) {
    document.getElementById("req").innerHTML="HIGH";
  }
  var corrF = 1800 / tdd;
  
  if(document.insulin.incCBG.value == "auto") {
  var j = 1;
    var minCBG = document.insulin.minCBG.value;
  var minCBG = parseFloat(minCBG);
    var i = 0;
    var oldcorrF = corrF;
    while(minCBG < (400-parseFloat(corrF))) {
      i += 1;
      minCBG = minCBG + parseFloat(corrF);
      if(i > 10) {
        corrF = corrF + oldcorrF;
        minCBG = document.insulin.minCBG.value;
        minCBG = parseFloat(minCBG);
        i = 0;
        j += 1;
      }
    }
    var incCBGs = corrF;
    corrF = 1800 / tdd;
  }
  else if(document.insulin.incCBG.value == "corr") {
    var incCBGs = corrF;
  }
  else if(document.insulin.incCBG.value == "cust") {
    var incCBGs = document.insulin.incCBGcust.value;
  }
  else if(document.insulin.incCBG.value == "2corr") {
    var incCBGs = corrF*2.0;
  }
  else {
    var incCBGs = document.insulin.incCBG.value;
  }
  
  var tableinsinc = (incCBGs/corrF);
  
  corrF = Math.round(corrF);
  
  var minCBG = document.insulin.minCBG.value;
  var minCBG = parseFloat(minCBG);
  
  var tableinsT = 0;
  
  var tableins = "";
  var tableinsb = "<div id='CBGTable'><div id='row'><div id='left' class='largerText' style='border-bottom:1px dashed #808080'>CBG (mg/dL):</div><div id='right' class='largerText' style='border-bottom:1px dashed #808080'>Supplemental dosage:</div></div>";
  
  var i = 0;
  while(minCBG < (420-parseFloat(incCBGs))) {
    i += 1;
    tableins = tableins + "<div id='row'><div id='left' class='largerText' style='border-bottom:1px dashed #808080'>" + (Math.round(minCBG+1)) + "-" + (Math.round(minCBG+parseFloat(incCBGs))) + "</div><div id='right' class='largerText' style='border-bottom:1px dashed #808080'>" + Math.round(tableinsT) + " units</div></div>";
    tableinsT = tableinsT + tableinsinc;
    minCBG = minCBG + parseFloat(incCBGs);
    if(i >= 100) { break; }
  }
  
  tableins = tableins + "<div id='row'><div id='left' class='largerText' style='border-bottom:1px dashed #808080'>" + (Math.round(minCBG+1)) + "- 420</div><div id='right' class='largerText' style='border-bottom:1px dashed #808080'>" + Math.round(tableinsT) + " units</div></div>";
  var tableinse = "<div id='row'><div id='left' class='largerText'>&gt; 420</div><div id='right' class='largerText'>" + Math.round(tableinsT+tableinsinc) + " units<br>&amp; Call MD</div></div></div>";

  
  document.getElementById("tableCBG").innerHTML = tableinsb + tableins + tableinse;
  
  tdd = Math.round(tdd);
  document.getElementById("tdd").innerHTML=tdd;

  var basnph = bas/2;
  basnph = Math.round(basnph);
  if(document.getElementById("basnph") != null) {
  document.getElementById("basnph").innerHTML=basnph;
  }
  
  if(basaltype == "nph2" || basaltype == "detemir2") {
    if(basaltwice == 50) {
      bas = Math.round(bas/2);
      document.getElementById("bas").innerHTML = bas + " AM, " + bas + " PM";
    }
    if(basaltwice == 67) {
      var bas1 = Math.round(bas*(2/3));
      var bas2 = Math.round(bas*(1/3));
      document.getElementById("bas").innerHTML = bas1 + " AM, " + bas2 + " PM";
    }
  }
  else {
    bas = Math.round(bas);
    document.getElementById("bas").innerHTML=bas;
  }
  
  if(nobolus || feed == "npo" || feed == "50") {
		nut = "HOLD";
		document.getElementById("nuttotal").innerHTML=nut;
		nutfeed = "HOLD";
		document.getElementById("nutfeed").innerHTML=nutfeed;
  } else {
		nut = Math.round(nut);
		document.getElementById("nuttotal").innerHTML=nut;
		nutfeed = Math.round(nutfeed);
		document.getElementById("nutfeed").innerHTML=nutfeed;
	}
	
  
  document.getElementById("corrF").innerHTML=corrF;
}