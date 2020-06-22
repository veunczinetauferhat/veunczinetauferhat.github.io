async function executarfetch(fetchadressa) //entry point
	{
		//console.log("fetchadressa begins");
		
		//console.log("rechercha1.5");
		//let textrar = await fetchar();
		//document.write(textrar);
		try
		{
		xhr = await fetchascript2(fetchadressa);
		
		//console.log("fetchadressa finishes successfully");
		
		
		return xhr;
		// document.write(xhr);
	}
	catch(er)
	{
		//console.log("fetchadressa finishes with error");
		
		//console.log(er.message);
		return er.toString();
		}
		
		
		}
		
		
		
async function fetchascript2(adressa)
{
	//console.log("fetchascript2 begins");
	//document.write(adressa);
	
let response = await fetch(adressa, {method: 'GET', 
	mode: 'cors',
	headers:{
		//'Access-Control-Request-Headers':'access-control-allow-origin, content-type, accept',
		'Accept': 'multipart/form-data',
		'Content-Type': 'multipart/form-data'
		//'Access-Control-Allow-Origin':'*'
    //'Content-Type': 'multipart/form-data'
    //Content-Type': "text/plain",
	}
	});
	//alert(adressa);
//document.write(response);

//document.write(adressa);
if (response.ok) { 
  let tojtext = response.text();
  
  //console.log("fetchascript2 finishes successfully");
  
  //document.write(adressa);
  return tojtext;
} else {
	
//console.log("fetchascript2 finishes with error");	

  return(response.status.toString());
}

}










