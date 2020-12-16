async function searchtextscriptarray(tojregexp,tojstring)
{
	
	//console.log("searchtextscriptarray begins");
	
	//let searchoi = await tojstring.matchAll(tojregexp);
	//tojregexp=new RegExp(tojregexp.source, "gmu");
	let searchoi = tojstring.matchAll(tojregexp);
	//console.log(searchoi[0].length);
	searchoi = Array.from(searchoi);
	//console.log(searchoi);
	
	
	
	//console.log("searchtextscriptarray finishes");
	
	return searchoi;
	//searchoi1 = await arrangersearchoinumbar(searchoi);
	
	//return searchoi1;
	
	
}


async function searchtextscriptfirstinstance(tojregexp,tojstring)
{
	
	let resulta = tojregexp.exec(tojstring);
	//let searchoi = tojregexp.exec(tojstring)[0];
	if (resulta!=null)
	{
	if (resulta.length>0)
	{
	return resulta[0];
	}
	else
	{
	return "";
	}
	}
	else
	{
			return "";
	}
}
