function createNav(){
    let content = document.querySelector('#content');
    
    let navBar = document.createElement('div');
    navBar.setAttribute('id','navBar');
    let header = document.createElement('h1');
    header.innerHTML="Café en Mouvement";
    navBar.appendChild(header);
    console.log('loading nav');

    content.appendChild(navBar);
    return
}

export {createNav}