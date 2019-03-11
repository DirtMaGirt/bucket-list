// Global variables ftw
const bucketListArr = [];
const completedListArr = [];
let isStack = false;

// Set init to run when the window loads.
window.onload = init;

function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
        .addEventListener('click', toggleQueueAndStack);
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()

    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;
    bucketListArr.push(newItem)
    console.log(bucketListArr);

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    displayItem(newItem);

    // Now comes your part: add the item to the list.

    // Display it in next-item if it's the first item:
    if (true) { // definitely change that condition!
        document.querySelector('#newest-item').innerText = newItem; // Replace that empty string with the actual item!
    }

    document.querySelector('#top-item').innerText = bucketListArr[0] // Replace that empty string with the actual item!

    document.querySelector('#number-of-items').innerText = bucketListArr.length; // Replace that with the number of items!
}

function removeItem(event) {
    // Prevent page reload.
    event.preventDefault();

    if (isStack === true) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        const completedBucketItem = bucketListArr.shift();
        completedListArr.push(completedBucketItem);

        console.log(completedListArr);

        console.log(bucketListArr);

        document.querySelector('#number-of-items').innerText = bucketListArr.length;
        document.querySelector('#top-item').innerText = bucketListArr[0]


    } else {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!

        const completedBucketItem = bucketListArr.pop();
        completedListArr.push(completedBucketItem);

        console.log(completedListArr);
        console.log(bucketListArr);

        document.querySelector('#number-of-items').innerText = bucketListArr.length;
        document.querySelector('#top-item').innerText = bucketListArr[0]

    }
}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault();

    // When we're currently in "stack mode", let's have it show "Toggle to Queue" as the button.
    // Put this code wherever you know you're in stack mode!
    document.querySelector('#toggle').innerText = 'Toggle to Queue';

    // When we're currently in "queue mode", let's have it show "Toggle to Stack" as the button.
    // Put this code wherever you know you're in queue mode!
    document.querySelector('#toggle').innerText = 'Toggle to Stack';

    // How can we toggle whether it's a stack or a queue?
    // Your code below!
}

/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    firstItem.parentNode.removeChild(firstItem);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}