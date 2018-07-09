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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Initialize selectors
let nav = document.querySelector('nav');
let cta = document.querySelector('.cta');
let ctaIMG = document.querySelector('#cta-img');
let mainContent = document.querySelector('.main-content');
let contact = document.querySelector('.contact');
let footer = document.querySelector("footer");

// Question to explore later: is there a way I can iterate through siteContent["nav"]?
nav.children[0].textContent = siteContent["nav"]["nav-item-1"];
nav.children[1].textContent = siteContent["nav"]["nav-item-2"];
nav.children[2].textContent = siteContent["nav"]["nav-item-3"];
nav.children[3].textContent = siteContent["nav"]["nav-item-4"];
nav.children[4].textContent = siteContent["nav"]["nav-item-5"];
nav.children[5].textContent = siteContent["nav"]["nav-item-6"];

cta.children[0].children[0].textContent = siteContent["cta"]["h1"];
cta.children[0].children[1].textContent = siteContent["cta"]["button"];
ctaIMG.setAttribute('src', siteContent["cta"]["img-src"]);

let mainContentHeaders = mainContent.querySelectorAll("div div h4");
mainContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

let mainContentText = mainContent.querySelectorAll("div div p");
mainContentText[0].textContent = siteContent["main-content"]["features-content"];
mainContentText[1].textContent = siteContent["main-content"]["about-content"];
mainContentText[2].textContent = siteContent["main-content"]["services-content"];
mainContentText[3].textContent = siteContent["main-content"]["product-content"];
mainContentText[4].textContent = siteContent["main-content"]["vision-content"];

let midIMG = document.querySelector("#middle-img");
midIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

footer.children[0].textContent = siteContent["footer"]["copyright"];

nav.prepend(document.createElement('a'));
nav.children[0].textContent = "Blog";
nav.append(document.createElement('a'));
nav.children[7].textContent = "Donate";

for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].style.color = "green";
  console.log(nav.children[i]);
}
