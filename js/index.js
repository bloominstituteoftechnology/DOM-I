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
// My code starts here
const navItem1 = document.querySelector('nav a');
navItem1.textContent = siteContent["nav"]["nav-item-1"];

const navItem2 =  navItem1.nextElementSibling;
navItem2.textContent = siteContent["nav"]["nav-item-2"];

const navItem3 = navItem2.nextElementSibling;
navItem3.textContent = siteContent["nav"]["nav-item-3"];

const navItem4 =  navItem3.nextElementSibling;
navItem4.textContent = siteContent["nav"]["nav-item-4"];

const navItem5 = navItem4.nextElementSibling;
navItem5.textContent = siteContent["nav"]["nav-item-5"];

const navItem6 =  navItem5.nextElementSibling;
navItem6.textContent = siteContent["nav"]["nav-item-6"];

// main H1
const mainTitle = document.querySelector('.cta h1');
mainTitle.textContent = siteContent["cta"]["h1"];

// main Button
const buttonMain = document.querySelector('.cta button');
buttonMain.textContent = siteContent["cta"]["button"];

//main IMG
const imgMain = document.querySelector('#cta-img');
imgMain.setAttribute('src', siteContent["cta"]["img-src"]);

//Middle body features, about, services, etc...
const featuresTitle = document.querySelector('.top-content .text-content h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresInfo =  featuresTitle.nextElementSibling;
featuresInfo.textContent = siteContent["main-content"]["features-content"];

const aboutTitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutInfo = aboutTitle.nextElementSibling;
aboutInfo.textContent = siteContent["main-content"]["about-content"];

//Middle Image code
const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Middle body second half after image
const serviceTitle = document.querySelector('.bottom-content .text-content h4');
serviceTitle.textContent = siteContent["main-content"]["services-h4"];

const serviceInfo = serviceTitle.nextElementSibling;
serviceInfo.textContent = siteContent["main-content"]["services-content"];

const productTitle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productTitle.textContent = siteContent["main-content"]["product-h4"];

const productInfo = productTitle.nextElementSibling;
productInfo.textContent = siteContent["main-content"]["product-content"];

const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionTitle.textContent = siteContent["main-content"]["services-h4"];

const visionInfo = visionTitle.nextElementSibling;
visionInfo.textContent = siteContent["main-content"]["vision-content"]

//contact section code
const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = siteContent["contact"]["email"];

//Footer code
const footerNote = document.querySelector('footer p');
footerNote.textContent = siteContent["footer"]["copyright"];

//Navigation color text change

function changeColorNav (){
  nav.a.style.color = "red";
}

//Append Child
const socialMedia = document.createElement('a');
socialMedia.textContent = 'Social Media'
socialMedia.href = '#';
document.querySelector('nav').appendChild(socialMedia);

const register = document.createElement('a');
register.textContent = 'Register';
register.href = '#';
document.querySelector('nav').prepend(register);
