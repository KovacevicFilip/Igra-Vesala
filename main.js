var rec = "";
			var crtice="";
			var prikaziCrtice="";
			var slovo;
			var crtice2="";
			var promasenaSlova = "";
			var pogodjenaSlova = "";
			var brojac = 1;
			
			function crticeFunction() {
			
				for(i=0; i < rec.length; i++) {
					
					crtice += "_";
					
				}
				
			}
			
			function zadaj() {
			
				rec = document.getElementById("zadataRec").value.toUpperCase();
				document.getElementById("zadataRec").value = "";
				
				crticeFunction();
				prikaziFunction();
				
			}

			function prikaziFunction() {
			
				for(i=0; i < rec.length; i++) {
				
					prikaziCrtice += crtice[i] + " ";
				}
				document.getElementById("demo").innerHTML = prikaziCrtice;
			}

			function pogodiSlovo() {
			
				slovo = document.getElementById("unesiSlovo").value.toUpperCase();
				document.getElementById("unesiSlovo").value = "";
				
				crtice2 = "";
								
				for(i=0; i < rec.length; i++) {					
					
					if(rec[i] == slovo) {
						crtice2 += slovo;
						pogodjenaSlova += slovo;
					}
					
					else crtice2 += crtice[i];
											
				}
				if(rec.indexOf(slovo) == -1 && promasenaSlova.indexOf(slovo) == -1 ) {
					document.getElementById("promasaj").innerHTML += slovo + ", ";
					promasenaSlova += slovo;
					document.getElementById("slika").src = "http://filipkovacevic.com/vesala/vesalo" + brojac +".png";
					brojac++;
				
				}
				
				
				crtice = crtice2;
				prikaziCrtice = "";
				prikaziFunction();				
				krajIgre();
				
			}

			function igrajPonovo() {
			
				rec = "";
				crtice = "";
				crtice2 = "";
				prikaziCrtice = "";
				document.getElementById("demo").innerHTML = "";
				brojac = 1;
				promasenaSlova = "";
				pogodjenaSlova = "";
				document.getElementById("slika").src = "http://filipkovacevic.com/vesala/vesalo.png";
				document.getElementById("promasaj").innerHTML = "";
				document.getElementById("kraj").innerHTML = "";
				document.getElementById("unesiSlovo").value = "";
				document.getElementById("dugme").setAttribute("onclick","pogodiSlovo()");
			}

			function krajIgre() {
			
				if(promasenaSlova.length == 7) {
					
					document.getElementById("kraj").innerHTML = "YOU LOST";
					document.getElementById("dugme").removeAttribute("onclick");
				}
				
				else if(pogodjenaSlova.length == rec.length) {
					
					document.getElementById("kraj").innerHTML = "YOU WON !!!";
					document.getElementById("dugme").removeAttribute("onclick");				
				
				}
				
			}
			
