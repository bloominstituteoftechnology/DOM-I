# DOM I - JavaScript Content Management System

## Project Description

You are going to be emulating a content management system by controlling the content in the JavaScript file instead of the HTML file. This project is an exercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

Compare `index.html` against `original.html` and notice how `index.html` is lacking text content and other things. The goal is to make the page look the same as `original.html` using JavaScript.

You have been provided a [JSON object](js/index.js) with all the necessary data to accomplish this task.  Use dot or bracket notation to traverse the data provided.

**ONE RULE: You cannot update the HTML or CSS files directly.  You must use JavaScript and the DOM only for your tasks today.**

## Instructions

### Task 1: Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

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

### Task 3: Stretch

* [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

#### Stretch Project: Digital Timer

This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.

## Submission Format

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**


<!-- 
// let topSection = document.querySelectorAll('.top-content .text-content')

// let top1 = topSection[0].children;
// let top2 = topSection[1].children;

// let featureHead = top1[0].textContent = (siteContent['main-content']['features-h4'])

// let featureDesc = top1[1].textContent = (siteContent['main-content']['features-content'])

// let aboutHead = top2[0].textContent = (siteContent['main-content']['about-h4'])
// let aboutDesc = top2[1].textContent = (siteContent['main-content']['about-content'])

let middlePic = document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src']

// let bottomSection = document.querySelectorAll('.bottom-content .text-content')

// let bottom1 = bottomSection[0].children
// let bottom2 = bottomSection[1].children
// let bottom3 = bottomSection[2].children

// let servicesHead = bottom1[0].textContent = (siteContent['main-content']['services-h4'])
// let servicesDesc = bottom1[1].textContent = (siteContent['main-content']['services-content'])

// let productHead = bottom2[0].textContent = (siteContent['main-content']['product-h4'])
// let productDesc = bottom2[1].textContent = (siteContent['main-content']['product-content'])

// let visionHead = bottom3[0].textContent = (siteContent['main-content']['vision-h4'])
// let visionDesc = bottom3[1].textContent = (siteContent['main-content']['vision-content'])

// let contactHead = document.querySelector('.contact h4').textContent = (siteContent['contact']['contact-h4'])

// let contactParas = document.querySelectorAll('.contact p')
// let contactAddress = contactParas[0].textContent = (siteContent['contact']['address'])
// let contactNumb = contactParas[1].textContent = (siteContent['contact']['phone'])
// let contactMail = contactParas[2].textContent = (siteContent['contact']['email'])

// let footer = document.querySelector('footer p').textContent = (siteContent['footer']['copyright'])

// let nav = document.querySelector('nav');
// function addNav(linkName) {
//   let newLink = document.createElement('a')
//   newLink.textContent = (linkName)
//   nav.appendChild(newLink)
// }

// addNav('Hello')
// addNav('New')


// navItems.forEach(item => {
//   item.style.color = "green"
// }) -->