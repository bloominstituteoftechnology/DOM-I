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
// Setting img src
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let midImg = document.getElementById("cta-img");
midImg.setAttribute('src', siteContent["cta"]["img-src"])

let codeImg = document.getElementById("middle-img");
codeImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

/* Header Content */
let nav = document.getElementsByTagName('nav')[0];
let ctaTxt = document.getElementsByClassName('cta-text')[0];

// Prepended tag
let prepATag = document.createElement("a");
prepATag.innerText = "Home";
prepATag.setAttribute('href', '#');
prepATag.style.color = "Green";

// Appended tag
let appATag = document.createElement("a");
appATag.innerText = "Stuff";
appATag.setAttribute('href', '#');
appATag.style.color = "Green";

nav.aTags = nav.getElementsByTagName('a');

for (let i = 0; i < nav.aTags.length; i++) {
  nav.aTags[i].innerText = siteContent["nav"]["nav-item-"+(i+1)];
  nav.aTags[i].style.color = "Green";
}

nav.prepend(prepATag);
nav.appendChild(appATag);
ctaTxt.getElementsByTagName('h1')[0].innerText = siteContent["cta"]["h1"];
ctaTxt.getElementsByTagName('button')[0].innerText = siteContent["cta"]["button"];


/* Body Content */
let mainContent = document.getElementsByClassName("main-content")[0];
mainContent.h4 = mainContent.getElementsByTagName("h4");
mainContent.p = mainContent.getElementsByTagName("p");


/* Setting H4 text */
mainContent.h4[0].innerText = siteContent["main-content"]["features-h4"];
mainContent.h4[1].innerText = siteContent["main-content"]["about-h4"];
mainContent.h4[2].innerText = siteContent["main-content"]["services-h4"];
mainContent.h4[3].innerText = siteContent["main-content"]["product-h4"];
mainContent.h4[4].innerText = siteContent["main-content"]["vision-h4"];

/* Setting P text */
mainContent.p[0].innerText = siteContent["main-content"]["features-content"];
mainContent.p[1].innerText = siteContent["main-content"]["about-content"];
mainContent.p[2].innerText = siteContent["main-content"]["services-content"];
mainContent.p[3].innerText = siteContent["main-content"]["product-content"];
mainContent.p[4].innerText = siteContent["main-content"]["vision-content"];

/* End body content */

/* Contact info */
let contactInfo = document.getElementsByClassName("contact")[0];
contactInfo.h4 = contactInfo.getElementsByTagName("h4");
contactInfo.p = contactInfo.getElementsByTagName("p");

contactInfo.h4[0].innerText = siteContent["contact"]["contact-h4"];
contactInfo.p[0].innerText = siteContent["contact"]["address"];
contactInfo.p[1].innerText = siteContent["contact"]["phone"];
contactInfo.p[2].innerText = siteContent["contact"]["email"];
/* End contact info */

/* Footer */
let footer = document.getElementsByTagName("footer")[0];
footer.p = footer.getElementsByTagName("p")[0];
footer.p.innerText = siteContent["footer"]["copyright"];
/* End footer */


