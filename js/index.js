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

//nav bar
let navBar = document.querySelector('nav');
let navLinks = document.querySelectorAll('a');
let newLink = document.createElement('a');
let newLinkTwo = document.createElement('a');

navLinks.item(0).textContent = siteContent.nav["nav-item-1"];
navLinks.item(1).textContent = siteContent.nav["nav-item-2"];
navLinks.item(2).textContent = siteContent.nav["nav-item-3"];
navLinks.item(3).textContent = siteContent.nav["nav-item-4"];
navLinks.item(4).textContent = siteContent.nav["nav-item-5"];
navLinks.item(5).textContent = siteContent.nav["nav-item-6"];

navLinks.item(0).style.color = 'green';
navLinks.item(1).style.color = 'green';
navLinks.item(2).style.color = 'green';
navLinks.item(3).style.color = 'green';
navLinks.item(4).style.color = 'green';
navLinks.item(5).style.color = 'green';

newLink.href = "#";
newLink.textContent = "test";
newLink.style.color = 'green';

newLinkTwo.href = "#";
newLinkTwo.textContent = "test 2";
newLinkTwo.style.color = 'green';

navBar.append(newLinkTwo);
navBar.prepend(newLink);

//cta
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

siteContent.cta.h1 = '<h1>DOM<br> Is<br> Awesome</h1>';

const ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent.cta.h1;

//main conntent

const midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const mainH4 = document.querySelectorAll('h4');
 
mainH4.item(0).textContent = siteContent["main-content"]["features-h4"];
mainH4.item(1).textContent = siteContent["main-content"]["about-h4"];
mainH4.item(2).textContent = siteContent["main-content"]["services-h4"];
mainH4.item(3).textContent = siteContent["main-content"]["product-h4"];
mainH4.item(4).textContent = siteContent["main-content"]["vision-h4"];

const para = document.querySelectorAll('p');

para.item(0).textContent = siteContent["main-content"]["features-content"];
para.item(1).textContent = siteContent["main-content"]["about-content"];
para.item(2).textContent = siteContent["main-content"]["services-content"];
para.item(3).textContent = siteContent["main-content"]["product-content"];
para.item(4).textContent = siteContent["main-content"]["vision-content"];

// contact
const contact = document.querySelector('.contact');
const contactChildren = contact.childNodes;

siteContent.contact.address = '<p>123 Way 456 Street<br>Somewhere, USA</p>';

contactChildren.item(1).textContent = siteContent.contact["contact-h4"];
contactChildren.item(3).innerHTML = siteContent.contact.address;
contactChildren.item(5).textContent = siteContent.contact.phone;
contactChildren.item(7).textContent = siteContent.contact.email;

//footer

const footer = document.querySelector('footer');
const footerChildren = footer.childNodes;
footerChildren.item(1).textContent = siteContent.footer.copyright;
