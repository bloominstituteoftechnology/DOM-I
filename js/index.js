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
// const logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])



// ==== FUNCTIONS ======

// Creates a new element
const newElement = (tag, attr, attrVal, textContent) => {
  let newEl = document.createElement(tag);
  newEl[`${attr}`] = `${attrVal}`;
  newEl.textContent = `${textContent}`;
  return newEl
}

// Creates keys out of object props then applys to text content
// to elements
const applyText = (prop, filterItem, query) => {
  const mainKeys = Object.keys(siteContent[prop]);

  const contentKeys = mainKeys.filter((item) => {
    return item.includes(filterItem);
  });
  console.log(contentKeys);

  query.forEach((element, index) => {
    element.textContent = siteContent[prop][contentKeys[index]];
  })
}




// ========== Nav

// Hook into nav
const nav = document.querySelector('nav');


// JSON nav Keys into Array then filter for only nav keys
const keys = Object.keys(siteContent.nav);
const navKeys = keys.filter((item) => {
    return item.includes('nav');
})

// New nav item created and appended to Nav
const portfolio = newElement('a', 'href', '#', 'Portfolio');
nav.appendChild(portfolio);

// Hood into a tags
const navAnchors = document.querySelectorAll('a');
console.log(navAnchors);

// Iterate of navKeys array and apply text content to nav items
// turn nav items green
navAnchors.forEach((item, index) => {
  if (item.textContent === undefined || item.textContent === "") {
    item.textContent = siteContent.nav[navKeys[index]];
  }
  item.style.color = 'green';
});


const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.nav["img-src"];





// ========== Header Content

const headerTitle = document.querySelector('.cta-text h1')
headerTitle.textContent = siteContent.cta.h1

const headerButton = document.querySelector('.cta-text').querySelector('button');
headerButton.textContent = siteContent.cta.button;

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent.cta["img-src"];



// ========== Main Content ======== //


// hook into top h4 and p tags
const headers = document.querySelectorAll('.text-content h4');
const content = document.querySelectorAll('.text-content p');

// Functions apply text content to Main Content headers and p tags
applyText('main-content', 'h4', headers);
applyText('main-content', 'content', content);

// apply src to midddle img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];



// Contact 

const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
const contactP = contact.querySelectorAll('p');

contactHeader.textContent = siteContent.contact["contact-h4"];

contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;



// Footer

const footerContent = document.querySelector('footer').querySelector('p');
footerContent.textContent = siteContent.footer.copyright;





