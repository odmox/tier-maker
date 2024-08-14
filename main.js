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
        const imgElement = document.createElement('img');
        imgElement.src = eventReader.target.result;
        itemsSection.appendChild(imgElement);
        imgElement.classList.add('item-image');
        itemsSection.appendChild(imgElement);
    }

    reader.readAsDataURL(file);
});