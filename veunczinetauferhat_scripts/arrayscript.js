function arrayuniqueexclude(froms,excludant)
{
	console.log("arrayuniqueexclude begins");
	var novyarray =  new Array();
	for (var ejtoj = 0; ejtoj<froms.length; ejtoj++)
	{
		if (excludant.includes(froms[ejtoj])==false)
		{
				novyarray.push(froms[ejtoj]);
		}
	}
	console.log("arrayuniqueexclude finishes");
	return novyarray;
	
	
	
}




function arrayuniqueexclusionaryjoin(tojarray1, tojarray2)
{
	console.log("arrayuniqueexclusionaryjoin begins");
	console.log(tojarray1);
	console.log(tojarray2);
	
		var novyarray =  new Array();
		if ((tojarray1!=null)&&(tojarray1.length>0))
		{
		//for (var ijtoj = 0; ijtoj<tojarray1.length; ijtoj++)
		//{
				//novyarray.push(tojarray1[ijtoj]);
		//}
		novyarray=tojarray1.slice(0,tojarray1.length);
		}
		if ((tojarray2!=null)&&(tojarray2.length>0))
		{
		for (var ejtoj = 0; ejtoj<tojarray2.length; ejtoj++)
		{
				if (tojarray1.includes(tojarray2[ejtoj])==false)
				{
					novyarray.push(tojarray2[ejtoj]);
				}
		}
		}
		
		console.log("arrayuniqueexclusionaryjoin finishes");
		console.log(novyarray);
		
	return novyarray;
}


function arrayuniqueexclusionaryjoindearray(arraydearray)  //array of arrays
{
	console.log("arrayuniqueexclusionaryjoindearray begins");
	if (arraydearray.length>=1)
	{
		var novyarray =  arraydearray[0];
		if (arraydearray.length>=2)
		{
		for (var ijtoj=1; ijtoj<arraydearray.length; ijtoj++)
		{
				novyarray = arrayuniqueexclusionaryjoin(novyarray,arraydearray[ijtoj]);
			
		}
		
		
		}
		
		console.log("arrayuniqueexclusionaryjoindearray finishes");
		
		return novyarray;
		
	}
	else
	{
		
		console.log("arrayuniqueexclusionaryjoindearray finishes");
		
		return new Array();
		}
		
}
