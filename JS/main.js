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

    let avatar = '';
    if ( autorius.avataras === 'avataras.png' || autorius.avataras === '' ) {
        avatar = autorius.avataras = 'user.png';
    } else {
        avatar = autorius.avataras;
    }


    let HTML = `<div class="header">

                <img src="./img/avatar/${avatar}">

                <div class="user_title">
                <div class="user_info">${autorius.vardas} ${autorius.pavarde}</div>
                <div class="time">${laikas}</div>
                </div>

                <i class="fa fa-ellipsis-v"></i>

                </div>`;
    return HTML;
}




function getDataContent( pranesimas ) {


    let HTML = '';
    HTML = `<div class="inner_content">`;
    if ( pranesimas.tekstas ) {
            HTML += getDataContentText( pranesimas.tekstas, pranesimas.spalva );
          }  
    if ( pranesimas.paveiksliukai ) {
            HTML += getDataContentGallery( pranesimas.paveiksliukai );
          }
            HTML += `</div>`;

            return HTML;
        }

function getDataContentText( tekstas, spalva ) {
    let HTML = '';
        
    HTML += `<p>${tekstas}</p>`;
        
    return HTML;
}



function getDataContentGallery( paveiksliukai ) {

    if ( !Array.isArray(paveiksliukai) ||
    paveiksliukai.length === 0 ) {
        return '';
    }

    let HTML = '';
    let kiek = 0;

    for (let i = 0; i < paveiksliukai.length; i++) {
        if ( paveiksliukai[i].length >= 5 &&
             paveiksliukai[i].length < 100 &&
             typeof(paveiksliukai[i]) === 'string' ) {
                 kiek++;
            HTML += `<img src="./img/${paveiksliukai[i]}">`;
        }






        }
        console.log(kiek);
        return HTML;

    }

    







function getDataFooter( ) {
    let HTML = `<div class="footer">
                <div class="action">
                <div class="like"><i class="fa fa-heart"></i>Like</div>
                <div class="comment"><i class="fa fa-comment"></i>Comment</div>
                </div>
                <img src="./img/avatar/2.png">
                    <div class="field">
                        <textarea></textarea>
                            <div class="imc">
                            <i class="fa fa-smile-o"></i>
                            <i class="fa fa-camera"></i>
                            <i class="fa fa-file-image-o"></i>
                            <i class="fa fa-user-secret"></i>
                            </div>
                    </div>
                </div>`;
    return HTML;
}


getFeed(feed);

