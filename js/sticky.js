// Selecting DOM elements
const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

// Array of months for date formatting
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

// Retrieve notes from localStorage or initialize empty array
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

// Variables for tracking update state
let isUpdate = false, updateId;

// Event listener for clicking the addBox element
addBox.addEventListener("click", () => {
    popupTitle.innerText = "Add a new Note";// Set popup title
    addBtn.innerText = "Add Note";// Set button text
    popupBox.classList.add("show"); // Show popup box
    document.querySelector("body").style.overflow = "hidden"; // Prevent scrolling
    if(window.innerWidth > 660) titleTag.focus();
});

// Set focus to titleTag input if window width is greater than 660 pixels
closeIcon.addEventListener("click", () => {
    isUpdate = false;// Reset update state
    titleTag.value = descTag.value = "";// Clear input fields
    popupBox.classList.remove("show");// Hide popup box
    document.querySelector("body").style.overflow = "auto";// Restore scrolling
});

// Function to display notes in the UI
function showNotes() {
    if(!notes) return;// Return if notes array is empty or undefined
    document.querySelectorAll(".note").forEach(li => li.remove());// Remove existing note elements
    notes.forEach((note, id) => {
        let filterDesc = note.description.replaceAll("\n", '<br/>');  // Replace newlines with <br/> for display
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);// Insert note HTML after addBox element
    });
}
showNotes(); // Initial call to display existing notes

// Function to display context menu when ellipsis icon is clicked
function showMenu(elem) {
    elem.parentElement.classList.add("show"); // Show menu
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show"); // Hide menu if clicked outside
        }
    });
}

// Function to update a note
function deleteNote(noteId) {
    let confirmDel = confirm("Are you sure you want to delete this note?"); 
    if(!confirmDel) return; // If user cancels delete action, return
    notes.splice(noteId, 1); // Remove note from notes array
    localStorage.setItem("notes", JSON.stringify(notes)); // Update localStorage
    showNotes();  // Refresh UI to reflect changes
}

function updateNote(noteId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n'); // Replace <br/> with newlines for textarea
    updateId = noteId;  // Set updateId to current noteId
    isUpdate = true; // Set update mode
    addBox.click(); // Simulate click on addBox to open popup
    titleTag.value = title; // Set title in input field
    descTag.value = description;  // Set description in textarea
    popupTitle.innerText = "Update a Note"; // Set popup title
    addBtn.innerText = "Update Note"; // Set button text
}

// Event listener for add/update button click
addBtn.addEventListener("click", e => {
    e.preventDefault(); // Prevent default form submission behavior
    let title = titleTag.value.trim(), // Get trimmed title
    description = descTag.value.trim(); // Get trimmed description

    if(title || description) { // Check if title or description is not empty
        let currentDate = new Date(), // Get current date
        month = months[currentDate.getMonth()], // Get current month name
        day = currentDate.getDate(), // Get current day of the month
        year = currentDate.getFullYear(); // Get current year

        // Create note object with title, description, and formatted date
        let noteInfo = {title, description, date: `${month} ${day}, ${year}`}
        if(!isUpdate) {
            notes.push(noteInfo);  // Add new note to notes array
        } else {
            isUpdate = false;  // Reset update mode
            notes[updateId] = noteInfo; // Update existing note in notes array
        }
        localStorage.setItem("notes", JSON.stringify(notes));  // Update localStorage
        showNotes(); // Refresh UI to reflect changes
        closeIcon.click(); // Simulate click on close icon to close popup
    }
});