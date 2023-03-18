var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var tx = document.getElementById('t1')

let arrTic = ["X", "O"]

let flag = 1

a1.addEventListener('click', () => {
    if (flag == 1) {
        a1.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        a1.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();

})
a2.addEventListener('click', () => {
    if (flag == 1) {
        a2.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        a2.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
a3.addEventListener('click', () => {
    if (flag == 1) {
        a3.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        a3.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
b1.addEventListener('click', () => {
    if (flag == 1) {
        b1.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        b1.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
b2.addEventListener('click', () => {
    if (flag == 1) {
        b2.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        b2.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
b3.addEventListener('click', () => {
    if (flag == 1) {
        b3.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        b3.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
c1.addEventListener('click', () => {
    if (flag == 1) {
        c1.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        c1.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
c2.addEventListener('click', () => {
    if (flag == 1) {
        c2.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        c2.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})
c3.addEventListener('click', () => {
    if (flag == 1) {
        c3.innerHTML = arrTic[0]
        tx.innerHTML = "Player O turn"
        flag = 0
    }
    else {
        c3.innerHTML = arrTic[1]
        tx.innerHTML = "Player X turn"
        flag = 1
    }

    result();
})

function reset() {
    a1.innerHTML = "&nbsp;"

    a2.innerHTML = "&nbsp;"

    a3.innerHTML = "&nbsp;"

    b1.innerHTML = "&nbsp;"

    b2.innerHTML = "&nbsp;"

    b3.innerHTML = "&nbsp;"

    c1.innerHTML = "&nbsp;"

    c2.innerHTML = "&nbsp;"

    c3.innerHTML = "&nbsp;"


    a1.style.background = "transparent"

    a2.style.background = "transparent"

    a3.style.background = "transparent"

    b1.style.background = "transparent"

    b2.style.background = "transparent"

    b3.style.background = "transparent"

    c1.style.background = "transparent"

    c2.style.background = "transparent"

    c3.style.background = "transparent"
}

function result() {
    if (a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML && a2.innerHTML == a3.innerHTML) {
        if (a1.innerHTML == arrTic[0] && a2.innerHTML == arrTic[0] && a3.innerHTML == arrTic[0]) {
            a1.style.background = "grey"
            a2.style.background = "grey"
            a3.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);

        }
        else if (a1.innerHTML == arrTic[1] && a2.innerHTML == arrTic[1] && a3.innerHTML == arrTic[1]) {
            a1.style.background = "grey"
            a2.style.background = "grey"
            a3.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }
    }
    if (b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && b2.innerHTML == b3.innerHTML) {
        if (b1.innerHTML == arrTic[0] && b2.innerHTML == arrTic[0] && b3.innerHTML == arrTic[0]) {
            b1.style.background = "grey"
            b2.style.background = "grey"
            b3.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (b1.innerHTML == arrTic[1] && b2.innerHTML == arrTic[1] && b3.innerHTML == arrTic[1]) {
            b1.style.background = "grey"
            b2.style.background = "grey"
            b3.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }
    }
    if (c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML && c2.innerHTML == c3.innerHTML) {
        if (c1.innerHTML == arrTic[0] && c2.innerHTML == arrTic[0] && c3.innerHTML == arrTic[0]) {
            c1.style.background = "grey"
            c2.style.background = "grey"
            c3.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (c1.innerHTML == arrTic[1] && c2.innerHTML == arrTic[1] && c3.innerHTML == arrTic[1]) {
            c1.style.background = "grey"
            c2.style.background = "grey"
            c3.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }

    }
    if (a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML && b1.innerHTML == c1.innerHTML) {
        if (a1.innerHTML == arrTic[0] && b1.innerHTML == arrTic[0] && c1.innerHTML == arrTic[0]) {
            a1.style.background = "grey"
            b1.style.background = "grey"
            c1.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (a1.innerHTML == arrTic[1] && b1.innerHTML == arrTic[1] && c1.innerHTML == arrTic[1]) {
            a1.style.background = "grey"
            b1.style.background = "grey"
            c1.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }

    }
    if (a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML && b2.innerHTML == c3.innerHTML) {
        if (a1.innerHTML == arrTic[0] && b2.innerHTML == arrTic[0] && c3.innerHTML == arrTic[0]) {
            a1.style.background = "grey"
            b2.style.background = "grey"
            c3.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (a1.innerHTML == arrTic[1] && b2.innerHTML == arrTic[1] && c3.innerHTML == arrTic[1]) {
            a1.style.background = "grey"
            b2.style.background = "grey"
            c3.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }

    }
    if (a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML && b3.innerHTML == c3.innerHTML) {
        if (a3.innerHTML == arrTic[0] && b3.innerHTML == arrTic[0] && c3.innerHTML == arrTic[0]) {
            a3.style.background = "grey"
            b3.style.background = "grey"
            c3.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (a3.innerHTML == arrTic[1] && b3.innerHTML == arrTic[1] && c3.innerHTML == arrTic[1]) {
            a3.style.background = "grey"
            b3.style.background = "grey"
            c3.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }

    }
    if (a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML && b2.innerHTML == c2.innerHTML) {
        if (a2.innerHTML == arrTic[0] && b2.innerHTML == arrTic[0] && c2.innerHTML == arrTic[0]) {
            a2.style.background = "grey"
            b2.style.background = "grey"
            c2.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (a2.innerHTML == arrTic[1] && b2.innerHTML == arrTic[1] && c2.innerHTML == arrTic[1]) {
            a2.style.background = "grey"
            b2.style.background = "grey"
            c2.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }

    }
    if (a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML && b2.innerHTML == c1.innerHTML) {
        if (a3.innerHTML == arrTic[0] && b2.innerHTML == arrTic[0] && c1.innerHTML == arrTic[0]) {
            a3.style.background = "grey"
            b2.style.background = "grey"
            c1.style.background = "grey"
            setTimeout(() => {
                alert("X win")
                reset();
            }, 300);
        }
        else if (a3.innerHTML == arrTic[1] && b2.innerHTML == arrTic[1] && c1.innerHTML == arrTic[1]) {
            a3.style.background = "grey"
            b2.style.background = "grey"
            c1.style.background = "grey"
            setTimeout(() => {
                alert("O win")
                reset();
            }, 300);
        }

    }
}



