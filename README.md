# DOM I

## Project Description

You are going to be emulating a content management system by controlling the content in the JavaScript file instead of the HTML file. This project is an exercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

Compare `src/index.html` against `src/original.html` and notice how `index.html` is lacking text content and other things. The goal is to make the page look the same as `original.html` using JavaScript. You can find a screenshot of the goal in `src/design-files/desktop-example.png`.

Inside `src/index.js` there is declared an object literal containing all the data needed to make the page look like the screenshot. Do not change this object! Below the declaration you should perform your DOM manipulations. Typically you would select an element and then use the data inside the object to add text content to it, or to change its attributes. Access the data using dot or square-bracket notation.

**THE MOST IMPORTANT RULE: You cannot update the HTML file directly. You must use JavaScript alone.**

## Git Setup

* [x] Create a forked copy of this project.
* [x] Clone your OWN version of the repository.
* [x] Create a new branch: `git checkout -b <firstName-lastName>`.
* [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [x] Push commits: `git push origin <firstName-lastName>`.

## Running the project

* [x] Run `npm install` to download the project's dependencies.
* [x] Run `npm start` to launch the page on `http://localhost:3000`.
* [x] Run `npm test` to execute auto tests against your work (you'll need a new terminal window).

## MVP

### Create selectors to access the relevant elements

* [ ] Declare variables pointing to the relevant DOM elements, using any of the selectors you have learned.

### Add text contents

* [ ] Using your selectors, update the text contents of the relevant elements, matching the design file.
* [ ] Find the correct texts for the elements inside the data object in `src/index.js`.

### Add class names

* [ ] Give the anchor tags _inside the nav_ an italic style by adding the classname `italic` to them alone.
* [ ] Give the anchor tag _inside the footer_ a bolder appearence by adding the classname `bold` to it alone.

### Add image sources

* [ ] Make the img tags on the page display the correct images by editing their `src` attribute.
* [ ] Find the correct URLs for the images inside the data object in `src/index.js`.

## Submission Format

* [ ] Submit a pull request to merge `<firstName-lastName>` Branch into `main`.
