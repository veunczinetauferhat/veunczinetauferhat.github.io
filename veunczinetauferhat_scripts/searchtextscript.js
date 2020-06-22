


class Doublarz
{
		constructor(parcz1,parcz2)
		{
		this.parcz1=parcz1;
	this.parcz2=parcz2;
	}
	
}


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


function arrangersearchoinumbar(arrayvitz,numbardelement)
{
	//console.log("arrangersearchoinumbar begins");
	let strockoi = new Map();
	let elemm;
	//for (var elemm in arrayvitz)
	//console.log(arrayvitz.length);
	for (var ijt=0; ijt<arrayvitz.length; ijt++)
	{
		elemm = arrayvitz[ijt];
		//console.log(elemm[0]);
		if (strockoi.has(elemm[numbardelement])){
			strockoi.set(elemm[numbardelement],strockoi.get(elemm[0])+1);
		}
		else{
			strockoi.set(elemm[numbardelement],1);
		}
	}
	//console.log(arrayvitz.length);
	
	
	//console.log("arrangersearchoinumbar finishes");
	
	return strockoi;

}













function arrangerinsideraisearchoi(tojregexp,tojmap)
{
	//console.log("arrangerinsideraisearchoi begins");
	let keyarray = tojmap.keys();
	let novymappoj = new Map()
	let credstrock;
	let elemm;
	
	//for (var elemm in keyarray)
	//for (var ijt=0; ijt<keyarray.length; ijt++)
	//let keyijot;
	do
	{
		
		elemm = keyarray.next().value;
		if (elemm!=null)
		{
			credstrock = elemm.match(tojregexp);
			if (credstrock!=null)
			{
					novymappoj.set(credstrock[0],tojmap.get(elemm));
			}
		}
	}
	while (elemm!=null)
	
	
	
	
	//console.log("arrangerinsideraisearchoi finishes");
	
	return novymappoj;

}



function addendarstrockmappoj(tojstrock,tojmap,whetherforward)
{
	//console.log("addendarstrockmappoj begins");
	let novymap = new Map();
	let mapkeys = tojmap.keys();
	let elemm2;
	let elemm;
	if (whetherforward==true)
	{
		
		
		//for (var elemm in mapkeys)
		//for (var ijt=0; ijt<mapkeys.length; ijt++)
		
		do
		{
			//elemm = mapkeys[ijt];
			elemm = mapkeys.next().value;
			if (elemm!=null)
			{
			elemm2=elemm.slice();
			elemm2=tojstrock+elemm2;
			novymap.set(elemm2,tojmap.get(elemm));
			//tojmap.delete(elemm);
			}
		}
		while (elemm!=null)
			
		}

	else
	{
		//for (var elemm in mapkeys)
		do
		{
			//elemm = mapkeys[ijt];
			elemm = mapkeys.next().value;
			if (elemm!=null)
			{
			elemm2=elemm.slice();
			elemm2=elemm2+tojstrock;
			novymap.set(elemm2,tojmap.get(elemm));
			//tojmap.delete(elemm);
			
		}
		}
		while (elemm!=null)
			
	}
	
	
	//console.log("addendarstrockmappoj finishes");
	
	return novymap;
	
}




async function integrajmappojssearchoisarray(mappojarray)
{
	//console.log("integrajmappojssearchoisarray begins");
		novymappoj = new Map(); 
		if (mappojarray.length>=1)
		{
				if (mappojarray.length==1)
				{
					
					
					//console.log("integrajmappojssearchoisarray finishes");
					
						return mappojarray[0];
				}
				else
				{
						novymappoj = integrajmappojssearchois(mappojarray[0],mappojarray[1]);
						if (mappojarray.length>2)
						{
						for (var intojj=2; intojj<mappojarray.length; intojj++)
						{
							novymappoj = integrajmappojssearchois(novymappoj, mappojarray[intojj]);
						}
						}
						
						//console.log("integrajmappojssearchoisarray finishes");
						
						return novymappoj;
				}
		}
		else
		{
			
			//console.log("integrajmappojssearchoisarray finishes");
			
				return novymappoj;
		}
}

function integrajmappojssearchois(tojmap1, tojmap2)
{
	//console.log("integrajmappojssearchois begins");
	//console.log(tojmap1);
	//console.log(tojmap2);
	
		if ((tojmap1!=null)&&(tojmap1.size>0))
	{
		
		if 	((tojmap2!=null)&&(tojmap2.size>0))
		{
		
		let novymappoj=new Map();
		let keyarray1 = tojmap1.keys();
		//let keyarray2 = tojmap2.keys();
		let elemm;
		
		//for (var elemm in keyarray1)
		//for (var ijt=0; ijt<keyarray1.length; ijt++)
		do
		{
			//elemm = keyarray1[ijt];
			elemm = keyarray1.next().value;
			if (elemm!=null)
			{
			if ((tojmap2.has(elemm))!=true)
			{
					novymappoj.set(elemm, tojmap1.get(elemm));
			}
		}
		} while (elemm!=null)
		
		keyarray2=tojmap2.keys();
		
		//for (var elemm in keyarray1)
		do
		{
			//elemm = keyarray1[ijt];
			elemm = keyarray2.next().value;
			if (elemm!=null)
			{
			if ((tojmap1.has(elemm))==true)
			{
			novymappoj.set(elemm, tojmap2.get(elemm)+tojmap1.get(elemm));
			}
			else
			{
				novymappoj.set(elemm, tojmap2.get(elemm));
			}
		}
		} while (elemm!=null)
		
		//console.log("integrajmappojssearchois finishes both");
		
		return novymappoj;
	}
	else
	{
		
		//console.log("integrajmappojssearchois finishes first only");
		
		return tojmap1;
		}
	}
	else
	{
		if ((tojmap2!=null)&&(tojmap2.size>0))
		{
			
			
			//console.log("integrajmappojssearchois finishes second only");
			
			return tojmap2;
			}
			else
			{
				
				
				//console.log("integrajmappojssearchois finishes both zeroes");
				
					return new Array();
			}
			
	}
		
}
























































