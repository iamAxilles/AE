
			//const res = await G(`/${autos}`);

			
			const wlh = window.location.href;
				function output(SR){ 
					let data = document.querySelector(`data`);$(`data`).empty();
						data.innerHTML = SR.map(sr => `<output>
													<a href="/car?${sr.Manufacturer}=${sr.Model}#${sr.Id}${wlh.slice(-2)}" target="_blank">
													
														<img src="${sr.image_data}">
														  <img src="${sr.image_data2}">
															</a>
															<ul>
																<li></li>
																<li>${sr.Model}</li>
																<li>₩${(sr.Price*10000).toLocaleString()}</li>
																<li>${(sr.Mileage).toLocaleString()}km</li>
																
															</ul>
			
														</output>`);console.log(SR.length);translate2(SR)
											window.scrollTo(0, 600);
					$(`select[name='sort']`).css(`visibility`, `visible`);
				//$("input:radio[name='group']").prop("checked", false);
						}
				
		/*	function selectsort(evt) {
			          switch (evt.target.value){
			            case 'pricelow':
			              console.log(`Low price`)
			                sorts.pricelow(res)
			              break;
			          }
			        }*/

	window.sorts = {

		//translate: (RR) => {   },

		dates: (RR) => { RR.sort((s, r) => new Date((r.ModifiedDate).slice(0,19)) - new Date((s.ModifiedDate).slice(0,19))); output(RR); },

		pricelow: (RR) => { RR.sort((s, r) => s.Price - r.Price); output(RR); },

		kmlow: (RR) => { RR.sort((s, r) => s.Mileage - r.Mileage); output(RR);  }

	};


////$( "output>ul li:nth-child(1)" ).text(vv)


/*				function output(SS){
					let data = document.querySelector(`data`);$(`data`).empty();
						 				
					
						data.innerHTML = SS.map( ss => `<output>

															<ul>

																<li></li>
																<li>${ss.Model}</li>
																<li>${(ss.Mileage).toLocaleString()}km</li>
																<li>₩${(ss.Price*10000).toLocaleString()}</li>
																
															</ul>

														</output>` );$(`select[name='sort']`).css(`visibility`, `visible`);
													translate2(SS)
												}*/

				
				//function output(SS){
				//	let data = document.querySelector(`data`);$(`data`).empty();
				//	
				//	SS.forEach((s)=>{
				//		data.innerHTML = `<li>${s.Badge}</li>`;
				//	});
				//}


/*...*/



/*		const translate = function(RR){
		const liAll = document.querySelectorAll('output>ul>li:first-child');

			const goo = RR.map( sr => google(sr.Badge) );

			Promise.all(goo).then((td) => {

				liAll.forEach((lis, i) => { 
					lis.textContent = td[i];

				});
			});
		};*/

		const translate2 = function(SR){

				Promise.all(
						SR.map( sr => google(sr.Badge) )

				).then( (vv) => { 

			document.querySelectorAll('output>ul>li:first-child').forEach((L, t) => {
			  L.textContent = vv[t];
			});
		}); 
	};


	async function google(T) {
			const send = await fetch("https://translate.googleapis.com/translate_a/single?format=text&client=gtx&sl=ko&tl=en&dt=t&q=" + T);
				let ed = await send.text();

					let exp = /"(\\.|[^"\\])*"/g;
						
				return ed.match(exp)[0].replace(/"/g, '');
					
			}



