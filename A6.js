function secondLargest(n) {
    n.sort((a,b)=>(b-a))
    return n[1]
}

console.log(secondLargest([2, 2, 4, 6, 8, 9, 4]))

