function fetchascript4(adressa) {
	alert(adressa);
	fetch(adressa, {
  method: 'GET',
  headers: {
    'Content-Type': 'text/plain'
  }
})
.then((response)=>return response.text());

//let stver = await response.text();

//return stver;
}
