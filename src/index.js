import * as css from "/src/main.css";
import goblin from '../assets/goblin.png';

function createLayout() {
    const table = document.createElement('table');
    table.className = 'table';

    const thead = document.createElement('thead');
    const th = document.createElement('th');
    th.colSpan = 4;
    th.textContent = 'Beat Game';
    thead.appendChild(th);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr');
        tr.className = 'row';
        for (let j = 0; j < 4; j++) {
            const td = document.createElement('td');
            td.className = 'col';
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    document.body.appendChild(table);
}

// function createStartButton() {
const button = document.createElement('div');
button.textContent = "Stop Game";
button.className = 'startButton';
document.body.append(button);   
// }

document.addEventListener("DOMContentLoaded", ()=> {
    // createStartButton();
    createLayout();
    let columns = document.querySelectorAll(".col");
    console.log(columns);
    let randomNum = Math.floor(Math.random() * 16);
    const img = document.createElement('img');
    img.src = goblin;
    img.alt = 'goblin';
    let target = columns[randomNum];
    target.textContent = '';
    target.append(img);

    let randomMove = setInterval(()=>{
        let newNum = Math.floor(Math.random() * 16);
        while (newNum === randomNum) {  
            newNum = Math.floor(Math.random() * 16);
        }
        let next = columns[newNum];
        next.append(img);
        target = next; 
        randomNum = newNum;
    }, 2000)

    button.addEventListener('click', () => {clearInterval(randomMove)})
});

