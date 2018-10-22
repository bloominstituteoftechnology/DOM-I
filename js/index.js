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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// // Selector Elements

const tagElements = document.getElementsByTagName('a');
console.log(tagElements[1]);

const navSelection = document.querySelector('nav');


// IMG SRC UPDATES
const logoImg = document.querySelector('#logo-img');
logoImg.src = 'img/logo.png';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

const midImg = document.querySelector('#middle-img');
midImg.src = 'img/mid-page-accent.jpg';

// Task 3: Update the HTML with the JSON data
// NAV
const navItems = document.querySelectorAll('a');
navItems[0].textContent = "Product";
navItems[1].textContent = "Vision";
navItems[2].textContent = "Features";
navItems[3].textContent = "About";
navItems[4].textContent = "Contact";

navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";

// CTA
const mainTitle = document.querySelector('h1');
mainTitle.textContent = "DOM Is Awesome";
mainTitle.display = 'flex';

const buttonText = document.querySelector('button');
buttonText.textContent = "Get Started";

// h4's
const featuresHfour = document.querySelectorAll("h4");
featuresHfour[0].textContent = "Product";
featuresHfour[1].textContent = "Vision";
featuresHfour[2].textContent = "Features";
featuresHfour[3].textContent = "Product";
featuresHfour[4].textContent = "About";
featuresHfour[5].textContent = "Contact";

// p's
const paragraphs = document.querySelectorAll("p");
paragraphs[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraphs[5].textContent = "123 Way 456 Street Somewhere, USA";
paragraphs[6].textContent = "1 (888) 888-8888";
paragraphs[7].textContent = "sales@greatidea.io";
paragraphs[8].textContent = "Copyright Great Idea! 2018"; 


// APPENDS

const newNavOne = document.createElement('a');
const newNavTwo= document.createElement('a');

const mainNav = document.querySelector('nav');

newNavOne.innerText = 'Sign Up';
newNavTwo.innerText = "Services";

mainNav.append(newNavOne);
mainNav.prepend(newNavTwo);







