

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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const navUl = document.querySelector("header nav");

// function for adding links to navbar
const appendNavItem = function (element, text, attr) {
  const newListItem = document.createElement(element);
  newListItem.innerText = text;
  newListItem.href = attr;
  navUl.append(newListItem);
  return newListItem;
}
const prependNavItem = function (element, text, attr) {
  const newListItem = document.createElement(element);
  newListItem.innerText = text;
  newListItem.href = attr;
  navUl.prepend(newListItem);
  return newListItem;
}

appendNavItem('a', 'blog', '#');
prependNavItem('a', 'Article', '#');

//Nav links
let navLinks = document.querySelectorAll('header nav a');
const lazyNavLinkGrabber = function (number) {
  return navLinks[number].innerText = siteContent.nav[`nav-item-${number}`];
}
lazyNavLinkGrabber(1);
lazyNavLinkGrabber(2);
lazyNavLinkGrabber(3);
lazyNavLinkGrabber(4);
lazyNavLinkGrabber(5);
lazyNavLinkGrabber(6);

// navLinks[0].innerText = siteContent.nav["nav-item-1"];
// navLinks[1].innerText = siteContent.nav["nav-item-2"];
// navLinks[2].innerText = siteContent.nav["nav-item-3"];
// navLinks[3].innerText = siteContent.nav["nav-item-4"];
// navLinks[4].innerText = siteContent.nav["nav-item-5"];
// navLinks[5].innerText = siteContent.nav["nav-item-6"];
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = 'green';
}

// cta
let cta = document.querySelector('.cta .cta-text h1');
cta.innerText = siteContent.cta['h1'];
let ctaDad = document.querySelector('.cta');
ctaDad.style.backgroundColor = "black";
cta.style.border = "1px solid white";
cta.style.width = "300px"
cta.style.borderRadius = "25px";
cta.style.color = "white";
// cta button
let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerText = siteContent.cta['button'];

ctaButton.addEventListener('click', (e) => {
  alert('You pressed the button!!');
});
// cta image
let ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);
// top content Feature
let topContentFeath4 = document.querySelector('.main-content .top-content .text-content h4');
topContentFeath4.innerText = siteContent["main-content"]["features-h4"];
let topContentFeat = document.querySelector('.main-content .top-content .text-content p');
topContentFeat.innerText = siteContent['main-content']["features-content"];
// top content About
let textContentAbouth4 = document.querySelectorAll('.main-content .top-content .text-content h4')[1];
textContentAbouth4.innerText = siteContent["main-content"]["about-h4"];
let textContentAbout = document.querySelectorAll('.main-content .top-content .text-content p')[1];
textContentAbout.innerText = siteContent["main-content"]["about-content"];
// Middle Image
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// Bottom Content
let bottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].innerText = siteContent["main-content"]["services-content"];
bottomText[1].innerText = siteContent["main-content"]["product-content"];
bottomText[2].innerText = siteContent["main-content"]["vision-content"];
bottomH4[0].innerText = siteContent["main-content"]["services-h4"];
bottomH4[1].innerText = siteContent["main-content"]["product-h4"];
bottomH4[2].innerText = siteContent["main-content"]["vision-h4"];
bottomH4[0].style.borderBottom = "1px solid black";
bottomH4[0].style.borderLeft = "1px solid black";
bottomH4[1].style.borderBottom = "1px solid black";
bottomH4[2].style.borderBottom = "1px solid black";
// Contact section
let contactH4 = document.querySelector('.contact h4');
let contact = document.querySelectorAll('.contact p');
contactH4.innerText = siteContent.contact["contact-h4"];
contact[0].innerText = siteContent['contact'].address;
contact[1].innerText = siteContent.contact.phone;
contact[2].innerText = siteContent.contact.email;
// Footer
let footerText = document.querySelector('footer p');
footerText.innerText = siteContent.footer.copyright;
// Section styles
let getContactSection = document.querySelector('section.contact');
getContactSection.style.backgroundColor = "black";
getContactSection.style.color = "white";
getContactSection.style.padding = "24px";
getContactSection.style.textAlign = "center";