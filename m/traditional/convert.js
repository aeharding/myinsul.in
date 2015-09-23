  var weight = "kg";

  //KG or #?
  function setkg() {
  weight = "kg"
  convert()
  }
  function setlb() {
  weight = "lb"
  convert()
  }


// Calculate Basal Insulin

function convert() {
  TDD = document.insulin.TDD.value
  BW = document.insulin.BW.value
  
  //carb Calc
  if(weight=="kg"){
  BW = BW*2.20462262
  }
  carbf = (2.6*BW)/TDD
  carbf = Math.round(carbf)
  document.getElementById("carbf").innerHTML=carbf;

  //Correction Factor
  CF = 1960/TDD
  CF = Math.round(CF)
  document.getElementById("CF").innerHTML=CF;

  // Basal calc
  basal = (TDD*0.48)
  basal = Math.round(basal)
  document.getElementById("basal").innerHTML=basal;

  //Carb. boluses
  carb = (TDD*0.43)
  carb = Math.round(carb)
  document.getElementById("carb").innerHTML=carb;

  //Correction boluses
  corr = (TDD*0.09)
  corr = Math.round(corr)
  document.getElementById("corr").innerHTML=corr;

}