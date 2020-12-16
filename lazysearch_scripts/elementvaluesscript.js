function getelementvalue(tenelementid,tenroot)
{
		return tenroot.getElementById(tenelementid).value;
	
}


function getelementsvaluearray(tenelementidarray,tenroot)
{
		let tojarray = new Array();
		for (let ijt=0; ijt<tenelementidarray.length; ijt++)
		{
				tojarray.push(getelementvalue(tenelementidarray[ijt],tenroot));
			
		}
	return tojarray;


}
