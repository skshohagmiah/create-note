const noteContainer = document.querySelector('.note-container');
const inputForm = document.querySelector('.note-modal form')
const input = document.querySelector('input[type="text"]');
const textArea = document.querySelector('textarea');
const noteButton = document.querySelector('.note-button');
const noteModal = document.querySelector('.note-modal');

noteButton.addEventListener('click', () => {
    noteModal.style.display = 'block';
})



inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    noteModal.style.display = 'none'
    renderNote()
})

function renderNote(){
    const singleNote = document.createElement('div');
    singleNote.classList.add('single-note')
    singleNote.innerHTML = `
    <h2>${input.value}</h2>
    <p>
     ${textArea.value}
    </p>
    <div class="buttons">
      <button class="edit-btn">Edit Note</button>
      <button class="delete-btn">Delete Note</button>
    `
    noteContainer.appendChild(singleNote)
    deleteNote()
    editNote()

}

function deleteNote(){
    const allBtns = document.querySelectorAll('.delete-btn');
    allBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.target.parentElement.parentElement.remove()
        })
    })
}

function editNote() {
    const allBtns = document.querySelectorAll('.edit-btn');
    allBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.target.parentElement.parentElement.innerHTML = `
            <form class="edit-form" action="">
            <input type="text" value=${input.value} placeholder="Edit Your Title" />
            <textarea rows="5" cols="40" value=${textArea.value} placeholder="Your Description"> </textarea>
            <input type="submit" value='Update' />
            </form>
      `
      const editForm = document.querySelector('.edit-form');
      const editInput = document.querySelector('.edit-form input[type="text"]');
      const editTextArea = document.querySelector('.edit-form textarea');
      editForm.addEventListener('submit', (e) => {
          e.preventDefault()
          e.target.parentElement.innerHTML = `
          <h2>${editInput.value}</h2>
          <p>
           ${editTextArea.value}
          </p>
          <div class="buttons">
            <button class="edit-btn">Edit Note</button>
            <button class="delete-btn">Delete Note</button>
          `
        editNote()
        deleteNote()

      })
        })
    })


}