    let wls = window.location.search;

    (async function (link){
        let fech = await fetch(link, {
            method: 'GET', 
            credentials: 'include'
        });
            let FER = await fech.json();
         SRjson = JSON.parse(FER);

        sorts.dates(SRjson);
            
        
    $(`select[name='sort']`).change(function(){var sor = $(this).val() //console.info(sor)
            switch (sor){
                case 'updated':
                    sorts.dates(SRjson);
                    break;
                case 'pricelow':
                    sorts.pricelow(SRjson);
                    break;
                case 'kmlow':
                    sorts.kmlow(SRjson);
                    break;
              }

    });
    } 
    )('/cars/'+wls.slice(1));

    const f05f = document.getElementById('sec-f05f');

    if (wls.includes(`bmw=3`) ) { f05f.style.backgroundImage = "url('../css/images/bmw3pics/30.jpg')";
        $(`.kuzova`).append(`
            <option>G20</option>
            <option>F30</option>
            <option>E90</option>
            <option><2006</option>
            `)
    } if (wls.includes('G20') ) { f05f.style.backgroundImage = "url('../css/images/bmw3pics/g20/20.webp')";
      $('select.kuzova option:contains("G20")').prop('selected', true)
    } if (wls.includes('F30') ) { f05f.style.backgroundImage = "url('../css/images/bmw3pics/f30/303.jpg')";
      $('select.kuzova option:contains("F30")').prop('selected', true)
    } if (wls.includes('E90') ) { f05f.style.backgroundImage = "url('../css/images/bmw3pics/e90/907.jpg')";
      $('select.kuzova option:contains("E90")').prop('selected', true)
    }

/*    switch (wls){
        case wls.includes('?bmw=3'):
            $('select.kuzova option:contains("Generation")').prop('selected', true)
        //f05f.classList.replace("u-section-1", "bmw3");
            break
        case wls=`?bmw=3-G20`:
            $('select.kuzova option:contains("G20")').prop('selected', true)
            break
        case wls=`?bmw=3-F30`:
            $('select.kuzova option:contains("F30")').prop('selected', true)
            break
        case wls=`?bmw=3-E90`:
            $('select.kuzova option:contains("E90")').prop('selected', true)
            break
        } //для перекидывания ссылки*/


    let wla = l => window.location.assign(l);

    $(`select.kuzova`).change(function(){var kuval=$(this).val();
        //Asy2('/cars/'+wls.slice(1,-1) + kuval)
            wla(`/vehs?`+wls.substr(1,wls.indexOf("-")) + kuval +`/1`);
        });




    //const butt = document.createElement('button');butt.innerHTML='click';butt.onclick=()=>
    //$('.section').append(butt);