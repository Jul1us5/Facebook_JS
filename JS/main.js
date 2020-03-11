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
    let HTML = `<div class="header">Header :)</div>`;
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



getFeed(feed);