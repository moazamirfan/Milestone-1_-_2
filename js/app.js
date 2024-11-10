var hide_skills = document.getElementById('hide_skills');
var my_skills = document.getElementById('skills');
hide_skills.addEventListener('click', function () {
    if (my_skills.style.display === 'none') {
        my_skills.style.display = 'block';
    }
    else {
        my_skills.style.display = 'none';
    }
});
