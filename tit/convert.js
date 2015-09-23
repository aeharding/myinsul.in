function stopRKey(evt) {
	var evt  = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	if ((evt.keyCode == 13) && (node.type=="text")) { return false; }
}
document.onkeypress = stopRKey;

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

function pretask() {
  setTimeout(function() { document.getElementById('focusme').focus(); }, 100);
  
  var fastbg = urlpara("fastbg");
  if(fastbg != "") {
    document.getElementById("mult").checked = true;
    choicebasnut();
    document.setup.fastbg.value = fastbg;
    convert();
  }
}

var fastbg = "";
var basaltype = "Glargine";
var choice = "";
// Calculate Basal Insulin
function choicebasnut() {
  choice = "basnut";
  document.getElementById("type").innerHTML="<h2>Adjust basal</h2><div class='step'><span id='bas' class='answer'>0</span> <span class='large'>Units/day </span><select name='indec' id='indec' onchange='convert(\"true\")' class='large'><option value='dec'>decrease</option><option value='cont'>continue</option><option value='inc'>increase</option></select><span class='large'>&nbsp;</span><span id='basaltypeis' class='large'></span><span class='large'>&nbsp;</span><span id='percentenable'><select name='percent' id='percent' onchange='convert(\"true\")' class='large'><option value='10'>10%</option><option value='20'>20%</option><option value='30'>30%</option><option value='40'>40%</option><option value='50'>50%</option></select></span></div>";
  document.getElementById("typeinput").innerHTML="<span class='large' onclick=\"TINY.box.show('caption/using.html',1,300,0,1)\">Use: <img src='../images/q.jpg' /></span><div class='large' style='text-align:center'><label for='glargine'>Glargine: </label><INPUT TYPE=RADIO NAME='basaltype' id='glargine' ONCLICK='multglargine()' checked='yes'> <label for='nph'>NPH: </label><INPUT TYPE=RADIO NAME='basaltype' id='nph' ONCLICK='multnph()'></div><br /><div style='text-align:center'><span class='large'>Current basal dose: </span><INPUT TYPE='tel' NAME='basaldose' ONKEYUP='basnutconvert()' class='large' size='3' maxlength='3'> Units/day</div>";
}
function choicetdd() {
  choice = "tdd";
  document.getElementById("type").innerHTML="<h2>Adjust total daily dose</h2><div class='step'><span id='tddmin' class='answer'>0</span><span class='large'> Units/day </span><select name='indec' id='indec' onchange='convert(\"true\")' class='large'><option value='dec'>decrease</option><option value='cont'>continue</option><option value='inc'>increase</option></select><span class='large'>&nbsp;</span><span id='percentenable'><select name='percent' id='percent' onchange='convert(\"true\")' class='large'><option value='10'>10%</option><option value='20'>20%</option><option value='30'>30%</option><option value='40'>40%</option><option value='50'>50%</option></select></span><br /><span id='threat'></span><br /><div id='url' style='text-align:center'><button type='button' class='large' onclick=\"parent.location='../tdd/'\">Calculate new regimen...</button></div></div>";
  document.getElementById("typeinput").innerHTML="<div style='text-align:center'><span class='large'>Current total daily dose: </span><INPUT TYPE='tel' NAME='tddose' ONKEYUP='tddconvert()' class='large' size='3' maxlength='3'> Units/day</div>";
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
  basnutconvert();
}
function multnph() {
  basaltype = "NPH";
  basnutconvert();
}

var percentenabled = "<select name='percent' id='percent' onchange='convert(\"true\")' class='large'><option value='10'>10%</option><option value='20'>20%</option><option value='30'>30%</option><option value='40'>40%</option><option value='50'>50%</option></select>";
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
    document.getElementById("url").innerHTML="<button type='button' class='large' onclick=\"parent.location='../new/index.html?tdd=" + Math.round((1+change)*tddose) + "'\">Calculate new regimen...</button>";
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
      document.getElementById("tdd").innerHTML="";
      document.getElementById("indec").value = "cont";
      document.getElementById("percentenable").innerHTML = "";
      convert();
      document.getElementById("threat").innerHTML="Please insert a valid fasting blood sugar.";
    }
    document.getElementById("tddmin").innerHTML=tdd;
    document.getElementById("url").innerHTML="<button type='button' class='large' onclick=\"parent.location='../new/index.html?tdd=" + Math.round(String(tdd).split("-")[0]) + "'\">Calculate new regimen...</button>";
  }
}