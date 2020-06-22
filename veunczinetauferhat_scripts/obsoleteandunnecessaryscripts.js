
	//var XHR;
	var xhr;
	
	
	
	
	
	
	
	
	
	
	
	
	function fetchar()
	{
		
		fetch(fetchadressa,{
			method: 'GET',
			headers: {
				"Accept": "text/plain",
				'Content-Type': 'text/plain'
				}
			})
			.then(responseData => {console.log(responseData); return responseData;})
  //.then(response => response.text())
  //.then(responseData => {console.log(responseData); return responseData;})
  
		}
	
	
	function requestar()
	{
		var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
xhr = new XHR();
xhr.open('GET', fetchadressa, true);
//xhr.withCredentials = true;
//xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
//xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Accept', 'text/plain, application/json, text/javascript');
//xhr.setRequestHeader('Access-Control-Allow-Origin','*');
//xhr.setRequestHeader('Access-Control-Allow-Methods','GET');

xhr.onload = function() {
  document.write( this.responseText );
}

xhr.onerror = function() {
  alert( 'Error ' + this.status );
}

xhr.send();
		}
		
		
		
		//fetch('./file.json') .then(response => response.json()).then(data => console.log(data))
		//fetch('./file.json').then(response => {  //...}.catch(err => console.error(err))
		//fetch('./file.json').then(response => {  console.log(response.headers.get('Content-Type'))  console.log(response.headers.get('Date'))})
		
