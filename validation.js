/* ###############################################################
#################### JSON Schema validator #######################
################################################################*/

dojo.ready(validation);

function validation () {
	
	dojo.require('dojox.json.schema');
	
	/* Getting the JSON and the JSON Schema */
	var JSON = loadFile("order-example.json");
	var schema = loadFile("schema.json");
			
	var result = dojox.json.schema.validate(JSON, schema);
	
	if (result.valid) {
		
		document.getElementsByTagName("P").innerHTML("congrats!");
		
	} else {
		
		document.getElementsByTagName("P").innerHTML("next time!");
		
	}
	
}

function loadFile(file) {
	
	var xhr = new XMLHttpRequest();
	var object;
	
	/* Function called when state of XHR-Object changes */
	xhr.onreadystatechange = function() {
		
		/* Successful data transfer and request */
		if (this.readyState == 4 && this.status == 200) {
			
			/* Saving the file */
			object = xhr.responseText;
			
		}
		
	}
	
	xhttp.open("GET", file, true);
	xhttp.send(); 
	
	return object;
	
}
			
