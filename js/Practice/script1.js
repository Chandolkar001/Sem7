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
