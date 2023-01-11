'use strict'




////First Practice////
/*
const userInfo = document.querySelector("#userInfo");
const userID = document.querySelector("#userId");
const userPs = document.querySelector("#userPs");
const btn = document.querySelector("#submitBtn");
const printInfo = document.querySelector("#printInfo");

let list = [];
const KEY_USERINFO = "User_Informatio"

function print (newLists) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newLists.ID;

    li.appendChild(span);
    printInfo.appendChild(li);

}

btn.addEventListener("click", function clickBtn(e) {
    e.preventDefault();
    let savedId = userID.value;
    let savedPs = userPs.value;
    userID.value = "";
    userPs.value = "";

    let newList = {
        ID: savedId,
        Passworld: savedPs,
    }

    list.push(newList);
    print(newList);
    saveInfo();
    
});

function saveInfo() {
    localStorage.setItem(KEY_USERINFO, JSON.stringify(list))
};

const savedInfo = localStorage.getItem(KEY_USERINFO);
console.log(savedInfo);

if (savedInfo !== null) {
    let parseInfo = JSON.parse(savedInfo);
    list = parseInfo;
    parseInfo.forEach(print);
    console.log(parseInfo);
}



console.log(list);
*/
