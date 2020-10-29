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

// Creating a nav bar next to the logo
const topNav = document.querySelector('nav');
const topNavItem = document.querySelectorAll('a');
topNavItem[0].textContent = siteContent["nav"]["nav-item-1"]
topNavItem[1].textContent = siteContent["nav"]["nav-item-2"]
topNavItem[2].textContent = siteContent["nav"]["nav-item-3"]
topNavItem[3].textContent = siteContent["nav"]["nav-item-4"]
topNavItem[4].textContent = siteContent["nav"]["nav-item-5"]
topNavItem[5].textContent = siteContent["nav"]["nav-item-6"]
// document.querySelector().appendChild(topNavItem)
topNavItem.forEach(coolor => coolor.style.color = 'green');
console.log(topNav)



// Adding h1 tag 
const hOne = document.querySelector('h1');
hOne.textContent = siteContent["cta"]["h1"]
console.log(hOne);

// Adding button
const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];
console.log(button);

// Adding cta img 
const addImg = document.getElementById("cta-img");
addImg.setAttribute('src', siteContent["cta"]["img-src"])
console.log(addImg);


// Adding middle content img 
const midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])
console.log(midImage);


// Adding h4 tag   -------------  This was commented out due to creating an array containing all h4 tags
// const hFour = document.querySelector('h4');
// hFour.textContent = siteContent["main-content"]["features-h4"]
// console.log(hFour);

// Adding text-content p  ---------- This was commented out due to creating an array containing all the p tags
// const addP = document.querySelector("p");
// addP.textContent = siteContent["main-content"]["features-content"];
// console.log(addP);

// Creating an array to add all h4 tags
const headings = document.querySelector('h4');
const addHeadings = document.querySelectorAll('h4');
addHeadings[0].textContent = siteContent["main-content"]["features-h4"]
addHeadings[1].textContent = siteContent["main-content"]["about-h4"]
addHeadings[2].textContent = siteContent["main-content"]["services-h4"]
addHeadings[3].textContent = siteContent["main-content"]["product-h4"]
addHeadings[4].textContent = siteContent["main-content"]["vision-h4"]
addHeadings[5].textContent = siteContent["contact"]["contact-h4"];
console.log(headings);

// Creating an array to add all p tags
const contents = document.querySelector('p');
const addConts = document.querySelectorAll('p');
addConts[0].textContent = siteContent["main-content"]["features-content"]
addConts[1].textContent = siteContent["main-content"]["about-content"];
addConts[2].textContent = siteContent["main-content"]["services-content"]
addConts[3].textContent = siteContent["main-content"]["product-content"]
addConts[4].textContent = siteContent["main-content"]["vision-content"]
addConts[5].textContent = siteContent["contact"]["address"]
addConts[6].textContent = siteContent["contact"]["phone"]
addConts[7].textContent = siteContent["contact"]["email"]
addConts[8].textContent = siteContent["footer"]["copyright"];
console.log(contents);


// Changing color of nav bar text to be green 
// const a = document.querySelector("nav")
// a.style.color = 'green';