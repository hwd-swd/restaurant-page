function createNav(){
    let navBar = document.createElement('div');
    navBar.setAttribute('id','navBar');
    navBar.setAttribute('class','hiding');
    let header = document.createElement('h1');
    header.innerHTML="Café en Mouvement";
    navBar.appendChild(header);

    let links = document.createElement('div');
    links.setAttribute('id','links');
    let home = document.createElement('h2');
    home.setAttribute('class','link');
    home.setAttribute('id','home');
    home.innerHTML = 'Home';
    let menu = document.createElement('h2');
    menu.setAttribute('class','link');
    menu.setAttribute('id','menu');
    menu.innerHTML = 'Menu';
    let story = document.createElement('h2');
    story.setAttribute('class','link');
    story.setAttribute('id','story');
    story.innerHTML = 'Our Story';
    let visit = document.createElement('h2');
    visit.setAttribute('class','link');
    visit.setAttribute('id','visit');
    visit.innerHTML = 'Visit Us';
    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(story);
    links.appendChild(visit);

    navBar.appendChild(links)

    
    return navBar
}

function createHome(){
    let main = document.createElement('div');
    main.setAttribute('id','main');
    main.setAttribute('class','hiding');
    
    let headline = document.createElement('div');
    headline.setAttribute('id','headline');
    headline.innerHTML='Expérience à la maison';
    main.appendChild(headline);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    main.append(buttons);

    let button1 = document.createElement('h2');
    button1.classList.add('button');
    button1.classList.add('link');
    button1.innerHTML='Menu';
    buttons.appendChild(button1);

    let button2 = document.createElement('h2');
    button2.classList.add('button');
    button2.classList.add('button2');
    button2.classList.add('link');
    button2.innerHTML='Visit Us';
    buttons.appendChild(button2);

    return main
}



export {createNav,createHome}