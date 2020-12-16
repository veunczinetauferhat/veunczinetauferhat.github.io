async function fetchascript2(adressa)
{
	
let response = await fetch(adressa, {method: 'GET', 
	headers:{
		'Content-Type': 'text/plain'
		}
	});
	alert(adressa);
//document.write(response);
if (response.ok) { 
  let tojtext = response.text();
  return tojtext;
} else {
  return(response.status);
}
}
