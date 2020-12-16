function fajlscript(fajl) {
     
    if (fajl) {
      var r = new FileReader();
      r.onload = function(e) { 
        return(r.result);
      }
      r.readAsText(fajl);
    } else { 
      return null;
    }
  }
}
