function createMenu(){
    let content = document.querySelector('#content');
    content.style.backgroundImage = 'url(../dist/imgs/viet-coffee.jpg';

    let menu = document.createElement('div');
    menu.setAttribute('id','main');

    let header = document.createElement('h1');
    header.setAttribute('class','header');
    header.textContent="Beverages";
    menu.appendChild(header);

    let beveragesContainer = document.createElement('div');
    beveragesContainer.setAttribute('class','submenu');
    menu.appendChild(beveragesContainer)

    // let beverageTitle = document.createElement('h1');
    // beverageTitle.textContent="Beverages";
    // beverageTitle.setAttribute('id','submenuTitle');
    // beveragesContainer.appendChild(beverageTitle);

    let beverage1=document.createElement('div');
    beverage1.setAttribute('class','item');
    beveragesContainer.appendChild(beverage1);

    let coffeeName = document.createElement('h2');
    coffeeName.textContent='Iced Vietnamese Coffee';
    beverage1.appendChild(coffeeName);

    let coffeeDescription = document.createElement('h3');
    coffeeDescription.textContent='A freshly pressed expresso with condensed milk served over ice.';
    beverage1.appendChild(coffeeDescription);
    
    let beverage2=document.createElement('div');
    beverage2.setAttribute('class','item');
    beveragesContainer.appendChild(beverage2);

    let coffeeName2 = document.createElement('h2');
    coffeeName2.textContent='Hot Vietnamese Coffee';
    beverage2.appendChild(coffeeName2);

    let coffeeDescription2 = document.createElement('h3');
    coffeeDescription2.textContent='A freshly pressed expresso with condensed milk served hot.';
    beverage2.appendChild(coffeeDescription2);

    let beverage3=document.createElement('div');
    beverage3.setAttribute('class','item');
    beveragesContainer.appendChild(beverage3);
    
    let teaName = document.createElement('h2');
    teaName.textContent='Iced Milk Tea';
    beverage3.appendChild(teaName);

    let teaDescription = document.createElement('h3');
    teaDescription.textContent='A freshly pressed expresso with condensed milk served hot.';
    beverage3.appendChild(teaDescription);

    let beverage4=document.createElement('div');
    beverage4.setAttribute('class','item');
    beveragesContainer.appendChild(beverage4);
    
    let teaName2 = document.createElement('h2');
    teaName2.textContent='Hot Milk Tea';
    beverage4.appendChild(teaName2);

    let teaDescription2 = document.createElement('h3');
    teaDescription2.textContent='A freshly pressed expresso with condensed milk served hot.';
    beverage4.appendChild(teaDescription2);

    //////////////////////////////

    let header2 = document.createElement('h1');
    header2.setAttribute('class','header');
    header2.textContent="Desserts";
    menu.appendChild(header2);
    header2.style.backgroundImage = 'url(../dist/imgs/macarons.jpg';
    header2.style.backgroundSize = 'cover';

    let dessertsContainer = document.createElement('div');
    dessertsContainer.setAttribute('class','submenu');
    

    menu.appendChild(dessertsContainer)

    

    // let beverageTitle = document.createElement('h1');
    // beverageTitle.textContent="Beverages";
    // beverageTitle.setAttribute('id','submenuTitle');
    // dessertsContainer.appendChild(beverageTitle);

    let dessert1=document.createElement('div');
    dessert1.setAttribute('class','item');
    dessertsContainer.appendChild(dessert1);

    let dessertName = document.createElement('h2');
    dessertName.textContent='Macarons';
    dessert1.appendChild(dessertName);

    let dessertDescription = document.createElement('h3');
    dessertDescription.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
    dessert1.appendChild(dessertDescription);
    
    let dessert2=document.createElement('div');
    dessert2.setAttribute('class','item');
    dessertsContainer.appendChild(dessert2);

    let dessertName2 = document.createElement('h2');
    dessertName2.textContent='Mille Feulle Crepe Cake';
    dessert2.appendChild(dessertName2);

    let dessert2Description = document.createElement('h3');
    dessert2Description.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    dessert2.appendChild(dessert2Description);

    let dessert3=document.createElement('div');
    dessert3.setAttribute('class','item');
    dessertsContainer.appendChild(dessert3);
    
    let dessertName3 = document.createElement('h2');
    dessertName3.textContent='Croissant';
    dessert3.appendChild(dessertName3);

    let dessert3Description = document.createElement('h3');
    dessert3Description.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    dessert3.appendChild(dessert3Description);

    let dessert4=document.createElement('div');
    dessert4.setAttribute('class','item');
    dessertsContainer.appendChild(dessert4);
    
    let dessert4Name = document.createElement('h2');
    dessert4Name.textContent='Cupcakes';
    dessert4.appendChild(dessert4Name);

    let dessert4Description = document.createElement('h3');
    dessert4Description.textContent='Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nisl suscipit adipiscing bibendum est ultricies.';
    dessert4.appendChild(dessert4Description);

    return menu
}

export {createMenu}