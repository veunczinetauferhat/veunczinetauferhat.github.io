

   
function fetchascript3(adressa,invocation,handler) {
	
  if(invocation) {    
    invocation.open('GET', adressa, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
