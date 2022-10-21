let name = 'Johnny Rhodes'
let age = 21 + parseInt(Math.random() * 47);
let gender = 'male';

let html = `
        <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Gender: ${gender}</li>
        </ul>
`

document.body.innerHTML = html;
