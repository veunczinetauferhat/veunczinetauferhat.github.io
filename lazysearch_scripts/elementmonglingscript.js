


























function addendarelementbeforehotovy(elementhotovy,tojelementid2)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

//var theFirstChild = parentElement.lastChild;

//var newElement = document.createElement(elementtype);
//newElement.id = tojelementid1;

parentElement.insertBefore(elementhotovy, parentElement);

}


function addendarelementinsidesecondlasthotovy(elementhotovy,tojelementid2)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

var theFirstChild = parentElement.lastChild;

//var newElement = document.createElement(elementtype);
//newElement.id = tojelementid1;

parentElement.insertBefore(elementhotovy, theFirstChild);

}


function addendarelementinsidelasthotovy(elementhotovy,tojelementid2)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

//var theFirstChild = parentElement.lastChild;

//var newElement = document.createElement(elementtype);
//newElement.id = tojelementid1;

parentElement.appendChild(elementhotovy);

}



function addendarelementinsidefirsthotovy(elementhotovy,tojelementid2)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

var theFirstChild = parentElement.firstChild;

//var newElement = document.createElement(elementtype);
//newElement.id = tojelementid1;

parentElement.insertBefore(elementhotovy, theFirstChild);

}
















































//function czekarz(kolinz)
	//{
		
		
		
		//iddar = "linkenczejner"+kolinz.toString();
		//elemenz = document.getElementById("linkenczejner"+kolinz.toString());
		
		
		
		
		//if (elemenz.checked==true)
		//{
			
			
			
			//addendarczekarz(kolinz);
			
			
		//}
		//else
		//{
			
			//rimovereczekarz(kolinz);
			
		//}
		
		
	
	//}
	
function addendarelementbefore(tojelementid1,tojelementid2,elementtype)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

//var theFirstChild = parentElement.lastChild;

var newElement = document.createElement(elementtype);
newElement.id = tojelementid1;

parentElement.insertBefore(newElement, parentElement);

}


function addendarelementinsidesecondlast(tojelementid1,tojelementid2,elementtype)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

var theFirstChild = parentElement.lastChild;

var newElement = document.createElement(elementtype);
newElement.id = tojelementid1;

parentElement.insertBefore(newElement, theFirstChild);

}


function addendarelementinsidelast(tojelementid1,tojelementid2,elementtype)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

//var theFirstChild = parentElement.lastChild;

var newElement = document.createElement(elementtype);
newElement.id = tojelementid1;

parentElement.appendChild(newElement);

}



function addendarelementinsidefirst(tojelementid1,tojelementid2,elementtype)
	{
		
		
		var parentElement = document.getElementById(tojelementid2);

var theFirstChild = parentElement.firstChild;

var newElement = document.createElement(elementtype);
newElement.id = tojelementid1;

parentElement.insertBefore(newElement, theFirstChild);

}

		
		
		
		//if (tojnumbar==linkenfronta)
		//{
			
				//novisad = document.createElement("p");
				//linkenfronta = linkenfronta+1;
				//iddar = "czejnerparagraph"+linkenfronta.toString();
				//novisad.id = "czejnerparagraph"+linkenfronta.toString();
				//novisad.id = tojelementid;
				
				//document.body.insertBefore(novisad,document.getElementById("regexpparagraph"));
				
				//textoja = document.createElement("input");
				//textoja.type="text";
				//iddar = "pagelinken"+linkenfronta.toString();
				//textoja.name="pagelinken"+linkenfronta.toString();
				 //textoja.id="pagelinken"+linkenfronta.toString();
				 //textoja.size=55;
				  //textoja.placeholder="Page Links (Regular Expression)";
				  //novisad.appendChild(textoja);
				  
				  
				  
				  
				
				//czekeroja = document.createElement("input");
				//czekeroja.type = "checkbox";
				//iddar = "linkenczejner"+linkenfronta.toString();
				//czekeroja.name="linkenczejner"+linkenfronta.toString();
				 //czekeroja.id="linkenczejner"+linkenfronta.toString();
				  //var tojnumbar1=linkenfronta;
				  //czekeroja.onclick=function(){czekarz(tojnumbar1)};
				  //novisad.appendChild(czekeroja);
				//var textojarr = document.createTextNode("Next chain");
				//novisad.appendChild(textojarr);
				
				//var czekeroja2 = document.createElement("input");
				//czekeroja2.type = "checkbox";
				//iddar = "whetherczekr"+linkenfronta.toString();
				//czekeroja2.name="whetherczekr"+linkenfronta.toString();
				 //czekeroja2.id="whetherczekr"+linkenfronta.toString();
				  //var tojnumbar1=linkenfronta;
				  //czekeroja.onclick=function(){czekarz(tojnumbar1)};
				  //novisad.appendChild(czekeroja2);
				//var textojarr2 = document.createTextNode("Check these pages");
				//novisad.appendChild(textojarr2);
				
				//var czekeroja3 = document.createElement("input");
				//czekeroja3.type = "checkbox";
				//iddar = "whetherczekr"+linkenfronta.toString();
				//czekeroja3.name="recursivaczekr"+linkenfronta.toString();
				 //czekeroja3.id="recursivaczekr"+linkenfronta.toString();
				  //var tojnumbar1=linkenfronta;
				  //czekeroja.onclick=function(){czekarz(tojnumbar1)};
				 // novisad.appendChild(czekeroja3);
				//var textojarr3 = document.createTextNode("Recursive");
				//novisad.appendChild(textojarr3);
				
				
				
				
				
				
				
		//}
		//else
		//{
			//console.log("error");
			//}
	//}
	
	function rimovereelement(tojelementid)
	{
		//if (tojnumbar<linkenfronta-1)
		//{
				//for (var ijt=tojnumbar+1; ijt<=linkenfronta; ijt++)
				//{
						//rimovereczekarz(tojnumbar+1);
				//}
		//}
		
		//if (tojnumbar<=linkenfronta-1)
		//{
			//var iddar = "czejnerparagraph"+linkenfronta.toString()
			//linkenfronta=linkenfronta-1;
			
			var elemr = document.getElementById(tojelementid);
			
			
			if (elemr)
			{
			elemr.remove();
			}
		//}
		
	}
