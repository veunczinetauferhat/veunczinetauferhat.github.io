//let r = new XMLHttpRequest();
function fetchascript(adressa,r, handler){
	
    r.open('GET', adressa, true);
    //r.responseType='text';
    r.onload = handler;
    r.send(); 
    alert(handler);
    
//if (r.status == 200) { 
	//return r.response;
	//}
	//else {
		//return null;
		//}
	
}
