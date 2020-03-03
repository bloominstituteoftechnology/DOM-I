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
    "features-h4":"Feature",
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

const navItem = document.querySelector("a");

console.log(navItem);

const text = document.querySelector("h4");

console.log(text);

const navItems = document.querySelectorAll("a");

navItems[0].textContent = "Services";
navItems[1].textContent = "Product";
navItems[2].textContent = "Vision";
navItems[3].textContent = "Features";
navItems[4].textContent = "About";
navItems[5].textContent = "Contact";

const link = document.getElementsByTagName("a")
link[0].style.color = 'green';
link[1].style.color = 'green';
link[2].style.color = 'green';
link[3].style.color = 'green';
link[4].style.color = 'green';
link[5].style.color = 'green';

// PREPREND

let navBarSocial = document.querySelector('nav')
navBarChild = document.createElement('a');
navBarChild.textContent = "Social Media"

navBarSocial.prepend(navBarChild);

navBarChild.style.color = "green";

// APPEND CHILD

navBarChild2 = document.createElement('a');
navBarChild2.textContent = "Upcoming Events"

navBarSocial.prepend(navBarChild);
navBarSocial.appendChild(navBarChild2);

navBarChild2.style.color = "green";

const getStarted = document.querySelector("button");

getStarted.textContent = "Get Started";
getStarted.style.color = "black";

const Header = document.querySelector(".cta-text h1");

Header.textContent = "DOM IS AWESOME";

const topHeader = document.querySelectorAll(".text-content h4")

topHeader[0].textContent = "Features";
topHeader[1].textContent = "About";

const topText = document.querySelectorAll(".text-content p")

topText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImg = document.querySelector(".main-content img");

middleImg.src = siteContent['main-content']['middle-img-src'];

const bottomHeader = document.querySelectorAll(".bottom-content .text-content h4")

bottomHeader[0].textContent = "Features";
bottomHeader[1].textContent = "About";

const bottomText = document.querySelectorAll(".bottom-content .text-content p")

bottomText[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomText[1].textContent = "Peoduct content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contact = document.querySelector (".contact h4")

contact.textContent = "Contact";

const contactContent = document.querySelectorAll (".contact p")

contactContent[0].textContent = "123 Way 456 Street, Somewhere, USA";
contactContent[1].textContent = "1 (888) 888-8888";
contactContent[2].textContent = "sales@greatidea.io";

const footer = document.querySelector('footer p');

footer.textContent = siteContent.footer.copyright;