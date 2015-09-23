function guidemethod(execute) {
	var pStatus;
	pStatus = confirm("This prompt is for determining how to dishcarge a patient with hyperglycemia during hospitalization.\nPress OK to continue.?");
	if(pStatus) {
		pStatus = confirm("Press 'OK' for new hyperglyecmia.\nPress 'Cancel' for known DM.");
		if(pStatus) {
			pStatus = confirm("Is the HgA1c > 10%?\nPress 'OK' for yes, or press 'Cancel' for no.");
			if(pStatus) {
				alert("The recommended solution is to discharge on insulin.");
				document.discharge.method.value = "newinsulin";
				loadmethod("newinsulin");
				return;
			} else {
				pStatus = confirm("Is it a new suspected Type 1 DM?\nNote: Any patient following TOTAL pancreatectomy, or with newly diagnosed Type 1 DM will always require basal/nutritional and correctional insulin on discharge.\nPress 'OK' for yes, or press 'Cancel' for no.");
				if(pStatus) {
					alert("The recommended solution is to discharge on insulin.");
					document.discharge.method.value = "newinsulin";
					loadmethod("newinsulin");
					return;
				} else {
					pStatus = confirm("Requiring > 20 units/day during hospital stay?\nPress 'OK' for yes, or press 'Cancel' for no.");
					if(!pStatus) {
						pStatus = confirm("Discharged on new med regimen likely to cause continued BG elevation (steroids/antirejection drug)?\nPress 'OK' for yes, or press 'Cancel' for no.");
						if(!pStatus) {
							pStatus = confirm("New pancreatic insufficiency (e.g. from pancreatitis or surgery).\nNOTE: Any patient following TOTAL pancreatectomy, or with newly diagnosed Type 1 DM will always require basal/nutritional and correctional insulin on discharge.\nPress 'OK' for yes, or press 'Cancel' for no.");
							if(!pStatus) {
								pStatus = confirm("Contraindications to oral agents (e.g. renal insufficiency, abnormal LFT's, CHF).\nPress 'OK' for yes, or press 'Cancel' for no.");
							}
						}
					}
					if(pStatus) {
						alert("The recommended solution is to discharge on insulin.");
						document.discharge.method.value = "newinsulin";
						loadmethod("newinsulin");
						return;
					} else {
						pStatus = confirm("Is the HgA1c > 7-8%?\nPress 'OK' for yes, or press 'Cancel' for no.");
						if(pStatus) {
							alert("The recommended solution is to discharge on oral agent(s).");
							document.discharge.method.value = "neworal";
							loadmethod("neworal");
							return;
						} else {
							alert("The recommended solution is to diet and follow up.");
							document.discharge.method.value = "diet";
							loadmethod("diet");
							return;
						}
					}
				}
			}
		} else {
			// Diet, oral, or insulin confirm loop
			var cont = true;
			while(cont) {
				pStatus = confirm("Is the diabetes controlled primarily by a diet?\nPress 'OK' for yes, or press 'Cancel' for no.");
				if(pStatus) {
					pStatus = confirm("Is the HgA1c > 10%?\nPress 'OK' for yes, or press 'Cancel' for no.");
					if(pStatus) {
						alert("The recommended solution is to discharge on insulin.");
						document.discharge.method.value = "newinsulin";
						loadmethod("newinsulin");
						return;
					} else {
						pStatus = confirm("Is it a new suspected Type 1 DM?\nNote: Any patient following TOTAL pancreatectomy, or with newly diagnosed Type 1 DM will always require basal/nutritional and correctional insulin on discharge.\nPress 'OK' for yes, or press 'Cancel' for no.");
						if(pStatus) {
							alert("The recommended solution is to discharge on insulin.");
							document.discharge.method.value = "newinsulin";
							loadmethod("newinsulin");
							return;
						} else {
							pStatus = confirm("Requiring > 20 units/day during hospital stay?\nPress 'OK' for yes, or press 'Cancel' for no.");
							if(!pStatus) {
								pStatus = confirm("Discharged on new med regimen likely to cause continued BG elevation (steroids/antirejection drug)?\nPress 'OK' for yes, or press 'Cancel' for no.");
								if(!pStatus) {
									pStatus = confirm("New pancreatic insufficiency (e.g. from pancreatitis or surgery).\nNOTE: Any patient following TOTAL pancreatectomy, or with newly diagnosed Type 1 DM will always require basal/nutritional and correctional insulin on discharge.\nPress 'OK' for yes, or press 'Cancel' for no.");
									if(!pStatus) {
										pStatus = confirm("Contraindications to oral agents (e.g. renal insufficiency, abnormal LFT's, CHF).\nPress 'OK' for yes, or press 'Cancel' for no.");
									}
								}
							}
							if(pStatus) {
								alert("The recommended solution is to discharge on insulin.");
								document.discharge.method.value = "newinsulin";
								loadmethod("newinsulin");
								return;
							} else {
								pStatus = confirm("Is the HgA1c > 7-8%?\nPress 'OK' for yes, or press 'Cancel' for no.");
								if(pStatus) {
									alert("The recommended solution is to discharge on oral agent(s).");
									document.discharge.method.value = "neworal";
									loadmethod("neworal");
									return;
								} else {
									alert("The recommended solution is to diet and follow up.");
									document.discharge.method.value = "diet";
									loadmethod("diet");
									return;
								}
							}
						}
					}
				} else {
					pStatus = confirm("Is the diabetes controlled primarily by oral agents?\nPress 'OK' for yes, or press 'Cancel' for no.");
					if(pStatus) {
						pStatus = confirm("New contraindications to oral agents (e.g. renal insufficiency, abnormal LFT's, CHF).\nPress 'OK' for yes, or press 'Cancel' for no.");
						if(pStatus) {
							alert("The recommended solution is to discharge on insulin.");
							document.discharge.method.value = "newinsulin";
							loadmethod("newinsulin");
							return;
						} else {
							pStatus = confirm("On 2 or more agents at home and A1c > 8%.\nPress 'OK' for yes, or press 'Cancel' for no.");
							if(pStatus) {
								alert("The recommended solution is to discharge on insulin.");
								document.discharge.method.value = "newinsulin";
								loadmethod("newinsulin");
								return;
							} else {
								pStatus = confirm("Requiring > 20 units/day during hospital stay.\nPress 'OK' for yes, or press 'Cancel' for no.");
								if(pStatus) {
									alert("The recommended solution is to discharge on insulin.");
									document.discharge.method.value = "newinsulin";
									loadmethod("newinsulin");
									return;
								} else {
									alert("The recommended solution is to resume oral meds.");
									document.discharge.method.value = "oldoral";
									loadmethod("oldoral");
									return;
								}
							}
						}
					} else {
						pStatus = confirm("Is the diabetes controlled primarily by insulin?\nPress 'OK' for yes, or press 'Cancel' for no.");
						if(pStatus) {
							alert("It is recommended to resume insulin.");
							document.discharge.method.value = "oldinsulin";
							loadmethod("oldinsulin");
							return;
						}
					}
				}
				alert("Please select controlled by a diet, oral, or insulin method!");
			}
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