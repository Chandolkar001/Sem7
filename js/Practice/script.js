function triangle() {
    let side1 = parseFloat(document.getElementById("s1").value)
    let side2 = parseFloat(document.getElementById("s2").value)
    let side3 = parseFloat(document.getElementById("s3").value)
    let trires = document.getElementById("tri-res")
        if (side1 > 0 && side2 > 0 && side3 > 0){
            if (side1 + side2 > side3 && side1 + side3 > side2 && side3 + side2 > side1){
                let s = (side1 + side2 + side3)/2
                let area = Math.sqrt(s*((s - side1) * (s - side2) * (s - side3)))
                trires.innerHTML = area.toFixed(2)
            }
            else{
                trires.innerHTML = "sides are invalid!"
            }
        }
        else{
                trires.innerHTML = "sides are invalid!"
        }
        
    }

function circle() {
    let radius = parseFloat(document.getElementById("r").value)
    let cirres = document.getElementById("cir-res")
        
}

function rectangle() {
    let len = parseFloat(document.getElementById("l").value)
    let bth = parseFloat(document.getElementById("b").value)
    let recres = document.getElementById("rec-res")
        
}

function generateT() {
        let num = parseFloat(document.getElementById("num").value)
        
        // for loop
        let table = `<table border=1>`
        for(let i = 1; i<11; i++){
            table += `<tr>`
            table += `<td>${num * i}</td>`
            table += `</tr>`
            table += `</table>`
            document.getElementById("fort").innerHTML = table
        }
}

function string_manu() {
    var str1 = String(document.getElementById("str1").value)
    var char1 = document.getElementById("char1").value
    var char2 = document.getElementById("char2").value

    var result = str1.split("").reverse().join("");
    if (result === str1){
        var pali = "is palindrome"
    }
    else{
        pali = "not a palindrome"
    }

    var repl = str1.replace(char1, char2)

    document.getElementById("result").innerHTML = result + " " + pali + " " + repl
}

function two_strings(){
    var str1 = String(document.getElementById("str1").value)
    var str2 = String(document.getElementById("str2").value)

    // standard methods
    if (str1 === str2){
        var res1 = "Equal"
    }
    else{
        res1 = "not equal"
    }

    if (str1.length === str2.length){
        var res2 = "Equal"   
    }
    else{
        res2 = "Equal"

    }
    // non standard methods
    var str1_arr = Array()
    var str2_arr = Array()

    for (let i = 0; i < str1.length; i++){
        str1_arr.push(str1.charCodeAt(i))
    }

    for (let i = 0; i < str2.length; i++){
        str2_arr.push(str2.charCodeAt(i))
    }
    // check if str1_arr equal to str2_arr

    document.getElementById("result").innerHTML = res1 + " " + res2
}

function timer(){
    var newdate = new Date(document.getElementById("datetime").value).getTime()

    function update(){
        const curr = Date.now()
        const diff  = newdate - curr

        if (diff <= 0){
            document.getElementById("result").innerHTML = "Timers Up"
            clearInterval(timerInterval)
            return
        }

        const d = Math.floor(diff/ (1000 * 60 * 60 * 24))
        const h = Math.floor(diff/(1000 * 60 * 60))
        const m = Math.floor(diff/(1000*60))
        const s = Math.floor(diff/(1000))

        document.getElementById("result").innerHTML = d + " " + h + " " + m + " " + s 
    }

    const timerInterval = setInterval(update, 1000);
}

function arrayOps() {
    var arr = new Array()

    var arr1 = document.getElementById("arr1").value
    var ele1 = document.getElementById("ele1").value
    var ele2 = document.getElementById("ele2").value

    arr = arr1.split(',')
    delete arr[ele1]

    var res = arr.indexOf(ele2)
    
}

var myArr = Array()

function addArray(){
 let inputValue = document.getElementById("ele").value;
 let inputArray = inputValue.split(',');
 inputArray = inputArray.map(Number);

 if (inputArray.length > 1){
    myArr.push(inputArray)
 }
 else{
    myArr.push(inputArray[0])
 }

 document.getElementById("dispArray").innerHTML = myArr
}

function checkArr(){
    var ele = document.getElementById("check").value
    console.log(myArr)
    if (Array.isArray(myArr[ele])){
        document.getElementById("verdict").innerHTML = "Its Array"
    }
    else{
        document.getElementById("verdict").innerHTML = "Its a single element"
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("clk").addEventListener("click", ()=> {
        document.body.style.backgroundColor = "red"
    })
    
    document.getElementById("onmouse").addEventListener("mouseover", ()=>{
        document.body.style.backgroundColor = "blue"
    })
})

