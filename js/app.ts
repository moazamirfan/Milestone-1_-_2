const hide_skills = document.getElementById('hide_skills') as HTMLButtonElement
const my_skills = document.getElementById('skills') as HTMLElement
    hide_skills.addEventListener('click', () =>{
    if(my_skills.style.display === 'none'){
        my_skills.style.display ='block'

    }
    else{
        my_skills.style.display ='none'
    }
})