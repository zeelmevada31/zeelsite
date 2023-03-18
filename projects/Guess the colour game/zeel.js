var in1 = document.getElementById('in1')
var btn = document.getElementById('btn')
var txt = document.getElementById('txt')
var ref = document.getElementById('ref')

ref.addEventListener('click',regen)

function regen(){
    var color = document.getElementById('color')
    let clrarr = ["Blue","Red","Grey","Yellow","Green","White","Cyan","Pink","Brown","Greenyellow"]
    let rgb1 = Math.floor(Math.random()*clrarr.length)
    let clr = clrarr[rgb1]

    color.style.background = clr
}

btn.addEventListener('click',()=>{
    var color = document.getElementById('color')
    if(in1.value == color.style.background){
        txt.innerHTML = `Excellent!!! <br> You guessed - ${color.style.background}`
    }
    else{
        txt.innerHTML = `Try Again <br> Expeted guess - ${color.style.background}`
    }
    regen()
})