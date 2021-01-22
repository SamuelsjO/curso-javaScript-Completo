
function changeName(name) { 
    this.name = name
    this.updatedAt = new Date()
}

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,

    changeName
}

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}
task1.name = "bla bla"

task1.changeName("Nome atualizado")
task2.changeName("novo nome")
//console.log(task1)
console.log(task2)