var btn = document.getElementById("add")
var input = document.getElementById("input")
var ul = document.getElementsByTagName("ul")[0];
btn.addEventListener("click", addItemOnClick)
input.addEventListener("keypress", addItemOnEnter)

function addItemOnClick(){
    if (input.value.length > 0){
        newItem()
    }
}

function addItemOnEnter(e){
    if (input.value.length > 0 && e.keyCode == 13) {
        newItem()
    }
}

function newItem(){

    if(ul.children[0].className == 'message'){
        ul.children[0].remove()
    }

    var li = document.createElement("li");
    li.innerHTML = `<h3 class="li-item">${input.value}</h3>
    <div class="btns">
        <button onclick="taskDone(this)" class="done btn"><i class="material-icons">radio_button_unchecked</i></button>
        <button onclick="editItem(this)" class="done btn edit"><i class="material-icons">edit</i></button>
        <button onclick="removeItem(this)" class="done btn delete"><i class="material-icons">delete</i></button>
    </div>`
                
    ul.appendChild(li);
    input.value = ""
}

// DELETE BUTTON WORKING

function removeItem(currentElement){
    var currentTask = currentElement.parentElement.parentElement
    currentTask.remove();
    if(ul.children.length <= 0){
        var msg = document.createElement('h2') 
        msg.className = 'message'
        msg.textContent = 'No new task, please add one.'
        ul.appendChild(msg)
    }
}

// TASK DONE

function taskDone(currElement){
    if(currElement.children[0].textContent == 'radio_button_unchecked'){
        var text = currElement.parentElement.parentElement.children[0]
        text.style.color = '#a5a5a5'
        text.style.fontStyle = 'italic'
        text.style.textDecoration = 'line-through'
        currElement.children[0].textContent = 'radio_button_checked'
        currElement.style.backgroundColor = '#8ca1bb'
    } else {
        var text = currElement.parentElement.parentElement.children[0]
        text.style.color = 'black'
        text.style.fontStyle = 'normal'
        text.style.textDecoration = 'none'
        currElement.children[0].textContent = 'radio_button_unchecked'
        currElement.style.backgroundColor = '#5893dd'   
    }
}

// EDIT BUTTON WORKING

function editItem(currElement){
    if(currElement.children[0].textContent == 'edit'){
        var currItem = currElement.parentElement.parentElement
        var text = currItem.children[0]
        var inputValue = text.textContent
        var tempInput = document.createElement('input')
        tempInput.className = 'tempInput'
        tempInput.type = 'text'
        tempInput.placeholder = 'add your task'
        tempInput.value = inputValue
        currItem.replaceChild(tempInput, text)
        currElement.children[0].textContent = 'done'
        currElement.style.backgroundColor = '#69C761'
        
    } else {
        var currItem = currElement.parentElement.parentElement
        var input = currItem.children[0]
        var inputValue = input.value
        var text = document.createElement('h3')
        text.className = 'li-item'
        text.textContent = inputValue
        currItem.replaceChild(text, input)
        currElement.children[0].textContent = 'edit'
        currElement.style.backgroundColor = '#ffc107'
    }
}


// FOOTER

function toInsta() {
    location.href = 'https://www.instagram.com/__binal12/'
}

function toTwitter() {
    location.href = 'https://www.twitter.com/__binal12/'
}