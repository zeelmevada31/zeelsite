var test = document.getElementById('test')
const tackle = document.getElementById('tackle').value = 20
const thunder = document.getElementById('thunder').value = 37
const ember = document.getElementById('ember').value = 40
var atkbtn1 = document.getElementById('atkbtn1')
var atkbtn2 = document.getElementById('atkbtn2')
var health1 = document.getElementById('health1')
var health2 = document.getElementById('health2')
var hp1 = document.getElementById('hp1')
var hp2 = document.getElementById('hp2')
// test area


test.innerHTML = null
// test end

atkbtn2.style.display = "none"
function tacklebtn(bnum) {
    health1.style.animation = null
    health2.style.animation = null
    if (bnum == 1) {
        atkbtn1.style.display = "none"
        atkbtn2.style.display = null
        let min = hp2.innerHTML - tackle
        health2.style.animation = "hpanim 500ms"
        hp2.innerHTML = min
    }
    else if (bnum == 2) {
        atkbtn1.style.display = "none"
        atkbtn2.style.display = null
        let min = hp2.innerHTML - thunder
        health2.style.animation = "hpanim 500ms"
        hp2.innerHTML = min
    }
    else if (bnum == 3) {
        atkbtn2.style.display = "none"
        atkbtn1.style.display = null
        let min = hp1.innerHTML - tackle
        health1.style.animation = "hpanim 500ms"
        hp1.innerHTML = min
    }
    else if (bnum == 4) {
        atkbtn2.style.display = "none"
        atkbtn1.style.display = null
        let min = hp1.innerHTML - ember
        health1.style.animation = "hpanim 500ms"
        hp1.innerHTML = min
    }
    if(hp2.innerHTML <= 0){
        window.location.href = "winnerpkc.html"
    }
    if(hp1.innerHTML <= 0){
        window.location.href = "winnercmd.html"
    }
}

