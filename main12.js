let todosArray = localStorage.getItem('todos') == null 
? []
: [...JSON.parse(localStorage.getItem('todos'))];
// ... - spread operator, разворачивает массив в новый массив
 
function createTodo( todo, id ){
    let items = 
    `
    <li key="${id}" class="${todo.checked ? 'taskItem done' : 'taskItem'}" >
    ${todo.text} ${todo.date ? todo.date : ''}
    <img class="btn" src="./img/cor.jpg" onclick="doneTodo(event)" />
    <img class="btn" src="./img/del.png" onclick="deleteTodo(event)" />
    `
    return items;
}            

function renderTodo(){ 
    ul.innerHTML = '';
    let items = [];
    todosArray.length
    ? todosArray.map((todo, id) => {
        items.unshift(createTodo(todo, id));
        ul.innerHTML = items.join('');  
        
    })
    : ul.append('No tasks yet!');







    // todosArray.map((todo, id) => {

    //     let li = document.createElement('li');
    //     li.className = 'taskItem';
    //     li.id = id;

    //     let doneBtn = document.createElement('img');
    //     doneBtn.className = 'btn';
    //     doneBtn.src = './img/cor.jpg';
    //     doneBtn.addEventListener('click', doneTodo);

    //     let deleteBtn = document.createElement('img');
    //     deleteBtn.className = 'btn';
    //     deleteBtn.src = './img/del.png';
    //     deleteBtn.addEventListener('click', deleteTodo);    

    //     li.append(todo.text);
    //     li.append(doneBtn);
    //     li.append(deleteBtn);
    //     ul.append(li);
    // })

}

renderTodo();