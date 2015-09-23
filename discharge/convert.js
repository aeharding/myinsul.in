function guidemethod(execute) {
  switch(execute) {
    case true : {
      TINY.box.show("dischargewizard.html",1,300,85,1);
      break;
    }
    case "cont1" : {
      document.getElementById("dischargewizardpopup").innerHTML="Select one of the following:<br><br><div style='text-align:center'><button class='large' onclick=\"javascript:guidemethod('contnewhyp');\">New hyperglycemia</button><br><button class='large' onclick=\"javascript:guidemethod('contolddm');\">Known DM</button></div>";
      TINY.box.size('tinybox',300,110,1);
      break;
    }
    case "contnewhyp" : {
      document.getElementById("dischargewizardpopup").innerHTML="Is the HgA1c &gt; 10%?<br><br><button class='large' onclick=\"javascript:guidemethod('cont2new2');\">No</button><div style='float:right'><button class='large' onclick=\"javascript:guidemethod('contnewinsulin');\">Yes</button></div>";
      TINY.box.size('tinybox',300,70,1);
      break;
    }
    case "cont2new2" : {
      document.getElementById("dischargewizardpopup").innerHTML="Is it a new suspected Type 1 DM?<br>Note: Any patient following TOTAL pancreatectomy, or with newly diagnosed Type 1 DM will always require basal/nutritional and correctional insulin on discharge.<br><br><button class='large' onclick=\"javascript:guidemethod('cont2new3');\">No</button><div style='float:right'><button class='large' onclick=\"javascript:guidemethod('contnewinsulin');\">Yes</button></div>";
      TINY.box.size('tinybox',300,120,1);
      break;
    }
    case "cont2new3" : {
      document.getElementById("dischargewizardpopup").innerHTML="Is there more than one of the following:<ol><li>Requiring &gt; 20 units/day during hospital stay.</li><li>Discharged on new med regimen likely to cause continued BG elevation (steroids/antirejection drug).</li><li>New pancreatic insufficiency (e.g. from pancreatitis or surgery).<br>NOTE: Any patient following TOTAL pancreatectomy, or with newly diagnosed Type 1 DM will always require basal/nutritional and correctional insulin on discharge.</li><li>Contraindications to oral agents (e.g. renal insufficiency, abnormal LFT's, CHF).</li></ol><button class='large' onclick=\"javascript:guidemethod('conta1c78');\">No</button><div style='float:right'><button class='large' onclick=\"javascript:guidemethod('contnewinsulin');\">Yes</button></div>";
      TINY.box.size('tinybox',450,230,1);
      break;
    }
    case "conta1c78" : {
      document.getElementById("dischargewizardpopup").innerHTML="Is the HgA1c &gt; 7-8%?<br><br><button class='large' onclick=\"javascript:guidemethod('contdiet');\">No</button><div style='float:right'><button class='large' onclick=\"javascript:guidemethod('contneworal');\">Yes</button></div>";
      TINY.box.size('tinybox',300,70,1);
      break;
    }
    case "contolddm" : {
      document.getElementById("dischargewizardpopup").innerHTML="How is the diabetes controlled at home?<br><br><div id='justifyall'><div id='justleft'><button class='large' onclick=\"javascript:guidemethod('contnewhyp');\">Diet</button></div><div id='justcenter'><button class='large' onclick=\"javascript:guidemethod('contolddmoral');\">Oral</button></div><div id='justright'><button class='large' onclick=\"javascript:guidemethod('contoldinsulin');\">Insulin</button></div></div>";
      TINY.box.size('tinybox',300,85,1);
      break;
    }
    case "contolddmoral" : {
      document.getElementById("dischargewizardpopup").innerHTML="Does the patient have any of the following?<ul><li>New contraindications to oral agents (e.g. renal insufficiency, abnormal LFT's, CHF).</li><li>On 2 or more agents at home and A1c &gt; 8%.</li><li>Requiring &gt; 20 units/day during hospital stay.</li></ul><br><br><button class='large' onclick=\"javascript:guidemethod('contoldoral');\">No</button><div style='float:right'><button class='large' onclick=\"javascript:guidemethod('contnewinsulin');\">Yes</button></div>";
      TINY.box.size('tinybox',300,180,1);
      break;
    }
    
    
    case "contdiet" : {
      document.getElementById("dischargewizardpopup").innerHTML="The recommended solution is to:<br><span class='answer'>Diet and follow up</span><br><br><div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,85,1,3);
      document.discharge.method.value = "diet";
      loadmethod("diet");
      break;
    }
    case "contneworal" : {
      document.getElementById("dischargewizardpopup").innerHTML="The recommended solution is to:<br><span class='answer'>Discharge on oral agent(s)</span><br><br><div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,85,1,3);
      document.discharge.method.value = "neworal";
      loadmethod("neworal");
      break;
    }
    case "contnewinsulin" : {
      document.getElementById("dischargewizardpopup").innerHTML="The recommended solution is to:<br><span class='answer'>Discharge on insulin</span><br><br><div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,85,1,3);
      document.discharge.method.value = "newinsulin";
      loadmethod("newinsulin");
      break;
    }
    case "contoldoral" : {
      document.getElementById("dischargewizardpopup").innerHTML="The recommended solution is to:<br><span class='answer'>Resume oral meds</span><br><br><div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,85,1,3);
      document.discharge.method.value = "oldoral";
      loadmethod("oldoral");
      break;
    }
    case "contoldinsulin" : {
      document.getElementById("dischargewizardpopup").innerHTML="The recommended solution is to:<br><span class='answer'>Resume insulin</span><br><br><div style='float:right;'><button class='large' onclick='TINY.box.hide();'>close</button></div>";
      TINY.box.size('tinybox',300,85,1,3);
      document.discharge.method.value = "oldinsulin";
      loadmethod("oldinsulin");
      break;
    }
  }
}

function loadmethod(method) {
  switch(method) {
    case undefined : {
      loadmethod(document.discharge.method.value);
      break;
    }
    case "select" : {
      document.getElementById("methodinfo").innerHTML="Select a method or press the \"guide me\" button to get started.";
      break;
    }
    case "diet" : {
      document.getElementById("methodinfo").innerHTML="<ul><li>D/C home on DM diet.</li><li>Communicate findings/course with output PCP.</li></ul>";
      break;
    }
    case "neworal" : {
      document.getElementById("methodinfo").innerHTML="Consider starting low-dose oral agent.<br>Decision factors:<ul><li>Contraindications</li><li>Risk of hypogrlycemia</li><li>Speed of onset</li><li>Reliability of outpt f/up.</li></ul>Notes:<ul><li>Consider starting an insulin sensitizer (e.g., metformin, earily during the stay).</li><li>For those requiring >2 units pre-meal insulin, consider a sulfonylurea.</li><li>One day prior to anticipated discharge discontinue the pre-meal insulin and add a sulfonylurea to test the patient's response to the drug.</li><li>If good responce, discharge patient on both sulfonylurea and an insulin sensitizer.</li></ul>";
      break;
    }
    case "newinsulin" : {
      document.getElementById("methodinfo").innerHTML="<ul><li>Communicate the need for teaching at least one day prior to discharge.</li><li>Contact the patient's PCP to communicate the need for insulin therapy and arrange for close outpatient follow up.</li><li>Consider discharging on basal insulin (NPH/glargine) +/- prior home oral agents (screen for contraindications [e.g. renal insufficiency, abnormal LFT's, CHF]).</li><li>Basal insulin dose can be based on daily requirements during hospital stay, or more conservatively (e.g. 10 units or 0.2 units/kg at bedtime), to be adjusted as an outpatient.</li><li>If patient required nutritional insulin during hospitalization, consider continuing this upon discharge.</li><li>Home BG testing minimum of 4 X/day.</li></ul><br><b>For any patient new to insulin therapy, please notify the patient's PCP prior to discharge. Arrange for close outpatient follow-up.</b>";
      break;
    }
    case "oldoral" : {
      document.getElementById("methodinfo").innerHTML="Resume oral medications from prior home regimen once:<ul><li>Medical conditions improved.</li><li>Eating regularly.</li><li>Creatine, LFT's within safety parameters.</li></ul>";
      break;
    }
    case "oldinsulin" : {
      document.getElementById("methodinfo").innerHTML="<ul><li>Consider resuming prior home schedule.</li><li>Consider adjusting doses to reflect total daily dose required during hospital stay.</li><li>Keep in mind that insulin requirements may increase/decrease post D/C.</li></ul>";
      break;
    }
  }
}