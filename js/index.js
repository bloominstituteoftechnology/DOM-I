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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//beginning of nav
const navItem1 = document.querySelectorAll('a')[0];
navItem1.innerHTML = siteContent["nav"]['nav-item-1'];

const navItem2 = document.querySelectorAll('a')[1];
navItem2.innerHTML = siteContent["nav"]['nav-item-2'];

const navItem3 = document.querySelectorAll('a')[2];
navItem3.innerHTML = siteContent["nav"]['nav-item-3'];

const navItem4 = document.querySelectorAll('a')[3];
navItem4.innerHTML = siteContent["nav"]['nav-item-4'];

const navItem5 = document.querySelectorAll('a')[4];
navItem5.innerHTML = siteContent["nav"]['nav-item-5'];

const navItem6 = document.querySelectorAll('a')[5];
navItem6.innerHTML = siteContent["nav"]['nav-item-6'];

//end of nav
// beginning of cta
const h1 = document.querySelector('h1');
h1.innerHTML = siteContent["cta"]["h1"];

const button = document.querySelector('button');
button.innerHTML = siteContent["cta"]["button"];


const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//end of cta
// beginning of main content
const featuresH4 = document.querySelectorAll('h4')[0];
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelectorAll('p')[0];
featuresContent.innerHTML = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll('p')[1];
aboutContent.innerHTML = siteContent["main-content"]["about-content"];

const servicesH4 = document.querySelectorAll('h4')[2];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelectorAll('p')[2];
servicesContent.innerHTML = siteContent["main-content"]["services-content"];

const productH4 = document.querySelectorAll('h4')[3];
productH4.innerHTML = siteContent["main-content"]["product-h4"];

const productContent = document.querySelectorAll('p')[3];
productContent.innerHTML = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelectorAll('h4')[4];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelectorAll('p')[4];
visionContent.innerHTML = siteContent["main-content"]["vision-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
// end of main content

// beginning of contact
const contactH4 = document.querySelectorAll('h4')[5];
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

const address = document.querySelectorAll('p')[5];
address.innerHTML = siteContent["contact"]["address"];

const phone = document.querySelectorAll('p')[6];
phone.innerHTML = siteContent["contact"]["phone"];

const email = document.querySelectorAll('p')[7];
email.innerHTML = siteContent["contact"]["email"];
// end of contact
// beginning of footer
const footer = document.querySelectorAll('p')[8];
footer.innerHTML = siteContent["footer"]["copyright"];
// end of footer

