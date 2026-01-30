function countPageFaults(referenceString, frameSize) {
    const frames = [];
    let pageFaults = 0;

    for (let page of referenceString) {
        // If page already in frames, skip
        if (frames.includes(page)) {
            continue;
        }

        // Page fault occurs
        pageFaults++;

        // If frames not full, add page
        if (frames.length < frameSize) {
            frames.push(page);
        } else {
            // Remove oldest page (FIFO) and add new page
            frames.shift();
            frames.push(page);
        }
    }

    return pageFaults;
}

// Example usage
const referenceString = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
const frameSize = 3;

const faults = countPageFaults(referenceString, frameSize);
console.log(`Total Page Faults: ${faults}`);