let items = [];

const itemsDiv = document.getElementById("items")

function renderItems(){
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        text.textContent = item;

        const text = document.createElement('p')
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        itemsDiv.appendChild(text)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}


renderItems()


function loadItems() {

}

function addItems() {

}

function saveItems() {

}


function removeItem() {

}