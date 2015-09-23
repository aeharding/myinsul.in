function a1cexpand() {
  document.getElementById('a1cexpand').innerHTML = "<div style='text-align:center'><a onclick='a1ccontract();'>Less info &laquo;</a></div>Used to get an estimated average glucose in mg/dL from patient's incoming A1c.<br /><img src='a1c.gif' alt='eAG = (28.7*A1c)-46.7' />";
  }
function a1ccontract() {
  document.getElementById('a1cexpand').innerHTML = "<div style='text-align:center'><a onclick='a1cexpand();'>More info &raquo;</a></div>";
  }
  