function checkMajority(givenArr){
    
    for (let i of givenArr){
        let count=0
        for(let j of givenArr){
            if(i===j){
                count+=1
            }
        }
        if(count>(givenArr.length/2)){
            return i
        }
    }
    return "No Majority Elements"
}
let givenArr=[3, 3, 4, 2, 4, 4, 2, 4]
console.log(checkMajority(givenArr))