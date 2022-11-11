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
