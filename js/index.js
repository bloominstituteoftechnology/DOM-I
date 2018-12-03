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
logo.src = "img/logo.png";
logo.alt = "Great Idea! Company logo.";

// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


// Update the other two Images

let ctaImg = document.getElementById("cta-img");
ctaImg.src = "img/header-img.png";
ctaImg.alt = "Image of a code snippet.";

let midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";
midImg.alt = "Image of code snippets across the screen";


//Update the nav Items

const navItems = document.querySelectorAll('a');
navArray=Array.from(navItems);
console.log(navArray);

//not sure if I needed to create an array or not. Seemed to work either way. Alexandra if you read this, what do you advise?

navArray[0].textContent = "Services";
navArray[1].textContent = "Product";
navArray[2].textContent = "Vision";
navArray[3].textContent = "Features";
navArray[4].textContent = "About";
navArray[5].textContent = "Contact";

// make nav items green - changed one to blue just to make sure it was working as an experiment per instructions 

navArray[0].style.color = "green";
navArray[1].style.color = "green";
navArray[2].style.color = "green";
navArray[3].style.color = "blue"; //changed this Change back if done testing
navArray[4].style.color = "green";
navArray[5].style.color = "green";

//JSON items. Start with cta

const ctaText = document.getElementsByTagName('h1');
//ctaText.style = "white-space: pre";
ctaText[0].textContent = "DOM \r\n";
ctaText[0].textContent += "is \r\n";
ctaText[0].textContent += "Awesome";

const ctaButton = document.getElementsByTagName('button');
ctaButton[0].textContent = "Get Started";

// doing footer next because I want to leave main-content for last

const footsie = document.getElementsByTagName('footer');
footsie[0].textContent = "Copyright Great Idea! 2018";

// doing contact to leave main-content for last. Have to figure out how to incorporate H4 when there are lots of H4s in the main-content.
// Specificty?
// update I guess I have to read all h4s into an array. I can't seem to get specifically the h4 for contact without getting the
// main-content h4s as well
// so let's get all the h4s and work on both at the same time. Then we'll do the p tags

const hFourTags = document.getElementsByTagName('h4');
const pTags = document.getElementsByTagName('p');

// How many are there?
//console.log(hFourTags.length); // 6
//console.log(pTags.length);  // 9 but one is from footer. I've already done footer. Should I change it?

hFourTags[0].textContent = "Features";
hFourTags[1].textContent = "About";
hFourTags[2].textContent = "Services";
hFourTags[3].textContent = "Product";
hFourTags[4].textContent = "Vision";

//hFourTags[5].textContent = "Contact";
// Think I figured out how to be specific for contact
document.querySelector('.contact h4').textContent = "Contact";
// OK, that worked, but I'm not going to change the rest because it works fine as is



// Copy and paste 8 p tags

pTags[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[5].textContent = "123 Way 456 Street\r\n"
pTags[5].textContent += "Somewhere, USA";
pTags[6].textContent = "1 (888) 888-8888";
pTags[7].textContent = "sales@greatidea.io";

// Have a couple of kids. Oops, I mean add two children

const faq = document.createElement('a');
const addNavItem = document.querySelector('nav');
addNavItem.appendChild(faq);
faq.textContent = "FAQ";
faq.style.color = "green";

const login = document.createElement('a');
addNavItem.prepend(login);
login.textContent = "Log In";
login.style.color = "green";
