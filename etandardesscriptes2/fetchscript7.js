let fetchadressa;
	var xhr;
	function testar()
	{
		document.write('dgdfghdfg');
		}
		
		function executar()
	{
		
		fetchadressa = document.getElementById("fetchadressa").value;
		
		//requestar();
		executar2();
		//document.write(fetchar());
		//xhr=fetchascript2(fetchadressa);
		//document.write(xhr);
		
	}
	
	async function executar2()
	{
		
		//let textrar = await fetchar();
		//document.write(textrar);
		try
		{
		xhr = await fetchascript2(fetchadressa);
		
		
		
		document.write(xhr);
	}
	catch(er)
	{
		console.log(er);
		}
		
		
		}
		
		
		
		
		async function fetchascript2(adressa)
{
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
  //document.write(adressa);
  return tojtext;
} else {
  return(response.status);
}

}
