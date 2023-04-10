function switchTheme(){
    if (btn.innerHTML === "Dark Mode") {
        btn.innerHTML = "Light Mode";
        btn.classList.remove('darkBtn')
    }else{
        btn.innerHTML = "Dark Mode";
        btn.classList.add('darkBtn')
    }
    let body = document.querySelector('body')
    body.classList.toggle('darkmode')
    let btnD = document.querySelectorAll('.btn')
    for(let btns of btnD){
        btns.classList.toggle('darkBtn')
    }
    let a = document.querySelector('a')
    a.classList.toggle('aDark')
}


let btn = document.querySelector('.btn')
btn.addEventListener('click', switchTheme)