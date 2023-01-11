'use strict'

const todoList = document.querySelector(".todoList");
const btnSubmit = document.querySelector(".btnSubmit");
const showLists = document.querySelector(".showLists");

let listsInfo = [];

const KEY_TODOLISTS = "Todolists";

function printLists (lists) {
   const li = document.createElement("li");
   const btn = document.createElement("button");
   li.innerText = lists;
   btn.innerText = " X"

   btn.addEventListener("click", () => {
    li.remove();
   })

   showLists.appendChild(li);
   li.appendChild(btn);
}



btnSubmit.addEventListener('click',(event) => {
    event.preventDefault();
    let lists = todoList.value;
    todoList.value = "";
    listsInfo.push(lists);
    printLists(lists);

    savelists();
    // parsedLists();
});

function savelists () {
    localStorage.setItem(KEY_TODOLISTS, JSON.stringify(listsInfo))
}

// const savedlists = localStorage.getItem(KEY_TODOLISTS);

// function parsedLists () {
//     const parsedItems = JSON.parse(savedlists);
//     listsInfo = parsedItems;
// }

////////////First Challenge
/*

const todoForm = document.querySelector(".list");
const todoList = document.querySelector(".todoList");
const btnSubmit = document.querySelector(".btnSubmit");
const showLists = document.querySelector("#showLists");


const KEY_TODO = 'TodoLists'

let lists = []; //이곳이 항상 empty로 시작하기 때문에 old ones 들을 저장하기 위한 lists = parsedTodos


function paintTodo(todoValue) {
    const li = document.createElement("li");
    li.id = Number(todoValue.id);
    const span = document.createElement("span");
    span.textContent = todoValue.text;
    const button = document.createElement("button")
    button.textContent = "X";

    button.addEventListener('click', function btnDelete (event) {
        const DeleteLists = event.target.parentElement; //parentElement;
        DeleteLists.remove();
        console.log(typeof li.id);
        lists = lists.filter((lists) => lists.id !== parseInt(li.id)); //이걸로 클릭한 삭제된 li.id를 제외한 나머지 element는 남겨진 array가 생성되게 된다
        saveFiles();    
    }
    );
    li.appendChild(span);
    li.appendChild(button);
    showLists.appendChild(li);
}



function saveFiles () {
    localStorage.setItem(KEY_TODO, JSON.stringify(lists));
}

btnSubmit.addEventListener('click', function(event) 
{  
    event.preventDefault();
    let todoValue = todoList.value; 
    todoList.value = '';
    const NewListsOb = {
        text: todoValue,
        id: Date.now(),
    }
    lists.push(NewListsOb);
    paintTodo(NewListsOb);
    saveFiles();
});

const savedTodos = localStorage.getItem(KEY_TODO);


if (savedTodos !== null) {
const parsedTodos = JSON.parse(savedTodos);
lists = parsedTodos;
parsedTodos.forEach(paintTodo);
}

*/