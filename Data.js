let data = [
    {
        id : 1,
        date : "30/1/2024", 
        content : "this is first text"
    },
    {
        id : 2,
        date : "30/1/2024", 
        content : "this is second text"
    }
]

let id = 3;

// set id and data in localstorage
data = JSON.stringify(data)
localStorage.setItem("todo_data", data)
localStorage.setItem("todo_id", parseInt(id))