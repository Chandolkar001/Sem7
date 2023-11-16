const num = process.argv[2]

if (!num || isNaN(num) || num <= 0){
    console.log("Please provide valid number")
}
else{
    console.log(`Multiplication table for ${num}: \n`)
    for (let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}