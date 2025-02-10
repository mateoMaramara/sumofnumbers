//for loop
function sumFor(nums: number[]): number {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;

} 

//while loop
function sumWhile(nums: number[]): number {
    let total = 0;
    let i = 0;
    while (i < nums.length) {
        total += nums[i];
        i++;
    }
    return total;

}

//recursion
function sumRecursion(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
    
}

//array functional programming
function sumTheFunctionalWay(nums: number[]): number {
    return nums.reduce((total, num) => total + num, 0);
    
}
//Output statements
console.log(sumFor([1, 2, 3, 4]));//output 10
console.log(sumWhile([1, 2, 3, 4]));//output 10
console.log(sumRecursion([1, 2, 3, 4]));//output 10
console.log(sumTheFunctionalWay([1, 2, 3, 4]));//output 10

