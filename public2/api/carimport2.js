
// let idd = localStorage.getItem('idd');
// 	document.querySelector('p').innerText = idd;

// const jQuery = document.createElement('script');
//     jQuery.src = "https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.js";
//         document.head.append(jQuery);
// import("https://code.jquery.com/jquery-3.7.1.min.js") ;

	//let url = new URLSearchParams(window.location.hash);
	let url = new URL(window.location).search;
		let vrl = url.slice(1);

        var link = window.location.hash.slice(1);
            // console.log(window.location); console.log(link);
    	
        const params = new URLSearchParams();
            params.append("car", vrl);
                    // GET request sent to https://example.org/login?car=example
                // const response = await fetch(`http://127.0.0.1:8000/vehi/?${params}`);	
        console.log(params)

async function fch(link) {
	let response = await fetch(link);
		let data = await response.json();
			var parsedata = data; //JSON.parse(data)
				return parsedata
				
        }

const res = await fch(`http://127.0.0.1:8000/vehi/${vrl}`);
	
var idd = []; var ima = []; var badge = [];

for (let i in res.SearchResults) {
    idd.push(res.SearchResults[i].Id);
	   ima.push('http://ci.encar.com/carpicture'+res.SearchResults[i].Photo);
            badge.push(res.SearchResults[i].Badge);

		}

var indx = idd.indexOf(vrl);


var bad = badge[indx];
// let mod = res.SearchResults[indx].Model;
// window.location.hash = mod;


const container = document.querySelector('.container');
const scroll = document.querySelector('.scroll-container');

var cc = 1;
for(; cc < 10; cc++ ){

var mYslides = document.createElement('div'); mYslides.className = `mySlides`; mYslides.id = cc; container.appendChild(mYslides);
let img1 = document.createElement('img'); img1.style = `width: 100%`; img1.src = ima[indx]+'00'+cc+'.jpg'; mYslides.appendChild(img1);

// = = = scroll - - -     

let img = document.createElement(`img`); img.src = ima[indx]+'00'+cc+'.jpg'; img.className = "demo cursor"; img.id = cc;

img.addEventListener( "click" , () => currentSlide(Number(img.id))); 

scroll.appendChild(img);

}

// for(let cc = 10; cc < 25; cc++ ){
     
// var indx = idd.indexOf(vrl);

// let img = document.createElement(`img`); img.src = ima[indx]+'0'+cc+'.jpg'; img.className = "demo cursor"; img.onclick = currentSlide(cc); scroll.appendChild(img);
	
// }


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

// for (let f = 0; f < slides.length; f++) {
//     console.log(slides.length);
// }
      
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

// translate xD
        var korean = bad;
        var translate = "";
        for (var i = 0; i < korean.length; i++){

            var translateSign = korean[i];  

            if (translateSign == "프"){
                translate += 'p';
            } else if (translateSign == "리"){
                translate += 're';
            } else if (translateSign == "미"){
                translate += 'mi';                    
            } else if (translateSign == "어"){
                translate += 'o';
            } else if (translateSign == "드"){
                translate += 'd';
            } else if (translateSign == "에"){ 
                translate += 'e';
            } else if (translateSign == "디"){ 
                translate += 'di';
            } else if (translateSign == "션"){ 
                translate += 'tion';
            } else if (translateSign == "레"){
                translate += 're';
            } else if (translateSign == "마"){ 
                translate += 'm';
            } else if (translateSign == "이"){ 
                translate += 'y';
            } else if (translateSign == "핏"){
                translate += 'fit';
            } else {
            translate += translateSign;
            };
        };

$('q').html(translate); 













