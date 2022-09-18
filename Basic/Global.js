setTimeout(() => {
    console.log("Hey, this is timeout function")
    clearInterval(int)
}, 3000)

const int = setInterval(() => {
    console.log("This is a repitition")
}, 1000)

console.log(__dirname)
console.log(__filename)