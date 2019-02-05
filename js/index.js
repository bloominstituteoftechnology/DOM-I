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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//Create selectors to point your data into elements
//* [ ] Create selectors by using any of the DOM element's methods
//* [ ] Note that IDs have been used on all images.  Use the IDs to update src path content



// Single Selections

/*  getElementById()
- Any valid ID will work
- returns an element
*/
// const btnID = document.getElementById('start-btn');

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let nav =
// let cta =
// let main-content =
// let contact = 
// let footer =


/*  querySelector()
- Any valid CSS selector will work
- returns an element
*/
// const btnQuery = document.querySelector('button');
// let btnQuery = document.querySelector('button');



// // Multiple Element Selections
// // HTMLCollection 
// let tagNameTest = document.getElementsByTagName('p');
// let classNameTest = document.getElementsByClassName('main-area');


// // Change alt attribute of middle-img
// /* <img class="middle-img" id="middle-img" src="img/mid-page-accent.jpg" alt="Image of code snippets across the screen"></img> */

// let middle = document.querySelector('.middle-img');

// middle-img-src = 'https://img/mid-page-accent.jpg';

// middle-img-src.alt = "This is a picture of the middle image";


// //Change the color of the navigation text to be green.
// // DOM style
// // anything with a - needs to be camel cased.  eg: background-color = backgroundColor

// navQuery.forEach( element => {
//   //console.log(element);
//   element.style.color = "green"; 
// });



