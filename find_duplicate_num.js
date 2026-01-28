// Function to find duplicate integers in an array
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

// Example usage
console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5])); // Output: [2, 1]
console.log(findDuplicates([1, 2, 3, 4, 5]));       // Output: []
console.log(findDuplicates([7, 7, 7, 1, 1]));       // Output: [7, 1]