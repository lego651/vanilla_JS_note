// Global vars
// COLORS = ['red', 'blue', 'yellow'];
COLOR = "red";

// DOM reference
// Form
noteContent = document.querySelector('#noteContent');
noteColor = document.querySelector('#noteColor');
noteAddButton = document.querySelector('#noteAddButton');
// Notes
const notes = document.querySelector('#notes');
noteContent.focus();
// Colors
const colors = document.querySelector('#colors')

// Functions
function addNote() {
  let content = noteContent.value;
  let color = COLOR
  if(content.length > 0) {
    // create new note div
    let note = document.createElement('div');
    note.classList.add('note');
    note.classList.add(color)

    // create deleteButton
    let deleteButton = document.createElement('span');
    deleteButton.innerHTML = '&times;';
    deleteButton.classList.add('delete');
    // append deleteButton to note div
    note.appendChild(deleteButton);

    // create new textarea
    let input = document.createElement('textarea');
    input.name = "noteDislay";
    input.cols = "46";
    input.rows = "10";
    input.maxlength = "300";
    input.classList.add('noteDisplay');
    input.value = content
    // append textarea to note div
    note.appendChild(input);

    // append note div to notes div
    notes.appendChild(note);

    // clear form data
    noteContent.value = "";
    noteContent.focus();

    // bind delete addEventListener to deleteButton
    addEventListenerToDeleteButton(deleteButton)
  }
}

function deleteNote(e) {
  console.log('delete at least is called...')
  let eventNode = e.target.parentNode; // points to div
  // console.log('eventNode')
  eventNode.parentNode.removeChild(eventNode)
}

function addEventListenerToDeleteButton(deleteButton){
  deleteButton.addEventListener('click', function(e){
    e.stopPropagation();
    deleteNote(e);
  })
}

// Event Listeners
noteAddButton.addEventListener('click', function(e){
  e.preventDefault();
  if(noteContent.value.length > 0){
    addNote();
  }
})
colors.addEventListener('click', function(e){
  if(e.target && e.target.nodeName == "LI") {
    document.querySelectorAll('.color').forEach(function(elem){
      elem.classList.remove("selected")
    })
    document.getElementById(e.target.id).classList.add("selected");
    COLOR = e.target.id
  }
})
