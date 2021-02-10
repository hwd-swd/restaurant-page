function createStory(){
    let content = document.querySelector('#content');
    content.style.backgroundImage = 'url(../dist/imgs/story.jpg';

    let story = document.createElement('div');
    story.setAttribute('id','main');

    let header = document.createElement('h1');
    header.textContent="Our Story";
    header.setAttribute('class','header');
    story.appendChild(header);

    let items = document.createElement('div');
    items.setAttribute('id','items');
    items.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    story.appendChild(items);

    return story
}

export {createStory}