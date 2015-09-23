// FULL

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
    weight = "kg";
    convert();
  }
  function setlb() {
    weight = "lb";
    convert();
  }
  
function setweight() {
  document.getElementById("hometddview").innerHTML="";
  homemod = 1;
  homemodenable = false;
  document.getElementById("tddanswer").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/tdd.html',1,300,0,1)\">Total Daily Dose (Units):<img src='../images/q.jpg' /> </span><span id='tdd' class='answer'>0</span>";
  if(source == "weight") {
    document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' autofocus /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br /><br /><span class='large' onclick=\"TINY.box.show('caption/ukg.html',1,300,0,1)\">U/kg ratio:<img src='../images/q.jpg' /> </span><span id='ukgwizard'><select class='large' name='ukg' onchange='cust()'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &gt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span></span><button type='button' class='large' onclick='ukgwizard(true);'>Guide me</button><br /><br />";
    weight = "kg";
    tdd = "";
    ukg = "";
    BW = "";
    custnum = "";
    lbBW = "";
  }
  else if(source == "tdd") {
    if(tdd == "") {
      document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' autofocus /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br /><br /><span class='large' onclick=\"TINY.box.show('caption/ukg.html',1,300,0,1)\">U/kg ratio:<img src='../images/q.jpg' /> </span><span id='ukgwizard'><select class='large' name='ukg' onchange='cust()'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &gt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span></span><button type='button' class='large' onclick='ukgwizard(true);'>Guide me</button><br /><br />";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById('kg').checked = false;
        document.getElementById('lb').checked = true;    }
      else {
      document.insulin.BW.value = BW;
      }
    }
    else {
      document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' autofocus /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br /><br /><span class='large' onclick=\"TINY.box.show('caption/ukg.html',1,300,0,1)\">U/kg ratio:<img src='../images/q.jpg' /> </span><span id='ukgwizard'><select class='large' name='ukg' onchange='cust()'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &gt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span></span><button type='button' class='large' onclick='ukgwizard(true);'>Guide me</button><br /><br />";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById('kg').checked = false;
        document.getElementById('lb').checked = true;
      }
      else {
      document.insulin.BW.value = BW;
      }
      if(ukg != 0.0 && ukg != 0.4) {
        document.getElementById("custukg").innerHTML="Custom u/kg ratio:<INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='large' size='4' maxlength='4'>";
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
      document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' autofocus /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br /><br /><span class='large' onclick=\"TINY.box.show('caption/ukg.html',1,300,0,1)\">U/kg ratio:<img src='../images/q.jpg' /> </span><span id='ukgwizard'><select class='large' name='ukg' onchange='cust()'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &gt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span></span><button type='button' class='large' onclick='ukgwizard(true);'>Guide me</button><br /><br />";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById('kg').checked = false;
        document.getElementById('lb').checked = true;    }
      else {
      document.insulin.BW.value = BW;
      }
    }
    else {
      document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' autofocus /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br /><br /><span class='large' onclick=\"TINY.box.show('caption/ukg.html',1,300,0,1)\">U/kg ratio:<img src='../images/q.jpg' /> </span><span id='ukgwizard'><select class='large' name='ukg' onchange='cust()'><option value=0.2>0.2 - DM1/Sensitive</option><option value=0.3>0.3 - Sensitive</option><option value=0.4 selected='yes'>0.4 - BMI 18.5-25</option><option value=0.5>0.5 - BMI 25-30</option><option value=0.6>0.6 - BMI &gt; 30</option><option value=0.7>0.7 - Resistant</option><option value=0.8>0.8 - Resistant</option><option value=0.9>0.9 - Resistant</option><option value=1.0>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span></span><button type='button' class='large' onclick='ukgwizard(true);'>Guide me</button><br /><br />";
      if(weight == "lb") {
        document.insulin.BW.value = lbBW;
        document.getElementById('kg').checked = false;
        document.getElementById('lb').checked = true;    }
      else {
      document.insulin.BW.value = BW;
      }
      if(ukg != 0.0 && ukg != 0.4) {
        document.getElementById("custukg").innerHTML="Custom u/kg ratio:<INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='large' size='4' maxlength='4'>";
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
  document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/pretdd.html',1,300,0,1)\">Preexisting TDD:<img src='../images/q.jpg' /> </span><INPUT TYPE='tel' NAME='pretdd' id='focusme' ONKEYUP='convert()' class='large' size=3 maxlength=3 autofocus><br /><button type='button' class='large' onclick='hometddmod(true);'>Modify home TDD</button> <span id='resethometdd'></span><br /><br /><span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br />Please note that entering a weight is not required. Entering will give a U/kg ratio, which can be modified by clicking the 'weight' radio button.<br /><br />";
  document.getElementById("tddanswer").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/tdd.html',1,300,0,1)\">Total Daily Dose (Units):<img src='../images/q.jpg' /> </span><span id='tdd' class='answer'>0</span><span id='preukg'></span>";
  if(source == "weight") {
    if(weight == "lb") {
      document.insulin.BW.value = lbBW;
      document.getElementById('kg').checked = false;
      document.getElementById('lb').checked = true;
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
      document.getElementById('kg').checked = false;
      document.getElementById('lb').checked = true;
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
  ukg = "";
  BW = "";
  custnum = "";
  lbBW = "";
  }
  source = "tdd";
  convert();
}

function setbasal() {
  document.getElementById("hometddview").innerHTML="";
  homemod = 1;
  homemodenable = false;
  document.getElementById("source").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/prebasal.html',1,300,0,1)\">Preexisting Basal:<img src='../images/q.jpg' /> </span><INPUT TYPE='tel' NAME='prebasal' id='focusme' ONKEYUP='convert()' class='large' size=3 maxlength=3 autofocus><br /><br /><span class='large' onclick=\"TINY.box.show('caption/weight.html',1,300,0,1)\">Weight:<img src='../images/q.jpg' /> </span><input class='large' type='tel' name='BW' onkeyup='convert()' size='3' maxlength='3' /> <label for='kg' class='large'>kg:</label><input type='radio' name='weight' id='kg' onclick='setkg()' checked='checked' /> <label for='lb' class='large'>lb:</label><input type='radio' name='weight' id='lb' onclick='setlb()' /><br />Please note that entering a weight is not required. Entering will give a U/kg ratio, which can be modified by clicking the 'weight' radio button.<br /><br />";
  document.getElementById("tddanswer").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/tdd.html',1,300,0,1)\">Total Daily Dose (Units):<img src='../images/q.jpg' /> </span><span id='tdd' class='answer'>0</span><span id='preukg'></span>";
  if(source == "weight") {
    if(weight == "lb") {
      document.insulin.BW.value = lbBW;
      document.getElementById('kg').checked = false;
      document.getElementById('lb').checked = true;
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
      document.getElementById('kg').checked = false;
      document.getElementById('lb').checked = true;
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
    document.getElementById("custukg").innerHTML="Custom u/kg ratio:<INPUT type='number' NAME='custnum' ONKEYUP='convert()' class='large' size='4' maxlength='4'>";
    convert();
  }
}

function pretask() {
  setTimeout(function() { document.getElementById('focusme').focus(); }, 100);
  
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
		document.getElementById("distnutrition").innerHTML="<select name='dist' action='#' onchange='convert()' class='large'><option value='.5'>50:50 - Typical</option><option value='.4' selected='yes'>40:60 - Continuous feed</option><option value='-1' disabled>40:00 - Not eating</option><option value='.4'>40:60 - Steroids</option><option value='.3'>30:70 - Steroids</option><option value='.33'>33:67 - Renal failure</option><option value='.33'>33:67 - Hepatic failure</option></select>";
		document.getElementById("boluschangesfeed").innerHTML="<select name='boluschanges' ACTION='#' ONCHANGE='boluschange()' class='large'><option value='aspart'>Aspart</option><option value='regular' selected='selected'>Regular</option><option value='glulisine'>Glulisine</option><option value='lispro'>Lispro</option></select>";
  }
  else {
  	document.getElementById("distnutrition").innerHTML="<select name='dist' action='#' onchange='convert()' class='large'><option value='.5'>50:50 - Typical</option><option value='.4' disabled>40:60 - Continuous feed</option><option value='-1' disabled>40:00 - Not eating</option><option value='.4'>40:60 - Steroids</option><option value='.3'>30:70 - Steroids</option><option value='.33'>33:67 - Renal failure</option><option value='.33'>33:67 - Hepatic failure</option></select>";
    document.getElementById("boluschangesfeed").innerHTML="<select name='boluschanges' ACTION='#' ONCHANGE='boluschange()' class='large'><option value='aspart'>Aspart</option><option value='regular'>Regular</option><option value='glulisine'>Glulisine</option><option value='lispro'>Lispro</option></select>";
  }
  if(document.insulin.feed.value == "bolT") {
    document.getElementById("bolTnum").innerHTML = "<br /><br /><span class='large'>Feeding: </span><select name='bolTnum' ACTION='#' ONCHANGE='convert()' class='large'><option value=3>3 times per day</option><option value=4 selected='yes'>4 times per day</option><option value=5>5 times per day</option></select>";
    document.getElementById("boluschangesfeed").innerHTML="<select name='boluschanges' ACTION='#' ONCHANGE='boluschange()' class='large'><option value='aspart'>Aspart</option><option value='regular'>Regular</option><option value='glulisine'>Glulisine</option><option value='lispro'>Lispro</option></select>";
  }
  else {
    document.getElementById("bolTnum").innerHTML = "";
  }
	if(document.insulin.feed.value == "npo" || document.insulin.feed.value == "50") {
  	document.getElementById("distnutrition").innerHTML="<select name='dist' action='#' onchange='convert()' class='large'><option value='.5'>50:00 - Typical</option><option value='.4' disabled>40:00 - Continuous feed</option><option value='-1' selected='yes'>40:00 - Not eating</option><option value='.4'>40:00 - Steroids</option><option value='.3'>30:00 - Steroids</option><option value='.33'>33:00 - Renal failure</option><option value='.33'>33:00 - Hepatic failure</option></select>";
	}
  boluschange();
  convert();
}

function incCBGf() {
  if(document.insulin.incCBG.value == "cust") {
    document.getElementById("incCBGcust").innerHTML = "<br /><span class='large'>Custom: </span><INPUT type='tel' NAME='incCBGcust' ONKEYUP='convert()' class='large' size='3' maxlength='3'> mg/dL";
  }
  else {
    document.getElementById("incCBGcust").innerHTML = "";
  }
  convert();
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
      TINY.box.show("hometddwizardup.html",1,300,100,1);
      l = 1;
      break;
    }
    case "cont1" : {
      document.getElementById("hometddwizardpopup").innerHTML="Is it <b>Type 1 or 2 diabetes</b> <i>with either</i> <ul><li>uncontrolled glucoses (A1c >8%)</li><b>OR</b><li>fasting glucoses >200 mg/dL (11 mmol/L)</li></ul><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:hometddmod('cont2t1');\">Type 1</button></div><div id='justcenter'><button class='large' onclick=\"javascript:hometddmod('cont2no');\">Neither</button></div><div id='justright'><button class='large' onclick=\"javascript:hometddmod('cont2t2');\">Type 2</button></div></div>";
      TINY.box.size('tinybox',300,140,1);
      break;
    }
    case "cont2t1" : {
      document.getElementById("hometddwizardpopup").innerHTML="Patient is <b>about to begin</b> corticosteroids (newly prescribed for the inpatient stay).<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:hometddmod('cont3no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:hometddmod('cont3yes');\">Yes</button></div>";
      l += 0.1;
      TINY.box.size('tinybox',300,85,1);
      break;
    }
    case "cont2no" : {
      document.getElementById("hometddwizardpopup").innerHTML="Patient is <b>about to begin</b> corticosteroids (newly prescribed for the inpatient stay).<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:hometddmod('cont3no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:hometddmod('cont3yes');\">Yes</button></div>";
      TINY.box.size('tinybox',300,85,1);
      break;
    }
    case "cont2t2" : {
      document.getElementById("hometddwizardpopup").innerHTML="Patient is <b>about to begin</b> corticosteroids (newly prescribed for the inpatient stay).<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:hometddmod('cont3no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:hometddmod('cont3yes');\">Yes</button></div>";
      l += 0.2;
      TINY.box.size('tinybox',300,85,1);
      break;
    }
    case "cont3yes" : {
      document.getElementById("hometddwizardpopup").innerHTML="Patient reports hypoglycemia unawareness.<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:hometddmod('cont4no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:hometddmod('cont4yes');\">Yes</button></div>";
      l += 0.2;
      TINY.box.size('tinybox',300,70,1);
      break;
    }
    case "cont3no" : {
      document.getElementById("hometddwizardpopup").innerHTML="Patient reports hypoglycemia unawareness.<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:hometddmod('cont4no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:hometddmod('cont4yes');\">Yes</button></div>";
      TINY.box.size('tinybox',300,70,1);
      break;
    }
    case "cont4yes" : {
      document.getElementById("hometddwizardpopup").innerHTML="Hypoglycemia within the past 24 h, with glucose (in mg/dL):<br><br><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:hometddmod('cont5less50');\">&lt;50</button></div><div id='justcenter'><button class='large' onclick=\"javascript:hometddmod('cont550to70');\">50 - 70</button></div><div id='justright'><button class='large' onclick=\"javascript:hometddmod('cont5more70');\">&gt;70</button></div></div><div class='large' style='text-align:center'>mg/dL</div>";
      l -= 0.2;
      TINY.box.size('tinybox',300,120,1);
      break;
    }
    case "cont4no" : {
      document.getElementById("hometddwizardpopup").innerHTML="Hypoglycemia within the past 24 h, with glucose (in mg/dL):<br><br><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:hometddmod('cont5less50');\">&lt;50</button></div><div id='justcenter'><button class='large' onclick=\"javascript:hometddmod('cont550to70');\">50 - 70</button></div><div id='justright'><button class='large' onclick=\"javascript:hometddmod('cont5more70');\">&gt;70</button></div></div><div class='large' style='text-align:center'>mg/dL</div>";
      TINY.box.size('tinybox',300,120,1);
      break;
    }
    case "cont5less50" : {
      document.getElementById("hometddwizardpopup").innerHTML="Renal impairment can warrant a catious modification of the home total daily dose.<br>A patient:<ul><li>On insulin at home</li><li>With no history of hyperglycemia</li><li>With a stable CKD stage I or II (GFR &gt;40 mL/min)</li></ul>does not require a change. However, if the patient is:<ul><li>CKD stage III (GFR 30-39 mL/min)</li><li>CKD stage IV (GFR 15-29 mL/min)</li><li>CKD stage V (GFR 15 mL/min) or ESRD or acute renal injury</li></ul> a modification is recommended. Click the stage (or 'none'):<br><br><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:hometddmod('cont6stageIII');\">Stage III</button></div><div id='justcenter'><button class='large' onclick=\"javascript:hometddmod('cont6stageIV');\">Stage IV</button></div><div id='justright'><button class='large' onclick=\"javascript:hometddmod('cont6stageV');\">Stage V</button></div></div><div style='text-align:center'><button class='large' onclick=\"javascript:hometddmod('cont6none');\">No Critical Renal Impairment</button></div>";
      l -= 0.4;
      TINY.box.size('tinybox',400,350,1);
      break;
    }
    case "cont550to70" : {
      document.getElementById("hometddwizardpopup").innerHTML="Renal impairment can warrant a catious modification of the home total daily dose.<br>A patient:<ul><li>On insulin at home</li><li>With no history of hyperglycemia</li><li>With a stable CKD stage I or II (GFR &gt;40 mL/min)</li></ul>does not require a change. However, if the patient is:<ul><li>CKD stage III (GFR 30-39 mL/min)</li><li>CKD stage IV (GFR 15-29 mL/min)</li><li>CKD stage V (GFR 15 mL/min) or ESRD or acute renal injury</li></ul> a modification is recommended. Click the stage (or 'none'):<br><br><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:hometddmod('cont6stageIII');\">Stage III</button></div><div id='justcenter'><button class='large' onclick=\"javascript:hometddmod('cont6stageIV');\">Stage IV</button></div><div id='justright'><button class='large' onclick=\"javascript:hometddmod('cont6stageV');\">Stage V</button></div></div><div style='text-align:center'><button class='large' onclick=\"javascript:hometddmod('cont6none');\">No Critical Renal Impairment</button></div>";
      l -= 0.3;
      TINY.box.size('tinybox',400,350,1);
      break;
    }
    case "cont5more70" : {
      document.getElementById("hometddwizardpopup").innerHTML="Renal impairment can warrant a catious modification of the home total daily dose.<br>A patient:<ul><li>On insulin at home</li><li>With no history of hyperglycemia</li><li>With a stable CKD stage I or II (GFR &gt;40 mL/min)</li></ul>does not require a change. However, if the patient is:<ul><li>CKD stage III (GFR 30-39 mL/min)</li><li>CKD stage IV (GFR 15-29 mL/min)</li><li>CKD stage V (GFR 15 mL/min) or ESRD or acute renal injury</li></ul> a modification is recommended. Click the stage (or 'none'):<br><br><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:hometddmod('cont6stageIII');\">Stage III</button></div><div id='justcenter'><button class='large' onclick=\"javascript:hometddmod('cont6stageIV');\">Stage IV</button></div><div id='justright'><button class='large' onclick=\"javascript:hometddmod('cont6stageV');\">Stage V</button></div></div><div style='text-align:center'><button class='large' onclick=\"javascript:hometddmod('cont6none');\">No Critical Renal Impairment</button></div>";
      TINY.box.size('tinybox',400,350,1);
      break;
    }
    case "cont6stageIII" : {
      l -= 0.3;
      l = Math.round(l*10)/10;
      document.getElementById("hometddwizardpopup").innerHTML="The recommended modification of your home TDD is: <span class='answer'>" + l + "</span> your original TDD.<br><br>These recommendations are based on the algorithm developed by the Duke University Medical Center glycemic safety committee.<br>Always consider making further adjustments if the patient continues to develop hypoglycemia despite changes.<br><br>This window will close in 10 seconds.<div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,200,1,3);
      homemod = l;
      homemodenable = true;
      setTimeout(function() { TINY.box.hide(); },10000);
      convert();
      break;
    }
    case "cont6stageIV" : {
      l -= 0.5;
      l = Math.round(l*10)/10;
      document.getElementById("hometddwizardpopup").innerHTML="The recommended modification of your home TDD is: <span class='answer'>" + l + "</span> your original TDD.<br><br>These recommendations are based on the algorithm developed by the Duke University Medical Center glycemic safety committee.<br>Always consider making further adjustments if the patient continues to develop hypoglycemia despite changes.<br><br>This window will close in 10 seconds.<div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,200,1,3);
      homemod = l;
      homemodenable = true;
      setTimeout(function() { TINY.box.hide(); },10000);
      convert();
      break;
    }
    case "cont6stageV" : {
      l -= 0.6;
      l = Math.round(l*10)/10;
      document.getElementById("hometddwizardpopup").innerHTML="The recommended modification of your home TDD is: <span class='answer'>" + l + "</span> your original TDD.<br><br>These recommendations are based on the algorithm developed by the Duke University Medical Center glycemic safety committee.<br>Always consider making further adjustments if the patient continues to develop hypoglycemia despite changes.<br><br>This window will close in 10 seconds.<div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,200,1,3);
      homemod = l;
      homemodenable = true;
      setTimeout(function() { TINY.box.hide(); },10000);
      convert();
      break;
    }
    case "cont6none" : {
      l = Math.round(l*10)/10;
      document.getElementById("hometddwizardpopup").innerHTML="The recommended modification of your home TDD is: <span class='answer'>" + l + "</span> your original TDD.<br><br>These recommendations are based on the algorithm developed by the Duke University Medical Center glycemic safety committee.<br>Always consider making further adjustments if the patient continues to develop hypoglycemia despite changes.<br><br>This window will close in 10 seconds.<div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,200,1,3);
      homemod = l;
      homemodenable = true;
      setTimeout(function() { TINY.box.hide(); },10000);
      convert();
    }
  }
  if(homemodenable == true) {
    document.getElementById("resethometdd").innerHTML="<button type='button' class='large' onclick=\"hometddmod('reset');\">Reset</button>";
    document.getElementById("hometddview").innerHTML="<span class='large' onclick='TINY.box.show('caption/hometdd.html',1,300,180,1)'>Home TDD modification:<img src='../images/q.jpg' alt='More information'> </span><span class='answer'>" + Math.round(homemod*100) + "%</span><br><br>";
  }
  else {
    document.getElementById("resethometdd").innerHTML="";
    document.getElementById("hometddview").innerHTML="";
  }
}

// Calculate Basal Insulin
var homemodenable = false;
var homemod = 1;
var tdd = "";
var ukg = "";
var BW = "";
var custnum = "";
var lbBW = "";
var basaldist = "";
var bolusdist = "";
var basaltype = "";
var basaltwice = "";
var l = 0;

function basalchange() {
  basaltype = document.insulin.basalchanges.value;
  if(basaltype == "nph2") {
    document.getElementById("basaltwiceamtenable").innerHTML = "<div style='text-align:center'><select name='basaltwiceamt' ACTION='#' ONCHANGE='basaltwicechange()' class='large'><option value='67'>67% AM, 33% PM</option><option value='50'>50% AM, 50% PM</option></select></div>";
    basaltwicechange();
  }
  else if(basaltype == "detemir2") {
    document.getElementById("basaltwiceamtenable").innerHTML = "<br>";
    basaltwice = 50;
    convert();
  }
  else if(basaltype == "detemir1" || basaltype == "nph1") {
    document.getElementById("basaltwiceamtenable").innerHTML = "<br>";
    convert();
  }
  else {
    document.getElementById("basaltwiceamtenable").innerHTML = "<br>";
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
  switch(execute) {
    case true : {
      TINY.box.show("ukgwizardup.html",1,300,90,1);
      l = 0.3;
      break;
    }
    case "cont1" : {
      document.getElementById("ukgwizardpopup").innerHTML="The patient: <ol><li>Has creatine &#8805; 2 mg/dL.</li></ol><div style='text-align:center'><button class='qscale large' onclick=\"javascript:ukgwizard('cont1start');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:ukgwizard('cont4no');\">Yes</button></div>";
      TINY.box.size('tinybox',300,100,1);
      break;
    }
    case "cont1start" : {
      document.getElementById("ukgwizardpopup").innerHTML="The patient has: <ol><li>Type 2 diabetes</li><li>Is less than 70 years old</li></ol><div style='text-align:center'><button class='qscale large' onclick=\"javascript:ukgwizard('cont2no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:ukgwizard('cont2yes');\">Yes</button></div>";
      TINY.box.size('tinybox',300,115,1);
      break;
    }
    case "cont2yes" : {
      document.getElementById("ukgwizardpopup").innerHTML="The patient has evidence of difficult control; that is, he or she takes at least three oral agents at home, or the hemoglobin A1C is greater than 8%, or he or she reports fasting glucoses greater than 200 mg/dL (11.0 mmol/L) prior to admission.<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:ukgwizard('cont3no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:ukgwizard('cont3yes');\">Yes</button></div>";
      l += 0.1;
      TINY.box.size('tinybox',300,145,1);
      break;
    }
    case "cont2no" : {
      document.getElementById("ukgwizardpopup").innerHTML="The patient has evidence of difficult control; that is, he or she takes at least three oral agents at home, or the hemoglobin A1C is greater than 8%, or he or she reports fasting glucoses greater than 200 mg/dL (11.0 mmol/L) prior to admission.<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:ukgwizard('cont3no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:ukgwizard('cont3yes');\">Yes</button></div>";
      TINY.box.size('tinybox',300,145,1);
      break;
    }
    case "cont3yes" : {
      document.getElementById("ukgwizardpopup").innerHTML="The patient has a BMI greater than 35 kg/m<sup>2</sup>.<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:ukgwizard('cont4no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:ukgwizard('cont4yes');\">Yes</button></div>";
      l += 0.1;
      TINY.box.size('tinybox',300,75,1);
      break;
    }
    case "cont3no" : {
      document.getElementById("ukgwizardpopup").innerHTML="The patient has a BMI greater than 35 kg/m<sup>2</sup>.<br><br><div style='text-align:center'><button class='qscale large' onclick=\"javascript:ukgwizard('cont4no');\">No</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='qscale large' onclick=\"javascript:ukgwizard('cont4yes');\">Yes</button></div>";
      TINY.box.size('tinybox',300,75,1);
      break;
    }
    case "cont4yes" : {
      l += 0.1;
      document.getElementById("ukgwizardpopup").innerHTML="The recommended and safe U/kg ratio is: <span class='answer'>" + l + "</span><br>Remember that additional factors may change the U/kg ratio beyond this generalized, initial recommendation.<br>This window will close in 3 seconds.<div style='float:right;'><button class='large' onclick='TINY.box.hide();'>Close</button></div>";
      TINY.box.size('tinybox',300,110,1,3);
      switch(l) {
        case 0.3: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3' selected='selected'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
        case 0.4: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4' selected='selected'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
        case 0.5: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5' selected='selected'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
        case 0.6: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6' selected='selected'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
      }
      setTimeout(function() { TINY.box.hide(); },3000);
      cust();
      break;
    }
    case "cont4no" : {
      document.getElementById("ukgwizardpopup").innerHTML="The recommended and safe U/kg ratio is: <span class='answer'>" + l + "</span><br>Remember that additional factors may change the U/kg ratio beyond this generalized, initial recommendation.<br>This window will close in 3 seconds.<div style='float:right;'><button class='large' onclick='TINY.box.hide();'>Close</button></div>";
      TINY.box.size('tinybox',300,110,1,3);
      switch(l) {
        case 0.3: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3' selected='selected'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
        case 0.4: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4' selected='selected'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
        case 0.5: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5' selected='selected'>0.5 - BMI 25-30</option><option value='0.6'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
        case 0.6: document.getElementById("ukgwizard").innerHTML = "<select class='large' name='ukg' onchange='cust()'><option value='0.2'>0.2 - DM1/Sensitive</option><option value='0.3'>0.3 - Sensitive</option><option value='0.4'>0.4 - BMI 18.5-25</option><option value='0.5'>0.5 - BMI 25-30</option><option value='0.6' selected='selected'>0.6 - BMI &gt; 30</option><option value='0.7'>0.7 - Resistant</option><option value='0.8'>0.8 - Resistant</option><option value='0.9'>0.9 - Resistant</option><option value='1.0'>1.0 - Resistant</option><option value='1.1'>1.1 - Resistant</option><option value='1.2'>1.2 - Resistant</option><option value='1.3'>1.3 - Resistant</option><option value='1.4'>1.4 - Resistant</option><option value='1.5'>1.5 - Resistant</option><option value='cust'>Custom/precise</option></select><span id='custukg'></span>"; break;
      }
      setTimeout(function() { TINY.box.hide(); },3000);
      cust();
    }
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
        document.getElementById("preukg").innerHTML="<br /><br /><span class='large' onclick=\"TINY.box.show('fromukg.html',1,300,0,1)\">From U/kg ratio:<img src='../images/q.jpg' /> </span><span class='answer'>0.00</span>";
      }
      else {
        document.getElementById("preukg").innerHTML="<br /><br /><span class='large' onclick=\"TINY.box.show('caption/fromukg.html',1,300,0,1)\">From U/kg ratio:<img src='../images/q.jpg' /> </span><span class='answer'>" + ukg.toFixed(2) + "</span>";
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
        document.getElementById("preukg").innerHTML="<br /><br /><span class='large' onclick=\"TINY.box.show('fromukg.html',1,300,0,1)\">From U/kg ratio:<img src='../images/q.jpg' /> </span><span class='answer'>0.00</span>";
      }
      else {
        document.getElementById("preukg").innerHTML="<br /><br /><span class='large' onclick=\"TINY.box.show('caption/fromukg.html',1,300,0,1)\">From U/kg ratio:<img src='../images/q.jpg' /> </span><span class='answer'>" + ukg.toFixed(2) + "</span>";
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
  else if(document.insulin.incCBG.value == "2corr") {
    var incCBGs = corrF*2.0;
  }
  else if(document.insulin.incCBG.value == "cust") {
    var incCBGs = document.insulin.incCBGcust.value;
  }
  else {
    var incCBGs = document.insulin.incCBG.value;
  }
  
  corrF = 1800 / tdd;
  var tableinsinc = (incCBGs/corrF);
  
  corrF = Math.round(corrF);
  
  var minCBG = document.insulin.minCBG.value;
  var minCBG = parseFloat(minCBG);
  
  var tableinsT = 0;
  
  var tableins = "";
  var tableinsb = "<table id='CBGTable'><tr><td style='border-bottom:1px dashed #808080;border-right:1px solid white;'>CBG (mg/dL):</td><td style='border-bottom:1px dashed #808080'>Supplemental dosage:</td></tr>";
  var i = 0;
  while(minCBG < (420-parseFloat(incCBGs))) {
    i += 1;
    tableins = tableins + "<tr><td style='border-bottom:1px dashed #808080;border-right:1px solid white;'>" + (Math.round(minCBG+1)) + "-" + (Math.round(minCBG+parseFloat(incCBGs))) + "</td><td style='border-bottom:1px dashed #808080'>" + Math.round(tableinsT) + " units</td></tr>";
    tableinsT = tableinsT + tableinsinc;
    minCBG = minCBG + parseFloat(incCBGs);
    if(i >= 100) { break; }
  }
  
  tableins = tableins + "<tr><td style='border-bottom:1px dashed #808080;border-right:1px solid white;'>" + (Math.round(minCBG+1)) + "- 420</td><td style='border-bottom:1px dashed #808080'>" + Math.round(tableinsT) + " units</td></tr>";
  var tableinse = "<tr><td style='border-right:1px solid white;'>&gt 420</td><td>"+Math.round(tableinsT+tableinsinc)+" units &amp; Call MD</td></tr></table>";
  
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
      document.getElementById("bas").innerHTML = bas + " AM<br>" + bas + " PM";
    }
    if(basaltwice == 67) {
      var bas1 = Math.round(bas*(2/3));
      var bas2 = Math.round(bas*(1/3));
      document.getElementById("bas").innerHTML = bas1 + " AM<br>" + bas2 + " PM";
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