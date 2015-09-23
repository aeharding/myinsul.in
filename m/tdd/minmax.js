function basexpand() {
  document.getElementById('basexpand').innerHTML = "<div style='text-align:center'><a onclick='bascontract();'>Less info &laquo;</a></div><ul><li>Most patients need basal insulin.</li><li>Glargine is preferred, but NPH is also used.</li><li>Continue the same dose (or 80%) of Glagine/Determir for patients NPO for surgery.</li><li>Patients NPO and on NPH basal insulin should have a half dose (<span id='basnph'>0</span> U/day).</li></ul>";
  convert();
  }
function bascontract() {
  document.getElementById('basexpand').innerHTML = "<div style='text-align:center'><a onclick='basexpand();'>More info &raquo;</a></div>";
  }
  
function nutexpand() {
  document.getElementById('nutexpand').innerHTML = "<div style='text-align:center'><a onclick='nutcontract();'>Less info &laquo;</a></div><ul><li>Nutritional insulin is required (whether by meals/tube feeds) even at goal glucose.</li><li>Should be held if patient is not recieving nutrition.</li><li>For unpredictable eating, administer aspart (not regular) insulin during or after meal.</li></ul>";
  }
function nutcontract() {
  document.getElementById('nutexpand').innerHTML = "<div style='text-align:center'><a onclick='nutexpand();'>More info &raquo;</a></div>";
  }
  
function supexpand() {
  document.getElementById('supexpand').innerHTML = "<div style='text-align:center'><a onclick='supcontract();'>Less info &laquo;</a></div><ul><li>Supplemental insulin is added to nutritional insulin to correct for pre-meal hyperglycemia.</li><li>Use the same insulin type used for nutritional insulin.</li><li>The term 'supplemental' is used instead of 'sliding scale' to emphasize the best use of the scale (to supplement).</li></ul>";
  }
function supcontract() {
  document.getElementById('supexpand').innerHTML = "<div style='text-align:center'><a onclick='supexpand();'>More info &raquo;</a></div>";
  }
  
function ukgexpand() {
  document.getElementById('ukgexpand').innerHTML = "<div style='text-align:center'><a onclick='ukgcontract();'>Less info &laquo;</a></div><br />The units/kg ratio for patient NOT on an insulin regimen at home:<br /><br />0.3 units/kg body weight:<ul><li>Underweight/lean</li><li>Frail/elderly</li><li>Hemodialysis</li><li>Insulin sensitive</li><li>At risk for hypoglycemia</li></ul>0.4 units/kg body weight:<ul><li>Normal body habitus: BMI 18.5-24.9</li><li>Normal weight</li></ul>0.5 units/kg body weight:<ul><li>Overweight (BMI 25-29.9)</li></ul>≥ 0.6 units/kg body weight:<ul><li>Obese</li><li>Insulin resistant</li><li>Glucocorticoids or high-dose steroids</li></ul>";
  }
function ukgcontract() {
  document.getElementById('ukgexpand').innerHTML = "<div style='text-align:center'><a onclick='ukgexpand();'>More info &raquo;</a></div>";
  }

function sourceexpand() {
  document.getElementById('sourceexpand').innerHTML = "Derive TDD from:&nbsp;&nbsp;<a onclick='sourcecontract();'>Less info &laquo;</a><br><div style='text-align:left'><b>Weight:</b> If the patient has no preexisting regimen, choose this to derive a TDD from weight.<br><b>TDD:</b> If a preexisting total daily dose is known, choose this option to divide it up into basal and bolus components.<br><b>Basal:</b> If a preexisting basal dose is known, choose this option to add a bolus component.<br><br>You can switch between any option with entered values to modify desired components.</div>";
  convert();
  }
function sourcecontract() {
  document.getElementById('sourceexpand').innerHTML = "Derive TDD from:&nbsp;&nbsp;<a onclick='sourceexpand();'>More info &raquo;</a>";
  }