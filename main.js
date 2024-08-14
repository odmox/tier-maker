// Add JS here

// midu query 
const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

const imageInput = $('#image-imput');
const itemsSection = $('#selector-items');

imageInput.addEventListener('change', (event) => {
    const [file] = event.target.files

    if(!file) return;
    if(file.length == 0) return;

    const reader = new FileReader();
    reader.onload = (eventReader) => {
        createImage(eventReader.target.result);
    }

    reader.readAsDataURL(file);
});

let draggedElement = null;
let sourceContainer = null; 

const rows = $$('.tier .row');

rows.forEach(row => {
    row.addEventListener('drop', handleDrop);
    row.addEventListener('dragover', handleDragOver);
    row.addEventListener('dragleave', handleDragLeave);
});

function handleDrop(event) {
    event.preventDefault();
    
    const { currentTarget, dataTransfer } = event;
    console.log(currentTarget);
    console.log(dataTransfer);
}

function handleDragOver(event) {
    event.preventDefault();

}

function handleDragLeave(event) {
    event.preventDefault();
}

function handleDragStart(event) {
    draggedElement = event.target;
    sourceContainer = event.target.parentElement;
}

function handleDragEnd(event) {
    draggedElement = null;
    sourceContainer = null;
}

function createImage(src){
    const imgElement = document.createElement('img');
    imgElement.draggable = true;
    imgElement.src = src;
    itemsSection.appendChild(imgElement);
    imgElement.classList.add('item-image');
    
    imgElement.addEventListener('dragstart', handleDragStart);
    imgElement.addEventListener('dragend', handleDragEnd);
    
    itemsSection.appendChild(imgElement);
    return imgElement;
}