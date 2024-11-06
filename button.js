// Image upload and removal
let imageGallery = document.getElementById("gallery");

function addImage() {
    const fileInput = document.getElementById("image-upload");
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        imageGallery.appendChild(img);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function removeImage() {
    if (imageGallery.children.length > 0) {
        imageGallery.removeChild(imageGallery.lastElementChild);
    }
}

// Contact form validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    showPopup();
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// To-Do List functionality
let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("todo-input");

function addToDo() {
    const task = todoInput.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        todoList.appendChild(li);
        todoInput.value = "";
    }
}
