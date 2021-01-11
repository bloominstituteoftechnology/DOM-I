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

// Create selectors
const nav = document.querySelector('nav')
const navLinks = Array.from(nav.children);

const ctaTextDiv = document.querySelector('.cta-text');
const ctaHeading = ctaTextDiv.children[0],
      ctaButton  = ctaTextDiv.children[1],
      ctaImage   = document.querySelector('#cta-img');

const mainContent   = document.querySelector('.main-content'),
      topContent    = mainContent.children[0],
      imageContent  = document.querySelector('#middle-img'),
      bottomContent = mainContent.children[2];

const topFirstContent     = topContent.children[0],
      topSecondContent    = topContent.children[1],
      bottomFirstContent  = bottomContent.children[0],
      bottomSecondContent = bottomContent.children[1],
      bottomThirdContent  = bottomContent.children[2];

const contact      = document.querySelector('.contact'),
      contactTitle = contact.children[0],
      address      = contact.children[1],
      phone        = contact.children[2],
      email        = contact.children[3];

const footer = document.querySelector('footer');

// Update HTML with the JSON data

// ** Updating the nav links **
navLinks.map((link, index) => {
  let key = `nav-item-${index+1}`;
  link.textContent = siteContent['nav'][key];
})

// ** Updating the CTA content **
let headingString = siteContent['cta']['h1'].split(' ');
for (let i=0; i < headingString.length - 1; i++) {
  headingString[i] = headingString[i] + "<br>";
}
headingString = headingString.join("");
ctaHeading.innerHTML = headingString;

ctaButton.textContent = siteContent['cta']['button'];
ctaImage.src = siteContent['cta']['img-src'];

// ** Updating the main content **
topFirstContent.children[0].textContent = siteContent['main-content']['features-h4'];
topFirstContent.children[1].textContent = siteContent['main-content']['features-content'];

topSecondContent.children[0].textContent = siteContent['main-content']['about-h4'];
topSecondContent.children[1].textContent = siteContent['main-content']['about-content'];

bottomFirstContent.children[0].textContent = siteContent['main-content']['services-h4'];
bottomFirstContent.children[1].textContent = siteContent['main-content']['services-content'];

bottomSecondContent.children[0].textContent = siteContent['main-content']['product-h4'];
bottomSecondContent.children[1].textContent = siteContent['main-content']['product-content'];

bottomThirdContent.children[0].textContent = siteContent['main-content']['vision-h4'];
bottomThirdContent.children[1].textContent = siteContent['main-content']['vision-content'];

imageContent.src = siteContent['main-content']['middle-img-src'];

// ** Updating the contact info **
contactTitle.textContent = siteContent['contact']['contact-h4'];

let dataAddress = siteContent['contact']['address'].split(" ");
dataAddress.splice(4, 0, "<br>");
address.innerHTML = dataAddress.join(" ");

phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

// ** Updating footer **
footer.textContent = siteContent['footer']['copyright'];

// ** Change the color of the navigation text to green **
navLinks.map(link => link.style.color = "green");

// ** Add two new items to the new navigation **
const beforeLink = document.createElement("a"),
      afterLink = document.createElement("a");

beforeLink.textContent = "Before";
afterLink.textContent = "After";

nav.prepend(beforeLink);
nav.appendChild(afterLink);
