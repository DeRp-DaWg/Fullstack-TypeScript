// const helloWorld = (name: string) => {
//     return `Hello ${name}`
// }

// console.log(helloWorld("World"))
// document.getElementById("root")!.innerHTML = helloWorld("World")

class Person {
    public name: string
    public age: number
    public gender: string
    
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const names: string[] = [""]

function populator(): Person[] {
    const array: Person[] = []
    for (let i = 0; i < 10; i++) {
        const age : number = Math.floor(Math.random()*100+1)
        const gender : string = Math.random() < 0.5 ? "Man" : "Woman"
        array.push(new Person("Name",age,gender))
    }
    return array
}

const table: Element = document.createElement("table")
const tableHead: Element = document.createElement("thead")
table.appendChild(tableHead)
const tableHeadRow: Element = document.createElement("tr")
tableHead.appendChild(tableHeadRow)
const tableBody: Element = document.createElement("tbody")
table.appendChild(tableBody)

let personArray: Person[] = populator()
for (const prop in personArray[0]) {
    const th: Element = document.createElement("th")
    th.textContent = prop.charAt(0).toUpperCase()+prop.substring(1)
    tableHeadRow.appendChild(th)
}

function renderTable() {
    tableBody.innerHTML = ""
    for (const person of personArray) {
        const tableRow: Element = document.createElement("tr")
        let prop: keyof typeof person
        for (prop in person) {
            const td: Element = document.createElement("td")
            const text: string = person[prop] as string
            td.innerHTML = text
            tableRow.appendChild(td)
        }
        tableBody.appendChild(tableRow)
    }
}

renderTable()

document.getElementById("root")!.appendChild(table)
let isAscending = false
document.getElementById("sortButton")!.addEventListener("click", (event: Event) => {
    if (isAscending) {
        personArray.sort((a, b) => a.age > b.age ? -1 : 1)
    } else {
        personArray.sort((a, b) => a.age < b.age ? -1 : 1)
    }
    isAscending = !isAscending
    renderTable()
})
