const add_text = document.getElementById('add_word');
const add_title = document.getElementById('add_title');
const add_row = document.getElementById('add_row');
const remove = document.getElementById('remove');

const btns = document.getElementById('btns');

const table = document.getElementById('table');


const my_table = document.getElementById('main');

btns.addEventListener("click", function(e){
    if (e.target.id === 'add_row'){
        let row1 = document.createElement("tr");
        table.append(row1)
        
    }
    else if(e.target.id === 'add_title'){
        let th1 = document.createElement("th");
        table.lastChild.appendChild(th1);
        const my_text = prompt('enter text');
        th1.textContent = my_text;
    }
    else if(e.target.id === 'add_word'){
        let td1 = document.createElement("td");
        table.lastChild.appendChild(td1);
        const tx = prompt('enter text')
        td1.textContent = tx;
    }
    else if(e.target.id === 'remove'){
        table.lastChild.remove()
    }
    
})

my_table.addEventListener( "click", (e) => {
    e.target.remove()
})