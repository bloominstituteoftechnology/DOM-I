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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Gets and Sets the large image
let bigLogo = document.getElementById("cta-img");
bigLogo.setAttribute('src', siteContent["cta"]["img-src"]);
// Gets and Sets the middle image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Gets and Sets nav items
let myNav = document.querySelectorAll("a");

myNav[0].setAttribute("class", "nav-item-1");
myNav[0].textContent = siteContent["nav"]["nav-item-1"];
myNav[1].setAttribute("class", "nav-item-2");
myNav[1].textContent = siteContent["nav"]["nav-item-2"];
myNav[2].setAttribute("class", "nav-item-3");
myNav[2].textContent = siteContent["nav"]["nav-item-3"];
myNav[3].setAttribute("class", "nav-item-4");
myNav[3].textContent = siteContent["nav"]["nav-item-4"];
myNav[4].setAttribute("class", "nav-item-5");
myNav[4].textContent = siteContent["nav"]["nav-item-5"];
myNav[5].setAttribute("class", "nav-item-6");
myNav[5].textContent = siteContent["nav"]["nav-item-6"];

myNav.forEach(link => (link.style.color = "green"));


// Gets and Sets Header 1
let myHeader1 = document.querySelector("h1");
myHeader1.textContent = siteContent["cta"]["h1"];

// Gets and Sets the Button object
let myButton = document.querySelector("button");
myButton.textContent = siteContent["cta"]["button"];

// Gets and Sets Header 4
let myHeader4 = document.getElementsByTagName('h4');

myHeader4[0].setAttribute("main-content", "features-h4");
myHeader4[0].textContent = siteContent["main-content"]["features-h4"];
myHeader4[1].setAttribute("main-content", "about-h4");
myHeader4[1].textContent = siteContent["main-content"]["about-h4"];
myHeader4[2].setAttribute("main-content", "services-h4");
myHeader4[2].textContent = siteContent["main-content"]["services-h4"];
myHeader4[3].setAttribute("main-content", "product-h4");
myHeader4[3].textContent = siteContent["main-content"]["product-h4"];
myHeader4[4].setAttribute("main-content", "vision-h4");
myHeader4[4].textContent = siteContent["main-content"]["vision-h4"];

// Contact section header
myHeader4[5].setAttribute("contact", "contact-h4");
myHeader4[5].textContent = siteContent["contact"]["contact-h4"];


// Gets and Sets the main-content paragraphs
let myContent = document.querySelectorAll(".text-content p");

myContent[0].setAttribute("main-content", "features-content");
myContent[0].textContent = siteContent["main-content"]["features-content"];
myContent[1].setAttribute("main-content", "about-content");
myContent[1].textContent = siteContent["main-content"]["about-content"];
myContent[2].setAttribute("main-content", "services-content");
myContent[2].textContent = siteContent["main-content"]["services-content"];
myContent[3].setAttribute("main-content", "product-content");
myContent[3].textContent = siteContent["main-content"]["product-content"];
myContent[4].setAttribute("main-content", "vision-content");
myContent[4].textContent = siteContent["main-content"]["vision-content"];

//Gets and sets contact info
let myContact = document.querySelectorAll(".contact p");

myContact[0].setAttribute("contact", "address");
myContact[0].textContent = siteContent["contact"]["address"];
myContact[1].setAttribute("contact", "phone");
myContact[1].textContent = siteContent["contact"]["phone"];
myContact[2].setAttribute("contact", "email");
myContact[2].textContent = siteContent["contact"]["email"];

// Gets and sets footer
let myFooter = document.querySelector("footer p");

myFooter.setAttribute("footer", "copyright");
myFooter.textContent = siteContent["footer"]["copyright"];

// Append and Prepend
let headerEl = document.querySelector('header');
let newP = document.createElement('p');
newP.textContent = 'Excellent';
newP.style.color = 'green';
newP.style.alignContent = 'center';
headerEl.append('newP');
headerEl.prepend('newP');