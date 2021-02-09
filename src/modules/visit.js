function createVisit(){
    let visit = document.createElement('div');
    visit.textContent="hello testing visit";
    visit.setAttribute('id','main');

    let items = document.createElement('div');
    items.setAttribute('id','items')
    visit.appendChild(items);

    return visit
}

export {createVisit}