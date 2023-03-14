var txt = []
var table = document.getElementById("mytable");
const regex = new RegExp("[a-zA-Z]+\\.?");
function action() {
    var x = document.getElementById("id").value;
    var y = document.getElementById("name").value;
    var z = document.getElementById("price").value;
    var lst = {id:x, name:y, price:z}
    txt.push(lst)
    if (x==="" || y==="" || z===""){
        document.getElementById("error").innerHTML = "Give All 3 Input";
    }
    else if (x<0 || z<0){
        document.getElementById("error").innerHTML = "Id and Price Cannot be negative";
    }
    else{
        if (regex.test(y)==false){
            document.getElementById("error").innerHTML = "Enter characters Only";
        }
        else{
            let row = table.insertRow(-1);
            let c1 = row.insertCell(0)
            let c2 = row.insertCell(1)
            let c3 = row.insertCell(2)
            c1.innerText = x
            c2.innerText = y
            c3.innerText = "USD " + z
            document.getElementById("error").innerHTML = "";
        }
    }
    console.log(txt)
}