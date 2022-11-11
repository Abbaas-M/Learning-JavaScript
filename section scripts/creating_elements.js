// CONSTRUCTING ELEMENTS
let listItem = document.createElement('li');

listItem.className = 'task';
listItem.setAttribute('title', 'Task Item');
listItemText = document.createTextNode(`Task 6`);
listItem.appendChild(listItemText);

let removeBtn = document.createElement('i');
removeBtn.className = 'fas fa-remove remove-btn';
listItem.appendChild(removeBtn);

let list = document.querySelector('.task-items');
list.appendChild(listItem)

console.log(listItem);

// CREATING BTN
let btn = document.createElement('a');
btn.className = 'btn';
btn.appendChild(document.createTextNode('Click Me'));
btn.style.background = 'steelblue';
btn.style.color = 'rgba(255,255,255,0.8)';
document.body.appendChild(btn)

let taskList = document.querySelector('.task-list');
let btn = document.createElement('a');
let btn2 = document.createElement('a');

// BUTTON TEXT
btn.appendChild(document.createTextNode('Edit Task'));
btn2.appendChild(document.createTextNode('Remove Task'));

// BUTTON STYLE FUNCTION
function btnColor(button, color, title = button.innerText, link = '#') {
    button.style.backgroundColor = color;
    button.style.color = 'rgba(255,255,255,0.8)';
    button.classList.add('btn');
    button.setAttribute('title', title);
    button.setAttribute('href', link);
    taskList.appendChild(button)
}

// btnColor(button, color, title, link)
btnColor(btn, 'rebeccapurple', 'edit button', 'https://worldofdevs.com');
btnColor(btn2, 'seagreen', 'remove single task', 'https://nodejs.org')
