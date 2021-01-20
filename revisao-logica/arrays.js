const arr = new Array()
const arr2 = new Array(true, "Daniel", 28, new Array(2,3,10))
arr[0] = "Samuel"
arr[1] = 1
console.log(arr)
console.log(arr2[3][arr2[3].length - 1])

//sintaxe literal

const arr3 = ["Daniel", 40,[3,6,19], true];
arr3[4] = "N1"
arr3[arr3.length] = "N2"
arr3.push("push")
arr3.push("a", 45)

console.log(arr3)
console.log(arr3[3])
console.log(arr3[2][2])

let n = 6
console.log(arr3[n])