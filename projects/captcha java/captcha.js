reg();
var txt;
function reg() {
    txt = document.getElementById('h3');
    x = ""
    let rnd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (i = 1; i <= 5; i++) {
        x += rnd.charAt(
            Math.floor(Math.random() * rnd.length)
        )
        txt.innerHTML = x;
    }

    let obs = ["overline", "line-through", "wavy"];

    let a = Math.floor(Math.random() * obs.length);
    let b = obs[a]

    let deccolor = ["red", "yellow", "purple", "blue", "violet", "teal"]

    let decco = Math.floor(Math.random() * deccolor.length)

    txt.style.textDecoration = b;
    txt.style.textDecorationColor = deccolor[decco]

    let color = ["red", "yellow", "greenyellow", "purple", "cyan", "blue", "violet"];

    let colorrnd = Math.floor(Math.random() * color.length);

    txt.style.color = color[colorrnd]
}
function conf() {
    in1 = document.getElementById('in1').value;

    if (in1 == txt.innerHTML) {
        inclr();
        alert("Captcha done!!!!");
        reg();
    }
    else {
        inclr();
        alert("Captcha error !!! Try again!!!");
        reg();
    }
}
function inclr() {
    if (document.getElementById('in1').value != "") {
        document.getElementById('in1').value = "";

    }
}