function addTodo(){
    let task = textIn.value;
    let date = setDate.value;
    if(task != ''){
        todosArray.unshift({
            text: task,
            checked: false,
            date
        })
        renderTodo();
        localStorage.setItem('todos', JSON.stringify(todosArray));

        textIn.value = '';
        
    }
}

addBtn.addEventListener('click', addTodo);

function doneTodo(e){
    let index = e.target.parentNode.getAttribute('key');
    let newTodo = [...todosArray];
    newTodo[index].checked = !element;
    let element = newTodo[index].checked;
    localStorage.setItem('todos', JSON.stringify(newTodo));

    let isDone = e.target.parentNode.classList.add('done');
    if(isDone){
        e.target.parentNode.classList.remove('done');
    }
    else{
        e.target.parentNode.classList.add('done');
    }

}

function deleteTodo(e){
    let index = e.target.parentNode.id;
    todosArray.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todosArray));
    renderTodo();
}