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


const allAnchors = document.querySelectorAll('a');
const ctaTextChilds = document.querySelector('.cta-text').childNodes;
let ctaimg = document.getElementById('cta-img')
ctaimg.setAttribute('src', Object.values(siteContent.cta)[2])

const allTextClasses = document.querySelectorAll('.text-content');
const mcValues = Object.values(siteContent['main-content']);
let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', mcValues.splice(4, 1))

const contactChilds = document.querySelector('.contact').childNodes;
const contactValues = Object.values(siteContent.contact);



// Nav Bar Anchors Loop
for (let i = 0; i < allAnchors.length; i++) {
  allAnchors[i].textContent = Object.values(siteContent.nav)[i];
}

// CTA H1 and Button Loop
for (let i = 0; i < ctaTextChilds.length; i++) {
  let matchfound = Object.keys(siteContent.cta).indexOf(ctaTextChilds[i].nodeName.toLowerCase());
  console.log(matchfound);
  if (matchfound >= 0) {
    ctaTextChilds[i].textContent = Object.values(siteContent.cta)[matchfound];
  }
}

// text-content class loop
for (let i = 0; i < allTextClasses.length; i++) {
  let processClass = allTextClasses[i].childNodes;
  for (let i = 0; i < processClass.length; i++) {
    if (processClass[i].nodeName !== '#text') {
      let newText = mcValues.shift();
      processClass[i].textContent = newText;
    }
  }
}

// Contact class loop
for (let i = 0; i < contactChilds.length; i++) {
  if (contactChilds[i].nodeName !== '#text') {
  let newText = contactValues.shift();
  contactChilds[i].textContent = newText
}}

