function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add(event) {
    event.preventDefault();
    var task = document.getElementById('task').value;
    document.getElementById('task').classList.remove('wrong');
    if (task !== "") {
        document.getElementById('task').classList.remove('wrong');
        var todos = get_todos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));
        document.getElementById('task').value =  "";
        show();
    }
    else{
        document.getElementById('task').classList.add('wrong');
    }
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += `<li><a>${todos[i]}</a><button class="remove" id="${i}"><i class="fa fa-check" aria-hidden="true"></i></button></li>`;
    };//<i class="fa fa-trash-o" aria-hidden="true"></i>
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();





