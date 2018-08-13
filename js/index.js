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
    "h1": "DOM \n Is \n Awesome",
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
    "address" : "123 Way 456 Street \n Somewhere, USA",
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

// Navigation
let navbarLinks = document.querySelector('nav').children;
for(let i = 0; i < navbarLinks.length; i++){
  navbarLinks[i].innerText = siteContent.nav["nav-item-" + (i + 1)];
  navbarLinks[i].style.color = 'green';
}

// Add New Links to Navigation
let navbar = document.querySelector('nav');
// Append Child
let newLink = document.createElement('a');
newLink.innerText = 'Extras';
newLink.style.color = 'green';
newLink.href = '#';
navbar.appendChild(newLink);
// Prepend
let firstLink = document.createElement('a');
firstLink.innerText = 'Home';
firstLink.style.color = 'green';
firstLink.href = '#';
navbar.prepend(firstLink);


// Call To Action
let ctaText = document.querySelector('div.cta-text').children;
// CTA Header
ctaText[0].innerText = siteContent.cta['h1'];
// CTA Button
ctaText[1].innerText = siteContent.cta['button'];
// CTA Image
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

// Main Content

// Top Content
let topContent = document.querySelector('div.top-content').children;
// Features
topContent[0].querySelector('h4').innerText = siteContent["main-content"]['features-h4'];
topContent[0].querySelector('p').innerText = siteContent["main-content"]['features-content'];
// About
topContent[1].querySelector('h4').innerText = siteContent["main-content"]['about-h4'];
topContent[1].querySelector('p').innerText = siteContent['main-content']['about-content'];

// Middle Image
let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content
let bottomContent = document.querySelector('div.bottom-content').children;
// Services
bottomContent[0].querySelector('h4').innerText = siteContent["main-content"]['services-h4'];
bottomContent[0].querySelector('p').innerText = siteContent["main-content"]['services-content'];
// Product
bottomContent[1].querySelector('h4').innerText = siteContent["main-content"]['product-h4'];
bottomContent[1].querySelector('p').innerText = siteContent["main-content"]['product-content'];
// Vision
bottomContent[2].querySelector('h4').innerText = siteContent["main-content"]['vision-h4'];
bottomContent[2].querySelector('p').innerText = siteContent["main-content"]['vision-content'];

// Contact
let contact = document.querySelector('section.contact').children;
contact[0].innerText = siteContent.contact["contact-h4"];
// Address
contact[1].innerText = siteContent.contact.address;
// Phone
contact[2].innerText = siteContent.contact.phone;
// Email
contact[3].innerText = siteContent.contact.email;

// Footer
let footer = document.querySelector('footer > p');
footer.innerText = siteContent.footer.copyright;