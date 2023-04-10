function switchTheme(){
    console.log(btn.innerHTML)
    if (btn.innerHTML === "Dark Mode") {
        btn.innerHTML = "Light Mode";
    }else{
        btn.innerHTML = "Dark Mode";
}
    let body = document.querySelector('body')
    body.classList.toggle('darkmode')
    let btnD = document.querySelectorAll('.btn')
    console.log(btnD.length)
    for(let btns of btnD){
        btns.classList.toggle('darkBtn')
    }
    let a = document.querySelector('a')
    a.classList.toggle('aDark')
}


let btn = document.querySelector('.darkBtn')
btn.addEventListener('click', switchTheme)