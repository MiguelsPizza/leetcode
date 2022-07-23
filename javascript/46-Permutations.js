/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const rec = (arr =[], newNums = nums) => {
        if(!newNums.length) result.push(arr)     //push the permutations array into the result array once it has reached a full permutation
        
        for(let i = 0; i < newNums.length; i++){
            const temp = [...newNums]             //creat a copy of the array to mutate
            temp.splice(i, 1)                     //remove the element you are adding to the permutation array
            rec([...arr, newNums[i]], temp)       //call the recusive function on the updated permutation array and reduced numbers array
        }
    }
    
    rec() 
    return result
};
