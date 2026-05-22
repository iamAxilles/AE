		async function f(vehi) {
			let r = await fetch(vehi);
				return await r.json();
					}

		let mod = window.location.search.slice(1); let idd = window.location.hash.slice(1);
			let moden = decodeURI(mod);


		const res = await f(`/vehi/${moden}-${idd}`);


		const container = document.querySelector('.container');
		const scroll = document.querySelector('.scroll-container');

		var cc = 1;
		for(; cc < 10; cc++ ){

		var mYslides = document.createElement('div'); mYslides.className = `mySlides`; mYslides.id = cc; container.appendChild(mYslides);
		let img1 = document.createElement('img'); img1.style = `width: 100vw`; img1.src = 'http://ci.encar.com/carpicture'+res[0].Photo+'00'+cc+'.jpg?impolicy=heightRate'; mYslides.appendChild(img1);

		// = = = scroll - - -     

		let img = document.createElement(`img`); img.src = 'http://ci.encar.com/carpicture'+res[0].Photo+'00'+cc+'.jpg?impolicy=heightRate'; img.className = "demo cursor"; img.id = cc;

		img.addEventListener( "click" , () => currentSlide(Number(img.id))); 

		scroll.appendChild(img);

			}

		var cc = 10;
		for(; cc < 25; cc++ ){

		var mYslides = document.createElement('div'); mYslides.className = `mySlides`; mYslides.id = cc; container.appendChild(mYslides);
		let img1 = document.createElement('img'); img1.style = `width: 100%`; img1.src = 'http://ci.encar.com/carpicture'+res[0].Photo+'0'+cc+'.jpg?impolicy=heightRate'; mYslides.appendChild(img1);

		// = = = scroll - - -

		let img = document.createElement(`img`); img.style = `height: `; img.src = 'http://ci.encar.com/carpicture'+res[0].Photo+'0'+cc+'.jpg?impolicy=heightRate'; img.className = "demo cursor"; img.id = cc;

		img.addEventListener( "click" , () => currentSlide(Number(img.id)));

		scroll.appendChild(img);

			}

		let slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}
		// scroll 
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		 function showSlides(n) {
		  let i;

		  let slides = document.getElementsByClassName("mySlides");

		  let dots = document.getElementsByClassName("demo");


		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}

		  for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		  }

		  for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		  }

		   slides[slideIndex-1].style.display = "block";
		   dots[slideIndex-1].className += " active";

		}

		let next = document.querySelector(`.next`); next.addEventListener( "click" , () => plusSlides(1));
		let prev = document.querySelector(`.prev`); prev.addEventListener( "click" , () => plusSlides(-1));

		document.onkeydown = function(e) {
			switch (e.keyCode) {
				case 37:
					plusSlides(-1);
					break;
				case 38:

					break;
				case 39:
					plusSlides(1);
					break;
				case 40:

					break;
			}
		};



