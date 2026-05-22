//let autos = window.location.hash.slice(1);
//window.res = await G(`/${autos}`);

//let currentUrl = new URL('http://127.0.0.1:33/vehs');

$(`#3Series`).click(async() => {
    //let cars = await G(`bmw/3`);
    //    SR = cars.SearchResults;
    //
    //      outputting(SR);
    
    //currentUrl.searchParams.set(`bmw`, `3`);
    //    history.pushState({}, '', currentUrl);
    window.location.assign('vehs?bmw=3-er/1')
    })


$(`#5Series`).click(async()=>{
    //let cars = await G(`vehi/${moden}/${idd}`);
    
        window.location.assign('/vehs?bmw=5')
    
    });

$(`#X5`).click(async()=>{
    
    window.location.href = `/vehs?/bmw/X5`;
    //window.location.reload();
    //console.log(autos)
    
    $(`.kuzova`).append(`
            <option>E53</option>
            <option>E70</option>
            <option>F15</option>
            <option>G05</option>
            `)
    })



//$('a').click(function(event) { return false; });  // Прокрутки не будет

//window.onbeforeunload = () => sessionStorage.setItem('scrollPos', window.scrollY);
//
//window.onload = () => window.scrollTo(0, sessionStorage.getItem('scrollPos') || 0);

