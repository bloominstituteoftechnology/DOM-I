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

// Update the nav items text content
const navItems = document.querySelectorAll('nav a');
navItems.forEach((e,i) => {
  e.textContent = siteContent.nav[`nav-item-${i+1}`];

  //Change the color of the navigation text to be green.
  e.style.color = 'green';
  });

// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
const blogNav = document.createElement('a');
blogNav.setAttribute('href', '#');
blogNav.style.color = 'green';
blogNav.textContent = 'Blog';

const careerNav = document.createElement('a');
careerNav.setAttribute('href', '#');
careerNav.style.color = 'green';
careerNav.textContent = 'Career';

const headerNav = document.querySelector('header nav');
headerNav.appendChild(blogNav);
headerNav.prepend(careerNav);


// Update the cta-text h1
const h1Tag = document.querySelector('.cta-text h1');
const h1Words = siteContent.cta.h1.split(' ');  // The words in h1 split into an array
h1Words.forEach(e => {
  const el = document.createElement('div');     // Create new div to allow new line for each word
  el.textContent = e;
  h1Tag.append(el);
});

// Update cta-text button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

// Update cta-image
const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent.cta["img-src"]);

// Update content
const contentArr = ['features', 'about', 'services', 'product', 'vision'];

const contentEl = document.querySelectorAll('.text-content');
contentEl.forEach((e, i) => {
  // Update the h4 text
  e.querySelector('h4').textContent = siteContent["main-content"][`${contentArr[i]}-h4`];
  // Update the p text
  e.querySelector('p').textContent = siteContent["main-content"][`${contentArr[i]}-content`];
});

// Update middle-img
document.querySelector('#middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update Contact
const contactEl = document.querySelector('.contact');
contactEl.querySelector('h4').textContent = siteContent.contact["contact-h4"]; // Updata Contact - h4

const contactDetail = ['address', 'phone', 'email'];

contactEl.querySelectorAll('p').forEach((e,i) => {
  if (i !== 0) {
    e.textContent = siteContent.contact[contactDetail[i]];  // Update Contact - phone and email
  } else {
    const address = siteContent.contact[contactDetail[i]].split(' ');
    const stateInd = address.indexOf(address.find( e => e.includes(',')));
    // the street address
    const street = document.createElement('div');
    street.textContent = address.slice(0, stateInd).join(' ');
    e.append(street);
    // the state address
    const state = document.createElement('div');
    state.textContent = address.slice(stateInd).join(' ');
    e.append(state);

  }
});

// Update Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;