











function hrefkompletarz(celaadressa, czastecznaadressa)
{
	//console.log("hrefkompletarz begins");
	var prvnisymbolczasteczne = czastecznaadressa.substring(0,1);
	var reggus0=/\w/;
	var reggus1;
	
	//console.log(prvnisymbolczasteczne);
	//console.log(reggus0.test(prvnisymbolczasteczne));
	
	if (reggus0.test(prvnisymbolczasteczne))
	{
		//console.log("hrefkompletarz finishes");
		
		return czastecznaadressa;
	}
	else
	{
		//reggus0=/\//;
		//if (reggus0.test(prvnisymbolczasteczne))
		//{
			prvnisymbolczasteczne = czastecznaadressa.substring(0,2);
			reggus0=/\/\//;
			if (reggus0.test(prvnisymbolczasteczne))
			{
				reggus1 = /^((.){1,20})\/\/\w/;
				
				//console.log("hrefkompletarz finishes");
				//console.log("celadressa:");
				//console.log(celaadressa);
				
				return celaadressa.match(reggus1)[1]+czastecznaadressa;
			}
			else
			{
				reggus0 = /^((.){1,20}\:\/\/(\w){1,20}(\.(\w){1,20}){1,10})\//;
				reggus1 = /^/;
				
				//console.log("hrefkompletarz finishes");
				//console.log("celadressa:");
				//console.log(celaadressa);
				
				return celaadressa.match(reggus0)[1]+czastecznaadressa;
			}
		//}
		//else
		//{
			
		//}
	}
	
	
	
	
	//var prvniczastarray = celaadressa.matchAll(/^(http(s)?\:\/\/)?\w+(\.\w+)*/g)[0];
	//var druhaczastarray = czastecznaadressa.matchAll(/(\w+)(\/)?$/g);
	
	//var prvniczast;
	//var druhaczast;
	
	//for ()
	
	
	
}










async function sebratfragmentarislovesa(xhr, tojregexp)
{
	
	//console.log("sebratfragmentarislovesa");
	
	
}








async function zpracovatvszechnyetapy(tojprefix,tojcore,pageregexpes,tojregexp,czekcore,czekarray,recursivaarray,typusderecherche,staralimitastrankova)
{
	//console.log("zpracovatvszechnyetapy begins");
	var limitastrankova = staralimitastrankova
	var adressearray=new Array();
	var przijatyobjektus={};
	var ciloveadresse = new Array();
	var zpracovaneadresse = new Array();
	ciloveadresse.push(tojcore);
	var locallyregexp;
	var locallypageregexp1;
	var locallypageregexp2;
	var resultantes=new Map();
	
	
	
	if (czekcore==true)
	{
		locallyregexp=tojregexp;
	}
	else
	{
			locallyregexp=null;
	}
	//console.log("locallyregexp:");
	//console.log(locallyregexp);
	
	
	//if (recursivacore==true)
	if ((pageregexpes[0]!="")&&(pageregexpes[0]!=null))
	{
			locallypageregexp2=pageregexpes[0];
	}
	else
	{
		locallypageregexp2=null;
	}
	
	
	przijatyobjektus = await zpracovatsbiranietapa(ciloveadresse,tojprefix,locallyregexp,null,locallypageregexp2,limitastrankova,typusderecherche, new Array());
	ciloveadresse = await arrayuniqueexclusionaryjoin(ciloveadresse,przijatyobjektus.neupages);
	
	
	if ((locallyregexp!=null)&&(locallyregexp!=""))
	{
		resultantes = przijatyobjektus.sdrzeni;
	}
	limitastrankova = przijatyobjektus.zustatek;
	//zpracovaneadresse.push(tojcore);
	zpracovaneadresse = przijatyobjektus.zpracovane;
	
	var danaetapa=0;
	
	//console.log("pageregexpes.length:");
	//console.log(pageregexpes.length);
	var localleciloveadresse;

	while ((limitastrankova>0)&&(danaetapa<pageregexpes.length)&&(ciloveadresse!=null)&&(ciloveadresse.length>0))
	{
		//console.log("cycle started");
		
		
		if (czekarray[danaetapa]==true)
		{
			locallyregexp = tojregexp;
		}
		else
		{
				locallyregexp=null;
		}
		if (recursivaarray[danaetapa]==true)
		{
			locallypageregexp1 = pageregexpes[danaetapa];
		}	
		else
		{
			locallypageregexp1 = null;
		}
		if ((danaetapa<pageregexpes.length-1)&&(pageregexpes[danaetapa+1]!="")&&(pageregexpes[danaetapa+1]!=null))
		{
			locallypageregexp2 = pageregexpes[danaetapa+1];
		}
		else
		{
			locallypageregexp2 = null;
		}
		
		
		
		
		localleciloveadresse = arrayuniqueexclude(ciloveadresse,zpracovaneadresse);
		
		przijatyobjektus = await zpracovatsbiranietapa(localleciloveadresse,tojprefix,locallyregexp,locallypageregexp1,locallypageregexp2,limitastrankova,typusderecherche,zpracovaneadresse);
		
		zpracovaneadresse= przijatyobjektus.zpracovane;
		//zpracovaneadresse= await arrayuniqueexclusionaryjoin(zpracovaneadresse,przijatyobjektus.zpracovane);
		
		ciloveadresse = await arrayuniqueexclusionaryjoin(ciloveadresse,przijatyobjektus.neupages);
		
		if ((locallyregexp!=null)&&(locallyregexp!=""))
		{
			resultantes = await integrajmappojssearchois(resultantes,przijatyobjektus.sdrzeni);
		}
		limitastrankova = przijatyobjektus.zustatek;
		
		
		danaetapa=danaetapa+1;
	}
	
	
	
	//console.log("zpracovatvszechnyetapy finishes");
	
	return resultantes;
	
	
	
}



async function zpracovatsbiranietapa(ciloveadresse,tojprefix,tojregexp,pageregexp1,pageregexp2,limitastrankova,typusderecherche,zpracovaneadresse)
{
	//console.log("zpracovatsbiranietapa begins");
	//var zpracovaneadresse = new Array();
	var pagesprzisztietapa = new Array();
	var tekoucikolvo = 0;
	var kauntar=0;
	var tekouciadressa;
	var przijatyobjektus={};
	var recherchesdrzeni = new Map();
	
	while ((tekoucikolvo<limitastrankova)&&(kauntar<ciloveadresse.length))
	{
		//while (zpracovaneadresse.includes(ciloveadresse[kauntar]))
		//{
		//	kauntar=kauntar+1;
		//}
		
		
		
		tekouciadressa=ciloveadresse[kauntar];
		przijatyobjektus= await sebratdepage(tekouciadressa,tojprefix,tojregexp,pageregexp1,pageregexp2,typusderecherche);
		//console.log("przijatyobjektus.adressovate1:");
		//console.log(przijatyobjektus.adressovate1);
		//console.log("przijatyobjektus.adressovate2:");
		//console.log(przijatyobjektus.adressovate2);
		
		
		ciloveadresse = await arrayuniqueexclusionaryjoin(ciloveadresse,przijatyobjektus.adressovate1);
		
		
		//console.log("ciloveadresse:");
		//console.log(ciloveadresse);
		//console.log("pagesprzisztietapa:");
		//console.log(pagesprzisztietapa);
		pagesprzisztietapa = await arrayuniqueexclusionaryjoin(pagesprzisztietapa,przijatyobjektus.adressovate2);//array
		//console.log("pagesprzisztietapa:");
		//console.log(pagesprzisztietapa);
		
		if ((typusderecherche==0)&&(tojregexp!=null)&&(tojregexp!=""))
		{
			//console.log("recherchesdrzeni:");
		//console.log(recherchesdrzeni);
		recherchesdrzeni = await integrajmappojssearchois(recherchesdrzeni,przijatyobjektus.sdrzeni);//map
		}
		//console.log("recherchesdrzeni:");
		//console.log(recherchesdrzeni);
		
		
	zpracovaneadresse.push(tekouciadressa);
	kaunar=kauntar+1;
	while (zpracovaneadresse.includes(ciloveadresse[kauntar]))
	{
		kauntar=kauntar+1;
	}
	
	
	
			tekoucikolvo=tekoucikolvo+1;
	}
	var resultanta = {};
	
	//console.log("pagesprzisztietapa:");
	//console.log(pagesprzisztietapa);
	
	resultanta.neupages = pagesprzisztietapa;
	resultanta.sdrzeni = recherchesdrzeni;
	resultanta.zustatek = limitastrankova-tekoucikolvo;
	resultanta.zpracovane = zpracovaneadresse;
	
	
	//console.log("zpracovatsbiranietapa finishes");
	//console.log(resultanta.sdrzeni);
	
	return resultanta;
	
	
	
}





async function sebratdepage(taadressa, tenprefix, tojregexp, pageregexp1, pageregexp2, typusderecherche)
{
	//console.log("sebratdepage begins");
	//console.log("working on page:"+taadressa)
	xhr = await executarfetch(tenprefix+taadressa);
	
	
	var vezvrat = {};
	vezvrat.sdrzeni = new Map();
	vezvrat.adressovate1 = null;
	vezvrat.adressovate2 = null;
	
	if (tojregexp!=null)
	{
		if (typusderecherche==0)
		{
			var castotnislovesa = await sebratcastotnislovesa(xhr, tojregexp); //map
			vezvrat.sdrzeni = castotnislovesa;
		}
	}
	
	var sebrateadresse1 = new Array();
	if (pageregexp1!=null)
	{
		//pageregexp1 = new RegExp("href(\s){0,5}\=(\s){0,5}\"(\s){0,5}(?<centre>"+pageregexp1.source+")(\s){0,5}\"",pageregexp1.flags);
			sebrateadresse1 = await sebratadresse(xhr, pageregexp1,taadressa)
	}
	vezvrat.adressovate1=sebrateadresse1 ;
	var sebrateadresse2 = new Array();
	if (pageregexp2!=null)
	{
		//pageregexp2 = new RegExp("href(\s){0,5}\=(\s){0,5}\"(\s){0,5}(?<centre>"+pageregexp2.source+")(\s){0,5}\"",pageregexp12flags);
		sebrateadresse2 = await sebratadresse(xhr, pageregexp2,taadressa) 
		}
		vezvrat.adressovate2=sebrateadresse2 ;
		
		//var sebrateadressecelkove = await arrayuniqueexclusionaryjoin(sebrateadresse1,sebrateadresse2);//array
		
		//vezvrat.adressovate = sebrateadressecelkove;
		
		
		//console.log("sebratdepage finishes");
		//console.log(vezvrat.sdrzeni);
		
		return vezvrat;
		
	//return sebrateadressecelkove;
}







async function sebratcastotnislovesa(xhr, tojregexp)
{
	//console.log("sebratcastotnislovesa begins");
	var tojrecherche = await searchtextscriptarray(tojregexp,xhr);
		
		
		tojrecherche = await arrangersearchoinumbar(tojrecherche,0);
		
		
		//console.log("sebratcastotnislovesa finishes");
		
		//console.log(tojrecherche.size);
		
		return tojrecherche;
		
		
		
		
}






async function sebratadresse(xhr,klicovy,bazovy)
{
	//console.log("sebratadresse begins");
	
	//console.log("klicovy");
	//console.log(klicovy);
	//console.log(klicovy.source);
	//console.log(klicovy.flags);
	
	
	klicovy = new RegExp("href(\s){0,5}\=(\s){0,5}\"(\s){0,5}("+klicovy.source+")(\s){0,5}\"",klicovy.flags);

	
	var adressaspisoek0 = await searchtextscriptarray(klicovy,xhr);
	//console.log("najdeneadresse:");
	//console.log(adressaspisoek0);
	
	adressaspisoek0 = await arrangersearchoinumbar(adressaspisoek0,4);
	
	var keyarray = adressaspisoek0.keys();
	
	
	var elemm;
	var credstock;
	var grossadressaspisoek = new Array();
	
	
	do
		{
		
			elemm = keyarray.next().value;
			if ((elemm!=null)&&(elemm!=""))
			{
				credstrock = hrefkompletarz(bazovy, elemm);
				if (grossadressaspisoek.includes(credstrock)==false)
				{
						grossadressaspisoek.push(credstrock);
				}
			}
		}
	while (elemm!=null)
	
	//console.log("sebratadresse finishes");
	
	
	return grossadressaspisoek;
	
}

















