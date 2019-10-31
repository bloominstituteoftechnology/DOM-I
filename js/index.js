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


// update the navigation links
let navigationLinks = document.querySelectorAll("nav a");
navigationLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`];
})


// Call to Action (cta)
// cta references
const headerText = document.querySelector('.cta h1');
const headerButton = document.querySelector('.cta button');
const headerImage = document.querySelector('#cta-img');

headerText.textContent = siteContent['cta'] ['h1'];
headerButton.textContent = siteContent['cta']['button'];
headerImage.setAttribute('src', siteContent ["cta"] ["img-src"]);

// end of call to action


// Content

// content references
const contentHeader = document.querySelectorAll('.text-content h4');
const contentText = document.querySelectorAll('.text-content p');
const contentImg = document.querySelector('#middle-img')

// Content headers
contentHeader[0].textContent = siteContent ['main-content'] ['features-h4'];
contentHeader[1].textContent = siteContent ['main-content'] ['about-h4'];
contentHeader[2].textContent = siteContent ['main-content'] ['services-h4'];
contentHeader[3].textContent = siteContent ['main-content'] ['product-h4'];
contentHeader[4].textContent = siteContent ['main-content'] ['vision-h4'];

// content text
contentText[0].textContent = siteContent ['main-content'] ['features-content'];
contentText[1].textContent = siteContent ['main-content'] ['about-content'];
contentText[2].textContent = siteContent ['main-content'] ['services-content'];
contentText[3].textContent = siteContent ['main-content'] ['product-content'];
contentText[4].textContent = siteContent ['main-content'] ['vision-content'];

// content image
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// end of content section


// Contact Section

// contact references
const contactHeader = document.querySelector('.contact h4');
const contactPara = document.querySelectorAll('.contact p')

contactHeader.textContent = siteContent ['contact']['contact-h4'];
contactPara[0].textContent = siteContent ['contact'] ['address'];
contactPara[1].textContent = siteContent['contact'] ['phone'];
contactPara[2].textContent = siteContent ['contact'] ['email'];

// end of contact section 

// Footer Section 

// footer reference

const footer = document.querySelector('footer p');

footer.textContent = siteContent ['footer'] ['copyright'];

// end of footer section


// Task 3 Add New Content

// navigation color
const navColor = document.querySelectorAll('a');
navColor.forEach((a) =>{
  a.style.color = "green"
});
