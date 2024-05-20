/*
read data from storage ( if no item found return [] )
write data to storage
get inputs and add to storage
draw data on screen
*/

const readDataFromStorage = (dataField = "users") => {
    try{
        const data = JSON.parse(localStorage.getItem(dataField)) 
        if(!Array.isArray(data)) throw new Error("")
        return data
    }
    catch(err){
        return []
    }
}

const writeDataToStorage = (data, dataField="users")=>{
    localStorage.setItem(dataField, JSON.stringify(data))
}

const myForm = document.querySelector("#myForm")
let headers = ["name", "age", "email"]
myForm.addEventListener("submit", function(e){
    e.preventDefault()
    // let user = {
    //     name: myForm.elements["name"].value,
    //     age: myForm.elements["age"].value
    // }
    const user = {}
    // user[headers[0]] ="marwa" // user[ "name" ] = "marwa"   // user.name ="marwa"
    headers.forEach( h => user[h] = myForm.elements[h].value )
    let allUsers = readDataFromStorage()
    allUsers.push(user)
    writeDataToStorage(allUsers)
    myForm.reset()
    drawMyData()
})

const drawMyData = () =>{
    const dataWrap = document.querySelector("#dataWrap")
    dataWrap.innerHTML=""
    const allUsers = readDataFromStorage()
    allUsers.forEach(u=>{
        let li = document.createElement("li")
        li.innerText = u.name
        dataWrap.appendChild(li)
    })
}
drawMyData()