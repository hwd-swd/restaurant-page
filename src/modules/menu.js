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

    return menu
}

export {createMenu}