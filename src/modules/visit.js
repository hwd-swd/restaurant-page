function createVisit(){
    let content = document.querySelector('#content');
    content.style.backgroundImage = 'url(../dist/imgs/pastries.jpg';

    let visit = document.createElement('div');
    visit.setAttribute('id','main');

    let header = document.createElement('h1');
    header.textContent="Visit Us";
    header.setAttribute('class','header');
    visit.appendChild(header);

    let items = document.createElement('div');
    items.setAttribute('id','storyText');
    items.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    story.appendChild(items);
    visit.appendChild(items);


    return visit
}


export {createVisit}