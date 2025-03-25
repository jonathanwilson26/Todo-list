let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("iteminput");
const storageKey = "items";

function renderItems() {
itemsDiv.innerHTML = null;

for(const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.textContent = item;
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItems(idx)

    container.appendChild(text);
    container.appendChild(button);
    itemsDiv.appendChild(container)
}
}

function addItems() {
const value = input.value;
if (!value) {
    alert("Enter a valid item")
}
items.push(value);
renderItems()
input.value = "";
saveItems();

}

function removeItems(idx) {
items.splice(idx, 1)
renderItems();
saveItems();
}


function loadItems() {
const oldItems = localStorage.getItem(storageKey);
if (oldItems) items = JSON.parse(oldItems)
}

function saveItems() {
const stringItems = JSON.stringify(items);
localStorage.setItem(storageKey, stringItems)
}

document.addEventListener("DOMContentLoaded", loadItems)
