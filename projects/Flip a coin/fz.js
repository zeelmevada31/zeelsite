function result() {
    let ht = ["Head", "Tail"];

    let x = Math.floor(Math.random() * ht.length);

    let result = ht[x];

    document.getElementById('coin').style.animation = "";

    if (result == ht[0]) {
        document.getElementById('text').innerHTML = ht[0];
    }
    else {
        document.getElementById('text').innerHTML = ht[1];
    }
}


function spin() {
    document.getElementById('text').innerHTML = "?"
    let coin = document.getElementById('coin');

    coin.style.animation = "ok 1s infinite"
}



let coin = document.getElementById('coin');

// coin.onclick = event => {
//     if (event.detail === 1) {
//         console.log("single click")
//         spin();
//     }
//     else if (event.detail === 2) {
//         console.log("double click")
//         result();
//     }
// }
let x = 1
coin.addEventListener('click',()=>{
    if(x == 1){
        spin();
        x = 0
    }
    else {
        result();
        x = 1
    }
})
