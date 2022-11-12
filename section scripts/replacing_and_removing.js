let addTaskBtn = document.querySelector('#add-task');

addTaskBtn.addEventListener('click', taskFunc);

function taskFunc() {

    // INPUT
    let input = prompt('What would you like to do today?');

    // NEW TASK
    let task = document.createElement('li');
    task.innerText = input;
    task.className = 'task';
    task.setAttribute('title', `${input}`);

    // REMOVE BTN
    let removeBtn = document.createElement('a');
    removeBtn.className = 'remove-btn';
    removeBtn.setAttribute('title', 'Remove');
    removeBtn.innerHTML = `<i class="fas fa-remove"></i>`
    task.appendChild(removeBtn)

    // APPEND TO LIST
    let list = document.querySelector('ul.task-items');
    list.appendChild(task);

    // REMOVING TASK
    removeBtn.addEventListener('click', removeTask);

    function removeTask() {
        task.remove();
    }

    // CLEAR TASKS BUTTON
    // let clearTasksBtn = document.querySelector('.clear-tasks-btn');

    // clearTasksBtn.addEventListener('click', removeAllTasks);

    // function removeAllTasks() {
    //     let items = Array.from(task.parentElement);
    //     items.forEach(function (item) {
    //         item.remove();
    //     })
    // }
}

// REMOVING AND REPLACING ELEMENTS

// REPLACING ELEMENTS

// New Item
// let taskUpdate = document.createElement('li');
// taskUpdate.className = 'new-task-look';
// taskUpdate.appendChild(document.createTextNode('New Task Design v.2.0.0'));

// // Parent Element
// let list = document.querySelector('ul.task-items');
// // Old Item
// let oldTaskDesign = list.children[2];

// // Replacing
// list.replaceChild(taskUpdate, oldTaskDesign)


// New item
// let newItem = document.createElement('li');
// newItem.className = 'new-task-look';
// newItem.appendChild(document.createTextNode('New Look v.2.0.0'))

// // Link in item
// let link = document.createElement('a');
// link.className = 'new-remove-btn';
// link.innerHTML = `<i class="fas fa-remove new-remove-icon"></i>`;

// // Appending link into new item
// newItem.appendChild(link);

// // Replacing Item in list

// // List
// let list = document.querySelector('ul.task-items');

// list.replaceChild(newItem, list.children[3]);

// // REMOVEING ELEMENTS
// let list = document.querySelector('ul.task-items');

// // .removeChild()
// list.removeChild(list.children[3]);
// list.removeChild(list.children[0]);
// list.removeChild(list.children[1]);
// list.removeChild(list.children[1]);

// let listItem = document.querySelector('.task');
// listItem.remove();

// let itemsArr = Array.from(list.children);

// itemsArr.forEach(function (item, i) {
//     item.remove();
// })

// let taskItem = document.querySelector('.task');

// taskItem.classList.add('new-task-look');

// taskItem.children[0].classList.add('new-remove-btn');
// taskItem.children[0].children[0].classList.add('new-remove-icon')
