class letterprzebor
{
	constructor(letterstring,rozmner)
	{
		this.letterchars = letterstring.split('');
		//this.rozmner = rozmner;
		this.strockarray = new Array();
		if (this.letterchars.length==0)
		{
				this.letterchars.push('0');
		}
		
		for (let ijt=0; ijt<rozmner; ijt++)
		{
				this.strockarray.push(0);
		}
		this.internalkauntar = 0;
		
	}
	
	
	ritornare()
	{
		let novyStrock = "";
		for (let ijt=0; ijt<this.strockarray.length; ijt++)
		{
				novyStrock=novyStrock+this.letterchars[this.strockarray[ijt]];
		}
		return novyStrock;
		
		
		
	}
	
	
	
	zdvihnoutVprzed()
	{
		//console.log("internalkauntar=");
		let ijot=this.strockarray.length-1;
		
		while(this.strockarray[ijot]>=this.letterchars.length-1)
		{
				this.strockarray[ijot]=0;
				if (ijot>0)
				{
						ijot--;
						continue;
				}
				else
				{
						ijot=this.strockarray.length-1;
						this.internalkauntar = -1;
						this.strockarray[ijot]=-1;
						break;
				}
		}
		this.strockarray[ijot]=this.strockarray[ijot]+1;
		this.internalkauntar++;
		//console.log("internalkauntar="+internalkauntar);
	}
	
	
	
	
	
}




//class letterSenquentiElement
//{
		//constructor(numbar,sequentals,whetherempty)
		//{
		//		this.numbar=numbar;
		//		this.sequentals=sequentals;
		//		this.whetherempty=whetherempty;
		//}
	
//}



class letterSequenceGenerator
{
	constructor(strockiarray,sequentialsarray,numbararray)
	{
		this.senquenti = new Array();
		
		for (let ijt=0; ijt<Math.min(numbararray.length,sequentialsarray.length); ijt++)
		{
				this.senquenti.push(new letterprzebor(sequentialsarray[ijt],numbararray[ijt]));
		}
		this.strockiarray=strockiarray;
		//this.whetheremptyarray=whetheremptyarray;
		
		this.internalkauntar=0;
	}
	
	ritornare()
	{
		let naszNovyStrock = "";
		for (let ijt=0; ijt<Math.max(this.senquenti.length,this.strockiarray.length); ijt++)
		{
			if (this.strockiarray.length>ijt)
			{
				naszNovyStrock=naszNovyStrock+this.strockiarray[ijt];
			}
			if (this.senquenti.length>ijt)
			{
					naszNovyStrock=naszNovyStrock+this.senquenti[ijt].ritornare();
			}
		}
		return naszNovyStrock;
		
		
	}
	
	zdvihnoutVprzed()
	{
		//console.log(this.senquenti);
		//alert("zdvihnoutVprzed is going on");
		if (this.senquenti.length>0)
		{
		for (let ijt=this.senquenti.length-1; ijt>=0; ijt--)
		{
			
				this.senquenti[ijt].zdvihnoutVprzed();
				if (this.senquenti[ijt].internalkauntar!=0)
				{
					//console.log("incremental0");
					this.internalkauntar++;
						break;
				}
				else
				{
						if (ijt==0)
						{
							//console.log("incremental1");
								this.internalkauntar=0;
								break;
						}
						else
						{
							//console.log("incremental2");
							continue;
						}
				}
			
			
		}
		
		}
		
	}
	
	
	
}









