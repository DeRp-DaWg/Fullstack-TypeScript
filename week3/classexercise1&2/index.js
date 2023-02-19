"use strict";
// const helloWorld = (name: string) => {
//     return `Hello ${name}`
// }
// console.log(helloWorld("World"))
// document.getElementById("root")!.innerHTML = helloWorld("World")
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const names = [""];
function populator() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        const age = Math.floor(Math.random() * 100 + 1);
        const gender = Math.random() < 0.5 ? "Man" : "Woman";
        array.push(new Person("Name", age, gender));
    }
    return array;
}
const table = document.createElement("table");
const tableHead = document.createElement("thead");
table.appendChild(tableHead);
const tableHeadRow = document.createElement("tr");
tableHead.appendChild(tableHeadRow);
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
let personArray = populator();
for (const prop in personArray[0]) {
    const th = document.createElement("th");
    th.textContent = prop.charAt(0).toUpperCase() + prop.substring(1);
    tableHeadRow.appendChild(th);
}
function renderTable() {
    tableBody.innerHTML = "";
    for (const person of personArray) {
        const tableRow = document.createElement("tr");
        let prop;
        for (prop in person) {
            const td = document.createElement("td");
            const text = person[prop];
            td.innerHTML = text;
            tableRow.appendChild(td);
        }
        tableBody.appendChild(tableRow);
    }
}
renderTable();
document.getElementById("root").appendChild(table);
let isAscending = false;
document.getElementById("sortButton").addEventListener("click", (event) => {
    if (isAscending) {
        personArray.sort((a, b) => a.age > b.age ? -1 : 1);
    }
    else {
        personArray.sort((a, b) => a.age < b.age ? -1 : 1);
    }
    isAscending = !isAscending;
    renderTable();
});
