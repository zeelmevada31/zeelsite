const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')
const c3 = document.getElementById('c3')
const c4 = document.getElementById('c4')
const c5 = document.getElementById('c5')
const c6 = document.getElementById('c6')
const c7 = document.getElementById('c7')
const c8 = document.getElementById('c8')
const c9 = document.getElementById('c9')
const c0 = document.getElementById('c0')
const cplus = document.getElementById('cplus')
const csub = document.getElementById('csub')
const cmult = document.getElementById('cmult')
const cdiv = document.getElementById('cdiv')
const brac1 = document.getElementById('brac1')
const brac2 = document.getElementById('brac2')
const result = document.getElementById('c=')
const allclear = document.getElementById('allclear')
const clear = document.getElementById('clear')
const display = document.getElementById('display')
const blurdisplay = document.getElementById('blurdisplay')

c1.addEventListener('click', () => {
    c1.value = "1"
    if (display.value == "0") {
        display.value = c1.value
    }
    else {
        display.value += c1.value
    }
    blurop()
})
c2.addEventListener('click', () => {
    c2.value = "2"
    if (display.value == "0") {
        display.value = c2.value
    }
    else {
        display.value += c2.value
    }
    blurop()
})
c3.addEventListener('click', () => {
    c3.value = "3"
    if (display.value == "0") {
        display.value = c3.value
    }
    else {
        display.value += c3.value
    }
    blurop()
})
c4.addEventListener('click', () => {
    c4.value = "4"
    if (display.value == "0") {
        display.value = c4.value
    }
    else {
        display.value += c4.value
    }
    blurop()
})
c5.addEventListener('click', () => {
    c5.value = "5"
    if (display.value == "0") {
        display.value = c5.value
    }
    else {
        display.value += c5.value
    }
    blurop()
})
c6.addEventListener('click', () => {
    c6.value = "6"
    if (display.value == "0") {
        display.value = c6.value
    }
    else {
        display.value += c6.value
    }
    blurop()
})
c7.addEventListener('click', () => {
    c7.value = "7"
    if (display.value == "0") {
        display.value = c7.value
    }
    else {
        display.value += c7.value
    }
    blurop()
})
c8.addEventListener('click', () => {
    c8.value = "8"
    if (display.value == "0") {
        display.value = c8.value
    }
    else {
        display.value += c8.value
    }
    blurop()
})
c9.addEventListener('click', () => {
    c9.value = "9"
    if (display.value == "0") {
        display.value = c9.value
    }
    else {
        display.value += c9.value
    }
    blurop()
})
c0.addEventListener('click', () => {
    c0.value = "0"
    if (display.value == "0") {
        display.value = c0.value
    }
    else {
        display.value += c0.value
    }
    blurop()
})
cplus.addEventListener('click', () => {
    cplus.value = "+"
    display.value += cplus.value
    blurop()
})
csub.addEventListener('click', () => {
    csub.value = "-"
    display.value += csub.value
    blurop()
})
cmult.addEventListener('click', () => {
    cmult.value = "*"
    display.value += cmult.value
    blurop()
})
cdiv.addEventListener('click', () => {
    cdiv.value = "/"
    display.value += cdiv.value
    blurop()
})
brac1.addEventListener('click', () => {
    brac1.value = "("
    display.value += brac1.value
    blurop()
})
brac2.addEventListener('click', () => {
    brac2.value = ")"
    display.value += brac2.value
    blurop()
})

result.addEventListener('click', () => {
    var dis = display.value
    var op = eval(dis)

    display.value = op
    upboi()
})

allclear.addEventListener('click', () => {
    display.value = "0"
    blurop()
})

clear.addEventListener('click', () => {
    if (display.value != "0") {
        let lastcharcl = display.value.slice(0, -1)
        display.value = lastcharcl
        blurop()
    }
})

function blurop() {
    var dis = display.value
    var op = eval(dis)
    if (dis.includes("+") || dis.includes("-") || dis.includes("*") || dis.includes("/")) {
        let lastchar = display.value.slice(-1)
        if (lastchar == "+" || lastchar == "-" || lastchar == "*" || lastchar == "/") {
            let last = display.value.slice(0, -1)
            let evalop = eval(last)
            blurdisplay.value = evalop
        }
        else {
            blurdisplay.value = op

        }
    }
    

}

function upboi() {
    display.value = " "
    blurdisplay.classList.add('d2d1')

    setTimeout(() => {
        display.value = blurdisplay.value
        blurdisplay.value = " "

        blurdisplay.classList.remove('d2d1')
    }, 200);
    setTimeout(() => {
        blurdisplay.value = "0"
    }, 250);
}

// testing
//>>>>>>>>.....


