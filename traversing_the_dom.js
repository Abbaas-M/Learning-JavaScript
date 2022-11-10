// TRAVERSING THROUGH THE DOM

let parentElement = document.querySelector('.task-items');
let childElement = document.querySelector('.task');
let val;

// CHILD NODES
val = parentElement.childNodes;

// CHILDREN
val = parentElement.children;

// INDEXING THROUGH CHILDREN/NODES
// val = parentElement.children[1].style.background = '#ccc';
// val = parentElement.childNodes[1].style.background = '#f4f4f4';

// NODE TYPES
val = parentElement.children[1].childNodes[1].nodeType;

// val = document.doctype.nodeType; 10 - DocType
// val = document.nodeType; 9 - Actual document
// val = document.body.nodeType 1 - Element

// NODE NAME
// val = parentElement.children[1].children[0].nodeName.toLowerCase();

// FIRST AND LAST ELEMENTS

// FIRST ELEMENT CHILD
val = parentElement.firstChild;
val = parentElement.firstElementChild;
// LAST ELEMENT CHILD
val = parentElement.lastChild;
val = parentElement.lastElementChild;

// PARENT ELEMENTS
val = childElement.parentElement;
val = childElement.parentNode;

// NEXT & PREVIOUS SIBLINGS

// NEXT SIBLING
// val = childElement.nextSibling;
// val = childElement.nextElementSibling;
// val = parentElement.children[2].nextElementSibling;

// PREVIOUS SIBLING
// val = parentElement.children[2].previousSibling;
// val = parentElement.children[2].previousElementSibling;

let tasks = document.querySelector('.task-items');
let task = document.querySelector('.task');

// GETTING CHILDREN
val = tasks.children;
val = tasks.childNodes;

// GETTING CHILDREN COUNT
// val = tasks.childElementCount;

// GETTING PARENT ELEMENTS
val = task.parentElement;

// GETTING SIBLINGS OF ELEMNTS

// NEXT SIBLING
val = tasks.children[2].nextElementSibling;

// PREVIOUS SIBLING
val = tasks.children[2].previousElementSibling;

// TAG NAME OF ELEMENT
val = tasks.children[1].tagName;

// PRACTICE
val = tasks.firstElementChild.innerText = 'First Task Of The Day';
val = tasks.lastElementChild.innerText = `Last Task Of The Day`

console.log(val);

