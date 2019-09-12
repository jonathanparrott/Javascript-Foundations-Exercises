// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const numberThree = document.createElement('h3');
numberThree.textContent = "I'm a blue H3";
numberThree.style.color = "blue";

const blackAndPink = document.createElement('div');
blackAndPink.style.backgroundColor = "pink";
blackAndPink.style.borderColor = "black";

const newDiv = document.createElement('h1');
newDiv.textContent = "I'm in a div";

const newParagraph = document.createElement('p');
newParagraph.textContent = "ME TOO!";





container.appendChild(content);
content.appendChild(paragraph);
content.appendChild(numberThree);
blackAndPink.appendChild(newDiv);
blackAndPink.appendChild(newParagraph)
container.appendChild(blackAndPink);


