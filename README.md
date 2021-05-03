# DOM I - JavaScript Content Management System

[![Netlify Status](https://api.netlify.com/api/v1/badges/957bf203-b279-4702-a1ca-ac043a9c871a/deploy-status)](https://app.netlify.com/sites/lambdadom1/deploys)


### [DEPLOYMENT](https://lambdadom1.netlify.app/)


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






### Code:


```js
const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
const nav = document.querySelector( 'nav' );
const navItem = nav.querySelectorAll( 'a' );
let logo = document.getElementById( "logo-img" );
const ctaImg = document.getElementById( 'cta-img' );
const middleImg = document.getElementById( 'middle-img' );
const title = document.getElementsByTagName( 'h1' )[ 0 ];
const main = document.querySelector( '.main-content' );
const mainItem = main.querySelectorAll( 'h4' );
const mainContent = main.querySelectorAll( 'p' );
const button = document.getElementsByTagName( 'button' )[ 0 ];
const img = document.getElementById( 'cta-img' );
const contact = document.querySelector( '.contact' );
const contactTitle = contact.querySelector( 'h4' );
const contactContent = contact.querySelectorAll( 'p' );
const footer = document.querySelector( 'footer' );
const copyright = footer.querySelector( 'p' );


logo.setAttribute( 'src', siteContent[ "nav" ][ "img-src" ] )
ctaImg.setAttribute( 'src', siteContent[ 'cta' ][ 'img-src' ] );
middleImg.setAttribute( 'src', siteContent[ 'main-content' ][ 'middle-img-src' ] );
navItem[ 0 ].textContent = siteContent[ 'nav' ][ 'nav-item-1' ];
navItem[ 1 ].textContent = siteContent[ 'nav' ][ 'nav-item-2' ];
navItem[ 2 ].textContent = siteContent[ 'nav' ][ 'nav-item-3' ];
navItem[ 3 ].textContent = siteContent[ 'nav' ][ 'nav-item-4' ];
navItem[ 4 ].textContent = siteContent[ 'nav' ][ 'nav-item-5' ];
navItem[ 5 ].textContent = siteContent[ 'nav' ][ 'nav-item-6' ];
title.innerHTML = siteContent[ "cta" ][ "h1" ].split( ' ' ).join( '<br>' );
img.src = siteContent[ "cta" ][ "img-src" ];
button.innerText = siteContent[ "cta" ][ "button" ];
mainItem[ 0 ].textContent = siteContent[ 'main-content' ][ 'features-h4' ];
mainItem[ 1 ].textContent = siteContent[ 'main-content' ][ 'about-h4' ];
mainItem[ 2 ].textContent = siteContent[ 'main-content' ][ 'services-h4' ];
mainItem[ 3 ].textContent = siteContent[ 'main-content' ][ 'product-h4' ];
mainItem[ 4 ].textContent = siteContent[ 'main-content' ][ 'vision-h4' ];
mainContent[ 0 ].textContent = siteContent[ 'main-content' ][ 'features-content' ];
mainContent[ 1 ].textContent = siteContent[ 'main-content' ][ 'about-content' ];
mainContent[ 2 ].textContent = siteContent[ 'main-content' ][ 'services-content' ];
mainContent[ 3 ].textContent = siteContent[ 'main-content' ][ 'product-content' ];
mainContent[ 4 ].textContent = siteContent[ 'main-content' ][ 'vision-content' ];
contactTitle.textContent = siteContent[ 'contact' ][ 'contact-h4' ];
contactContent[ 0 ].textContent = siteContent[ 'contact' ][ 'address' ];
contactContent[ 1 ].textContent = siteContent[ 'contact' ][ 'phone' ];
contactContent[ 2 ].textContent = siteContent[ 'contact' ][ 'email' ];
copyright.textContent = siteContent[ 'footer' ][ 'copyright' ];
navItem.forEach( ( item ) => {
    item.style.color = 'green';
} );
const home = navItem[ 0 ].cloneNode( true );
home.textContent = 'Yeet';
nav.prepend( home );

const projects = navItem[ 0 ].cloneNode( true );
projects.textContent = 'ClickBait';
nav.appendChild( projects );





```
