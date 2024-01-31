// Target the elements
let inputText = document.getElementById('todo-content')
let addBtn = document.getElementById('add-btn')
let listContainer = document.getElementById('list-container')

let todo_data = [];
todo_data = localStorage.getItem('todo_data')
todo_data = JSON.parse(todo_data)
let todo_id = parseInt(localStorage.getItem('todo_id'))

const showData = () => {
    if (todo_data) {
        listContainer.innerHTML = ""
        todo_data.forEach((item) => {
            const newDiv = document.createElement('div');
            newDiv.className = "w-[300px] h-[200px] rounded-md shadow-lg p-5"
            newDiv.innerHTML = `
            <div class="flex justify-between">
                <div class="font-bold">${item.date}</div>
                <button onclick="deleteData(${item.id})">
                <img
                    src="./trash-can-solid.svg" height="20" width="20"
                />
                </button>
            </div>
            <p class="mt-3">${item.content}</p>
        `
            listContainer.appendChild(newDiv)
        })
    }
}
showData();

// Add new to-do item in the list
const updateData = () => {
    let date = new Date();
    let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    console.log("today date", currentDate)

    if (todo_data == null) { todo_data = [], todo_id = 1 }
    todo_data.push({
        id: parseInt(todo_id),
        content: inputText.value,
        date: currentDate
    })
    todo_id++;
    console.log("id after increment", todo_id);
    localStorage.setItem("todo_data", JSON.stringify(todo_data))
    localStorage.setItem("todo_id", todo_id)
    inputText.value = ""
    showData()
}

const deleteData = (id) => {
    let record = new Array();
    record = JSON.parse(localStorage.getItem('todo_data'));
    let dummy = record.filter((item) => { return item.id != id });
    localStorage.setItem('todo_data', JSON.stringify(dummy));
    window.location.reload();
}
