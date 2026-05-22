async function google(T) {
	const respo = await fetch("https://translate.googleapis.com/translate_a/single?format=text&client=gtx&sl=ko&tl=en&dt=t&q=" + T);
		let data = await respo.text();
			let exp = /"(\\.|[^"\\])*"/g;
			
		return data.match(exp)[0]
		 }

let badges = [`AMG G63 K-에디션20`, `45 TDI 콰트로 프리미엄`];


let resu = await google(badges); $(`p`).text(resu)





