var add = document.getElementById('add');



add.addEventListener('click', () => {
    console.log("Updating....")
    var task = document.getElementById('in1').value;
    var desc = document.getElementById('in2').value;

    if (localStorage.getItem('TI') == null) {
        let array = []
        array.push([task, desc]);
        localStorage.setItem('TI', JSON.stringify(array))
    }
    else {
        let array = localStorage.getItem('TI');
        let arraystr = JSON.parse(array);
        arraystr.push([task, desc]);
        localStorage.setItem('TI', JSON.stringify(arraystr));

    }
    upd();
})
function upd() {

    if (localStorage.getItem('TI') == null) {
        let array = []
        localStorage.setItem('TI', JSON.stringify(array))
    }
    else {
        let array = localStorage.getItem('TI');
        let arraystr = JSON.parse(array);
        localStorage.setItem('TI', JSON.stringify(arraystr));

    }

    let tbl = document.getElementById('tbd');
    arr1 = localStorage.getItem('TI');
    arr2 = JSON.parse(arr1);
    let txt = ""


    arr2.forEach((element, index) => {
        txt += `
        <tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn" onclick="del(${index})">Delete</button></td>
                </tr>
        `
    });
    tbl.innerHTML = txt;
}
function del(mytask) {
    arr = localStorage.getItem('TI')
    arr2 = JSON.parse(arr)

    arr2.splice(mytask, 1)
    console.log("Done")
    localStorage.setItem("TI", JSON.stringify(arr2))
    upd();

}

function res() {
    confirm("Are you sure?")
    localStorage.clear()
    upd();
}
upd();
