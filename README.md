# DOM I - JavaScript Content Management System

## Project Description

You are going to be emulating a content management system by controlling the content in the JavaScript file instead of the HTML file. This project is an exercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

Compare `index.html` against `original.html` and notice how `index.html` is lacking text content and other things. The goal is to make the page look the same as `original.html` using JavaScript.

You have been provided a [JSON object](js/index.js) with all the necessary data to accomplish this task.  Use dot or bracket notation to traverse the data provided.

**ONE RULE: You cannot update the HTML or CSS files directly.  You must use JavaScript and the DOM only for your tasks today.**

## Instructions

### Task 1: Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [X] Create a forked copy of this project.
* [X] Add your project manager as collaborator on Github.
* [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [X] Create a new branch: git checkout -b `<firstName-lastName>`.
* [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [X] Push commits: git push origin `<firstName-lastName>`.

### Task 2a: MVP

#### Create selectors to point your data into elements

* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images. Use the IDs to update src path content

#### Update the HTML with the JSON data

* [ ] Remember, NO direct updating of the HTML source is allowed.
* [ ] Using your selectors, update the content to match the example file.
* [ ] Remember to update the src attributes on images

#### Add new content

* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser

### Task 2b: Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/wDZyexzhgBwvRbtMb/zghxQdQtGENfLc).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3: Stretch 

* [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

#### Stretch Project: Digital Timer

This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.

## Submission Format

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
* [ ] Add your project manager as a reviewer on the pull-request
* [ ] Your project manager will count the project as complete by merging the branch back into `main` branch.
