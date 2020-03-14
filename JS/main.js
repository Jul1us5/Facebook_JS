"use strict"; 



function getFeed(list) {
    if ( !Array.isArray(list) ) {
        console.error('ERROR | give me array!');
        
    }
    
    let HTML = '';

    for (let i = 0; i < list.length; i++) {

       const dataList = list[i];
       HTML += getData(dataList);
    }
    return document.querySelector('.content').innerHTML = HTML;
}

function getData(list) {
let HTML = `<div class="post">
            ${getDataHeader( list.autorius, list.laikas )}
            ${getDataContent( list.pranesimas )}
            ${getDataFooter(  )}
            </div>`;

    return HTML;

}


function getDataHeader(autorius, laikas) {



    let HTML = `<div class="header">

                <img src="./img/avatar/${autorius.avataras}">

                <div class="user_title">
                <div class="user_info">${autorius.vardas} ${autorius.pavarde}</div>
                <div class="time">${laikas}</div>
                </div>

                <i class="fa fa-ellipsis-v"></i>

                </div>`;
    return HTML;
}
function getDataContent(pranesimas) {
    let HTML = `<div class="content">Content</div>`;
    return HTML;
}
function getDataFooter( ) {
    let HTML = `<div class="footer">Footer</div>`;
    return HTML;
}



        // for (var i = 0; i<feed.length; i++) {
        //     var res = feed[i].autorius.avataras;
        //     var avatr = '';
        //     var all;
        //     if ( res === 'avataras.png') {
        //          all = avatr + 'user.png';
        //     } else {
        //          all = res;
        //     }
            
        //     console.log(all);

        // }


getFeed(feed);

