function Global(link) { $('output').remove(); $("input:radio[name='group']").prop("checked", false);
    fetch(link, {
  headers: {

    'Referer': 'http://www.encar.com/fc/fc_carsearchlist.do?carType=for',
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  },
})
        .then(response => response.json())
                .then((obj) => { 

                   var ima = new Array();
                   var idd = [];
                   var man = [];
                   var mod = [];
                   var yr = [];
                   var mlg = [];
                   var prc = [];
                   var trsm = [];
                   var badge = [];

    for (let i in obj.SearchResults) {
  
       ima.push('http://ci.encar.com/carpicture'+obj.SearchResults[i].Photo);
        idd.push(obj.SearchResults[i].Id);
          man.push(obj.SearchResults[i].Manufacturer);
            mod.push(obj.SearchResults[i].Model);
              yr.push(obj.SearchResults[i].Year/100);
                mlg.push(obj.SearchResults[i].Mileage);
                  prc.push(obj.SearchResults[i].Price*10000);
                    trsm.push(obj.SearchResults[i].Transmission);
                      badge.push(obj.SearchResults[i].Badge);
        };

  const out = document.querySelector('data');
for (let i = 0; i < ima.length; i++) { 
  var div1 = document.createElement('output'); div1.style.color = 'white'; out.append(div1);

  let aa = document.createElement('a');  div1.appendChild(aa);
    // aa.target = '_blank'; aa.href = '/car?'+idd[i]+`#`+link; //aa.innerHTML = ima.map(src => `<img style='width: 300px' src="${ src+'001.jpg' }">`).join("");
      aa.href = '/car?'+man[i]+'&'+mod[i]+'#'+idd[i];

      let img = document.createElement("img"); img.style = 'width: 300px'; img.src = ima[i]+'001.jpg?impolicy=heightRate'; aa.appendChild(img);


  let ul = document.createElement("ul"); div1.append(ul);
    ul.innerHTML =  `<li>${man[i]}</li>`+
                      `<li>${mod[i]}</li>`+
                        `<li>${yr[i]}</li>`+
                          `<li>${mlg[i].toLocaleString()+` km`}</li>`+
                            `<li>${`₩ `+prc[i].toLocaleString()}</li>`+
                              // `<li>${trsm[i]}</li>`+
                                `<li>${badge[i]}</li>`;
                    
      //aa.addEventListener( "click" , () => localStorage.setItem('idd', idd[i]));
} 
  
      }) 
                        return link
              }











