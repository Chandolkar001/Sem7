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