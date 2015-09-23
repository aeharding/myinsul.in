var fastbg = 0;
basaltype = "Glargine";
var choice = "";
// Calculate Basal Insulin
function choicebasnut() {
  choice = "basnut";
  document.getElementById("buttonselect").innerHTML="<span class='largerText'>Adjust:</span><br /><button type='button' name='adjuster' id='mult' onclick='choicebasnut()' class='buttonis' disabled>Basal dose</button><br /><button type='button' name='adjuster' id='tdd' onclick='choicetdd()' class='buttonis'>Total Daily Dose</button></div>";
  document.getElementById("type").innerHTML="<hr /><div class='titleText' style='text-align:center'>Adjust basal dose:</div><span id='basexpand'><div style='text-align:center'><a onclick='basexpand();'>More info &raquo;</a></div></span><br />Use:<div style='text-align:center' id='buttonselectbasal'><button type='button' name='basaltype' id='glargine' onclick='multglargine()' class='largerText' style='width:120px;text-indent:-8px;' disabled>Glargine</button> <button type='button' name='basaltype' id='nph' onclick='multnph()' class='largerText' style='width:120px'>NPH</button></div><br /><div style='text-align:center'>Current basal dose: <INPUT TYPE='tel' NAME='basaldose' ONKEYUP='basnutconvert()' class='largerText' size='3' maxlength='3'> Units/day</div><br /><span id='bas' class='answer'>0</span> <span class='largerText'>Units/day</span><br /><select name='indec' id='indec' onchange='convert(\"true\")' class='largerText'><option value='dec'>decrease</option><option value='cont'>continue</option><option value='inc'>increase</option></select> <span id='basaltypeis' class='largerText'></span><span id='percentenable'><select name='percent' id='percent' onchange='convert(\"true\")' class='largerText'><option value='10'>10%</option><option value='20'>20%</option><option value='30'>30%</option><option value='40'>40%</option><option value='50'>50%</option></select></span>";
}
function choicetdd() {
  choice = "tdd";
  document.getElementById("buttonselect").innerHTML="<span class='largerText'>Adjust:</span><br /><button type='button' name='adjuster' id='mult' onclick='choicebasnut()' class='buttonis'>Basal dose</button><br /><button type='button' name='adjuster' id='tdd' onclick='choicetdd()' class='buttonis' disabled>Total Daily Dose</button></div>";
  document.getElementById("type").innerHTML="<hr /><div class='titleText' style='text-align:center'>Adjust total daily dose:</div><span id='tddexpand'><div style='text-align:center'><a onclick='tddexpand();'>More info &raquo;</a></div></span><br /><div style='text-align:center'>Current total daily dose: <INPUT TYPE='tel' NAME='tddose' ONKEYUP='tddconvert()' class='largerText' size='3' maxlength='3'> Units/day</div><span id='tddmin' class='answer'>0</span><span id='tddmax' class='answer'></span><span class='largerText'> Units/day </span><select name='indec' id='indec' onchange='convert(\"true\")' class='largerText'><option value='dec'>decrease</option><option value='cont'>continue</option><option value='inc'>increase</option></select> <span id='percentenable'><select name='percent' id='percent' onchange='convert(\"true\")' class='largerText'><option value='10'>10%</option><option value='20'>20%</option><option value='30'>30%</option><option value='40'>40%</option><option value='50'>50%</option></select></span><br /><span id='threat'></span><br /><span id='url'><button type='button' class='largerText' onclick=\"parent.location='../tdd/'\">Calculate new regimen...</button></span>";
}

function convert(manual) {
  fastbg = document.setup.fastbg.value;
  if(choice == "basnut") {
  basnutconvert(manual);
  }
  if(choice == "tdd") {
  tddconvert(manual);
  }
}

function multglargine() {
  basaltype = "Glargine";
  document.getElementById("buttonselectbasal").innerHTML="<button type='button' name='basaltype' id='glargine' onclick='multglargine()' class='largerText' style='width:120px;text-indent:-8px;' disabled>Glargine</button> <button type='button' name='basaltype' id='nph' onclick='multnph()' class='largerText' style='width:120px'>NPH</button>";
  basnutconvert();
}
function multnph() {
  basaltype = "NPH";
  document.getElementById("buttonselectbasal").innerHTML="<button type='button' name='basaltype' id='glargine' onclick='multglargine()' class='largerText' style='width:120px;text-indent:-8px;'>Glargine</button> <button type='button' name='basaltype' id='nph' onclick='multnph()' class='largerText' style='width:120px' disabled>NPH</button>";
  basnutconvert();
}


var percentenabled = "<select name='percent' id='percent' onchange='convert(\"true\")' class='largerText'><option value='10'>10%</option><option value='20'>20%</option><option value='30'>30%</option><option value='40'>40%</option><option value='50'>50%</option></select>";
function basnutconvert(manual) {
  var basaldose = document.setup.basaldose.value;
  if(manual) {
    if(document.getElementById("indec").value == "cont") {
      document.getElementById("percentenable").innerHTML = "";
    } else {
      if(!document.getElementById("percent")) {
        document.getElementById("percentenable").innerHTML = percentenabled;
      }
    }
    if(document.getElementById("percent")) {
      var change = parseFloat(document.getElementById("percent").value)/100;
    }
    else { var change = 0; }
    if(document.getElementById("indec").value == "dec") { change *= -1; }
    document.getElementById("bas").innerHTML=Math.round((1+change)*basaldose);
    document.getElementById("basaltypeis").innerHTML=basaltype;
  }
  else {
    if(basaltype == "Glargine") {
      if(fastbg > 140) {
        var bas = basaldose*1.20;
        document.getElementById("indec").value = "inc";
        document.getElementById('percentenable').innerHTML = percentenabled;
        document.getElementById("percent").value = "20";
      }
      if(fastbg < 100) {
        var bas = basaldose*.80;
        document.getElementById("indec").value = "dec";
        document.getElementById('percentenable').innerHTML = percentenabled;
        document.getElementById("percent").value = "20";
      }
      if( (fastbg <= 140) && (fastbg >= 100) ) {
        var bas = basaldose*1;
        document.getElementById("indec").value = "cont";
        document.getElementById('percentenable').innerHTML = "";
      }
      document.getElementById("bas").innerHTML=Math.round(bas);
      document.getElementById("basaltypeis").innerHTML=basaltype;
    }
    if(basaltype == "NPH") {
      if(fastbg < 70) {
        var bas = basaldose*0.50;
        document.getElementById("indec").value = "dec";
        document.getElementById('percentenable').innerHTML = percentenabled;
        document.getElementById("percent").value = "50";
      }
      if( (fastbg >=70) && (fastbg <140) ) {
        var bas = basaldose;
        document.getElementById("indec").value = "cont";
        document.getElementById("percentenable").innerHTML = "";
      }
      if( (fastbg >= 140) && (fastbg <= 200) ) {
        var bas = basaldose*1.20;
        document.getElementById("indec").value = "inc";
        document.getElementById('percentenable').innerHTML = percentenabled;
        document.getElementById("percent").value = "20";
      }
      if(fastbg > 200) {
        var bas = basaldose*1.30;
        document.getElementById("indec").value = "inc";
        document.getElementById('percentenable').innerHTML = percentenabled;
        document.getElementById("percent").value = "30";
      }
      document.getElementById("bas").innerHTML=Math.round(bas);
      document.getElementById("basaltypeis").innerHTML=basaltype;
    }
    if(fastbg <= 0) {
      document.getElementById("bas").innerHTML="";
      document.getElementById("indec").value = "cont";
      document.getElementById('percentenable').value = "";
      document.getElementById("basaltypeis").innerHTML="";
      document.getElementById("threat").innerHTML="Please insert a valid fasting blood sugar.";
    }
  }
}
var tdd = "";
function tddconvert(manual) {
  var tddose = document.setup.tddose.value;
  if(manual) {
    document.getElementById("threat").innerHTML="";
    if(document.getElementById("indec").value == "cont") {
      document.getElementById("percentenable").innerHTML = "";
    } else {
      if(!document.getElementById("percent")) {
        document.getElementById("percentenable").innerHTML = percentenabled;
      }
    }
    if(document.getElementById("percent")) {
      var change = parseFloat(document.getElementById("percent").value)/100;
    }
    else { var change = 0; }
    if(document.getElementById("indec").value == "dec") { change *= -1; }
    document.getElementById("tddmin").innerHTML=Math.round((1+change)*tddose);
    document.getElementById("url").innerHTML="<button type='button' class='largerText' onclick=\"parent.location='../tdd/index.html?tdd=" + Math.round((1+change)*tddose) + "'\">Calculate new regimen...</button>";
  }
  else {
    if( (fastbg > 140) && (fastbg <= 180) ) {
      tdd = Math.round(tddose*1.10)+"-" + Math.round(tddose*1.20);
      document.getElementById("indec").value = "inc";
      document.getElementById('percentenable').innerHTML = percentenabled;
      document.getElementById("percent").value = "10";
      document.getElementById("threat").innerHTML="Up to 20% safely if there is no threat of hypoglycemia.";
    }
    if(fastbg > 180) {
      tdd = Math.round(tddose*1.30);
      document.getElementById("indec").value = "inc";
      document.getElementById('percentenable').innerHTML = percentenabled;
      document.getElementById("percent").value = "30";
      document.getElementById("threat").innerHTML="";
    }
    if( (fastbg <= 140) && (fastbg >= 70) ) {
      tdd = Math.round(tddose*1);
      document.getElementById("indec").value = "cont";
      document.getElementById("percentenable").innerHTML = "";
      document.getElementById("threat").innerHTML="";
    }
    if(fastbg < 70) {
      tdd = Math.round(tddose*.80);
      document.getElementById("indec").value = "dec";
      document.getElementById('percentenable').innerHTML = percentenabled;
      document.getElementById("percent").value = "30";
      document.getElementById("threat").innerHTML="If 2 or more episodes of hypoglycemia (BG < 70), start D5-1/2NS at 75 mL/hr and decrease TDD to amount above.";
    }
    if(fastbg <= 0) {
      //document.getElementById("tdd").innerHTML="";
      document.getElementById("indec").value = "cont";
      document.getElementById("percentenable").innerHTML = "";
      convert();
      document.getElementById("threat").innerHTML="Please insert a valid fasting blood sugar.";
    }
    document.getElementById("tddmin").innerHTML=tdd;
    document.getElementById("url").innerHTML="<button type='button' class='largerText' onclick=\"parent.location='../tdd/index.html?tdd=" + Math.round(String(tdd).split("-")[0]) + "'\">Calculate new regimen...</button>";
  }
}