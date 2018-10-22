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

// Task 2/3: Update the HTML with the JSON data.

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const mainHeading = document.querySelector('.cta-text h1');
mainHeading.textContent = siteContent.cta.h1;

const mainHeadingButton = document.querySelector('.cta-text button');
mainHeadingButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

const mainContentHeadings = document.querySelectorAll('.main-content h4');
mainContentHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

const mainContentp = document.querySelectorAll('.main-content p');
mainContentp[0].textContent = siteContent["main-content"]["features-content"];
mainContentp[1].textContent = siteContent["main-content"]["about-content"];
mainContentp[2].textContent = siteContent["main-content"]["services-content"];
mainContentp[3].textContent = siteContent["main-content"]["product-content"];
mainContentp[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact["address"];
contactInfo[1].textContent = siteContent.contact["phone"];
contactInfo[2].textContent = siteContent.contact["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;


// Task 4: Add new content

// Change the color fo the navigation text to be green.
navLinks.forEach(function(item){
  item.style.color = "green";
});

// add two new items to the navigation system using .appendChild() and .prepend()

// .prepend()
const newNav1 = document.createElement('a');
newNav1.href = "#";
newNav1.textContent = "Testimonials";
const mainNav = document.querySelector('nav');
mainNav.prepend(newNav1);
newNav1.style.color = "green";

// .appendChild()
const newNav2 = document.createElement('a');
newNav2.href = "#";
newNav2.textContent = "Feedback";
mainNav.appendChild(newNav2);
newNav2.style.color = "green";

// Stretch Goals

// Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.

// const header = document.querySelector('header');
// header.style.backgroundColor = "lightgray";

const cta = document.querySelector('.cta');
cta.style.backgroundColor = "black";

mainHeading.style.color = "white";

const body = document.querySelector('body');
body.style.backgroundColor = "#faebd7";

// Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.