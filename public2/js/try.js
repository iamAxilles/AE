 let wls = window.location.search;

    (async function (link){
        let fech = await fetch(link, {
            method: 'GET', 
            credentials: 'include'
        });
            let SRjson = await fech.json();

        //sorts.dates(SRjson);
    const wlh = window.location.href;
        SR = JSON.parse(SRjson);
         let data = document.querySelector(`data`);
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
			
														</output>`);console.log(SR.length);
                                                    //localStorage.setItem("photo1", SR.map(sr=> ) );
        
        
    } 
    )('/cars/'+wls.slice(1));

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const mainImg = new Image();

mainImg.onload = () => {
canvas.width = mainImg.width;
canvas.height = mainImg.height;

// Draw original image
ctx.drawImage(mainImg, 0, 0);

// Set watermark style
ctx.font = "30px Arial";
ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

// Add text watermark at the bottom right
ctx.fillText("Confidential", canvas.width - 200, canvas.height - 50);

// Replace original img src with the watermarked data
document.getElementById('myImage').src = canvas.toDataURL();
};
//mainImg.src = '';