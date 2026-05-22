                let Allp = document.querySelectorAll('.silver-blocks>li');

                let p = {
                    _1: document.querySelector('.silver-blocks > li:nth-child(2)'),
                    _2: document.querySelector('.silver-blocks > li:nth-child(3)'),
                    _3: document.querySelector('.silver-blocks > li:nth-child(4)'),
                    _4: document.querySelector('.silver-blocks > li:nth-child(5)'),
                    _5: document.querySelector('.silver-blocks > li:nth-child(6)')
                };

                function pages(p0){
                    Allp.forEach(p => { p.classList.remove('active'); });
                        p0.classList.add('active');
                }

                //вызов тачек режет цифру меняет класс
                switch (wls.slice(-1)){
                    case `1`: pages(p._1); break
                    case `2`: pages(p._2); break
                    case `3`: pages(p._3); break
                    case `4`: pages(p._4); break
                    case `5`: pages(p._5); break
                }

                ///<<<
                let n = parseInt(wls.slice(-1));
                function pre(){
                if (n==1) { void 0; } 
                else {
                    wla( wls.slice(0,-1) + (n-1) );
                    }   
                }
                //>>>
                function nex(){
                   wla( wls.slice(0,-1) + (n+1) );
                }
