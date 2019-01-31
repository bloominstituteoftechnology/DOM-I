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

// NavBar

  // Anchor Tags
let theNav = document.querySelectorAll('a');
theNav[0].textContent = siteContent['nav']['nav-item-1'];
theNav[1].textContent = siteContent['nav']['nav-item-2'];;
theNav[2].textContent = siteContent['nav']['nav-item-3'];;
theNav[3].textContent = siteContent['nav']['nav-item-4'];;
theNav[4].textContent = siteContent['nav']['nav-item-5'];
theNav[5].textContent = siteContent['nav']['nav-item-6'];;

  // Logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



// CTA 

  // H1 Tag
let theDomHeader = document.querySelector('h1');
theDomHeader.textContent = siteContent ['cta'] ['h1'];

  // Button 
let button = document.querySelector('button');
button.textContent = siteContent ['cta'] ['button'];

  // CTA Pic
let logoPic = document.getElementById('cta-img');
logoPic.setAttribute('src', siteContent["cta"]["img-src"]);



// Main Content
 
  // Text Content - h4

  let sectionTitles = [];
  sectionTitles.push(siteContent['main-content']['features-h4']);
  sectionTitles.push(siteContent['main-content']['about-h4']);
  sectionTitles.push(siteContent['main-content']['services-h4']);
  sectionTitles.push(siteContent['main-content']['product-h4']);
  sectionTitles.push(siteContent['main-content']['vision-h4']);

  let mainContentH4s = document.querySelectorAll('.main-content .text-content h4');

  sectionTitles.forEach((e, i) => mainContentH4s[i].textContent = e);

  // Middle Image
  let midImg = document.getElementById('middle-img');
  midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

  // Text Content - p
 
  let theParagraph = [];
  theParagraph.push(siteContent['main-content']['features-content']);
  theParagraph.push(siteContent['main-content']['about-content']);
  theParagraph.push(siteContent['main-content']['services-content']);
  theParagraph.push(siteContent['main-content']['product-content']);
  theParagraph.push(siteContent['main-content']['vision-content']);

  let mainContentP = document.querySelectorAll('.main-content .text-content p');

  theParagraph.forEach((e, i) => mainContentP[i].textContent = e);

  // Contact Form - h4

  let contactH4 = document.querySelector('.contact h4');

  contactH4.textContent = siteContent ['contact'] ['contact-h4'];

  // Contact Form - P
  let contactForm = [];
  contactForm.push(siteContent['contact']['address']);
  contactForm.push(siteContent['contact']['phone']);
  contactForm.push(siteContent['contact']['email']);

  let theContentInContactForm = document.querySelectorAll('.contact p');

  contactForm.forEach((e, i) => theContentInContactForm[i].textContent = e);

  // Contact Form - h4

  let footerNote = document.querySelector('footer p');

  footerNote.textContent = siteContent ['footer'] ['copyright'];



