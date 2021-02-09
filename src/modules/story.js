function createStory(){
    let story = document.createElement('div');
    story.textContent="hello testing story";
    story.setAttribute('id','main');

    let items = document.createElement('div');
    items.setAttribute('id','items')
    story.appendChild(items);

    return story
}

export {createStory}