# DOM I

## Project Description

You are going to be emulating a content management system by controlling the content in the JavaScript file instead of the HTML file. This project is an exercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

Compare `src/index.html` against `src/original.html` and notice how `index.html` is lacking text content and other things. The goal is to make the page look the same as `original.html` using JavaScript. You can find a screenshot of the goal in `design-files/desktop-example.png`.

Inside `src/index.js` there is declared an object literal containing all the data needed to make the page look like the screenshot. Do not change this object! Below the declaration you should perform your DOM manipulations. Typically you would select an element and then use the data inside the object to add text content to it, or to change its attributes. Access the data using dot or square-bracket notation.

**THE MOST IMPORTANT RULE: You cannot update the HTML file directly. You must use JavaScript alone.**

## Git Setup

* [X] Create a forked copy of this project.
* [X] Clone your OWN version of the repository.
* [ ] Push commits: `git push origin main`.

## Running the project

* [X] Run `npm install` to download the project's dependencies.
* [X] Run `npm start` to launch the page on `http://localhost:3000`.
* [X] Run `npm test` to execute auto tests against your work (you'll need a new terminal window).

## MVP

### Create selectors to access the relevant elements

* [X] Declare variables pointing to the relevant DOM elements, using any of the selectors you have learned.

### Add text contents

* [X] Using your selectors, update the text contents of the relevant elements, matching the design file.
* [X] Find the correct texts for the elements inside the data object in `src/index.js`.

### Add class names

* [X] Give the anchor tags _inside the nav_ an italic style by adding the classname `italic` to them alone.
* [X] Give the anchor tag _inside the footer_ a bolder appearence by adding the classname `bold` to it alone.

### Add image sources

* [X] Make the img tags on the page display the correct images by editing their `src` attribute.
* [X] Find the correct URLs for the images inside the data object in `src/index.js`.

## Submission Format

* [X] Submit a link to your github repo in canvas.
