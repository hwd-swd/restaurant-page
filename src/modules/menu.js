function createMenu(){
    let menu = document.createElement('div');
    menu.textContent="hello testing";
    menu.setAttribute('id','main');

    let items = document.createElement('div');
    items.setAttribute('id','items')
    menu.appendChild(items);

    return menu
}

export {createMenu}