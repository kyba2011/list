
let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

let h1 = document.createElement('h1');
h1.innerHTML = 'To-Do List';
container.appendChild(h1);

let mainBlock = document.createElement('div');
mainBlock.className = 'mainBlock';
container.appendChild(mainBlock);

let div = document.createElement('div');
mainBlock.append(div);

let textIn = document.createElement('input');
textIn.type = 'text';
textIn.placeholder = 'Type...';
textIn.className = 'textIn';
div.append(textIn);

let setDate = document.createElement('input');
setDate.type = 'date';
div.append(setDate);

let addBtn = document.createElement('button');
addBtn.className = 'addBtn';
addBtn.innerHTML = 'Add';
div.append(addBtn);

let ul = document.createElement('ul');
mainBlock.append(ul);
    