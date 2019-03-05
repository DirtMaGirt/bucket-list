# Bucket List

### What're we doing?
What is your project for today? You'll be making an extremely simple todo app, where you're not checking things done so much as removing them from the list, and where you can only remove and add at the end of the list. (Is that a stack or a queue? Asking for a friend.)

What kind of list do you not check off very often? A bucket list! So this isn't a bad todo app. No! It's a bucket list app.

Remember: it's not a bug, it's a feature.


### Okay, But How?
We'll be working with input fields again, but this time, we'll have a 'submit' button. You still won't have to worry about the `document.querySelector`s. We got you.

The user will type in a bucket list item, and hit submit, and the "fancy" code we provided will add that text in an `li` to our `ul`. But _you_ will have to keep track of that list somehow (we highly recommend a globally-declared array!), because you'll also have to print out:

1. The item they most recently added.
2. The item at the top of their bucket list.
3. The number of items on the bucket list.

It should be obvious from the commented scaffolded code where to put YOUR code, but if there are any questions, let us know!

### Requirement(s)
1. I want to see no `let`s unless you actually need them. Let's start defaulting to `const`, party people!

### Layout 

We want to see one mobile layout and one tablet-and-up layout (where the window is greater than 720 pixels).

### Stretch Goals

* You can actually toggle the `isStack` variable in a mere 19 characters (or less if you want to write hard-to-read and potentially dangerous code without spaces or semi-colons).

* See that Queue/Stack button? It sets a global variable of `isStack` to true or false. Based on whether we're currently in 'queue mode' or 'stack mode', change the behavior of `removeItem()` accordingly.  When you remove something from the top of a bucket list, it's probably because you completed it, not thought better of adding it, so it should be added to the `completed-item` div. (You might have to dive into the `document.querySelector` swamp for this one!)

* As the code is currently configured, we only update the newest item, top item, and number of items when we _add_ an item. Can you copy that display code to wherever you're removing items? You can! You shouldn't have to change anything in the `document.querySelector`s, but what to change the three things to will be a little trickier.