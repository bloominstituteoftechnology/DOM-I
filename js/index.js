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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

let links = document.querySelectorAll('a');

// links[0].textContent = siteContent["nav"]["nav-item-1"];
// links[1].textContent = siteContent["nav"]["nav-item-2"];
// links[2].textContent = siteContent["nav"]["nav-item-3"];
// links[3].textContent = siteContent["nav"]["nav-item-4"];
// links[4].textContent = siteContent["nav"]["nav-item-5"];
// links[5].textContent = siteContent["nav"]["nav-item-6"];


links.forEach((element, index) => {
  element.textContent = siteContent["nav"][`nav-item-${index + 1}`]
})



// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

let subheaders = document.querySelectorAll('h4');
// subheadersArray = Array.from(subheaders);
subheaders.item(0).textContent = siteContent["main-content"]["features-h4"];
subheaders.item(1).textContent = siteContent["main-content"]["about-h4"];
subheaders.item(2).textContent = siteContent["main-content"]["services-h4"];
subheaders.item(3).textContent = siteContent["main-content"]["product-h4"];
subheaders.item(4).textContent = siteContent["main-content"]["vision-h4"];
subheaders.item(5).textContent = siteContent["contact"]["contact-h4"];


let copy = document.querySelectorAll('p');
copy.item(0).textContent = siteContent["main-content"]["features-content"];
copy.item(1).textContent = siteContent["main-content"]["about-content"];
copy.item(2).textContent = siteContent["main-content"]["services-content"];
copy.item(3).textContent = siteContent["main-content"]["product-content"];
copy.item(4).textContent = siteContent["main-content"]["vision-content"];
copy.item(5).textContent = siteContent["contact"]["address"];
copy.item(6).textContent = siteContent["contact"]["phone"];
copy.item(7).textContent = siteContent["contact"]["email"];
copy.item(8).textContent = siteContent["footer"]["copyright"];



let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let introImg = document.getElementById('cta-img');
introImg.setAttribute('src', siteContent["cta"]["img-src"]);

let introText = document.querySelector('h1');
introText.textContent = siteContent["cta"]["h1"];

let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];


// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. 
// You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

links.forEach( (element) => {
 element.style.color = "green";
})

let navParent = document.querySelector("nav");

let newNavLinkLast = document.createElement('a');
newNavLinkLast.textContent = 'newItemLast';
newNavLinkLast.setAttribute('href', '#');

navParent.appendChild(newNavLinkLast);

let newNavLinkFirst = document.createElement('a');
newNavLinkFirst.textContent = 'newItemFirst';
newNavLinkFirst.setAttribute('href', '#');

navParent.prepend(newNavLinkFirst);


// ## Stretch Goals
// * [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  
// You could build a similar data object with new values to help you test the click event.



// ## Stretch Project: Digital Timer
// This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  
// Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get. 