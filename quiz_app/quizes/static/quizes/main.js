console.log("hello quiz app")

const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startbtn = document.getElementById('start-button')

const url = window.location.href

modalBtns.forEach(modalBtn=>modalBtn.addEventListener('click', ()=>{
    const pk = modalBtn.getAttribute('data-pk')
    const name = modalBtn.getAttribute('data-quiz')
    const number_of_questions = modalBtn.getAttribute('data-questions')
    const difficulty = modalBtn.getAttribute('data-difficulty')
    const time = modalBtn.getAttribute('data-time')
    const required_score_to_pass = modalBtn.getAttribute('data-pass')

    modalBody.innerHTML = `
        <div class="h5 mb-3">Are you sure you want to begin "<b>${name}</b>"?</div>
        <div class="text-muted">
            <ul>
                <li>difficulty: <b>${difficulty}</b></li>
                <li>number_of_questions: <b>${number_of_questions}</b></li>
                <li>time: <b>${time} min</b></li>
                <li>required_score_to_pass: <b>${required_score_to_pass}%</b></li>
            </ul>
        </div>
    `

    startbtn.addEventListener('click', ()=>{
        window.location.href = url + pk
    })
    
}))
