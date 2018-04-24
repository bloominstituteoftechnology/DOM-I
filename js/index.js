const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "Contact",
        "nav-item-6": "About",
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

//Update the img src for the logo
document.getElementById("logo-img").src = siteContent["nav"]["img-src"];


// Update header image
document.getElementById("cta-img").src = siteContent['cta']['img-src'];

// Add middle image
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

// Add header links
// TODO Add for()loop to clean up this code.
let nav = document.getElementsByTagName('nav');
nav[0].children[0].innerHTML = siteContent['nav']['nav-item-1'];
nav[0].children[1].innerHTML = siteContent['nav']['nav-item-2'];
nav[0].children[2].innerHTML = siteContent['nav']['nav-item-3'];
nav[0].children[3].innerHTML = siteContent['nav']['nav-item-4'];
nav[0].children[4].innerHTML = siteContent['nav']['nav-item-5'];
nav[0].children[5].innerHTML = siteContent['nav']['nav-item-6'];

// Add cta contect heading
document.querySelector('.cta-text').firstElementChild.innerHTML = siteContent.cta.h1;

// Add cta button
document.querySelector('.cta-text').getElementsByTagName('button')[0].innerHTML = siteContent.cta.button;

// Add main content
// Seperate into Top Content and Bottom Content
// TODO Add a for()loop to seperate the content-text into various parts for the site.


// Top 
document.querySelector('.top-content').getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["features-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["features-content"];
document.querySelector('.top-content').getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["about-h4"];
document.querySelector('.top-content').getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["about-content"];

// Bottom Content
document.querySelector('.bottom-content').getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["services-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]["services-content"];
document.querySelector('.bottom-content').getElementsByTagName('h4')[1].innerHTML = siteContent["main-content"]["product-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[1].innerHTML = siteContent["main-content"]["product-content"];
document.querySelector('.bottom-content').getElementsByTagName('h4')[2].innerHTML = siteContent["main-content"]["vision-h4"];
document.querySelector('.bottom-content').getElementsByTagName('p')[2].innerHTML = siteContent["main-content"]["vision-content"];

// Add contact
document.querySelector('.contact').getElementsByTagName('h4')[0].innerHTML = siteContent.contact["contact-h4"];
document.querySelector('.contact').getElementsByTagName('p')[0].innerHTML = siteContent.contact["address"];
document.querySelector('.contact').getElementsByTagName('p')[1].innerHTML = siteContent.contact["phone"];
document.querySelector('.contact').getElementsByTagName('p')[2].innerHTML = siteContent.contact["email"];

// Add footer
document.querySelector('footer').getElementsByTagName('p')[0].innerHTML = siteContent.footer.copyright;






// # DOM I - JavaScript Content Management System

// ## Project Description

// You are going to be emulating a content managment system by controlling the content in the JavaScript file instead of the HTML file. This project is an excercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

// You have been provided a [JSON object](js/index.js) with all the necessary data to accomplish this task.  Use dot or bracket notation to traverse the data provided.

// ## ONE RULE

// * You cannot update the HTML or CSS files directly.  You must use JavaScript and the DOM only for your tasks today.

// ## Task 1: Create selectors to point your data into elements

// * Create selectors by using any of the DOM element's methods
// * Note that IDs have been used on all images.  Use the IDs to update src path content

// ## Task 2: Update the HTML with the JSON data

// * Remember, NO direct updating of the HTML is allowed.
// * Using your selectors, update the content to match the example file.
// * Remember to update the src attributes on images

// ## Task 3: Add new content

// * Change the color of the navigation text to be green.
// * Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * Check your work by looking at the [original html](original.html) in the browser

// ## Stretch Goals

// * Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.

// * Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// ## Stretch Project

// This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.