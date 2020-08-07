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

let roundPhoto = document.getElementById("cta-img");
roundPhoto.setAttribute('src', siteContent["cta"]["img-src"]);

const navBar = document.querySelectorAll('nav a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

const topicHeaders = document.querySelectorAll('h4');
topicHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topicHeaders[1].textContent = siteContent["main-content"]["about-h4"];
topicHeaders[2].textContent = siteContent["main-content"]["services-h4"];
topicHeaders[3].textContent = siteContent["main-content"]["product-h4"];
topicHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
topicHeaders[5].textContent = siteContent["contact"]["contact-h4"];

const paragraphContent = document.querySelectorAll('p')
paragraphContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphContent[1].textContent = siteContent["main-content"]["about-content"];
paragraphContent[2].textContent = siteContent["main-content"]["services-content"];
paragraphContent[3].textContent = siteContent["main-content"]["product-content"];
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"];
paragraphContent[5].textContent = siteContent["contact"]["address"];
paragraphContent[6].textContent = siteContent["contact"]["phone"];
paragraphContent[7].textContent = siteContent["contact"]["email"];
paragraphContent[8].textContent = siteContent["footer"]["copyright"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainHeader = document.querySelector('h1');
mainHeader.textContent = siteContent["cta"]["h1"];

let mainButton = document.querySelector('button');
mainButton.textContent = siteContent["cta"]["button"];

const newOrder = document.createElement('a');
newOrder.textContent = 'Order';
const newReview = document.createElement('a');
newReview.textContent = 'Review';

const navigation = document.querySelector('nav');
navigation.prepend(newOrder);
navigation.append(newReview);

const navColoring = document.querySelectorAll('a');
navColoring.forEach((element) => {
  element.style.color = 'green';
});