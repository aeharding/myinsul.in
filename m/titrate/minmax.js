function basexpand() {
  document.getElementById('basexpand').innerHTML = "<div style='text-align:center'><a onclick='bascontract();'>Less info &laquo;</a></div><ul><li>Glargine (Lantus): titrate every other day by 20%. Increase if fasting BG>140, decrease if <100. Exception: if fasting BG is >200 after the first dose, then increase the next dose by 20-30%.</li><li>NPH: titrate daily. For evening dose: if fasting BG is <70, decrease by 50%. If fasting BG 140-200, increase by 20%. If fasting BG is >200, increase by 30%. For morning dose: adjust by 20% if pre-lunch BG is not at goal.</li></ul>";
  convert();
  }
function bascontract() {
  document.getElementById('basexpand').innerHTML = "<div style='text-align:center'><a onclick='basexpand();'>More info &raquo;</a></div>";
  }
  
function adjustexpand() {
  document.getElementById('adjustexpand').innerHTML = "<div style='text-align:center'><a onclick='adjustcontract();'>Less info &laquo;</a></div>Fasting blood sugar is used to calculate the adjustment of insulin(s) per a given time period.<br /><ul><li>If supplemental insulin is being administered consistently, then an increase in the TDD is necessary.</li><li>If supplemental doses are not reducing blood glucoses as well as expected (e.g. you expect a 50 point drop with 1 unit of insulin but only get a 25 point drop), then increase the supplemental scale doses.</li></ol>";
  convert();
  }
function adjustcontract() {
  document.getElementById('adjustexpand').innerHTML = "<div style='text-align:center'><a onclick='adjustexpand();'>More info &raquo;</a></div>";
  }
  
function tddexpand() {
  document.getElementById('tddexpand').innerHTML = "<div style='text-align:center'><a onclick='tddcontract();'>Less info &laquo;</a></div><ul><li>If fasting glucose is consistently >140 but <180 with no threat of hypoglycemia, increase the TDD by 10-20%.</li><li>If fasting glucose consistently >180, increase the TDD by 30%.</li><li>If 2 or more episodes of hypoglycemia (BG <70), start D5-1/2NS at 75 mL/hr and decrease the TDD by 20%.</li></ul>";
  }
function tddcontract() {
  document.getElementById('tddexpand').innerHTML = "<div style='text-align:center'><a onclick='tddexpand();'>More info &raquo;</a></div>";
  }
  
/*function ukgexpand() {
  document.getElementById('ukgexpand').innerHTML = "The units/kg ratio can be estimated from a variety of factors:<br /><br />0.3 units/kg body weight:<ul><li>Underweight</li><li>Older age</li><li>Hemodialysis</li></ul>0.4 units/kg body weight:<ul><li>Normal body habitus: BMI 18.5-24.9</li><li>Normal weight</li></ul>0.5 units/kg body weight:<ul><li>Overweight (BMI 25-29.9)</li></ul>≥ 0.6 units/kg body weight:<ul><li>Obese</li><li>Insulin resistant</li><li>Glucocorticoids</li></ul>";
  }*/