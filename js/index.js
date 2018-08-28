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

// Nav Anchors
const nav = document.getElementsByTagName('nav')[0];
const navItems = [];
for(let item in siteContent.nav){
  navItems.push(item);
}
for(let i = 0; i < nav.children.length; i++){
  const index = navItems[i];
  nav.children[i].innerHTML = siteContent.nav[index];
  nav.children[i].style.color = 'green';
}

// Add Future nav anchor
const futureAnchor = document.createElement('a');
futureAnchor.setAttribute('href', '#');
futureAnchor.innerHTML = 'Future';
futureAnchor.style.color = 'green';
nav.prepend(futureAnchor);

// Add Past nav anchor
const pastAnchor = document.createElement('a');
pastAnchor.setAttribute('href', '#');
pastAnchor.innerHTML = 'Past';
pastAnchor.style.color = 'green';
nav.appendChild(pastAnchor);

// Great Idea logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// 'Dom Is Awesome' Header
const diaHeader = document.getElementsByClassName('cta-text')[0];
const regex1 = /DOM/g;
const regex2 = /is/gi;
const headerText = siteContent.cta.h1.replace(regex1, 'DOM<br>').replace(regex2, 'is<br>');
diaHeader.children[0].innerHTML = headerText;
diaHeader.children[1].innerHTML = siteContent.cta.button;

// 'Dom Is Awesome' image
const headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent.cta["img-src"]);

// Page Content
const textContent = document.getElementsByClassName('text-content');
textContent[0].children[0].innerHTML = siteContent["main-content"]["features-h4"];
textContent[0].children[1].innerHTML = siteContent["main-content"]["features-content"];
textContent[1].children[0].innerHTML = siteContent["main-content"]["about-h4"];
textContent[1].children[1].innerHTML = siteContent["main-content"]["about-content"];
textContent[2].children[0].innerHTML = siteContent["main-content"]["services-h4"];
textContent[2].children[1].innerHTML = siteContent["main-content"]["services-content"];
textContent[3].children[0].innerHTML = siteContent["main-content"]["product-h4"];
textContent[3].children[1].innerHTML = siteContent["main-content"]["product-content"];
textContent[4].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContent[4].children[1].innerHTML = siteContent["main-content"]["vision-content"];


// Page Image
const pageImage = document.getElementById('middle-img');
pageImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Contact Information
const contactInfo = document.getElementsByClassName('contact')[0];
contactInfo.children[0].innerHTML = siteContent.contact["contact-h4"];
const regex = /Street/gi;
const addressText = siteContent.contact.address.replace(regex, 'Street<br>');
contactInfo.children[1].innerHTML = addressText;
contactInfo.children[2].innerHTML = siteContent.contact.phone;
contactInfo.children[3].innerHTML = siteContent.contact.email;

// Footer
const footerContent = document.getElementsByTagName('footer')[0];
footerContent.children[0].innerHTML = siteContent.footer.copyright;