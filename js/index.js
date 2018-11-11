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


// navbar content
const aHref = document.querySelectorAll('header nav a');
const navMenuValues = Object.values(siteContent.nav);

for (let i = 0; i < aHref.length; i++) {
  aHref[i].innerHTML = navMenuValues[i];  
}
  
// Great Idea image
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




// h1 content
const ctaH1 = document.querySelector('h1');
    ctaH1.textContent = "DOM Is Awesome";

// Get Started button
const btn = document.querySelector('button');
    btn.textContent = "Get Started";

// Complex image, first image
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);




//middle content features h4
const featuresC = document.querySelector('.text-content:first-child h4');
  featuresC.textContent = "Features";

const featuresContent = document.querySelector('.text-content:first-child p');
  featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//middle content about h4
const about = document.querySelector('.text-content:last-child h4');
  about.textContent = "About";

const aboutP = document.querySelector('.text-content:last-child p');
  aboutP.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// middle content's image
  let middleImg = document.getElementById("middle-img");
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);




//bottom content services
const services = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
  services.textContent = "Services";

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) p');
  servicesH4.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//bottom content product
const product = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
  product.textContent = "product";
 
const productP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
  productP.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//bottom content vision
const vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
  vision.textContent = "Vision";

const visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
  visionP.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";



//Contact info
const contact = document.querySelector('.contact h4');
  contact.textContent = "Contact";

const address = document.querySelector('.contact p:nth-child(2)')
  address.textContent = "123 Way 456 Street Somewhere, USA";

const phone = document.querySelector('.contact p:nth-child(3)'); 
  phone.textContent = "1 (888) 888-8888";

const email = document.querySelector('.contact p:nth-child(4)');
  email.textContent = "sales@greatidea.io";



//footer
const footer = document.querySelector('footer p');
  footer.textContent = "Copyright Great Idea! 2018";

//   "footer": {
//     "copyright" : "Copyright Great Idea! 2018"
//   },
// };