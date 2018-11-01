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


/* =======HEADER====== */


// Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Dynamic nav

// Create html collection from element nav
let nav = document.getElementsByTagName('nav');
console.log(nav[0].children);
// Length of the html collection
let navChildCount = nav[0].childElementCount;

for (let i=1; i <= navChildCount; i++) {
  // Assign textContent to nav link
  nav[0].children[i-1].textContent = siteContent['nav']['nav-item-'+i];
  nav[0].children[i-1.].style.color = 'green';
  // Assign url to nav link
  nav[0].children[i-1].href = siteContent['nav']['nav-item-'+i] + '.html';
}


/* =======CTA SECTION====== */

// Dynamic cta section

// Assign h1 to cta using a querySelector
let cta = document.querySelector('.cta h1');
// Assign textContent to cta object's h1 value
cta.textContent = siteContent['cta']['h1'];

// Dynamic cta 

// Assign logo to ctaLogo using a querySelector
let ctaLogo = document.querySelector('.cta img');
// Assign logo to ctaLogo object's img-src value
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

// Dynamic button

// Assign CTA SECTION button using a querySelector
let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent['cta']['button'];


/* =======MAIN SECTION====== */

// Dynamic h4 and Paragraphs

// Assign main content h4 and p to arrays a querySelector
let mainContentHeaders = document.querySelectorAll('.main-content h4');
let mainContentParagraphs = document.querySelectorAll('.main-content p');

// Create arrays of keys and values from JSON .main-content object
let mainContentKeys = Object.keys(siteContent['main-content']);
let mainContentVals = Object.values(siteContent['main-content']);


// Header counter
let h = 0;
// Paragrah counter
let p = 0;

// Loop through array of content keys
for (let i=0; i < mainContentKeys.length; i++) {
  // Check if keys contain string 'h4' & assign textContent from content
  if (mainContentKeys[i].indexOf('h4') > -1) {
      mainContentHeaders[h++].textContent = mainContentVals[i];
  }
  // Check if keys contain string 'content' & assign textContent from content
  else if (mainContentKeys[i].indexOf('content') > -1) {
      mainContentParagraphs[p++].textContent = mainContentVals[i];
  }
}

// Dynamic main content image

// Assign main content image through the element ID
const mainContentImage = document.getElementById('middle-img');
mainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


/* =======CONTACT SECTION====== */

// Dynamic Contect Section

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// }

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent['contact']['address'];

const address = ['Street', 'Road', 'Ave'];
let foo = siteContent['contact']['address'].toString();


let firstpart = foo.substring(0, foo.indexOf(address[0]) + address[0].length);
let secondpart = foo.substring(foo.indexOf(address[0]) + address[0].length, foo.length);

contactAddress.innerHTML = firstpart + '</br>' + secondpart;

const contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelector('.contact p:last-child');
contactEmail.textContent = siteContent['contact']['email'];


/* =======FOOTER SECTION====== */

// Dynamic footer

// Assign copyright to footer using a querySelector
const footer = document.querySelector('footer p');
// Assign textContent to cta object's h1 value
footer.textContent = siteContent['footer']['copyright'];


