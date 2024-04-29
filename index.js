function multiplication(num1, num2){
    return num1 * num2;
}

function concatOdds(arr1, arr2) {
    const oddNumbers = new Set();
    arr1.concat(arr2).forEach(num => {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw new Error("Please Provide Array.");
        }
        if (num % 2 !== 0) {
            oddNumbers.add(num);
        }
    });
    return Array.from(oddNumbers).sort((a, b) => a - b);
}

module.exports = { multiplication, concatOdds };