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
    items.setAttribute('id','items')
    visit.appendChild(items);

    return visit
}

export {createVisit}