let input = document.getElementById("inputText");
        let list= document.getElementById("list");
        let priority = document.getElementById('priority-pick').value;
        let listNum = 0;
addList=()=>{
let inputText = (input.value);  
   if (inputText) { 
    list.innerHTML += `
    <tr id="list${listNum}">
        <td><input class="" type="checkbox" id="check" onclick="done(${listNum})"></th>
        <td><div><span id="text${listNum}"> ${inputText}</span></div></td>
        <td class="priority" onclick="changePriority(this)">
        <div class="${getPriorityClass(priority)}">${getPriorityText(priority)}</div></td>
        <td>04/05/2018 01:54 PM</td>
        <td><p>Complete</p></td>
        <td><div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div></td>
        <td><p>04/05/2018 01:54 PM</p></td>
        <td> <div class="col-4">
            <button class=" btn btn-danger" onclick="deleteList(${listNum})">Šalinti</button>
        </div></td>    
    </td>`;
        input.value=" ";
        listNum++;
   }
}

done=(listId)=>{ 
    let current = document.getElementById(`text${listId}`);
    let classExit=current.classList.contains("text-decoration-line-through");
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }else{
        current.classList.add("text-decoration-line-through");
    }
}

deleteList=(listId)=>{
    let current = document.getElementById(`text${listId}`).innerHTML;
        let deleteComfirm = confirm;
    if (deleteComfirm) {    
        let p = document.getElementById("list")
        let c = document.getElementById(`list${listId}`);
        p.removeChild(c);
    }
};

function changePriority(cell) {
    let currentPriority = cell.querySelector('div').textContent;

    let prioritySelect = document.createElement('select');
    prioritySelect.classList.add('form-select');
    prioritySelect.innerHTML = `
        <option value="1">Low</option>
        <option value="2">Normal</option>
        <option value="3">High</option>
    `;
    prioritySelect.value = getPriorityValue(currentPriority);

    prioritySelect.addEventListener('change', function () {
        let newPriority = prioritySelect.value;
        cell.innerHTML = `<div class="${getPriorityClass(newPriority)}">${getPriorityText(newPriority)}</div>`;
        updateLastModified(cell.closest('tr'));
    });

    cell.innerHTML = '';
    cell.appendChild(prioritySelect);
}

function getPriorityValue(priorityText) {
    switch (priorityText) {
        case 'Low':
            return '1';
        case 'Normal':
            return '2';
        case 'High':
            return '3';
        default:
            return '';
    }
}

function getPriorityText(priority) {
    switch (priority) {
        case '1':
            return 'Low';
        case '2':
            return 'Normal';
        case '3':
            return 'High';
        default:
            return '';
    }
}

function getPriorityClass(priority) {
    switch (priority) {
        case '1':
            return 'priority-green';
        case '2':
            return 'priority-blue';
        case '3':
            return 'priority-red';
        default:
            return '';
    }
}