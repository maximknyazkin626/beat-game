import * as css from "/src/main.css";
import goblin from '../assets/goblin.png';


document.addEventListener("DOMContentLoaded", ()=> {
    let columns = document.querySelectorAll(".col");
    console.log(columns);
    let randomNum = Math.floor(Math.random() * 16);
    const img = document.createElement('img');
    img.src = goblin;
    img.alt = 'goblin';
    let target = columns[randomNum];
    target.textContent = '';
    target.appendChild(img);

    setInterval(()=>{
        let newNum = Math.floor(Math.random() * 16);
        while (newNum === randomNum) {  
            newNum = Math.floor(Math.random() * 16);
        }
        let next = columns[newNum];
        next.appendChild(img);
        target = next; 
        randomNum = newNum;
    }, 2000)

});