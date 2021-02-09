import {createNav,createHome} from './modules/homePage'
import {createMenu} from './modules/menu'
import {createVisit} from './modules/visit'
import {createStory} from './modules/story'

function toggleActive(element){
    let content = document.querySelector('#content');
    content.innerHTML="";
    let navBar = createNav();
    content.appendChild(navBar);
    switch(element){
        case 'Home':
            content.appendChild(createHome());
            break;
        case 'Menu':
            content.appendChild(createMenu());
            break;
        case 'Our Story':
            content.appendChild(createStory());
            break;
        case 'Visit Us':
            content.appendChild(createVisit());
    };
    

    const links = document.querySelectorAll('.link');
    links.forEach(link=>link.addEventListener('click',(e)=>
    {toggleActive(e.target.textContent)}));
}

function pageLoad(){
    let content = document.querySelector('#content');
    let navBar = createNav();
    let home = createHome();
    let menu = createMenu();
    let story, visit;
    // let story = createStory();
    // let visit = createVisit();

    content.appendChild(navBar);
    content.appendChild(home);
    content.appendChild(menu);
    
    const links = document.querySelectorAll('.link');
    links.forEach(link=>link.addEventListener('click',(e)=>
    {toggleActive(e.target.textContent)}));
}

pageLoad();
