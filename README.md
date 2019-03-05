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

### Layout 

We want to see one mobile layout and one tablet-and-up layout (where the window is greater than 720 pixels).

### Stretch Goals

* See that Queue/Stack button? It sets a global variable of `isStack` to true or false. Based on whether we're doing a queue or a stack, change the `li` adding code and your code for managing your data.  Then, when we remove something this way, print out that that item has been completed. We can only complete things from the front of the list that way, but... if it was first on the list,  you obviously thought it was the most important thing to put on your bucket list! ("It's not a bug"...)